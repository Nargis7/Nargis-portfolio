import { motion } from "framer-motion";
// import { certificates } from "../data/certificates";
import java from "../assets/java.png";
import dsa from "../assets/dsa.png";
import email from "../assets/email.png";
import time from "../assets/time.png";
import workshop from "../assets/workshop.jpeg";
import gdsc from "../assets/gdsc.jpeg";
import software from "../assets/software.png";
import gen from "../assets/gen.jpeg";
import coursera from "../assets/coursera.jpeg";
import extempore from "../assets/extempore.jpeg";
import google from "../assets/google.jpeg";
import linkedin from "../assets/linkedin.jpeg";




export default function Certificates() {
   const certificates = [
  {
    title: "Java Programming",
    issuer: "infosys",
    date: "June 2025",
    image: java,
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "infosys",
    date: "May 2025",
    image: dsa,
  },
  {
    title: "Email Writing Skills",
    issuer: "infosys",
    date: "March 2025",
    image: email,
  },
  {
    title: "Time Management",
    issuer: "HackerRank",
    date: "April 2025",
    image: time,
  },
  {
    title: "Os terminal",
    issuer: "Coding Club",
    date: "April 2025",
    image: workshop,
  },
  {
    title: "GDSC",
    issuer: "Oracle",
    date: "GDG-AJU",
    image: gdsc,
  },
  {
    title: "Software-Technology",
    issuer: "infosys",
    date: "Jan 2025",
    image: software,
  },
  {
    title: "Gen-Ai",
    issuer: "GDG-AJU",
    date: "Jan 2025",
    image: gen,
  },
  {
    title: "Git & GitHub",
    issuer: "Udemy",
    date: "Dec 2024",
    image: coursera,
  },
  {
    title: "Cyber Security",
    issuer: "Cybrary",
    date: "Nov 2024",
    image: extempore,
  },
  {
    title: "HTML & CSS",
    issuer: "freeCodeCamp",
    date: "Oct 2024",
    image: google,
  },
  {
    title: "Linkedin Profile Enhance",
    issuer: "Udemy",
    date: "Oct 2024",
    image: linkedin,
  },
];

  return (
    <section id="certificate" className="bg-[#0f172a] text-white px-6 py-20">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400 underline underline-offset-4">Certificates</span>
      </h2>
      {/* <img src={certificate.image} alt={certificate.title} /> */}
      {/* Certificates Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-transform duration-300 border border-cyan-400/20"
          >
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
