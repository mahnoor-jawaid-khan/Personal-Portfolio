import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

// Animation Variant
const timelineVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

// Stats Data
const statsData = [
  { value: '12+', label: 'Projects' },
  { value: '8+', label: 'Satisfied Client' },
  { value: '200+', label: 'Students' },
];

// Education & Experience
const entries = {
  education: [
    {
      title: "Bachelor in Software Engineering",
      institution: "University of Sindh (Jamshoro)",
      date: "2021 - 2025"
    },
    {
      title: "FSC (Pre Engineering)",
      institution: "Nazereth Girls College",
      date: "2018 - 2020"
    },
    {
      title: "Matriculation",
      institution: "M.M.N high School",
      date: "2016 - 2018"
    }
  ],
  experience: [
    {
      title: "Freelancer",
      company: "Remote",
      date: "2022 - Present"
    },
    {
      title: "MERN Stack Trainer",
      company: "Aptech Learning",
      date: "Dec 2023 - Nov 2024"
    },
    {
      title: "Frontend Developer",
      company: "XCL Technologies, Ltd",
      date: "Sept 2023 - Nov 2023"
    }
  ]
};

// ✅ Animated Counter Component
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const valueStr = value.toString();
    const end = parseInt(valueStr.replace(/\D/g, '')) || 0;

    let start = 0;
    const duration = 2000;
    const incrementTime = 30;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  const isPercent = value.toString().includes("%");
  const hasPlus = value.toString().includes("+");

  return (
    <span>
      {count}
      {isPercent && "%"}
      {hasPlus && "+"}
    </span>
  );
};

// ✅ Main Component
export default function Experience() {
  return (
    <div className="bg-[#f9f9f9] py-12 px-6 md:px-20">
      <h2 className="text-center text-purple-500 text-sm uppercase font-semibold">Resume</h2>
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">Awesome Journey</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaGraduationCap className="text-purple-500 text-xl" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="border-l-4 border-purple-200 pl-6 space-y-8">
            {entries.education.map((edu, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -left-7 top-1 w-4 h-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-white border-4 rounded-full"></div>
                <h4 className="text-xl font-semibold group-hover:text-purple-500 transition-colors duration-300">{edu.title}</h4>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-purple-500 flex items-center gap-1">
                  <FaCalendarAlt /> {edu.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaBriefcase className="text-purple-500 text-xl" />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>
          <div className="border-l-4 border-purple-200 pl-6 space-y-8">
            {entries.experience.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -left-7 top-1 w-4 h-4 bg-white border-4 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full"></div>
                <h4 className="text-xl font-semibold group-hover:text-purple-500 transition-colors duration-300">{exp.title}</h4>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-purple-500 flex items-center gap-1">
                  <FaCalendarAlt /> {exp.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Stats */}
      <div className="flex flex-wrap mt-20 justify-center gap-10 text-center py-8">
        {statsData.map((stat, index) => (
          <div key={index} className="w-32">
            <div className="text-4xl font-extrabold text-gray-800 mb-1">
              <AnimatedCounter value={stat.value} />
            </div>
            <div className="h-1 w-10 mx-auto mb-2 bg-gradient-to-r from-indigo-300 to-purple-300" />
            <p className="text-base text-gray-500 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
