import React from 'react';
import AboutImg from "../../../public/assets/images/about-1.jpg"
import AboutImg2 from "../../../public/assets/images/about-2.jpg"

const About = () => {

  return (
    <section className="px-4 py-12 md:py-20 lg:px-20 bg-white">
      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About me
          </h2>
          <div className="h-1 w-10 bg-purple-500  mb-5" />

          <p className="text-gray-600 mb-6">
            Software Engineering graduate and Skilled Web Developer with 2 years of experience building modern web apps using React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Tailwind CSS, and Material-UI.
            Experienced in Node.js, Express.js, RESTful APIs, and MongoDB on the backend.
            Confident with Git/GitHub, NPM/Yarn, CRA, Vite, and deployment tools, working primarily on Windows
          </p>
          <a
            href="mailto:mahnoorkhan1034@gmail.com"
            className="bg-gradient-to-r from-indigo-300 to-purple-300 mt-4 px-6 py-3 text-black font-semibold rounded hover:shadow-xl transition duration-300 inline-block"
          >
            Email Me
          </a>  
        </div>
        <div className="relative">
          <div className="absolute top-3 left-3 w-full h-full bg-rose-300 -z-10 rounded" />
          <img
            src={AboutImg}
            alt="Portrait"
            className="w-full rounded shadow-lg"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute top-3 left-3 w-full h-full bg-rose-300 -z-10 rounded" />
          <img
            src={AboutImg2}
            alt="Portrait"
            className="w-full rounded shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-10 bg-purple-500  mb-5" />

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mt-1 mr-2">•</span>
              <b> Frontend: </b> React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Tailwind CSS, Material-UI
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mt-1 mr-2">•</span>

              <b> Backend:  {" "} </b>
              Node.js, Express.js, Php, RESTful APIs.

            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mt-1 mr-2">•</span>
              <b>  Database: </b>
              MongoDB, MySql

            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mt-1 mr-2">•</span>
              <b> Version Control: </b> Git, GitHub.
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mt-1 mr-2">•</span>
              <b> Operating System: </b> Windows, Linux
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mt-1 mr-2">•</span>
              <b> Other tools:  </b> NPM, Yarn, CRA, Vite, Hosting/Domain
            </li>
          </ul>
  <a
  href="#skills"
  className="bg-gradient-to-r from-indigo-300 to-purple-300 mt-4 px-6 py-3 text-black font-semibold rounded-full hover:shadow-xl transition duration-300 inline-block"
>
  View More
</a>
        </div>
      </div>
    </section>
  );
};

export default About;
