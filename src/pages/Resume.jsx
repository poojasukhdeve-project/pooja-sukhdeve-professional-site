export default function Resume() {
  const resumes = [
    {
      title: "Software Engineer",
      icon: "💻",
      file: "/Software_developer.docx.pdf",
    },
    {
      title: "Data Analytics",
      icon: "📊",
      file: "/Data_analytics_resume.pdf",
    },
    {
      title: "AI/ML Engineer",
      icon: "🤖",
      file: "/DataScientist_Resume.pdf",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 min-h-screen py-20">
      <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-12">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">
          Resume
        </h1>

        <p className="text-gray-600 mb-10">
          AI/ML Engineer and Full-Stack Developer with experience in
          machine learning, cloud systems, and data analytics.
        </p>

        {/* Resume Cards + LinkedIn */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-16">
          {/* Resume Cards */}
          <div className="grid md:grid-cols-3 gap-5 flex-1">
            {resumes.map((resume, index) => (
              <a
                key={index}
                href={resume.file}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-black text-white p-6 rounded-xl
                  hover:scale-105 hover:bg-gray-900
                  transition duration-300 shadow-lg
                "
              >
                <h3 className="text-lg font-semibold">
                  {resume.icon} {resume.title}
                </h3>

                <p className="text-sm text-gray-300 mt-3">
                  Download Resume ↓
                </p>
              </a>
            ))}
          </div>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/pooja-sukhdeve-79b897194/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4 border border-gray-400 rounded-xl
              hover:bg-gray-100 transition
              font-medium whitespace-nowrap
            "
          >
            LinkedIn
          </a>
        </div>

        {/* Key Highlights */}
        <h2 className="text-3xl font-bold mb-8">
          Key Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Education */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              🎓 Education
            </h3>

            <p className="text-gray-600 text-sm">
              MS Computer Science
              <br />
              Boston University
            </p>
          </div>

          {/* Experience */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              💼 Experience
            </h3>

            <p className="text-gray-600 text-sm">
              5+ Years in Software Development & Data Analytics
            </p>
          </div>

          {/* Achievement */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              🏆 Achievement
            </h3>

            <p className="text-gray-600 text-sm">
              Winner – Boston University Hackathon 2024
            </p>
          </div>

          {/* Publications */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">
              📚 Publications
            </h3>

            <p className="text-gray-600 text-sm">
              2 Research Publications – IGI Global
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}