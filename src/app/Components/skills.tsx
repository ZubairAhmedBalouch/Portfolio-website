"use client";
import React from "react";

const skills = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-500 tracking-tight mb-4">My Skills</h1>
          <p className="text-gray-400 text-lg">A showcase of my technical and professional abilities.</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 border-b-2 border-blue-600 pb-2">Technical Skills</h2>
            <ul className="space-y-3">
              {["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Git & GitHub"].map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* My Skills */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 border-b-2 border-blue-600 pb-2">My Skills</h2>
            <ul className="space-y-3">
              {[
                "40 WPM Typing",
                "Project Management",
                "PC Hardware & Maintenance",
                "Communication & Administration",
                "Debugging",
                "Understanding Digital Platforms",
                "Python and Agentic AI",
                "Robotics",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
