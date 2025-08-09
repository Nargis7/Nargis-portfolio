import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_r1ld7zs", // your service ID
        "template_fubn6ps", // your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "XK4xXsAJqF2rFblKB" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-[#0B1120] py-20 px-4">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-10 text-white">
        Got a project in{" "}
        <span className="text-[#06B6D4]">mind?</span>
      </h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-[#1E293B] p-4 rounded-md outline-none text-white w-full"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-[#1E293B] p-4 rounded-md outline-none text-white w-full"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="bg-[#1E293B] p-4 rounded-md outline-none text-white md:col-span-2"
          required
        ></textarea>

        {/* Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-[#06B6D4] hover:bg-[#0891B2] text-[#0B1120] font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition duration-300"
          >
            Send Message →
          </button>
        </div>

        {/* Status */}
        {status && (
          <p
            className={`text-center md:col-span-2 mt-4 ${
              status.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
