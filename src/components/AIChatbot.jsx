import { useState, useEffect, useRef } from "react";
import axios from "axios";
import portfolioData, { systemPrompt } from "../data/portfolioData";

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
    { label: "🔗 GitHub", question: "Can provide GitHub link?" },
  ];

  // Pulls the smallest relevant slice of portfolioData for a question.
  // Falling back to the full portfolioData is safe but larger, so keep
  // adding branches here as you notice new question types.
  const getContext = (q) => {
    // WHY HIRE / STRONGEST SKILL / BEST FIT / PITCH / SUMMARY
    if (
      q.includes("why hire") ||
      q.includes("why should") ||
      q.includes("strongest skill") ||
      q.includes("strongest area") ||
      q.includes("best fit") ||
      q.includes("better fit") ||
      q.includes("pitch") ||
      q.includes("summarize") ||
      q.includes("summary") ||
      q.includes("unique project") ||
      q.includes("hardest project")
    ) {
      return (
        portfolioData.match(/HIGHLIGHTS[\s\S]*?CORE SKILLS/)?.[0] ||
        portfolioData
      );
    }

    // SENSITIVE / OFTEN-MISSING INFO — route straight to contact + the
    // "not provided" section so the model doesn't have to guess.
    if (
      q.includes("salary") ||
      q.includes("compensation") ||
      q.includes("relocat") ||
      q.includes("remote") ||
      q.includes("available") ||
      q.includes("availability") ||
      q.includes("start date") ||
      q.includes("when can she start") ||
      q.includes("work authorization") ||
      q.includes("visa") ||
      q.includes("phone") ||
      q.includes("address")
    ) {
      return (
        portfolioData.match(/CONTACT INFORMATION[\s\S]*$/)?.[0] ||
        portfolioData
      );
    }

    // CONTACT / LINKS
    if (
      q.includes("github") ||
      q.includes("linkedin") ||
      q.includes("email") ||
      q.includes("contact") ||
      q.includes("portfolio link")
    ) {
      return (
        portfolioData.match(/CONTACT INFORMATION[\s\S]*?RESUMES/)?.[0] ||
        portfolioData
      );
    }

    // RESUME
    if (q.includes("resume") || q.includes("cv")) {
      return portfolioData.match(/RESUMES[\s\S]*?NOT PROVIDED/)?.[0] || portfolioData;
    }

    // EDUCATION
    if (
      q.includes("education") ||
      q.includes("master") ||
      q.includes("degree") ||
      q.includes("university") ||
      q.includes("gpa") ||
      q.includes("academic")
    ) {
      return portfolioData.match(/ABOUT POOJA[\s\S]*?HIGHLIGHTS/)?.[0] || portfolioData;
    }

    // TECHNICAL SKILLS
    if (
      q.includes("skill") ||
      q.includes("programming language") ||
      q.includes("database") ||
      q.includes("cloud") ||
      q.includes("docker") ||
      q.includes("does she know") ||
      q.includes("has she worked with")
    ) {
      return (
        portfolioData.match(/CORE SKILLS[\s\S]*?PROJECT SUMMARY/)?.[0] ||
        portfolioData
      );
    }

    // WORK EXPERIENCE
    if (
      q.includes("experience") ||
      q.includes("worked") ||
      q.includes("internship") ||
      q.includes("intern") ||
      q.includes("aperiohub") ||
      q.includes("asvi") ||
      q.includes("tech zenesis") ||
      q.includes("globalshala") ||
      q.includes("interbeing") ||
      q.includes("oceans software") ||
      q.includes("ssit") ||
      q.includes("operations analyst") ||
      q.includes("team") ||
      q.includes("most recent role")
    ) {
      return (
        portfolioData.match(/WORK EXPERIENCE[\s\S]*?CERTIFICATES AND AWARDS/)?.[0] ||
        portfolioData
      );
    }

    // CERTIFICATES AND AWARDS
    if (
      q.includes("certificate") ||
      q.includes("certification") ||
      q.includes("hackathon") ||
      q.includes("award") ||
      q.includes("winner") ||
      q.includes("aws")
    ) {
      return (
        portfolioData.match(/CERTIFICATES AND AWARDS[\s\S]*?PUBLICATIONS/)?.[0] ||
        portfolioData
      );
    }

    // PUBLICATIONS
    if (
      q.includes("publication") ||
      q.includes("published") ||
      q.includes("research") ||
      q.includes("blog") ||
      q.includes("medium") ||
      q.includes("igi global")
    ) {
      return (
        portfolioData.match(/PUBLICATIONS[\s\S]*?CONTACT INFORMATION/)?.[0] ||
        portfolioData
      );
    }

    // PROJECTS / ROLE-FIT QUESTIONS (checked after the more specific
    // branches above so "AI Engineer roles" etc. still lands here)
    if (
      q.includes("project") ||
      q.includes("carevault") ||
      q.includes("wallet wizard") ||
      q.includes("textnova") ||
      q.includes("chatalogue") ||
      q.includes("restaurant") ||
      q.includes("brfss") ||
      q.includes("disease-risk") ||
      q.includes("disease risk") ||
      q.includes("spy etf") ||
      q.includes("nvidia") ||
      q.includes("netflix") ||
      q.includes("adidas") ||
      q.includes("exoplanet") ||
      q.includes("stock portfolio") ||
      q.includes("stock momentum") ||
      q.includes("full stack") ||
      q.includes("software engineer role") ||
      q.includes("ai engineer role") ||
      q.includes("machine learning engineer role") ||
      q.includes("data analyst role")
    ) {
      return (
        portfolioData.match(/PROJECT SUMMARY[\s\S]*?WORK EXPERIENCE/)?.[0] ||
        portfolioData
      );
    }

    return portfolioData;
  };

  const sendMessage = async (customMessage = null) => {
    const currentMessage = customMessage || message;

    if (!currentMessage.trim()) return;

    const q = currentMessage.toLowerCase().trim();

    // PROJECT COUNT — fixed short-circuit answer, no need to call the model
    if (
      q.includes("how many projects") ||
      q.includes("number of projects") ||
      q.includes("total projects") ||
      q.includes("projects have you completed")
    ) {
      setChat((prev) => [
        ...prev,
        { role: "user", text: currentMessage },
        { role: "assistant", text: "She's built 13 projects across full-stack, AI/ML, and data analytics. Want to see a few?" },
      ]);
      setMessage("");
      return;
    }

    const context = getContext(q);

    setChat((prev) => [...prev, { role: "user", text: currentMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post("/api/chat", {
        prompt: `${systemPrompt}

Do not answer any question other than the one below. Do not generate
additional question-and-answer pairs — return one answer, then stop.

Portfolio Information:
${context}

User Question:
${currentMessage}
`,
      });

      setLoading(false);

      setChat((prev) => [
        ...prev,
        { role: "assistant", text: response.data.response },
      ]);
    } catch (error) {
      setLoading(false);

      console.log("AI CHAT ERROR:", error.response?.data || error.message || error);

      setChat((prev) => [
        ...prev,
        { role: "assistant", text: "Unable to connect AI assistant." },
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
            <h2 className="font-bold text-lg">Pooja's Portfolio Assistant</h2>

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
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
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