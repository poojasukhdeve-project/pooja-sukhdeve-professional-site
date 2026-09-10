import { useState } from "react";
import projects from "../data/projects";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <div>
      {/* HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 py-10 md:py-12">

        <div className="relative text-center px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            PROJECTS
          </h1>

          <p className="text-indigo-200 mt-2 text-sm md:text-base">
            Some of my recent work
          </p>

          <div className="mx-auto mt-4 w-12 h-1 bg-purple-400 rounded-full"></div>

        </div>

      </section>

      {/* PROJECT SECTION */}
      <div className="bg-gray-50 py-20">
        <section className="max-w-6xl mx-auto px-6">

          {/* CATEGORY FILTER */}

          <div className="flex flex-wrap justify-center gap-3 mb-12">

            {[
              { label: "All", value: "all" },
              { label: "Full-Stack", value: "fullstack" },
              { label: "AI & ML", value: "ai" },
              { label: "Quant Finance", value: "finance" },
              { label: "Data Analytics", value: "analytics" },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setSelectedCategory(btn.value)}
                className={`px-5 py-2 rounded-full font-medium transition
                ${
                  selectedCategory === btn.value
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "bg-white border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {btn.label}
              </button>
            ))}

          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-gray-100"
              >
                <div className="p-6 flex flex-col h-full">

                  <h3 className="text-xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl h-48 w-full object-cover mb-5"
                  />

                  <p className="text-gray-600 text-sm leading-7 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto flex-wrap">

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:scale-105 transition duration-300 shadow-md"
                      >
                        GitHub
                      </a>
                    )}

                    {project.slides && (
                      <a
                        href={project.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                      >
                        Slides
                      </a>
                    )}

                  </div>

                </div>
              </div>
            ))}

          </div>

        </section>
      </div>
    </div>
  );
}
