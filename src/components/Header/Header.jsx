import React from "react";
import {
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaFacebookF,
  FaGithub
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import profileImg from "../../../public/assets/images/Profile.png"; // replace with your own image

const Header = () => {
  return (
    <header className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py  0 bg-[#f9f9f9]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[#e4f7f5] text-[#0d9488]">
          AVAILABLE FOR WORK
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I’m a {" "}
          <span className="inline-block"> Web </span> { " "}
          <span className="inline-block"> Developer</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-md">
I’ve 2 years of experience in building websites — using tools like React, Tailwind, and Shopify to create reliable digital products for startups and brands        </p>

     <a
  href="#contact"
  className="bg-gradient-to-r from-indigo-300 to-purple-300 mt-4 px-6 py-3 text-black font-semibold rounded-full hover:shadow-xl transition duration-300 inline-block"
>
  Let's Talk
</a>
      </div>

      {/* Right Section */}
 {/* Right Section */}
<div className="w-full md:w-1/2 mt-12 md:mt-0 flex flex-col items-center gap-6">
  {/* Profile Card & Image */}
  <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
    {/* Profile Card */}
    <div className="bg-white p-6 rounded-3xl shadow-md w-full max-w-md">
      <h3 className="font-semibold text-lg">Award Winning Project - EduGuide AI Chatbot</h3>
      <p className="text-sm text-gray-500 mb-3"></p>
      <img
        src="../../../public/assets/images/eduguide.png"
        alt="Project Screenshot"
        className="rounded-xl mb-3 w-full"
      />
    </div>

    {/* Profile Image */}
    <img
      src={profileImg}
      alt="Profile"
      className="rounded-3xl w-48 h-60 object-cover shadow-md"
    />
  </div>

  {/* Brands + Social Icons */}
  <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
    {/* Brands */}
    <div className="bg-gradient-to-r from-indigo-300 to-purple-300 px-6 py-4 rounded-3xl text-white text-sm font-medium shadow-md w-full max-w-md text-center">
      <p className="mb-2">Recent projects I did</p>
      <div className="flex gap-4 text-sm font-semibold justify-center flex-wrap sm:flex-nowrap overflow-x-auto whitespace-nowrap">
        <span className="opacity-80">Dropflit</span>
        <span className="opacity-80">Sukoon Space</span>
        <span className="opacity-80">Eduguide</span>
      </div>
    </div>

    {/* Social Icons */}
    <div className="flex flex-wrap justify-center gap-4 text-white text-lg w-full max-w-md">
      <a
        href="https://www.linkedin.com/in/mahnoor-khan-234802200/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#f5f5f5] text-[#0077b5] p-3 rounded-full shadow hover:shadow-lg transition duration-300"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://www.pinterest.com/mhnxxrjk_/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#f5f5f5] text-[#bd081c] p-3 rounded-full shadow hover:shadow-lg transition duration-300"
      >
        <FaPinterestP />
      </a>

      <a
        href="https://github.com/mahnoor-jawaid-khan"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#f5f5f5] text-black p-3 rounded-full shadow hover:shadow-lg transition duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.instagram.com/mhnxxrjk/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#f5f5f5] text-[#E1306C] p-3 rounded-full shadow hover:shadow-lg transition duration-300"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#f5f5f5] text-[#1877F2] p-3 rounded-full shadow hover:shadow-lg transition duration-300"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.upwork.com/freelancers/~01a4f4c547c7f38c03"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#f5f5f5] text-[#6fda44] p-3 rounded-full shadow hover:shadow-lg transition duration-300"
      >
        <SiUpwork />
      </a>
    </div>
  </div>
</div>
    </header>
  );
};

export default Header;
