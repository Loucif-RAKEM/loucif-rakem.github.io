import React from "react";
import "./Hobbies.css";
import Hobby from "./Hobby.js";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Hobbies() {
  return (
    <div className="hobbies" id="hobbies">
      <h1>
        My Hobbies <FavoriteIcon className="content_icon"/>
      </h1>
      <div className="content">
        <Hobby
          title={"Personal development"}
          description={[
            "Confidence",
            "Time management",
            "Motiviation",
            "Communication",
          ]}
          img_url={"/personal-dev.jpg"}
        />
        <Hobby
          title={"Health & Wellbeing"}
          description={[
            "Meditation",
            "Relaxation",
            "Positive affirmations",
            "Bodybuilding",
          ]}
          img_url={"/meditation.jpg"}
        />
        <Hobby
          title={"Trips"}
          description={["Nature", "Hiking", "Mountains","Tourist attractions"]}
          img_url={"/trips.jpg"}
        />
      </div>
    </div>
  );
}

export default Hobbies;
