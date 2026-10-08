import {
  c,
  java,
  sql,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  workerconnect,
  authsystem,
  litterspotter,
  glb,
  rbs,
  hackathon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Java", icon: java },
  { title: "JavaScript", icon: javascript },
  { title: "SQL", icon: sql },
  { title: "C", icon: c },
];

export const technologies = [
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "B.Tech in Computer Science & Engineering",
    company_name: "GL Bajaj Group of Institutions",
    icon: glb,
    iconBg: "#161329",
    date: "June 2023 – August 2027",
    points: [
      "Pursuing B.Tech in Computer Science & Engineering in Mathura.",
      "GPA: 7.51+",
      "Coursework includes Data Structures & Algorithms, DBMS, and OOP Concepts.",
    ],
  },
  {
    title: "Intermediate",
    company_name: "R.B.S Sr. Sec. School",
    icon: rbs,
    iconBg: "#161329",
    date: "April 2023",
    points: [
      "Completed Intermediate in Mursan, Hathras.",
      "Percentage: 70.5%",
    ],
  },
  {
    title: "High School",
    company_name: "R.B.S Sr. Sec. School",
    icon: rbs,
    iconBg: "#161329",
    date: "April 2021",
    points: [
      "Completed High School in Mursan, Hathras.",
      "Percentage: 77%",
    ],
  },
  {
    title: "Hackathon Runner-Up",
    company_name: "Hackathon organized at IET Lucknow",
    icon: hackathon,
    iconBg: "#161329",
    date: "Achievement",
    points: [
      "Secured Runner-Up position in a Hackathon organized at IET Lucknow, demonstrating strong problem-solving, rapid prototyping, and teamwork skills under time constraints.",
      "Associated project: Smart Litter Spotter & Community Cleanup Tracker.",
    ],
  },
];

export const projects = [
  {
    name: "WorkerConnect",
    description:
      "A full-stack MERN platform that connects users with trusted skilled workers such as painters, electricians, plumbers, and mechanics. It supports search and filtering, location-based discovery, worker profiles, ratings, and a booking flow with time-slot selection, confirmation, and Firebase authentication with real-time availability updates.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
    ],
    image: workerconnect,
  },
  {
    name: "Full Stack Authentication System",
    description:
      "A secure full-stack authentication system with user registration, login, JWT-based authentication and authorization, protected routes, MongoDB user management, bcrypt password hashing, server-side validation, and RESTful APIs for profile and account operations.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "JWT", color: "orange-text-gradient" },
      { name: "bcrypt", color: "green-text-gradient" },
    ],
    image: authsystem,
  },
  {
    name: "Smart Litter Spotter & Community Cleanup Tracker",
    description:
      "A MERN-based web platform for AI-powered litter detection, geo-tagged reporting, and community cleanup management. It includes image-based reporting, interactive maps, hotspot visualization, authentication, cleanup events, volunteer registration, rewards, and a leaderboard, with YOLO/TensorFlow and Google Maps integrations.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "TensorFlow/YOLO", color: "green-text-gradient" },
      { name: "Google Maps", color: "pink-text-gradient" },
    ],
    image: litterspotter,
    achievement:
      "Runner-Up in a Hackathon organized at IET Lucknow",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/SaurabhNaulakha",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saurabh-naulakha",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/saurabh_naulakha",
  },
  {
    name: "Email",
    url: "mailto:naulakhasaurabh@gmail.com",
  },
  {
    name: "Phone",
    url: "tel:+919756401301",
  },
];
