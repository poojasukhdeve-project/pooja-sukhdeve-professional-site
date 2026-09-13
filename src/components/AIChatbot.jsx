import { useState, useEffect, useRef } from "react";
import axios from "axios";
import portfolioData from "../data/portfolioData";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);

  useEffect(() => {
  if (open) {
    inputRef.current?.focus();
  }
}, [open]);

const quickButtons = [
  { label: "👋 About", question: "Tell me about Pooja" },
  { label: "💼 Projects", question: "Tell me about Pooja's projects" },
  { label: "🛠 Skills", question: "What technical skills does she have?" },
  { label: "🏢 Experience", question: "Tell me about her work experience" },
  { label: "🤖 AI Projects", question: "What AI projects has she built?" },
  { label: "📊 Analytics", question: "Which projects demonstrate data analytics skills?" },
  { label: "💻 Software Engineer", question: "Which projects are most relevant for Software Engineer roles?" },
  { label: "🧠 ML Engineer", question: "Which projects are most relevant for Machine Learning Engineer roles?" },
  { label: "🎓 Education", question: "What is her educational background?" },
  { label: "📄 Resume", question: "Do you have a resume position wise?" },
  { label: "🏆 Certificates", question: "Tell me about her certifications and awards" },
  { label: "📚 Publications", question: "Tell me about her publications" },
  { label: "📧 Contact", question: "How can I contact Pooja?" },
  { label: "🔗 GitHub", question: "Can provide GitHub link?" }
];
  const sendMessage = async (customMessage = null) => {

    const currentMessage = customMessage || message;

    if (!currentMessage.trim()) return;

    const q = currentMessage.toLowerCase().trim();

let context = portfolioData;

// CONTACT / LINKS
if (
  q.includes("github") ||
  q.includes("linkedin") ||
  q.includes("email") ||
  q.includes("contact") ||
  q.includes("portfolio")
) {
  context =
    portfolioData.match(
      /CONTACT INFORMATION[\s\S]*?RESUMES/
    )?.[0] || portfolioData;
}

// RESUME
else if (
  q.includes("resume") ||
  q.includes("cv") ||
  q.includes("download resume")
) {
  context =
    portfolioData.match(
      /RESUMES[\s\S]*$/
    )?.[0] || portfolioData;
}

// EDUCATION
else if (
  q.includes("education") ||
  q.includes("master") ||
  q.includes("degree") ||
  q.includes("university") ||
  q.includes("course") ||
  q.includes("computer science") ||
  q.includes("academic")
) {
  context =
    portfolioData.match(
      /ABOUT POOJA[\s\S]*?PROJECT SUMMARY/
    )?.[0] || portfolioData;
}

// WORK EXPERIENCE
else if (
  q.includes("experience") ||
  q.includes("worked") ||
  q.includes("work") ||
  q.includes("internship") ||
  q.includes("intern") ||
  q.includes("data research analyst") ||
  q.includes("business analyst") ||
  q.includes("team coordinator") ||
  q.includes("aperiohub") ||
  q.includes("asvi") ||
  q.includes("tech zenesis") ||
  q.includes("globalshala") ||
  q.includes("interbeing") ||
  q.includes("oceans software") ||
  q.includes("ssit") ||
  q.includes("operations analyst") ||
  q.includes("software developer") ||
  q.includes("web developer") ||
  q.includes("data analyst")
) {
  context =
    portfolioData.match(
      /WORK EXPERIENCE[\s\S]*?CERTIFICATES/
    )?.[0] || portfolioData;
}

// CERTIFICATES
else if (
  q.includes("certificate") ||
  q.includes("certification") ||
  q.includes("hackathon") ||
  q.includes("award") ||
  q.includes("winner") ||
  q.includes("aws academy") ||
  q.includes("aws certif") ||
  q.includes("credly")
) {
  context =
    portfolioData.match(
      /CERTIFICATES[\s\S]*?PUBLICATIONS/
    )?.[0] || portfolioData;
}

// PUBLICATIONS
else if (
  q.includes("publication") ||
  q.includes("published") ||
  q.includes("research paper") ||
  q.includes("research") ||
  q.includes("blog") ||
  q.includes("medium") ||
  q.includes("igi global")
) {
  context =
    portfolioData.match(
      /PUBLICATIONS[\s\S]*?CONTACT INFORMATION/
    )?.[0] || portfolioData;
}

// TECHNICAL SKILLS
else if (
  q.includes("skill") ||
  q.includes("programming language") ||
  q.includes("database") ||
  q.includes("cloud") ||
  q.includes("docker") ||
  q.includes("github actions") ||
  q.includes("machine learning librar") ||
  q.includes("visualization tool")
) {
  context =
    portfolioData.match(
      /ABOUT POOJA[\s\S]*?PROJECT SUMMARY/
    )?.[0] || portfolioData;
}

// PROJECTS / ROLE QUESTIONS
else if (
  q.includes("project") ||
  q.includes("carevault") ||
  q.includes("wallet wizard") ||
  q.includes("textnova") ||
  q.includes("chatalogue") ||
  q.includes("restaurant") ||
  q.includes("brfss") ||
  q.includes("spy") ||
  q.includes("nvidia") ||
  q.includes("netflix") ||
  q.includes("adidas") ||
  q.includes("exoplanet") ||
  q.includes("stock portfolio") ||
  q.includes("stock momentum") ||
  q.includes("software engineer role") ||
  q.includes("ai engineer role") ||
  q.includes("machine learning engineer role") ||
  q.includes("data analyst role") ||
  q.includes("full stack")
) {
  context =
    portfolioData.match(
      /PROJECT SUMMARY[\s\S]*?WORK EXPERIENCE/
    )?.[0] || portfolioData;
}

// PROJECT COUNT
if (
  q.includes("how many projects") ||
  q.includes("number of projects") ||
  q.includes("total projects") ||
  q.includes("projects have you completed")
) {
  setChat((prev) => [
    ...prev,
    {
      role: "user",
      text: currentMessage,
    },
    {
      role: "assistant",
      text: "13+ projects",
    },
  ]);

  setMessage("");
  setLoading(false);
  return;
}

    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: currentMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {

const response = await axios.post(
  "/api/chat",
  {
    prompt: `

You are Pooja Sukhdeve's Professional AI Portfolio Assistant.

Instructions:
- Answer ONLY the current question: "${currentMessage}".
- Use ONLY the information provided.
- Never invent projects, technologies, companies, dates, achievements, links, responsibilities, or experience.
- Never answer additional questions.
- Never generate FAQs or multiple question-answer pairs.
- Return only the final answer and then stop.
- Never create example projects.
- Never rename existing projects.
- Mention ONLY projects that appear in Portfolio Information.
- Mention exact project names and technologies when relevant.
- Provide GitHub, Live Demo, Slides, Resume, LinkedIn, Portfolio, or Email links only if explicitly requested and available.
- Use bullet points only for lists.
- Keep responses concise and recruiter-friendly:
- Simple questions: maximum 3 sentences.
- Project questions: maximum 5 bullet points.
- Detailed questions: maximum 150 words.
- Never exceed 150 words.
- If information is unavailable, reply exactly:
  "That information is not currently included in Pooja's portfolio."

Portfolio Information:

${context}

User Question:

${currentMessage}

`,
  }
);

      setLoading(false);

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: response.data.response,
        },
      ]);

    } catch (error) {

      setLoading(false);

      console.log(
        "AI CHAT ERROR:",
        error.response?.data || error.message || error
      );

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Unable to connect AI assistant.",
        },
      ]);

    }
  };

  const askSuggestion = (question) => {
    sendMessage(question);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-6
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-purple-600
          to-pink-500
          text-white
          font-bold
          text-lg
          shadow-2xl
          hover:scale-110
          transition-all
          z-50
        "
      >
        AI
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-4
            md:right-6
            w-[92%]
            md:w-[430px]
            h-[650px]
            bg-white
            rounded-3xl
            shadow-2xl
            overflow-hidden
            flex
            flex-col
            z-50
            border
          "
        >

          {/* HEADER */}
          <div
            className="
              bg-gradient-to-r
              from-purple-600
              to-pink-500
              text-white
              p-5
              flex
              justify-between
              items-center
            "
          >
            <h2 className="font-bold text-lg">
              Pooja's Portfolio Assistant
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-3xl hover:scale-110 transition"
            >
              ×
            </button>
          </div>

          {/* CHAT BODY */}
          <div
            className="
              flex-1
              overflow-y-auto
              p-4
              space-y-4
              bg-gray-50
            "
          >
<div className="bg-gray-50 pb-3 space-y-3">

  <div className="bg-purple-100 rounded-2xl p-3 text-sm">
    👋 Ask me anything about Pooja
  </div>

  <div className="grid grid-cols-2 gap-2">
    {quickButtons.map((btn, index) => (
      <button
        key={index}
        disabled={loading}
        onClick={() => {
          if (!loading) {
            askSuggestion(btn.question);
          }
        }}
        className="
          bg-white
          rounded-xl
          px-3
          py-2
          text-sm
          shadow
          hover:bg-purple-50
          transition-all
          disabled:opacity-50
        "
      >
        {btn.label}
      </button>
    ))}
  </div>

  <div className="text-center text-xs text-gray-400">
    Ask about projects, skills, experience, certificates, publications, or education.
  </div>

</div>

            {chat.map((msg, index) => (
  <div
    key={index}
    className={`flex ${
      msg.role === "user"
        ? "justify-end"
        : "justify-start"
    }`}
  >
    <div className="flex items-end gap-2">

      {/* AI Avatar */}
      {msg.role === "assistant" && (
        <div
          className="
            w-8
            h-8
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            text-white
            flex
            items-center
            justify-center
            text-xs
            font-bold
            flex-shrink-0
          "
        >
          AI
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`
          max-w-[80%]
          px-4
          py-3
          rounded-2xl
          shadow
          text-sm
          whitespace-pre-wrap
          break-words

          ${
            msg.role === "user"
              ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
              : "bg-white text-gray-800 border border-gray-100"
          }
        `}
      >
        {msg.text}
      </div>

      {/* User Avatar */}
      {msg.role === "user" && (
        <div
          className="
            w-8
            h-8
            rounded-full
            bg-gray-800
            text-white
            flex
            items-center
            justify-center
            text-xs
            font-bold
            flex-shrink-0
          "
        >
          PS
        </div>
      )}

    </div>
  </div>
))}

        {loading && (
          <div className="flex justify-start">
            <div className="flex items-end gap-2">

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xs
                  font-bold
                "
              >
                AI
              </div>

              <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl shadow text-sm text-gray-500 animate-pulse">
                Thinking...
              </div>

            </div>
          </div>
        )}

            <div ref={chatEndRef}></div>

          </div>

          {/* INPUT */}
          <div className="border-t p-4 bg-white flex gap-2">

            <input
              ref={inputRef}
              type="text"
              value={message}
              placeholder="Ask about projects, skills, resumes..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  sendMessage();
                }
              }}
              className="
                flex-1
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-purple-400
              "
            />

            <button
              onClick={() => {
                  if (!loading) {
                    sendMessage();
                  }
                }}
              disabled={loading}
              className="
                bg-gradient-to-r
                from-purple-600
                to-pink-500
                text-white
                px-6
                rounded-xl
                font-semibold
                hover:opacity-90
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "..." : "Send"}
            </button>

          </div>

        </div>
      )}
    </>
  );
}