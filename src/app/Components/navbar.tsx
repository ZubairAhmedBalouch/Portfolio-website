"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import profilePic from "../../../public/my-pic.png"; // Replace with your profile image path

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-blue-800 shadow-lg">
        <div className="container mx-auto px-6 py-4 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            {/* Logo and Profile Section */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={profilePic}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-yellow-500 shadow-md"
              />
              <span className="text-white text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out">
                Zubair Portfolio
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
          >
            <Link
              href="./"
              className="text-gray-200 text-lg font-medium px-4 py-2 rounded transition-all duration-300 transform hover:bg-blue-600 hover:scale-105 shadow-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-200 text-lg font-medium px-4 py-2 rounded transition-all duration-300 transform hover:bg-blue-600 hover:scale-105 shadow-md"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-200 text-lg font-medium px-4 py-2 rounded transition-all duration-300 transform hover:bg-blue-600 hover:scale-105 shadow-md"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="text-gray-200 text-lg font-medium px-4 py-2 rounded transition-all duration-300 transform hover:bg-blue-600 hover:scale-105 shadow-md"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="text-gray-200 text-lg font-medium px-4 py-2 rounded transition-all duration-300 transform hover:bg-blue-600 hover:scale-105 shadow-md"
            >
              Contact
            </Link>
            <Link
              href="F:\2nd Quarter NEXT.JS\my-portfolio\public\My Resume.pdf.pdf" // Path to your resume file
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              download // This will prompt the user to download the file when clicked
            >
              Download Resume
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
