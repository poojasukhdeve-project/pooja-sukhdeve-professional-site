import profilePic from "../assets/pooja.png";
export default function Home() {

  return (

    <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 min-h-screen py-20">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl px-6 md:px-12 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start animate-fadeInLeft">
          <img
            src={profilePic}
            alt="Pooja Sukhdeve"
            className="w-64 sm:w-80 md:w-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Intro Section */}
<div className="space-y-6 text-center md:text-left animate-fadeInRight">

  {/* Small Intro */}

  {/* Name */}
 <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
    Pooja{" "}
    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
      Sukhdeve
    </span>
  </h1>

  {/* Role Tags */}
  <div className="flex flex-wrap gap-3">

    <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium hover:scale-105 transition-all duration-300">
      💻 Software Engineer
    </span>

    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium hover:scale-105 transition-all duration-300">
      📊 Data Analyst
    </span>

    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium hover:scale-105 transition-all duration-300">
      🤖 AI/ML Enthusiast
    </span>

  </div>

  {/* Description */}
 <p className="text-gray-700 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto md:mx-0">
    Master’s graduate in Computer Science from Boston University with experience
    building scalable full-stack applications, AI-powered systems, cloud-native
    platforms, and interactive analytics dashboards. Passionate about transforming
    complex data into intelligent, user-focused solutions using modern software
    engineering and machine learning technologies.
  </p>


  {/* Buttons */}
  <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">

    <a
      href="#/resume"
      target="_blank"
      className="px-7 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-md"
    >
      📄 Resume
    </a>

    <a
      href="https://www.linkedin.com/in/pooja-sukhdeve-79b897194/"
      target="_blank"
      className="px-7 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-sm"
    >
      💼 LinkedIn
    </a>

  </div>

</div>

      </div>
      
{/* KEY HIGHLIGHTS */}

<section className="max-w-6xl mx-auto mt-24 text-white">

<div className="mb-16">

<h2 className="text-5xl font-bold mb-16">
KEY <span className="text-black">HIGHLIGHTS</span>
</h2>

</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">

<div>
<h3 className="text-3xl md:text-5xl font-bold">6+</h3>
<p className="text-gray-300 mt-2 text-sm">
Years Industry Experience
</p>
</div>

<div>
<h3 className="text-3xl md:text-5xl font-bold">12+</h3>
<p className="text-gray-300 mt-2 text-sm">
AI & Software Projects
</p>
</div>

<div>
<h3 className="text-3xl md:text-5xl font-bold">5+</h3>
<p className="text-gray-300 mt-2 text-sm">
Data Dashboards Built
</p>
</div>

<div>
<h3 className="text-3xl md:text-5xl font-bold">3+</h3>
<p className="text-gray-300 mt-2 text-sm">
Publications & Awards
</p>
</div>

</div>

</section>


      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 mt-20">

<h2 className="text-5xl font-bold mb-6">
ABOUT <span className="text-gray-400">ME</span>
</h2>

<div className="space-y-4 text-gray-700">

<div className="space-y-4 text-[16px] leading-6 text-gray-700">

  <p>
    💻 Data Analyst | AI & ML Enthusiast | MS Computer Science, Boston University
I turn complex data into clear, decision-ready insights - combining financial analysis, machine learning, and full-stack engineering to build data-driven products that create real impact.
  </p>

  <p>
    📊 My experience spans financial and market analysis, valuation modeling, data pipelines, interactive dashboards, and machine learning solutions, using technologies such as Python, SQL, Pandas, NumPy, Power BI, Tableau, React.js, Node.js, MongoDB, PostgreSQL, and AWS.
  </p>

  <p>
    🤖 I've worked on projects involving valuation and financial modeling, AI-powered chatbot applications, RAG pipelines, NLP systems, business intelligence dashboards, and large-scale data analytics pipelines processing 100K+ records.  </p>

  <p>
    ⚡ Currently, I work as a Business Analyst Intern – Team Coordinator at AperioHub, where I coordinate cross-functional workstreams, conduct financial and market analysis, and build 3-scenario valuation models to support data-driven investment decisions. Alongside this, I serve as a Data Research Analyst at Boston University, developing accessible, inclusive Python curriculum for visually impaired learners.
  </p>

  <div>
    <p className="mb-3">
      🧠 My interests include:
    </p>

    <ul className="list-disc pl-10 space-y-2">
      <li>Full-Stack Software Engineering</li>
      <li>Financial & Market Analysis</li>
      <li>Data Analytics & Visualization</li>
      <li>Machine Learning & AI Applications</li>
      <li>Cloud Computing & Scalable Systems</li>
      <li>Business Intelligence Dashboards</li>
    </ul>
  </div>

  <p>
    🌱 Currently seeking opportunities in Data Analytics, Data Science, and AI/ML roles where I can apply my analytical rigor and technical skills to build impactful, data-driven products.
  </p>

</div>

</div>

</section>

{/* TOOLS & SOFTWARE */}

<section className="max-w-6xl mx-auto mt-20 text-white">

<h2 className="text-5xl font-bold mb-16">
TOOLS & <span className="text-black">SOFTWARE</span>
</h2>

<div className="grid md:grid-cols-4 gap-12">

{/* Python */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-python-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Python</h3>
    <p className="text-gray-300 text-sm">Data Analysis Tool</p>
  </div>
</div>


{/* Power BI */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-power-bi-2021-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Power BI</h3>
    <p className="text-gray-300 text-sm">Data Visualization Tool</p>
  </div>
</div>


{/* SQL */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-sql-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">SQL</h3>
    <p className="text-gray-300 text-sm">Database Language</p>
  </div>
</div>


{/* Tableau */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-tableau-software-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Tableau</h3>
    <p className="text-gray-300 text-sm">Data Visualization Tool</p>
  </div>
</div>


{/* R */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-r-project-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">R</h3>
    <p className="text-gray-300 text-sm">Programming Language</p>
  </div>
</div>


{/* AWS */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-aws-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">AWS</h3>
    <p className="text-gray-300 text-sm">Cloud Platform</p>
  </div>
</div>

{/* React */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-react-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">React</h3>
    <p className="text-gray-300 text-sm">Frontend Library</p>
  </div>
</div>


{/* Node.js */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-node-js-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Node.js</h3>
    <p className="text-gray-300 text-sm">Backend Runtime</p>
  </div>
</div>


{/* PostgreSQL */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-postgresql-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">PostgreSQL</h3>
    <p className="text-gray-300 text-sm">Relational Database</p>
  </div>
</div>


{/* MongoDB */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-mongodb-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">MongoDB</h3>
    <p className="text-gray-300 text-sm">NoSQL Database</p>
  </div>
</div>


{/* Supabase */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-supabase-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Supabase</h3>
    <p className="text-gray-300 text-sm">Backend Platform</p>
  </div>
</div>


{/* Netlify */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-netlify-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Netlify</h3>
    <p className="text-gray-300 text-sm">Web Deployment</p>
  </div>
</div>


{/* Vercel */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-vercel-100.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Vercel</h3>
    <p className="text-gray-300 text-sm">Frontend Deployment</p>
  </div>
</div>


{/* Figma */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-figma-100.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Figma</h3>
    <p className="text-gray-300 text-sm">UI Design Tool</p>
  </div>
</div>


{/* Trello */}
<div className="flex items-center gap-4">
  <div className="bg-white p-2 rounded-lg shadow">
    <img
      src={`${import.meta.env.BASE_URL}icons/icons8-trello-96.png`}
      className="w-9 h-9"
    />
  </div>

  <div>
    <h3 className="text-2xl font-semibold">Trello</h3>
    <p className="text-gray-300 text-sm">Project Management</p>
  </div>
</div>
</div>

</section>

{/* TECHNICAL SKILLS */}

<section className="max-w-6xl mx-auto mt-28 text-white">

<div className="mb-16">

<h2 className="text-5xl font-bold mb-16">
TECHNICAL <span className="text-black">SKILLS</span>
</h2>

</div>


<div className="grid md:grid-cols-3 gap-8">


{/* Programming */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:scale-105 transition">

<h3 className="text-xl font-bold mb-6">
💻 Programming & Web
</h3>

<div className="flex flex-wrap gap-2">

<span className="skill">Python</span>
<span className="skill">JavaScript</span>
<span className="skill">TypeScript</span>
<span className="skill">SQL</span>
<span className="skill">React</span>
<span className="skill">Node.js</span>
<span className="skill">HTML</span>
<span className="skill">CSS</span>
<span className="skill">C/C++</span>

</div>

</div>


{/* Data Science */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:scale-105 transition">

<h3 className="text-xl font-bold mb-6">
📊 Data Science & AI
</h3>

<div className="flex flex-wrap gap-2">

<span className="skill">Pandas</span>
<span className="skill">NumPy</span>
<span className="skill">Matplotlib</span>
<span className="skill">Seaborn</span>
<span className="skill">Scikit-learn</span>
<span className="skill">NLP</span>
<span className="skill">A/B Testing</span>
<span className="skill">Predictive Modeling</span>

</div>

</div>


{/* Cloud */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:scale-105 transition">

<h3 className="text-xl font-bold mb-6">
☁️ Cloud & Tools
</h3>

<div className="flex flex-wrap gap-2">

<span className="skill">AWS</span>
<span className="skill">Supabase</span>
<span className="skill">Firebase</span>
<span className="skill">PostgreSQL</span>
<span className="skill">MongoDB</span>
<span className="skill">GitHub</span>
<span className="skill">Power BI</span>
<span className="skill">Tableau</span>

</div>

</div>

</div>

</section>

{/* FEATURED PROJECTS */}

<section className="max-w-6xl mx-auto mt-28 text-white">

<h2 className="text-5xl font-bold mb-16">
FEATURED <span className="text-black">PROJECTS</span>
</h2>

<div className="grid md:grid-cols-2 gap-10">

{/* Project 1 */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-2xl font-bold mb-2">
CareVault
</h3>

<p className="text-gray-300 mb-4">
Secure full-stack healthcare management platform with 
authentication, patient tracking, appointment scheduling, and
role-based access control using Next.js, React, Supabase, and PostgreSQL.
</p>

<p className="text-sm text-gray-400 mb-4">
Next.js • React • Supabase • PostgreSQL
</p>

<div className="flex gap-4">
<a
href="https://github.com/poojasukhdeve-project/carevault"
className="px-4 py-2 bg-white text-black rounded"
>
GitHub
</a>

<a
href="https://caregiver-app-project.vercel.app/login"
className="px-4 py-2 border border-white rounded"
>
Live Demo
</a>
</div>

</div>


{/* Project 2 */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-2xl font-bold mb-2">
AI-Powered Restaurant Analytics Dashboard
</h3>

<p className="text-gray-300 mb-4">
AI-powered analytics dashboard for restaurant trend analysis, 
customer insights, and intelligent recommendations using Flask, 
Hugging Face LLM API, Chart.js, and interactive data visualization.
</p>

<p className="text-sm text-gray-400 mb-4">
Python • Flask • NLP • Chart.js
</p>

<div className="flex gap-4">
<a
href="https://github.com/poojasukhdeve-project/ai-restaurant-analytics-dashboard"
className="px-4 py-2 bg-white text-black rounded"
>
GitHub
</a>

<a
href="https://ai-restaurant-analytics-dashboard.onrender.com/"
className="px-4 py-2 border border-white rounded"
>
Live Demo
</a>
</div>
</div>


{/* Project 3 */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-2xl font-bold mb-2">
SPY ETF Machine Learning Trading Strategy
</h3>

<p className="text-gray-300 mb-4">
Can machine learning beat the market? This project explores that 
question by building a quantitative trading system using SPY ETF 
data, technical indicators, and predictive models, with strategy 
performance validated through backtesting.
</p>

<p className="text-sm text-gray-400 mb-4">
Python • Pandas • NumPy • Scikit-Learn • Random Forest • Linear Regression • Quantitative Finance • Algorithmic Trading • Backtesting
</p>

<div className="flex gap-4">
<a
href="https://github.com/poojasukhdeve-project/SPY-ETF-Machine-Learning-Trading-Strategy"
className="px-4 py-2 bg-white text-black rounded"
>
GitHub
</a>

<a
href="https://www.youtube.com/watch?v=hE3j8tyRmgg"
className="px-4 py-2 border border-white rounded"
>
Live Demo
</a>
</div>

</div>
{/* Project 4 */}
<div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl hover:scale-105 transition">

<h3 className="text-2xl font-bold mb-2">
Chatalogue
</h3>

<p className="text-gray-300 mb-4">
Conversational AI-powered university assistant platform integrating 
NLP pipelines, semantic search, SQL generation, and context-aware 
academic query support using Python and OpenAI technologies.
</p>

<p className="text-sm text-gray-400 mb-4">
Python • NLP • OpenAI API • SQLite
</p>

<div className="flex gap-4">
<a
href="https://github.com/poojasukhdeve-project/CHATALOGUE-main"
className="px-4 py-2 bg-white text-black rounded"
>
GitHub
</a>


</div>

</div>

 <div className="mt-12">
    <a
    href="/pooja-portfolio/YOUR_GITHUB_LINK#/projects"
    className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
    >
    View all Projects →
    </a>
    </div>


</div>

</section>

{/* WORK EXPERIENCE */}

<section className="max-w-6xl mx-auto mt-28 text-white">
<h2 className="text-5xl font-bold mb-16">
WORK <span className="text-black">EXPERIENCE</span>
</h2>

<div className="relative border-l border-white/30 ml-6 space-y-12">


{/* Experience 1 */}
<div className="ml-8">
<div className="absolute -left-3 w-6 h-6 bg-white rounded-full"></div>

<h3 className="text-xl font-semibold">
2024 — Data Research Analyst
</h3>

<p className="text-gray-300">
Boston University
</p>

<p className="text-gray-400 text-sm mt-2">
Developing Python visualization modules for visually
impaired users using pattern-based graphics.
</p>
</div>

{/* Experience 2 */}
<div className="ml-8">
<div className="absolute -left-3 w-6 h-6 bg-white rounded-full"></div>

<h3 className="text-xl font-semibold">
2025 — Software Developer Intern
</h3>

<p className="text-gray-300">
ASVI Systems
</p>

<p className="text-gray-400 text-sm mt-2">
Developed scalable AWS applications and CI/CD pipelines
to automate deployments and improve performance.
</p>
</div>


{/* Experience 4 */}
<div className="ml-8">
<div className="absolute -left-3 w-6 h-6 bg-white rounded-full"></div>

<h3 className="text-xl font-semibold">
2022 — Data Analyst
</h3>

<p className="text-gray-300">
Tech Zenesis
</p>

<p className="text-gray-400 text-sm mt-2">
Built Python data pipelines and Power BI dashboards,
conducted A/B testing and user analytics.
</p>
</div>

</div>


<div className="mt-12">
<a
href="/pooja-portfolio/#/experience"
className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200"
>
View Full Experience →
</a>
</div>

</section>

{/* PUBLICATIONS & EDUCATION */}

<section className="max-w-6xl mx-auto mt-24 text-white">

  {/* SECTION TITLE */}
  <h2 className="text-5xl font-extrabold mb-14 tracking-tight">
    ACHIEVEMENTS <span className="text-black">& EDUCATION</span>
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    {/* PUBLICATIONS CARD */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-7 rounded-3xl shadow-xl">

      {/* TITLE */}
      <h3 className="text-2xl font-bold mb-8 leading-snug">
        🏆 Publications & Achievements
      </h3>

      {/* TIMELINE */}
      <div className="relative border-l-2 border-pink-300/40 pl-6 ml-3 space-y-7">

        {/* ITEM 1 */}
        <div className="relative">

          <div className="absolute -left-[34px] top-2 w-5 h-5 bg-pink-400 rounded-full border-4 border-purple-700"></div>

          <h4 className="text-lg font-bold leading-snug mb-2">
            Boston University Hackathon Winner (2024)
          </h4>

          <p className="text-gray-300 text-sm leading-7">
            Led development of a data science model delivering measurable business insights.
          </p>

        </div>

        {/* ITEM 2 */}
        <div className="relative">

          <div className="absolute -left-[34px] top-2 w-5 h-5 bg-pink-400 rounded-full border-4 border-purple-700"></div>

          <h4 className="text-lg font-bold leading-snug mb-2">
            IGI Global Publication – Chapter 6
          </h4>

          <p className="text-gray-300 text-sm leading-7">
            Implementing Augmented Reality in Immersive Virtual Learning Environments.
          </p>

        </div>

        {/* ITEM 3 */}
        <div className="relative">

          <div className="absolute -left-[34px] top-2 w-5 h-5 bg-pink-400 rounded-full border-4 border-purple-700"></div>

          <h4 className="text-lg font-bold leading-snug mb-2">
            IGI Global Publication – Chapter 11
          </h4>

          <p className="text-gray-300 text-sm leading-7">
            Research on transformational change in digital built environments.
          </p>

        </div>

      </div>
    </div>


    {/* EDUCATION CARD */}
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-7 rounded-3xl shadow-xl">

      {/* TITLE */}
      <h3 className="text-2xl font-bold mb-8 leading-snug">
        🎓 Education
      </h3>

      {/* TIMELINE */}
      <div className="relative border-l-2 border-pink-300/40 pl-6 ml-3 space-y-8">

        {/* BOSTON UNIVERSITY */}
        <div className="relative">

          <div className="absolute -left-[34px] top-2 w-5 h-5 bg-pink-400 rounded-full border-4 border-purple-700"></div>

          <h4 className="text-lg font-bold leading-snug mb-2">
            Boston University
          </h4>

          <p className="text-gray-200 text-base mb-3">
            M.S. Computer Science
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
            <span>📅 May 2026</span>
            <span>⭐ GPA: 3.59 / 4.00</span>
          </div>

        </div>

        {/* BACHELOR */}
        <div className="relative">

          <div className="absolute -left-[34px] top-2 w-5 h-5 bg-pink-400 rounded-full border-4 border-purple-700"></div>

          <h4 className="text-lg font-bold leading-snug mb-2">
            Swami Ramanand Teerth Marathwada University
          </h4>

          <p className="text-gray-200 text-base mb-3">
            Bachelor of Computer Science Engineering
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
            <span>📅 Graduated: June 2016</span>
          </div>

        </div>

      </div>
    </div>

  </div>

</section>


{/* CONNECT SECTION */}

<section className="max-w-5xl mx-auto mt-28 mb-20">

<div className="bg-white rounded-2xl shadow-xl p-12 text-center">

<h2 className="text-5xl font-bold mb-4">
LET'S CONNECT
</h2>

<p className="text-gray-600 mb-10">
Explore my GitHub for projects and LinkedIn for my professional journey.
Feel free to reach out if you'd like to collaborate.
</p>


<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

{/* GitHub */}
<div className="flex flex-col items-center">
<img
src={`${import.meta.env.BASE_URL}icons/icons8-github-96.png`}
className="w-16 mb-4"
/>

<a
href="https://github.com/poojasukhdeve-project?tab=repositories"
target="_blank"
className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
>
GitHub
</a>
</div>


{/* LinkedIn */}
<div className="flex flex-col items-center">
<img
src={`${import.meta.env.BASE_URL}icons/icons8-linkedin-96.png`}
className="w-16 mb-4"
/>

<a
href="https://www.linkedin.com/in/pooja-sukhdeve-79b897194/"
target="_blank"
className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
LinkedIn
</a>
</div>


{/* Email */}
<div className="flex flex-col items-center">
<img
src={`${import.meta.env.BASE_URL}icons/icons8-gmail-96.png`}
className="w-16 mb-4"
/>

<a
href="mailto:poojasukhdeve06@gmail.com"
className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
>
Email
</a>
</div>


{/* Resume */}
<div className="flex flex-col items-center">
<img
src={`${import.meta.env.BASE_URL}icons/icons8-resume-96.png`}
className="w-16 mb-4"
/>

<a
href="#/resume"
target="_blank"
className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
>
Resume
</a>
</div>

</div>

</div>

</section>

<footer className="bg-white py-8 mt-20">

<div className="max-w-6xl mx-auto text-center">

<p className="text-gray-600 mb-4">
© 2026 Pooja Sukhdeve. All Rights Reserved.
</p>

<div className="flex justify-center gap-6 text-gray-700">

<a
href="https://github.com/poojasukhdeve-project?tab=repositories"
target="_blank"
className="hover:text-black"
>
GitHub
</a>

<a
href="https://www.linkedin.com/in/pooja-sukhdeve-79b897194/"
target="_blank"
className="hover:text-black"
>
LinkedIn
</a>

<a
href="mailto:poojasukhdeve06@gmail.com"
className="hover:text-black"
>
Email
</a>

</div>

</div>

</footer>

    </div>

  )

}