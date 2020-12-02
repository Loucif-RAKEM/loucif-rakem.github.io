import React from "react";
import "./Home.css";
import Header from "./../header/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="text animate__animated animate__bounceInDown">
          <h2>Hi, my name is Loucif & I am a</h2>
          <h2>
            <span
              style={{
                color:
                  "#fffc00"
              }}
            >
              Full Stack
            </span>{" "}
            Web <span style={{ color: "#fffc00" }}>Developer</span>
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
