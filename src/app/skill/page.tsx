"use client";
import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiOpenai,
} from "react-icons/si";

const Skills = () => {
  const [progressValues, setProgressValues] = useState(Array(12).fill(0));

  // ✅ Skill data with icons
  const skills = useMemo(
    () => [
      {
        name: "Frontend Developer",
        description:
          "Specializing in creating visually appealing and user-friendly interfaces using React, Next.js, and TypeScript.",
        image: "./frontend-developer.jpeg",
      },
      {
        name: "Backend Developer",
        description:
          "Focused on building robust and scalable server-side applications with Node.js, Express, and MongoDB.",
        image: "./backend-developer.jpeg",
      },
      {
        name: "AI Engineer",
        description:
          "Junior AI Engineer building intelligent applications with Python, machine learning, and  Agnetic AI frameworks like Open AI Sdk .",
        image: "./AI-Engineer.png",
      },
      { icon: <FaHtml5 className="text-orange-500 text-5xl" />, percentage: 80 },
      { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, percentage: 70 },
      { icon: <SiTypescript className="text-sky-400 text-5xl" />, percentage: 75 },
      { icon: <FaPython className="text-yellow-400 text-5xl" />, percentage: 90 },
      { icon: <FaNodeJs className="text-green-500 text-5xl" />, percentage: 65 },
      { icon: <SiExpress className="text-gray-300 text-5xl" />, percentage: 70 },
      { icon: <SiMongodb className="text-green-400 text-5xl" />, percentage: 65 },
      { icon: <SiFirebase className="text-yellow-500 text-5xl" />, percentage: 75 },
      { icon: <SiOpenai className="text-purple-400 text-5xl" />, percentage: 60 },
    ],
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
    AOS.refresh();

    return () => AOS.refresh();
  }, []);

  useEffect(() => {
    const percentageSkills = skills.filter((s) => s.percentage !== undefined);

    const interval = setInterval(() => {
      setProgressValues((prev) =>
        percentageSkills.map((s, i) =>
          (prev[i] || 0) < s.percentage ? (prev[i] || 0) + 1 : prev[i] || 0
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, [skills]);

  return (
    <div className="min-h-screen bg-[#050816] flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group bg-gradient-to-b from-[#1a1f38] to-[#050816] rounded-[20px] p-6 shadow-lg transition-transform transform hover:scale-105 ${
              skill.description ? "h-96 text-center" : "h-48"
            }`}
            data-aos={skill.description ? "fade-right" : "fade-up"}
            data-aos-delay={index * 200}
            data-aos-anchor-placement="top-bottom"
          >
            {/* Developer Role Cards */}
            {skill.image && (
              <>
                <div className="bg-gradient-to-r from-[#C100EF] to-[#6F00FF] p-2 rounded-full inline-block mb-4">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h2 className="text-lg font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#C100EF] to-[#6F00FF] mb-4">
                  {skill.name}
                </h2>
                <p className="text-gray-300 text-sm mb-4">
                  {skill.description}
                </p>
              </>
            )}

            {/* Skill Icon + Progress */}
            {!skill.image && (
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="mb-4">{skill.icon}</div>
                <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-gradient-to-r from-[#C100EF] to-[#6F00FF] transition-all duration-1000"
                    style={{ width: `${progressValues[index - 3] || 0}%` }}
                  />
                </div>
                <div className="text-sm text-gray-300 mt-2">
                  {progressValues[index - 3]}%
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
