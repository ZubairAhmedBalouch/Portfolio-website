"use client";
import Link from "next/link";

const contact = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300">
            I would love to hear from you! Feel free to reach out for any
            inquiries or collaborations.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="lg:flex gap-16">
          {/* Left Side - Contact Information */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-300 mb-4">
              You can reach me via the contact form or directly through the
              following channels:
            </p>
            <ul className="text-gray-300 space-y-4">
              <li>
                Email:{" "}
                <Link
                  href="mailto:youremail@example.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  youremail@example.com
                </Link>
              </li>
              <li>
                Phone: <span className="text-blue-400">+1234567890</span>
              </li>
              <li>
                LinkedIn:{" "}
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300"
                >
                  My LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6">
              Contact Me
            </h2>
            <form className="space-y-6">
              <div className="flex gap-6">
                <div className="w-full">
                  <label className="block text-sm text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400">Message</label>
                <textarea
                  className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none h-40"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
