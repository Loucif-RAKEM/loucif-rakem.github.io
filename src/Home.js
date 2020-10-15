import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="content ">
        <img
          className="animate__animated animate__bounceInDown"
          src="/myAvatar.png"
          alt="Avatar"
        />
        <div className="text animate__animated animate__fadeInUp">
          <h2>Hi, my name is Loucif and I am a</h2>
          <h2>
            <span style={{ color: "teal" }}>Full Stack</span> Web{" "}
            <span style={{ color: "teal" }}>Developer</span>
          </h2>
          <p>
            I enjoy building web apps and solving daily problems using the most
            recent technologies. I am looking to use all of my skills in order
            to add value to my future team, and learn much more about web
            development and project management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
