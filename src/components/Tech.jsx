import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const skillGroups = [
  { title: "Languages", items: "Java, JavaScript, SQL, C" },
  { title: "Frontend", items: "HTML, CSS, Tailwind CSS, React.js" },
  { title: "Backend", items: "Node.js, Express.js, REST APIs, JWT Authentication" },
  { title: "Database", items: "MongoDB, MySQL" },
  { title: "Tools", items: "Git, GitHub, VS Code, Postman" },
  { title: "Coursework", items: "Data Structures & Algorithms, DBMS, OOP Concepts" },
];

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="w-28 h-28" key={name} title={name} aria-label={name}>
      <BallCanvas icon={icon} />
    </div>
  ));
};

const Tech = () => (
  <>
    <div className="text-center">
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
    </div>
    <div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
      {renderTechnologies()}
    </div>
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-white font-semibold text-[16px]">{group.title}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[24px]">{group.items}</p>
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
