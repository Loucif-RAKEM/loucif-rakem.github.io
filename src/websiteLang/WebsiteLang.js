import React from "react";
import "./WebsiteLang.css";

function WebsiteLang({ lang, setLang }) {
  return (
    <div className="websiteLang">
      <span
        className={lang === "fr" ? "lang active" : "lang"}
        onClick={() => {
          if (lang !== "fr") setLang("fr");
        }}
      >
        FR
      </span>
      <span>|</span>
      <span
        className={lang === "en" ? "lang active" : "lang"}
        onClick={() => {
          if (lang !== "en") setLang("en");
        }}
      >
        EN
      </span>
    </div>
  );
}

export default WebsiteLang;
