import React, {useState, useEffect} from "react";
import Project from "./Project";
import "./Projects.css";

import WhatshotIcon from "@material-ui/icons/Whatshot";

function Projects() {
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
        My Recent Projects <WhatshotIcon className="content_icon" />
      </h1>
      <div className={`content${" " + animationClass}`}>
        <Project
          title="Netflix Clone"
          description="I developed a clone of the well known streaming platform 'Netflix' using React.js and TMDB API which gives me all the movies' info."
          img={{
            title: "Netflix Clone",
            url: "/netflix-clone.jpg",
            alt: "Netflix Clone image",
            height: "180",
          }}
          project_url="https://loucif-rakem.com/netflix-clone/"
          technologies={[
            "React.js",
            "React Hooks",
            "Axios",
            "REST API",
            "FlexBox",
            "CSS3",
            "Material UI",
            "Git",
            "Github Pages",
            "Visual Studio Code",
          ]}
        />
        <Project
          title="Tic Tac Toe Game"
          description="I created a simple implementation of the game Tic Tac Toe as a web application using React.js and other recent technologies."
          img={{
            title: "Tic Tac Toe Game",
            url: "/tic-tac-toe-ui.png",
            alt: "Tic Tac Toe UI",
            height: "180",
          }}
          project_url="https://loucif-rakem.com/morpion-app/"
          technologies={[
            "React.js",
            "React Hooks",
            "JSX",
            "FlexBox",
            "Material UI",
            "Git",
            "Github Pages",
          ]}
        />

<Project
          title="Internship at Flowbird Group"
          description="I implemented a serialization system in Python which generates the code that handles communications between peripherals inside a ticket vending machine."
          img={{
            title: "Ticket vending machine",
            url: "/tvm.jpg",
            alt: "Ticket Vending Machine",
            height: "180",
          }}
          project_url="#"
          technologies={[
            "Python 3.8",
            "C",
            "CORBA",
            "IDL",
            "ANTLR4",
            "JSON",
            "Git",
            "Jira",
            "IntelliJ Idea"
          ]}
        />

<Project
          title="PrestaFind Web App"
          description="Within a team of three developers, I took part in the development of a web application which puts in touch consultants and potential clients using a profile notation system."
          img={{
            title: "PrestaFind",
            url: "/prestafind.jpg",
            alt: "PrestaFind",
            height: "180",
          }}
          project_url="#"
          technologies={[
            "Vue.js",
            "Vuetify",
            "Spring Boot",
            "REST API",
            "MySQL",
            "Trello",
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
