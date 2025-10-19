"use client";
import Image from "next/image";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const SERVICE_ID 
  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!; // ⚠️ Fixed name (was TEMPLATE_USER)
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  console.log("check env values",SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
  console.log("All env vars:", process.env);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .send(
        "service_8hgdpjd",
        "template_tof1gc9", // ✅ correct EmailJS Template ID variable
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        
        "HY2xDz32i8Utw5APJ" //publc key updated
        
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Please try again later.");
          setIsSending(false);
        }
      );
      console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] to-[#1a1f38] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#1a1f38] shadow-lg rounded-lg p-6 md:p-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center px-4 md:px-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Let&apos;s chat.
            <br />
            Tell me about your <br />
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#C100EF] to-[#6F00FF]">
              project.
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Let&apos;s create something together.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 items-center text-lg text-gray-200 font-medium hover:underline">
            <a
              href="mailto:dm.danish2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./gmail.jpeg"
                alt="Gmail logo"
                width={40}
                height={40}
                className="w-7 h-7 rounded-xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-danish-2256522a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./linkedin.png"
                alt="LinkedIn logo"
                width={40}
                height={40}
                className="w-7 h-7 rounded-xl"
              />
            </a>
            <a
              href="https://github.com/m-dani-sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./github.png"
                alt="GitHub logo"
                width={40}
                height={40}
                className="w-7 h-7 rounded-xl"
              />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#1a1f38] p-6 md:px-10 rounded-lg shadow-md transition-transform duration-700 hover:-translate-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Send us a message
          </h2>

          <form className="flex flex-col gap-6" onSubmit={sendEmail}>
            {/* Full Name Input */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-200"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#050816] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C100EF] transition-transform duration-500 hover:-translate-y-1"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-200"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#050816] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C100EF] transition-transform duration-500 hover:-translate-y-1"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-200"
              >
                Tell us more about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#050816] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C100EF] resize-none transition-transform duration-500 hover:-translate-y-1"
                placeholder="Describe your requirements"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#C100EF] to-[#6F00FF] text-white font-semibold rounded-lg hover:opacity-90 transition-transform duration-500 hover:-translate-y-1 disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p className="text-center mt-4 text-sm text-gray-300">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
