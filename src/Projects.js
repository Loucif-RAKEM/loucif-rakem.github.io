import React from "react";
import Project from "./Project";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <Project
        title="Netflix Clone"
        description="I developed a clone of the well known streaming platform 'Netflix' using React.js and TMDB API which gives me all the movie's info."
        img={{
          title: "Netflix Clone",
          url: "/netflix-clone.png",
          alt: "Netflix Clone image",
          height: "180",
        }}
        project_url="https://loucif-rakem.github.io/netflix-clone/"
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
        title="Tic Tac Toe"
        description="I created a simple implementation of the game Tic Tac Toe as a web application using React.js and other recent technologies."
        img={{
          title: "Tic Tac Toe Game",
          url: "/tic-tac-toe.png",
          alt: "Tic Tac Toe UI",
          height: "180",
        }}
        project_url="https://loucif-rakem.github.io/morpion-app/"
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
    </div>
  );
}

export default Projects;
