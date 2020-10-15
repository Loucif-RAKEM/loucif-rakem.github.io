import React from "react";
import Courses from "./Courses";
import Projects from "./Projects";
import Home from "./Home";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import Header from "./Header";
import skills from "./SkillsData";

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
