"use client";
import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Image from 'next/image'; // Import Image from next/image for optimization

const Skills = () => {
  const [progressValues, setProgressValues] = useState(Array(6).fill(0)); // Initial progress bar values

  // Memoize the skills array
  const skills = useMemo(() => [
    { name: "Frontend Developer", description: "Specializing in creating visually appealing and user-friendly interfaces using React, Next.js, and TypeScript.", image: "./frontend-developer.jpeg" },
    { name: "Backend Developer", description: "Focused on building robust and scalable server-side applications with Node.js, Express, and MongoDB.", image: "./backend-developer.jpeg" },
    { name: "AI Engineer", description: "Junior AI Engineer building intelligent applications with Python, machine learning, and AI frameworks like TensorFlow and PyTorch.", image: "./AI-Engineer.png" },
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 70 },
    { name: "TypeScript", percentage: 75 },
     { name: "Python", percentage: 90 },
    { name: "Node.js", percentage: 65 },
    { name: "Express", percentage: 70 },
    { name: "MongoDB", percentage: 60 },
    { name: "Firebase", percentage: 70 },
    { name: "Ai", percentage: 60 },
     
  ], []); // Empty dependency array to memoize the skills array

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000,  // Animation duration
      once: false,     // Trigger the animation every time it comes into the viewport
      mirror: true,    // Allow animation to be triggered on scrolling back up
    });

    // Refresh AOS if content changes dynamically
    AOS.refresh();

    // Cleanup on component unmount
    return () => AOS.refresh();
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    // Animate progress bars from 0 to the target values
    const interval = setInterval(() => {
      setProgressValues((prev) =>
        prev.map((value, index) =>
          value < (skills[index + 3]?.percentage ?? 0) ? value + 1 : value
        )
      );
    }, 30); // Smooth increment animation

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [skills]); // This useEffect runs when the skills array is memoized

  return (
    <div className="min-h-screen bg-[#050816] flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group bg-gradient-to-b from-[#1a1f38] to-[#050816] rounded-[20px] p-6 shadow-lg transition-transform transform hover:scale-105 ${skill.description ? "h-96 text-center" : "h-48"}`}
            data-aos={skill.description ? "fade-right" : "fade-up"} // AOS animation based on description or progress
            data-aos-delay={index * 200} // Delay based on the index to show skills one by one
            data-aos-anchor-placement="top-bottom" // Trigger the animation when it crosses into the viewport from top to bottom
          >
            {skill.image && (
              <div className="bg-gradient-to-r from-[#C100EF] to-[#6F00FF] p-2 rounded-full inline-block mb-4">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            )}
            <h2 className="text-lg font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#C100EF] to-[#6F00FF] mb-4">
              {skill.name}
            </h2>
            {skill.description && (
              <p className="text-gray-300 text-sm mb-4">{skill.description}</p>
            )}
            {!skill.description && (
              <div className="mt-4">
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-gradient-to-r from-[#C100EF] to-[#6F00FF] transition-all duration-1000"
                    style={{ width: `${progressValues[index - 3] || 0}%` }}
                  />
                </div>
                <div className="text-sm text-white text-center mt-2">
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
