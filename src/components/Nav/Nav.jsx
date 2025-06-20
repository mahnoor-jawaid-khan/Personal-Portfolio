import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="text-4xl text-gray-800 font-handwriting tracking-wide">
        <h1 className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
          Mahnoor Khan
        </h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <NavLink to="#about">About me</NavLink>
        <NavLink to="#experience">Experience</NavLink>
        <NavLink to="#skills">Skills</NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#contact">Contact</NavLink>

      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <NavLink to="#about">About me</NavLink>
          <NavLink to="#experience">Experience</NavLink>
          <NavLink to="#skills">Skills</NavLink>
          <NavLink to="#projects">Projects</NavLink>
          <NavLink to="#contact">Contact</NavLink>

        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <a
      href={to}
      className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
    >
      {children}
    </a>
  );
}


