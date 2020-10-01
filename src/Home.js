import React from "react";
import NavBar from "./NavBar";
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="content">
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
