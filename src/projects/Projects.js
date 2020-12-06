import React, { useState, useEffect } from "react";
import Project from "./Project";
import "./Projects.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import data from "../data/data";

function Projects({ lang }) {
  const myData = lang === "fr" ? data.fr.projects : data.en.projects;
  const [animationClass, setanimationClass] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollValue =
        window.innerWidth >= 320 && window.innerWidth < 480 ? 398 : 650;
      if (window.scrollY > scrollValue) {
        setanimationClass("animate__animated animate__fadeInUpBig");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className="projects" id="projects">
      <h1>
        {myData.title} <WhatshotIcon className="content_icon" />
      </h1>
      <div className={`content${" " + animationClass}`}>
        {myData.projectList.map((project, index) => (
          <Project
            key={index}
            lang={lang}
            title={project.title}
            description={project.description}
            img={project.img}
            project_url={project.projectUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
