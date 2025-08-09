import { motion } from "framer-motion";
import nargis from "../assets/nargis.jpeg";

export default function About() {
  // Animation for each letter
  const letterAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1, // delay each letter
        duration: 0.4,
        type: "spring",
      },
    }),
  };

  const title = "About Me";
  const letters = title.split("");

  return (
    <section id="about" className="bg-[#0f172a] text-white px-6 py-20">
      
      {/* Animated Heading */}
      <div className="flex justify-center mb-8">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            variants={letterAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className={`text-3xl md:text-4xl font-bold ${
              char === "M" || char === "e" ? "text-cyan-400 underline underline-offset-4" : ""
            }`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* About Card */}
      <div className="relative bg-[#0f172a] rounded-xl p-8 shadow-xl max-w-3xl mx-auto mt-10 text-white border border-cyan-400/20">
        {/* <img
          src={nargis}
          alt="Nargis"
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-4 border-cyan-400 shadow-md"
        /> */}
           <img
    src={nargis}
    alt="Nargis"
    className="absolute -top-20 -left-15 w-50 h-50 rounded-full border-4 border-cyan-400 shadow-[0_0_20px_#06b6d4]"
  />
        <p className="text-center text-gray-300 leading-relaxed mt-24">
          I'm a B.Tech student at <span className="text-cyan-400 font-medium">Arka Jain University</span>,
          passionate about coding and constantly exploring new technologies.
          I enjoy solving problems using <span className="text-cyan-400 font-medium">Data Structures & Algorithms</span>,
          and love building impactful projects. Learning, improving, and growing every day is what drives me.
        </p>
        <div className="absolute -bottom-5 -right-5 w-12 h-12 rounded-full bg-cyan-400 opacity-20 blur-xl"></div>
      </div>
    </section>
  );
}
