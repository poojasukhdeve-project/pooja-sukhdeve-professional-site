export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { prompt } = req.body || {};

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.2,
          reasoning_effort: "low",
          max_completion_tokens: 300,
          stream: false,
        }),
      }
    );

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      console.error("Groq API error:", data);

      return res.status(groqResponse.status).json({
        error: data?.error?.message || "Groq request failed",
      });
    }

    const text = data?.choices?.[0]?.message?.content?.trim();

    if (!text) {
      return res.status(502).json({
        error: "Groq returned an empty response",
      });
    }

    return res.status(200).json({
      response: text,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return res.status(500).json({
      error: "Unable to connect to AI assistant.",
    });
  }
}