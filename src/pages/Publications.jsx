import publications from "../data/publications";

export default function Publications() {
  return (
    <div>

{/* HEADER */}
<section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 py-10 md:py-12">

  <div className="relative text-center px-6">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      PUBLICATIONS
    </h1>

    <p className="text-indigo-200 mt-2 text-sm md:text-base">
      Research work and academic contributions
    </p>

    <div className="mx-auto mt-4 w-12 h-1 bg-purple-400 rounded-full"></div>

  </div>

</section>

      {/* CONTENT */}
      <div className="bg-gray-50 py-20">
        <section className="max-w-5xl mx-auto px-6">

          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-10"
            >

              {/* Title + Date */}
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {pub.title}
                  </h2>

                  <p className="text-gray-600 italic mt-1">
                    {pub.publisher}
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  {pub.date}
                </span>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mt-3 flex-wrap">

                {/* Featured Badge */}
                {index === 0 && (
                  <span className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}

                {/* Type Badge */}
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                  {pub.publisher === "Medium" ? "Blog" : "Research Paper"}
                </span>

              </div>

              {/* Description */}
              <p className="text-gray-700 mt-4 leading-relaxed">
                {pub.description}
              </p>

              {/* Button */}
              {pub.link && (
                <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 hover:scale-105 transition"
                    >
                    View Publication ↗
                    </a>
              )}

            </div>
          ))}

        </section>
      </div>

    </div>
  );
}