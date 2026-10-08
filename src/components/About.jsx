import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { services } from '../constants';
import { profile } from '../assets';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        <motion.div variants={fadeIn('right', 'spring', 0.1, 0.75)} className="shrink-0">
          <img
            src={profile}
            alt="Portrait of Saurabh Naulakha"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover object-[center_18%] border-2 border-[#915EFF] shadow-card"
            width={192}
            height={192}
          />
        </motion.div>

        <div>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I’m an aspiring Software Engineer and Full Stack Developer with hands-on
            experience in MERN Stack Development and Java-based DSA problem solving.
            I build end-to-end web applications using React.js, Node.js, Express.js,
            MongoDB, and MySQL, with a focus on clean code, performance, and scalable
            solutions. I’m also familiar with REST APIs, JWT authentication, database
            design, and modern web development practices.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-4 text-white">
            <a
              href="https://github.com/SaurabhNaulakha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#915EFF] text-[22px]"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/saurabh-naulakha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#915EFF] text-[22px]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/saurabh_naulakha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#915EFF] text-[22px]"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:naulakhasaurabh@gmail.com"
              aria-label="Email Saurabh Naulakha"
              className="hover:text-[#915EFF] text-[22px]"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+919756401301"
              aria-label="Call Saurabh Naulakha"
              className="hover:text-[#915EFF] text-[22px]"
            >
              <FaPhone />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
