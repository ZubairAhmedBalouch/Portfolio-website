"use client";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.jpg";
import project3 from "../../../public/project3.jpg";
import project4 from "../../../public/project4.jpg";
import project5 from "../../../public/project5.jpg";
import project6 from "../../../public/myport.jpg";

const cardsdata = [
  {
    title: "Cars-Zone Website",
    description: "A modern car showroom website built using Next.js and Tailwind CSS, showcasing various car models with detailed specifications, images, and an interactive user interface.",
    image: project1,
    link: "https://car-website-ten-zeta.vercel.app/", // Link to your live project
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Alexa - My Virtual Assistant Project",
    description: "A voice-activated virtual assistant built with HTML, CSS, and JavaScript, designed to respond to user queries and perform simple tasks like opening websites and fetching information.",
    image: project2,
    link: "https://alexa-my-virtual-assistance-mini-project.vercel.app/", // Link to your live project
    technologies: ["HTML", "CSS",  "JavaScript"]
  },
  {
    title: "Static Resume Builder",
    description: "A web-based tool for generating static resumes using HTML, CSS, TypeScript, and Node.js. Users can input their details and instantly download a professional resume template.",
    image: project3,
    link: "https://interactive-resume-builder-ochre.vercel.app/", // Link to your live project
    technologies: ["HTML", "CSS", "TypeScript", "Node.js"]
  },
  {
    title: "Dynamic Resume Builder",
    description: "A dynamic resume builder allowing users to create and personalize their resumes with real-time data input, built using HTML, CSS, TypeScript, and Node.js for backend processing.",
    image: project4,
    link: "https://dynamic-resume-builder-with-form-six.vercel.app/", // Link to your live project
    technologies: ["HTML", "CSS", "TypeScript", "Node.js"]
  },
  {
    title: "Meraiki UI Demo Website",
    description: "A demo website showcasing the power of the Meraki UI library, demonstrating responsive design and UI components built with Next.js, Tailwind CSS, and TypeScript.",
    image: project5,
    link: "https://demo-seven-silk.vercel.app/", // Link to your live project
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using Next.js and Tailwind CSS, designed to showcase my skills, projects, and achievements in an interactive and visually appealing way.",
    image: project6,
    link: "", // Link to your live project
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"]
  },
];


const Cards = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
            My Projects
          </h1>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {cardsdata.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              {/* Project Image */}
              <Link href={project.link} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </Link>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-500">
                  {project.title}
                </h2>
                <p className="text-gray-300">{project.description}</p>

                {/* Technology Buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
