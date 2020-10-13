import React, { useState, useEffect } from "react";
import "./Courses.css";

function Courses() {
  const [animationClass, setanimationClass] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setanimationClass("animate__animated animate__fadeInRightBig");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className="courses" id="courses">
      <div className={"content" + " " + animationClass}>
        <ul>
          <li>
            <span className="year">2019 - 2020 :</span>
            <span className="degree">
              Master's degree in Computer Science, 2nd year
            </span>
            <div className="school">University of Franche-Comté, Besançon</div>
          </li>
          <li>
            <span className="year">2018 - 2019 :</span>
            <span className="degree">
              Master's degree in Computer Science, 1st year
            </span>
            <div className="school">University of Franche-Comté, Besançon</div>
          </li>
          <li>
            <span className="year">2017 - 2018 :</span>
            <span className="degree">
              Master's degree in IT Project management, 1st year
            </span>
            <div className="school">
              University of Mouloud Mammeri, Tizi Ouzou
            </div>
          </li>
          <li>
            <span className="year">2014 - 2017 :</span>
            <span className="degree">
              Bachelor's degree in Computer Science
            </span>
            <div className="school">
              University of Mouloud Mammeri, Tizi Ouzou
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Courses;
