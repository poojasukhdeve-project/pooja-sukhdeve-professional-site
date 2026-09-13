const MODEL = "llama-3.3-70b-versatile"; // fast, high TPM ceiling, plenty for constrained extraction/summarization
const MAX_RETRIES = 2;

async function callGroq(prompt) {
  return fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
      max_completion_tokens: 300,
      stream: false,
    }),
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { prompt } = req.body || {};

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({
      error: "Prompt is required",
    });
  }

  let lastError = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const groqResponse = await callGroq(prompt);
      const data = await groqResponse.json();

      if (!groqResponse.ok) {
        console.error(`Groq API error (attempt ${attempt + 1}):`, data);

        // Retry on rate limit (429) or transient server errors (5xx)
        const isRetryable =
          groqResponse.status === 429 || groqResponse.status >= 500;

        if (isRetryable && attempt < MAX_RETRIES) {
          // Respect Retry-After header if Groq sends one, else exponential backoff
          const retryAfterHeader = groqResponse.headers.get("retry-after");
          const backoffMs = retryAfterHeader
            ? Number(retryAfterHeader) * 1000
            : 500 * Math.pow(2, attempt); // 500ms, 1000ms, ...

          await sleep(backoffMs);
          continue;
        }

        lastError = data?.error?.message || "Groq request failed";
        return res.status(groqResponse.status).json({ error: lastError });
      }

      const text = data?.choices?.[0]?.message?.content?.trim();

      if (!text) {
        lastError = "Groq returned an empty response";
        if (attempt < MAX_RETRIES) {
          await sleep(500 * Math.pow(2, attempt));
          continue;
        }
        return res.status(502).json({ error: lastError });
      }

      return res.status(200).json({ response: text });
    } catch (error) {
      console.error(`Chat API error (attempt ${attempt + 1}):`, error);
      lastError = error.message || "Unable to connect to AI assistant.";

      if (attempt < MAX_RETRIES) {
        await sleep(500 * Math.pow(2, attempt));
        continue;
      }
    }
  }

  return res.status(500).json({
    error: lastError || "Unable to connect to AI assistant.",
  });
}