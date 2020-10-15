import React from "react";
import "./Courses.css";
import SchoolIcon from "@material-ui/icons/School";

function Courses() {
  return (
    <div className="courses" id="courses">
      <div className="content animate__animated animate__fadeInUp">
        <h1>
          My Degrees <SchoolIcon className="content_icon"/>
        </h1>

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
