import { BsCarFront, BsFillBuildingsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";
import FarmProject from '../../../public/assets/images/farm project ss.png'
import NoomProject from '../../../public/assets/images/Noom project.png'
import EduGuide from '../../../public/assets/images/eduguidess.png'
import SukoonSpace from '../../../public/assets/images/Sukoonspace.png'
import ChatApp from '../../../public/assets/images/Chatapp.png'

import "./ProjectCard.css";
const ProjectCard = () => {
  return (
    <div className="my-16 space-y-6 md:space-y-12">


      {/* EDUGuide project */}
<div
  className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center justify-center shadow-xl hover:shadow-2xl p-6 rounded-xl transition duration-300 ease-in-out items-center border border-gray-200 bg-white"
  data-aos="fade-right"
  data-aos-duration="800"
>        <div className="content">

          <div className="screen">
            <img src={EduGuide} className="cursor-pointer" />
          </div>

        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            EduGuide – AI Chatbot for HEC Queries
            {" "}
          </h2>

          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            EduGuide is an intelligent AI chatbot designed to assist users with queries related to the Higher Education Commission (HEC).  Developed as a  {" "}
            <span className="font-semibold">Final Year Project (FYP)</span>
            , the chatbot leverages

            <span className="font-semibold">React.js, Material UI, and Tailwind CSS </span>
            for a modern frontend experience, while

            <span className="font-semibold"> Python and Flask handle AI integration using LangChain and ChatGPT. </span>
            I led the
            <span className="font-semibold">  frontend and Python development,     </span>
            and collaborated with the backend developer to integrate Spring Boot for robust API support. EduGuide was recognized as the

            <span className="font-semibold">3rd best project in our department </span>
            and received <span className="font-semibold">Ignite funding </span>
            for innovation.
            <br />

          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/react.png" alt="react" className="w-10" />
            <img src="assets/images/tailwind.png" alt="mongo" className="w-10" />
            <img
              src="assets/images/material-ui.png"
              alt="express"
              className="w-10"
            />
            <img src="data:image/png;base64,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" alt="node" className="w-10" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmOsEJUKodI1bvHFZRj9Z8wTyOW1SpDlodw&s" alt="node" className="w-10" />
            <img src="assets/images/html5.png" alt="HTML5 " className="w-10" />
            <img
              src="assets/images/css.png"
              alt="CSS"
              className="w-10"
            />
            <img src="assets/images/js.png" alt="JS" className="w-10" />

          </div>

          <div className="font-semibold my-8 space-x-6 ">
            {/* <Link
              to={"https://mahnoor-jawaid-khan.github.io/dairypress/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline" />
            </Link> */}
            <Link
              to={"https://www.upwork.com/freelancers/~01a4f4c547c7f38c03?p=1887835157100670976"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
          <div className="font-semibold my-8 space-x-6 ">


          </div>
        </div>
      </div>




      {/* Chat Application project */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 shadow-xl hover:shadow-2xl p-6 rounded-xl transition duration-300 ease-in-out items-center border" data-aos="fade-right" data-aos-duration="800">
        <div className="content">

          <div className="screen">
            <img src={ChatApp} className="cursor-pointer" />
          </div>

        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            Real-Time Chat Application – MERN Stack
            {" "}
          </h2>





          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            This Real-Time Chat Application is built using the {" "}
            <span className="font-semibold">MERN stack (MongoDB, Express.js, React.js, Node.js)</span>
            to provide a modern, secure, and scalable messaging platform. It allows users to register, log in, and chat with other users in real time through an intuitive and responsive interface.

<br />
            <span className="font-semibold"> Key features include:</span>
            User Authentication with JWT & Secure Password Hashing

            One-to-One & Group Chat Support
            Real-Time Messaging with Socket.IO
            Chat History Stored in MongoDB
            Responsive UI Built with React & Tailwind/Bootstrap
            RESTful APIs for Seamless Frontend-Backend Communication

          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/react.png" alt="react" className="w-10" />
            <img src="assets/images/mongo.png" alt="mongo" className="w-10" />
                  <img src="assets/images/express.png" alt="HTML5 " className="w-10" />
            <img
              src="assets/images/node.png"
              alt="CSS"
              className="w-10"
            />
            <img
              src="assets/images/material-ui.png"
              alt="express"
              className="w-10"
            />
            <img src="assets/images/js.png" alt="JS" className="w-10" />

          </div>

          <div className="font-semibold my-8 space-x-6 ">
            {/* <Link
              to={"https://mahnoor-jawaid-khan.github.io/dairypress/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline" />
            </Link> */}
            <Link
              to={"https://www.upwork.com/freelancers/~01a4f4c547c7f38c03?p=1869744058310967296"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
          <div className="font-semibold my-8 space-x-6 ">


          </div>
        </div>
      </div>


      {/*  Sukoon space  Project */}

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 shadow-xl hover:shadow-2xl p-6 rounded-xl transition duration-300 ease-in-out items-center border" data-aos="fade-right" data-aos-duration="800">
        <div className="content">

          <div className="screen">
            <img src={SukoonSpace} className="cursor-pointer" />
          </div>

        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            Sukoon Space – Doctor Appointment Booking Web App

            {" "}
          </h2>





          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            Sukoon Space is a responsive and user-friendly web application designed to streamline the process of booking doctor appointments. Developed using   {" "}
            <span className="font-semibold">  HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL </span>
            this platform allows patients to register, view doctor availability, and book appointments with ease, while doctors can manage their schedules and appointments efficiently.
            <br />
            <span className="font-semibold">  Key features include:</span>
            Doctor & Patient Login System

            Real-Time Appointment Scheduling

            Secure Authentication & Session Management

            Admin Dashboard for Managing Users & Appointments

            Responsive Design using Bootstrap for All Devices



          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/html5.png" alt="HTML5 " className="w-10" />
            <img
              src="assets/images/css.png"
              alt="CSS"
              className="w-10"
            />
            <img src="assets/images/js.png" alt="JS" className="w-10" />
            <img src="data:image/png;base64,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" alt="react" className="w-10" />
            <img src="https://pngimg.com/d/mysql_PNG23.png" alt="mongo" className="w-10" />

          </div>

          <div className="font-semibold my-8 space-x-6 ">
            {/* <Link
              to={"https://mahnoor-jawaid-khan.github.io/dairypress/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline" />
            </Link> */}
            <Link
              to={"https://www.upwork.com/freelancers/~01a4f4c547c7f38c03?p=1869713596159205376"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
          <div className="font-semibold my-8 space-x-6 ">


          </div>
        </div>
      </div>

      {/* farm project */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 shadow-xl hover:shadow-2xl p-6 rounded-xl transition duration-300 ease-in-out items-center border" data-aos="fade-right" data-aos-duration="800">
        <div className="content">

          <div className="screen">
            <img src={FarmProject} className="cursor-pointer" />
          </div>

        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            FARM DAIRY WEBSITE PROJECT{" "}
          </h2>

          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            A responsive frontend project built using {" "}
            <span className="font-semibold">HTML, CSS, JavaScript, and Bootstrap</span>
            to create an engaging and user-friendly interface
            <br />
            with additional enhancements using

            <span className="font-semibold"> SliderJS, SwiperJS, and other </span>
            frontend libraries for interactive UI elements
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/html5.png" alt="HTML5 " className="w-10" />
            <img
              src="assets/images/css.png"
              alt="CSS"
              className="w-10"
            />
            <img src="assets/images/js.png" alt="JS" className="w-10" />
            <img src="assets/images/bootstrap.png" alt="bootstrap" className="w-10" />

          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            {/* <p>Demo email : <span className="text-sky-700">demo@email.com</span> </p>
            <p>Demo password : <span className="text-sky-700">Demo123@</span> </p> */}
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            {/* <Link
              to={"https://mahnoor-jawaid-khan.github.io/dairypress/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline" />
            </Link> */}
            <Link
              to={"https://mahnoor-jawaid-khan.github.io/dairypress/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 shadow-xl hover:shadow-2xl p-6 rounded-xl transition duration-300 ease-in-out items-center border" data-aos="fade-right" data-aos-duration="800">
        <div className="content">

          <div className="screen">
            <img src={NoomProject} className="cursor-pointer" />
          </div>

        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            NOOM PORTFOLIO WEBSITE PROJECT{" "}
          </h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            Noom is a sleek personal portfolio website showcasing my work and skills. Built with {" "}
            <span className="font-semibold">HTML, CSS, JavaScript, and Bootstrap</span>
            it includes dynamic sliders and animations using
            <br />

            <span className="font-semibold"> SliderJS, SwiperJS, and other </span>
            frontend libraries for interactive UI elements
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/html5.png" alt="HTML5 " className="w-10" />
            <img
              src="assets/images/css.png"
              alt="CSS"
              className="w-10"
            />
            <img src="assets/images/js.png" alt="JS" className="w-10" />
            <img src="assets/images/bootstrap.png" alt="bootstrap" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            {/* <p>Demo email : <span className="text-sky-700">demo@email.com</span> </p>
            <p>Demo password : <span className="text-sky-700">Demo123@</span> </p> */}
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            {/* <Link
              to={"https://mahnoor-jawaid-khan.github.io/dairypress/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline" />
            </Link> */}
            <Link
              to={"https://mahnoor-jawaid-khan.github.io/dairypress/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
        </div>
      </div>






    </div>
  );
};

export default ProjectCard;
