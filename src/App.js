import React from "react";
import Courses from "./courses/Courses";
import Projects from "./projects/Projects";
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Hobbies from "./hobbies/Hobbies";
import Contact from "./contact/Contact";
import Header from "./header/Header"
import skills from "./skills/SkillsData";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Courses />
      <Projects />
      <Skills skills={skills} />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
