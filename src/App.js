import React from "react";
import Courses from "./Courses";
import Projects from "./Projects";
import Home from "./Home";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/formation" component={Courses} />
        <Route path="/projets" component={Projects} />
        <Route path="/competences" component={Skills} />
        <Route path="/centres-d-interet" component={Hobbies} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}

export default App;
