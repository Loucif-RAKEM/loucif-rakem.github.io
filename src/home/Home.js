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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="curve">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L48,48C96,64,192,96,288,90.7C384,85,480,43,576,69.3C672,96,768,192,864,208C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
