import React, { useContext } from "react";
import "./NavBar.css";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import CodeIcon from "@material-ui/icons/Code";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PhoneIcon from "@material-ui/icons/Phone";
import MovieIcon from "@material-ui/icons/Movie";
import CloseIcon from "@material-ui/icons/Close";
import NavBarContext from "./NavBarContext";

function NavBar() {
  const { showNavBar, setShowNavBar } = useContext(NavBarContext);
  return (
    <div className={showNavBar? "navbar" : "navbar hidden"}>
      <div className="close_button" onClick={() => setShowNavBar(false)}>
        <CloseIcon />
      </div>
      <div>
        <HomeIcon className="navbar_icon" />
        <a href="#">Home</a>
      </div>
      <div>
        <SchoolIcon className="navbar_icon" />
        <a href="#">My School Degrees</a>
      </div>
      <div>
        <MovieIcon className="navbar_icon" />
        <a href="#">My Projects</a>
      </div>
      <div>
        <CodeIcon className="navbar_icon" />
        <a href="#">My Skills</a>
      </div>
      <div>
        <FavoriteIcon className="navbar_icon" />
        <a href="#">My Hobbies</a>
      </div>
      <div>
        <PhoneIcon className="navbar_icon" />
        <a href="#">Contact Me</a>
      </div>
    </div>
  );
}

export default NavBar;
