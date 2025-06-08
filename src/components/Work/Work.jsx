import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            onClick={() => openModal(project)}
            className="cursor-pointer bg-gray-900 border border-white rounded-lg shadow-md hover:shadow-purple-500/50 hover:-translate-y-1 transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-28 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <h3 className="text-lg font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-500 text-xs mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-[10px] font-semibold text-purple-500 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative bg-gray-900 rounded-xl shadow-2xl w-[95vw] max-w-xl sm:max-w-2xl md:max-w-3xl overflow-hidden flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500"
              aria-label="Close project modal"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="w-full flex justify-center bg-gray-900 p-4 pt-10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-56 sm:max-h-72 md:max-h-96 object-contain rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="px-6 pb-8 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-6 text-xs sm:text-sm lg:text-base">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:w-auto bg-gray-800 hover:bg-purple-800 text-gray-400 px-6 py-2 rounded-xl text-sm lg:text-base font-semibold text-center"
                  onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking buttons
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:w-auto bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm lg:text-base font-semibold text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Work;

