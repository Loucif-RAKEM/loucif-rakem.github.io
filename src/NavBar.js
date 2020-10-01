import React from "react";
import "./NavBar.css";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import WorkIcon from "@material-ui/icons/Work";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <HomeIcon fontSize="large" className="navbar_icon" />
      </Link>
      <Link to="/formation">
        <SchoolIcon fontSize="large" className="navbar_icon" />
      </Link>
      <Link to="/projets">
        <WorkIcon fontSize="large" className="navbar_icon" />
      </Link>
      <Link to="/competences">
        <DeveloperModeIcon fontSize="large" className="navbar_icon" />
      </Link>
      <Link to="/centres-d-interet">
        <SentimentSatisfiedOutlinedIcon
          fontSize="large"
          className="navbar_icon"
        />
      </Link>
      <Link to="/contact">
        <PermContactCalendarIcon fontSize="large" className="navbar_icon" />
      </Link>
    </div>
  );
}

export default NavBar;
