import React from "react";

// Import media from assets
import netflixImg from "../assets/netflix-clone.png";
import amazonVid from "../assets/amazon-clone.mp4";
import englishVid from "../assets/english-learning.mp4";
import currencyVid from "../assets/currency-converter.mp4";

const projects = [
  {
    title: "Netflix Clone",
    description: "A responsive Netflix UI clone with movie sections and hover animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    media: netflixImg,
    type: "image",
    github: "https://github.com/Nargis7/Sigma-web-Development-2025.git",
  },
  {
    title: "Amazon Clone",
    description: "E-commerce Amazon UI clone with product listings and cart functionality.",
    tech: ["HTML", "CSS"],
    media: amazonVid,
    type: "video",
    github: "https://github.com/Nargis7/Amazon-project.git",
  },
  {
    title: "English Learning Website",
    description: "A flashcard-based platform to learn English vocabulary interactively.",
    tech: ["HTML", "CSS", "JavaScript"],
    media: englishVid,
    type: "video",
    github: "https://github.com/Nargis7/English-Learning.git",
  },
  {
    title: "Currency Converter",
    description: "A real-time currency converter using API integration.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    media: currencyVid,
    type: "video",
    github: "https://github.com/Nargis7/Web-Dev-2025.git",
  },
];

const MyRecentWork = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* <h2 className="text-3xl font-bold mb-8 text-center">My Recent Work</h2> */}
 <h2 className="text-4xl font-extrabold mb-8 text-center tracking-wide">
  <span className="text-white">My Recent </span>
  <span className="text-cyan-400 underline decoration-2 underline-offset-4">
    Work
  </span>
</h2>


        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                {project.type === "image" ? (
                  <img
                    src={project.media}
                    alt={project.title}
                    className="rounded-lg w-full h-64 object-cover"
                  />
                ) : (
                  <video
                    src={project.media}
                    controls
                    className="rounded-lg w-full h-64 object-cover"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-sm text-gray-400 mb-3">
                <strong>Tech Used:</strong> {project.tech.join(", ")}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyRecentWork;
