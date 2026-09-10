import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaChevronRight
} from "react-icons/fa";

export default function Contact() {

  return (

    <div className="bg-[#f3f4f6] min-h-screen overflow-hidden">

      {/* HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 py-10 md:py-12">

        <div className="relative text-center px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            CONTACT
          </h1>

          <p className="text-indigo-200 mt-2 text-sm md:text-base">
            Let’s connect and build impactful technology together
          </p>

          <div className="mx-auto mt-4 w-12 h-1 bg-purple-400 rounded-full"></div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">

        {/* LEFT SIDE */}
        <div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-black">
            Get In Touch
          </h2>

          {/* DESCRIPTION */}
          <p className="text-base md:text-lg text-gray-700 leading-8 mb-10">

            I’m always open to discussing AI projects,
            software engineering opportunities,
            research collaborations, and innovative ideas.

          </p>

          {/* CONTACT CARDS */}
          <div className="space-y-5">

            {/* EMAIL CARD */}
            <a
              href="mailto:poojasukhdeve06@gmail.com"
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4"
            >

              <div className="flex items-center gap-4 md:gap-5">

                {/* ICON */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">

                  <FaEnvelope className="text-2xl md:text-3xl text-blue-700" />

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-xl md:text-1xl font-bold text-black">
                    Email
                  </h3>

                  <p className="text-sm md:text-lg text-black mt-1 break-all">
                    poojasukhdeve06@gmail.com
                  </p>

                  <p className="text-sm md:text-base text-gray-500 mt-1">
                    Send me an email anytime
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <FaChevronRight className="hidden md:block text-2xl text-gray-500" />

            </a>

            {/* LINKEDIN CARD */}
            <a
              href="https://www.linkedin.com/in/pooja-sukhdeve-79b897194/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4"
            >

              <div className="flex items-center gap-4 md:gap-5">

                {/* ICON */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">

                  <FaLinkedin className="text-2xl md:text-3xl text-blue-700" />

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-xl md:text-1xl font-bold text-black">
                    LinkedIn
                  </h3>

                  <p className="text-sm md:text-lg text-black mt-1">
                    Connect with me professionally
                  </p>

                  <p className="text-sm md:text-base text-gray-500 mt-1">
                    Let’s connect and build a network
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <FaChevronRight className="hidden md:block text-2xl text-gray-500" />

            </a>

            {/* GITHUB CARD */}
            <a
              href="https://github.com/poojasukhdeve-project?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4"
            >

              <div className="flex items-center gap-4 md:gap-5">

                {/* ICON */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">

                  <FaGithub className="text-2xl md:text-3xl text-black" />

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-xl md:text-1xl font-bold text-black">
                    GitHub
                  </h3>

                  <p className="text-sm md:text-lg text-black mt-1">
                    Explore my projects and repositories
                  </p>

                  <p className="text-sm md:text-base text-gray-500 mt-1">
                    Check out my work on GitHub
                  </p>

                </div>

              </div>

              {/* ARROW */}
              <FaChevronRight className="hidden md:block text-2xl text-gray-500" />

            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 h-fit">

          {/* FORM HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Send Message
          </h2>

          {/* FORM */}
          <form className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-4 rounded-xl text-base outline-none focus:border-purple-700"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4 rounded-xl text-base outline-none focus:border-purple-700"
            />

            {/* MESSAGE */}
            <textarea
              rows="7"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-4 rounded-xl text-base outline-none focus:border-purple-700 resize-none"
            ></textarea>

            {/* BUTTON */}
            <button
              className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-4 rounded-xl w-full hover:scale-[1.02] hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-3 text-lg md:text-xl font-semibold"
            >

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

      </div>

    </div>

  );
}