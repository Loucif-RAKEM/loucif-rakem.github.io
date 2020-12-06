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
        autoWriteText.current.innerHTML = title.slice(0, index)
        setTimeout(() => index = 0, 650)
        
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

          <p>
            {myData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
