import profile from '../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0f172a] flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-12">
      
      {/* Left - Text Content */}
      <div className="text-center md:text-left text-white space-y-4">
        {/* <h2 className="text-lg text-cyan-400">Hello, I'm</h2> */}
        {/* <h1 className="text-4xl md:text-5xl font-bold">Nargis Perween</h1> */}
         <div className="text-white text-3xl font-bold">
      <h1>
        Hi, I am{' '}
        <span className="text-purple-400">
          <Typewriter
            words={['Nargis Perween', 'a Developer', 'Software Engineer']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
    
        <p className="text-lg md:text-xl text-gray-300">
          Aspiring Web Developer | Student | Tech Enthusiast
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 text-2xl mt-4">
          <a href="https://www.linkedin.com/in/nargis-p-511bab27b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-cyan-400" />
          </a>
          <a href="https://github.com/Nargis7" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-cyan-400" />
          </a>
          <a href="https://twitter.com/Nargisparween07" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-cyan-400" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <button className="bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition duration-200">
            Hire Me
          </button>
          <a
            href="/resume.pdf"
            download
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition duration-200"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right - Profile Image */}
   {/* <div className="flex-shrink-0 transition-transform duration-500 hover:scale-110 hover:rotate-3">
  <img
    src={profile}
    alt="Nargis Perween"
    className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-cyan-400 shadow-[0_0_20px_#06b6d4]"
  />
</div> */}

<div className="relative group w-52 h-52 md:w-64 md:h-64 transition-transform duration-500 hover:scale-110 hover:rotate-3">
  {/* Profile Image */}
  <img
    src={profile}
    alt="Nargis Perween"
    className="rounded-full border-4 border-cyan-400  w-full h-full object-cover shadow-[0_0_20px_#06b6d4]"
  />

  {/* Hover Info Card */}
  <div className="absolute inset-0 bg-black bg-opacity-80 text-white rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-sm">🎓 3rd Year Student</p>
    <p className="text-sm">📍 Arka Jain University</p>
    <p className="text-sm">📊 CGPA: <span className="text-cyan-400 font-semibold">8.75</span></p>
  </div>
</div>



    </section>
  );
}
