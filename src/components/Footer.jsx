import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-primary py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-secondary text-[14px] text-center sm:text-left">
        © {new Date().getFullYear()} Saurabh Naulakha · Full Stack Developer
      </p>
      <div className="flex gap-4 text-white text-[20px]">
        <a
          href="https://github.com/SaurabhNaulakha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#915EFF]"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/saurabh-naulakha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#915EFF]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/saurabh_naulakha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#915EFF]"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:naulakhasaurabh@gmail.com"
          aria-label="Email Saurabh Naulakha"
          className="hover:text-[#915EFF]"
        >
          <FaEnvelope />
        </a>
        <a
          href="tel:+919756401301"
          aria-label="Call Saurabh Naulakha"
          className="hover:text-[#915EFF]"
        >
          <FaPhone />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
