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

function NavBar() {
  const { showNavBar, setShowNavBar } = useContext(NavBarContext);
  return (
    <div className={showNavBar ? "navbar" : "navbar hidden"}>
      <div className="close_button" onClick={() => setShowNavBar(false)}>
        <CloseIcon />
      </div>
      <div>
        <HomeIcon className="navbar_icon" />
        {/* eslint-disable-next-line */}
        <a href="#">About Me</a>
      </div>
      <div>
        <SchoolIcon className="navbar_icon" />
        <a href="#courses">My School Degrees</a>
      </div>
      <div>
        <WhatshotIcon className="navbar_icon" />
        <a href="#projects">My Projects</a>
      </div>
      <div>
        <CodeIcon className="navbar_icon" />
        <a href="#skills">My Skills</a>
      </div>
      <div>
        <FavoriteIcon className="navbar_icon" />
        <a href="#hobbies">My Hobbies</a>
      </div>
      <div>
        <PhoneIcon className="navbar_icon" />
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
}

export default NavBar;
