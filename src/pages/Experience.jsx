import { experiences } from "../data/experience";

export default function Experience() {

  const leftExperiences = experiences.slice(0, 4);
  const rightExperiences = experiences.slice(4, 9);

  const ExperienceCard = ({ exp, number }) => (
    <div className="relative flex gap-6">

      {/* Timeline Number + Dot */}
      <div className="relative flex flex-col items-center min-w-[42px]">

        {/* Number */}
        <span className="text-3xl font-extrabold text-indigo-600">
          {number}
        </span>

        {/* Dot */}
        <div className="absolute top-12 w-5 h-5 bg-indigo-600 border-4 border-white rounded-full shadow-md ring-2 ring-indigo-100"></div>

      </div>


      {/* Experience Card */}
      <div className="group relative flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm p-7 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

        {/* Gradient Accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>


        {/* Header */}
        <div>

          {/* Role */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            {exp.role}
          </h2>


          {/* Company + Duration */}
          <div className="flex items-center gap-3 flex-wrap">

            {/* Company */}
            <p className="text-indigo-600 italic font-semibold text-sm md:text-base whitespace-nowrap">
              {exp.company}
            </p>

            {/* Divider */}
            <div className="flex-1 h-px bg-slate-200 min-w-[30px]"></div>

            {/* Duration */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
              {exp.duration}
            </div>

          </div>

        </div>


        {/* Bullet Points */}
        <ul className="list-disc pl-5 mt-6 space-y-2.5 text-slate-600 text-sm leading-6 marker:text-indigo-400">

          {exp.points.map((point, i) => (
            <li key={i}>
              {point}
            </li>
          ))}

        </ul>


        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-100">

          {exp.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>
  );


  return (

    <div className="bg-slate-50 min-h-screen">

      {/* ========================================
          HERO
      ======================================== */}

<section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 py-10 md:py-12">

  <div className="relative text-center px-6">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      WORK EXPERIENCE
    </h1>

    <p className="text-indigo-200 mt-2 text-sm md:text-base">
      Professional experience and industry contributions
    </p>

    <div className="mx-auto mt-4 w-12 h-1 bg-purple-400 rounded-full"></div>

  </div>

</section>


      {/* ========================================
          EXPERIENCE SECTION
      ======================================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">


          {/* ====================================
              LEFT COLUMN — 1 TO 4
          ==================================== */}

          <div className="relative">

            {/* Timeline */}
            <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-300 via-purple-200 to-transparent"></div>

            <div className="space-y-10">

              {leftExperiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  exp={exp}
                  number={index + 1}
                />
              ))}

            </div>

          </div>


          {/* ====================================
              RIGHT COLUMN — 5 TO 8
          ==================================== */}

          <div className="relative">

            {/* Timeline */}
            <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-300 via-purple-200 to-transparent"></div>

            <div className="space-y-10">

              {rightExperiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  exp={exp}
                  number={index + 5}
                />
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}