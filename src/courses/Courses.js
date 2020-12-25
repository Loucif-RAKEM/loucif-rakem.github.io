import React from "react";
import "./Courses.css";
import data from "../data/data";

function Courses({ lang }) {
  const myData = lang === "fr" ? data.fr.courses : data.en.courses;

  return (
    <div className="courses" id="courses">
      <h1>{myData.title}</h1>
      <div className="content">
        <ul>
          <li>
            <span className="year">{myData.degrees[0].year}</span>
            <span className="degree">{myData.degrees[0].name}</span>
            <div className="school">{myData.degrees[0].school}</div>
          </li>
          <li>
            <span className="year">{myData.degrees[1].year}</span>
            <span className="degree">{myData.degrees[1].name}</span>
            <div className="school">{myData.degrees[1].school}</div>
          </li>
          <li>
            <span className="year">{myData.degrees[2].year}</span>
            <span className="degree">{myData.degrees[2].name}</span>
            <div className="school">{myData.degrees[2].school}</div>
          </li>
          <li>
            <span className="year">{myData.degrees[3].year}</span>
            <span className="degree">{myData.degrees[3].name}</span>
            <div className="school">{myData.degrees[3].school}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Courses;
