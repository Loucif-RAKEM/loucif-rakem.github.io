import React, { useRef, useEffect } from "react";
import "./Home.css";
import Header from "./../header/Header";
import data from "../data/data";

function Home({ lang, setLang }) {
  const myData = lang === "fr" ? data.fr.home : data.en.home;

  let autoWriteText = useRef({});

  const title = myData.title;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      autoWriteText.current.innerHTML = title.slice(0, index) + "|";
      index++;
      if (index > title.length) {
        setTimeout(() => {
          index = 0;
          autoWriteText.current.innerHTML = "|";
        }, 650);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="home">
      <Header lang={lang} setLang={setLang} />
      <div className="content">
        <div className="text animate__animated animate__bounceInDown">
          <h2
            ref={autoWriteText}
            style={{
              color: "#FFEB3B",
            }}
          >
            {""}
          </h2>
          <p>{myData.description}</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="curve"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,170.7C384,203,480,245,576,240C672,235,768,181,864,176C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
