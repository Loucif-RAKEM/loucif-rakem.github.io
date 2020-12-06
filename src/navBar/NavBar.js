import React, { useContext } from "react";
import "./NavBar.css";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PhoneIcon from "@material-ui/icons/Phone";
import CloseIcon from "@material-ui/icons/Close";
import NavBarContext from "./NavBarContext";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import data from "../data/data";

function NavBar({ lang }) {
  const { showNavBar, setShowNavBar } = useContext(NavBarContext);
  const myData = lang === "fr" ? data.fr.navbar : data.en.navbar;

  return (
    <div className={showNavBar ? "navbar" : "navbar hidden"}>
      <div className="close_button" onClick={() => setShowNavBar(false)}>
        <CloseIcon fontSize="large" />
      </div>
      <div>
        <HomeIcon className="navbar_icon" />
        {/* eslint-disable-next-line */}
        <a href="#">{myData.links[0]}</a>
      </div>
      <div>
        <SchoolIcon className="navbar_icon" />
        <a href="#courses">{myData.links[1]}</a>
      </div>
      <div>
        <WhatshotIcon className="navbar_icon" />
        <a href="#projects">{myData.links[2]}</a>
      </div>
      <div>
        <CodeIcon className="navbar_icon" />
        <a href="#skills">{myData.links[3]}</a>
      </div>
      <div>
        <FavoriteIcon className="navbar_icon" />
        <a href="#hobbies">{myData.links[4]}</a>
      </div>
      <div>
        <PhoneIcon className="navbar_icon" />
        <a href="#contact">{myData.links[5]}</a>
      </div>
    </div>
  );
}

export default NavBar;
