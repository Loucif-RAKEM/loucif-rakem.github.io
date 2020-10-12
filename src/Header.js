import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import NavBarContext from "./NavBarContext";
import NavBar from "./NavBar";

function Header() {
  const [showNavBar, setShowNavBar] = useState(false);

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
          fontSize="large"
          onClick={() => setShowNavBar(true)}
        />
        <span className="my_name">Loucif Rakem</span>
      </NavBarContext.Provider>
    </div>
  );
}

export default Header;
