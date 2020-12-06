import React, {useState} from "react";
import Courses from "./courses/Courses";
import Projects from "./projects/Projects";
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Hobbies from "./hobbies/Hobbies";
import Contact from "./contact/Contact";
import skills from "./skills/SkillsData";

function App() {
  const [lang, setLang] = useState("fr")
  return (
    <div>
      <Home lang={lang} setLang={setLang}/>
      <Courses lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} skills={skills} />
      <Hobbies lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}

export default App;
