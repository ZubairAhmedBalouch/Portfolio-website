"use client";
import profilePic from "../../../public/my-pic.png"; // Replace with your profile image path
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="bg-black h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-2 px-[150px]"> {/* Reduced gap to gap-4 */}
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 p-0"> {/* Removed extra padding */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Welcome to My <span className="text-blue-700">Portfolio</span>
          </h1>
          <p className="mt-2 text-lg lg:text-2xl text-gray-300 italic"> {/* Reduced margin-top */}
            I am a dedicated developer, passionate about creating impactful
            and engaging web experiences. Lets explore my journey and projects!
          </p>
          <div className="flex gap-2 mt-4 justify-center md:justify-start">
            <button className="px-6 py-3 text-sm tracking-wider text-white uppercase bg-blue-700 rounded-lg transition duration-300 hover:bg-red-500 shadow-lg">
              View My Projects
            </button>
            <button className="px-6 py-3 text-sm tracking-wider text-white uppercase bg-blue-700 rounded-lg transition duration-300 hover:bg-red-500 shadow-lg">
              Hire Me
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end items-center md:w-1/2">
          <Image
            className="rounded-full border-4 border-white shadow-2xl transition-transform duration-500 transform hover:scale-110 hover:shadow-[0px_0px_15px_5px_#1E40AF]" // Blue glow effect on hover
            src={profilePic}
            alt="Profile"
            quality={100} // Ensures high-quality rendering
            height={280} // Adjusted size to keep it proportional
            width={300} // Adjusted size to keep it proportional
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
