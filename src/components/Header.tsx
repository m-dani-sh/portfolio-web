"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className="bg-[#0B1120] shadow-lg relative">
      <div className="lg:container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo (Removed for Name as per your request) */}

        {/* Navigation for "Danish" name with AOS animation */}
        <Link href="/">
          <div
            className="navTitle aos-init aos-animate text-4xl font-bold text-indigo-600 text-shadow transition-transform duration-300 ease-in-out"
            data-aos="flip-down"  // AOS animation for the flip-down effect
            data-aos-delay="1500"  // Delay before the animation starts
            data-aos-duration="1000"  // Duration of the animation
            data-aos-mirror="false"   // Disables mirroring of animation
            data-aos-once="true"      // Triggers animation once when it enters the viewport
            data-aos-anchor-placement="top" // Anchors the animation to the top of the viewport
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("text-shadow-hover");  // Add hover shadow effect
              e.currentTarget.style.transform = "scale(1.1)";      // Slightly scale up on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("text-shadow-hover"); // Remove hover shadow
              e.currentTarget.style.transform = "scale(1)";          // Reset scale on hover out
            }}
          >
            Danish
          </div>
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={handleMenuToggle}
          className="block lg:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <span>&#x2715;</span> // Close Icon
          ) : (
            <span>&#9776;</span> // Hamburger Icon
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40 transition-all duration-300"></div>
        )}

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen
              ? "flex h-screen z-50"  // Take full screen height when open
              : "hidden"
          } flex-col gap-4 items-start p-8 w-full bg-[#0B1120] absolute top-[64px] left-0 py-6 lg:static lg:flex lg:flex-row lg:gap-8 lg:items-center lg:py-0 lg:w-auto lg:h-auto transition-all duration-300`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <li className="list-none group">
              <Link
                href="/skill"
                className="text-white text-lg hover:text-[#C100EF] transition duration-200 relative"
              >
                Skill
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C100EF] transform scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300"></span>
              </Link>
            </li>
            <li className="list-none group">
              <Link
                href="/project"
                className="text-white text-lg hover:text-[#C100EF] transition duration-200 relative"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C100EF] transform scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300"></span>
              </Link>
            </li>
            <li className="list-none group">
              <Link
                href="/mycv.pdf"
                className="text-white text-lg hover:text-[#C100EF] transition duration-200 relative"
              >
                CV
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C100EF] transform scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300"></span>
              </Link>
            </li>
            <li className="list-none group">
              <Link
                href="/contact"
                className="text-white text-lg hover:text-[#C100EF] transition duration-200 relative"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C100EF] transform scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
