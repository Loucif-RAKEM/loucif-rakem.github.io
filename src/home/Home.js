import React, { useRef } from "react";
import "./Home.css";
import Header from "./../header/Header";

function Home() {
  const autoWriteText = useRef({});
  const title = "Hi, my name is Loucif & I am a Full Stack Web Developer";
  let index = 0;
  setInterval(() => {
    autoWriteText.current.innerText = title.slice(0, index);
    index++;
    if (index > title.length) index = 0;
  }, 100);
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="text animate__animated animate__bounceInDown">
          <h2
            ref={autoWriteText}
            style={{
              color: "#FFEB3B",
            }}
          >
            Hi, my name is Loucif & I am a Full Stack Web Developer
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
