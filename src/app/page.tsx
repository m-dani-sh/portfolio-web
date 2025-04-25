"use client";

import { Typewriter } from 'react-simple-typewriter';

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Skills from './skill/page';
import ContactForm from './contact/page';
import Projects from './project/page';

export default function Home() {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row items-center justify-between px-4 sm:px-20 py-10"
        style={{ backgroundImage: "url('./background.png')" }}
      >
        {/* Left Section */}
        <div className="max-w-lg text-center sm:text-left sm:max-w-xl">
          <h1 className="text-white font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-tight animate-fadeInUp">
            Hello! I am <span className="text-[#C100EF]">Danish</span>
          </h1>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl mt-4 leading-tight animate-fadeInUp delay-100 transform-gpu hover:scale-105 transition-all duration-500 ease-in-out">
            <Typewriter
              words={["Full-Stack Web Developer 💻", "MERN Stack Enthusiast", "AI & Data Sci Explorer 🔍"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mt-6 leading-relaxed animate-fadeInUp delay-200 transform-gpu hover:scale-105 transition-all duration-500 ease-in-out">
            <span className="text-[#C100EF] font-medium">Full-Stack Web Developer</span> specializing in MERN and Next.js, focused on building scalable, user-driven applications. Passionate about integrating <span className="text-[#C100EF] font-medium">AI and Web3</span> to shape the future of technology.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button className="border border-white text-white bg-transparent hover:bg-white hover:text-black focus:bg-white focus:text-black active:bg-white active:text-black px-6 py-3 transition rounded-md mb-4 sm:mb-0">
              <Link href="/mycv.pdf" target="_blank" rel="noopener noreferrer">My Resume</Link>
            </Button>

            <Button className="border border-[#C100EF] text-[#C100EF] bg-transparent hover:bg-[#C100EF] hover:text-white focus:bg-[#C100EF] focus:text-white active:bg-[#C100EF] active:text-white px-6 py-3 transition rounded-md">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] mt-10 sm:mt-0 flex items-center justify-center">
          {/* Profile Image */}
          {/* <Image
            src="/image.png"
            alt="profile"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg border-4 border-[#C100EF] object-cover"
          /> */}
          {/* Optional Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C100EF] to-[#6A00E0] blur-xl opacity-50 -z-10"></div>
        </div>
      </div>

      {/* Other Components */}
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}
