"use client";
import profilePic from "../../../public/my-pic2.png"; // Profile image path
import Image from "next/image";

const about = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-start mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-white tracking-tight leading-tight">
            About Me
          </h1>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Profile Image */}
          <div className="flex justify-center md:w-1/3 relative">
            <Image
              className="border-4 border-blue-500 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out rounded-md" // Changed to box shape
              src={profilePic}
              alt="Profile Picture"
              height={400} // Adjusted height
              width={400} // Adjusted width
              quality={100} // Higher quality for better visuals
            />
            {/* Image overlay (optional effect) */}
            <div className="absolute inset-0 rounded-md bg-black opacity-30"></div>{" "}
            {/* Adjusted for box shape */}
          </div>

          {/* Information */}
          <div className="md:w-2/3 space-y-6 text-lg leading-relaxed text-gray-300">
            <p className="text-xl">
              Hello! I am{" "}
              <span className="font-semibold text-blue-400">Zubair Ahmed Baloch</span>, a
              passionate{" "}
              <span className="font-semibold text-blue-400">
                Cloud Applied Generative AI Engineer
              </span>{" "}
              and Full Stack Developer specializing in{" "}
              <span className="font-semibold text-blue-400">Web 3.0</span>,{" "}
              <span className="font-semibold text-blue-400">AI</span>, and the{" "}
              <span className="font-semibold text-blue-400">Metaverse</span>.
              Currently, I am enhancing my expertise through a specialized course
              at the{" "}
              <span className="font-semibold text-blue-400">
                Governor House Karachi
              </span>
              , focusing on cutting-edge technologies that are shaping the
              future of digital experiences.
            </p>

            <p>
              I hold a{" "}
              <span className="font-semibold text-blue-400">
                Bachelors degree in Electronics Engineering Technology
              </span>{" "}
              from{" "}
              <span className="font-semibold text-blue-400">
                The Benazir Bhutto Shaheed University of Technology
              </span>{" "}
              with a{" "}
              <span className="font-semibold text-blue-400">3.7 C.G.P.A</span>.
              My academic focus spanned fields such as{" "}
              <span className="font-semibold text-blue-400">AI</span>,{" "}
              <span className="font-semibold text-blue-400">
                Industrial Automation
              </span>
              , <span className="font-semibold text-blue-400">Robotics</span>,{" "}
              <span className="font-semibold text-blue-400">IoT</span>, and{" "}
              <span className="font-semibold text-blue-400">
                Control Engineering
              </span>
              . One of my key projects involved designing a{" "}
              <span className="font-semibold text-blue-400">
                wireless-controlled movable robot
              </span>{" "}
              equipped with real-time camera surveillance, intended for COVID-19
              precautions.
            </p>

            <p>
              In addition to my engineering expertise, I specialize in{" "}
              <span className="font-semibold text-blue-400">
                Front-End Development
              </span>
              , particularly with{" "}
              <span className="font-semibold text-blue-400">React.js</span> and{" "}
              <span className="font-semibold text-blue-400">Next.js</span>, as
              well as{" "}
              <span className="font-semibold text-blue-400">
                API Design, Development, and Deployment
              </span>{" "}
              using <span className="font-semibold text-blue-400">FastAPI</span>
              , <span className="font-semibold text-blue-400">Containers</span>,{" "}
              <span className="font-semibold text-blue-400">OpenAPI</span>, and
              building{" "}
              <span className="font-semibold text-blue-400">
                Custom GPT models
              </span>
              .
            </p>

            <p>
              I have gained hands-on experience in various roles, including as a{" "}
              <span className="font-semibold text-blue-400">Data Officer</span>{" "}
              with <span className="font-semibold text-blue-400">UNICEF</span>{" "}
              and{" "}
              <span className="font-semibold text-blue-400">
                Indus Hospital & Health Network
              </span>{" "}
              during the{" "}
              <span className="font-semibold text-blue-400">
                Flood Emergency Response Project
              </span>{" "}
              in Sindh. I also worked as a{" "}
              <span className="font-semibold text-blue-400">
                Telco/Trainee Engineer
              </span>{" "}
              at <span className="font-semibold text-blue-400">HSS/Huawei</span>{" "}
              in Karachi, and as a{" "}
              <span className="font-semibold text-blue-400">
                Computer Operator/Instructor
              </span>{" "}
              at{" "}
              <span className="font-semibold text-blue-400">
                Sindh Academy of Computer Science and Information Technology
              </span>
              .
            </p>

            <p>
              I am excited about the future of technology and its potential to
              drive innovation. If you are interested in collaborating or
              discussing potential projects, feel free to reach out!
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          {/* Education Section */}
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-white text-center mb-6">
              Education
            </h2>
            <ul className="space-y-4 text-lg text-gray-200">
              <li className="flex items-center gap-3 border-b-2 border-gray-300 pb-4">
                <span className="font-semibold text-blue-200">
                  Certified Cloud Applied Generative AI Engineer
                </span>
                <span className="text-gray-300">
                  | Governor Sindh (Feb 2024 - Present)
                </span>
              </li>
              <li className="flex items-center gap-3 border-b-2 border-gray-300 pb-4">
                <span className="font-semibold text-blue-200">
                  Bachelorss in Electronics Engineering Technology
                </span>
                <span className="text-gray-300">
                  | The Benazir Bhutto Shaheed University of Technology (2018 -
                  2022)
                </span>
              </li>
              <li className="flex items-center gap-3 border-b-2 border-gray-300 pb-4">
                <span className="font-semibold text-blue-200">
                  Diploma in Information Technology
                </span>
                <span className="text-gray-300">
                  | Sindh Board of Technical Education (2016 - 2017)
                </span>
              </li>
            </ul>
          </div>

          {/* Work Experience Section */}
          <div className="bg-gradient-to-r from-teal-500 to-indigo-500 p-8 rounded-lg shadow-lg mt-12">
            <h2 className="text-4xl font-bold text-white text-center mb-6">
              Work Experience
            </h2>
            <ul className="space-y-4 text-lg text-gray-200">
              <li className="flex items-center gap-3 border-b-2 border-gray-300 pb-4">
                <span className="font-semibold text-blue-200">
                  Data Officer
                </span>
                <span className="text-gray-300">
                  | UNICEF / Indus Hospital & Health Network (Feb 2023 - Feb
                  2024)
                </span>
              </li>
              <li className="flex items-center gap-3 border-b-2 border-gray-300 pb-4">
                <span className="font-semibold text-blue-200">
                  Telco/Trainee Engineer
                </span>
                <span className="text-gray-300">
                  | HSS/Huawei Company (Jan 2022 - Aug 2022)
                </span>
              </li>
              <li className="flex items-center gap-3 border-b-2 border-gray-300 pb-4">
                <span className="font-semibold text-blue-200">
                  Computer Operator/Instructor
                </span>
                <span className="text-gray-300">
                  | Sindh Academy of Computer Science & Information Technology
                  (Aug 2017 - Oct 2020)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
