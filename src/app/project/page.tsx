"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const projects = [
  {
    id: 1,
    title: "Book Store App",
    description:
      "A comprehensive CRUD-based app for efficiently managing books with an intuitive interface.",
    image: "./bookstore.jpg",
  },
 
  {
    id: 2,
    title: "Attendance System",
    description:
      "Tracks daily attendance, handles leave requests seamlessly, and generates accurate attendance grades.",
    image: "./attendence.png",
  },
  {
    id: 3,
    title: "Restaurant System UI",
    description:
      "A simple and responsive user interface for a restaurant system. This project focuses only on the UI/UX design.",
    image: "./resturant-sysem.png",
},
{
    id: 4,
    title: "PetCare",
    description:
      "A pet service platform that offers services, schedules appointments, and sends email confirmations.",
    image: "./pet-care.png",
  },
  {
    id: 5,
    title: "AI Quiz App",
    description:
      "AI-powered quiz app with real-time questions, cheating detection, and leaderboards.",
    image: "./quiz-app.png",
  },

];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // You can adjust the duration as per your need
      once: true, // Animation will only happen once
      mirror: false, // This disables the animation on scroll back up
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-12">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-gradient-to-br from-[#00ff75] to-[#3700ff] p-1 hover:shadow-[0_0_30px_3px_rgba(0,255,117,0.4)] transition-transform duration-300"
            data-aos="fade-left" // Apply the fade-left AOS animation
            data-aos-delay="100" // Optional: Delay for animation
          >
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
