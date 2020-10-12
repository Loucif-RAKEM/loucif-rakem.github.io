import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <img src="/myAvatar.png" alt="Avatar" />
        <div className="text">
          <h1>Hello there !</h1>
          <h2>My name is Loucif and I am a</h2>
          <h2>Full Stack Web Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
