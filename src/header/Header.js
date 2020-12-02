import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import NavBarContext from "../navBar/NavBarContext";
import NavBar from "../navBar/NavBar";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowUpArrow(true);
      } else setShowUpArrow(false);
    });

    return () => window.removeEventListener("scroll");
  }, []);
  const contextValue = {
    showNavBar,
    setShowNavBar,
  };
  return (
    <div className="header">
      <NavBarContext.Provider value={contextValue}>
        <NavBar />
        <MenuIcon
          className="menu_icon"
          onClick={() => setShowNavBar(true)}
        />
        <img className="my_logo animate__animated animate__tada" src={"/light-logo.png"} alt="My logo"/>
      </NavBarContext.Provider>
      {showUpArrow ? (
        <IconButton href="#" className="up_arrow">
          <ArrowUpwardIcon />
        </IconButton>
      ) : null}
    </div>
  );
}

export default Header;
