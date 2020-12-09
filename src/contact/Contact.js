import React from "react";
import "./Contact.css";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import data from "../data/data";

function Contact({ lang }) {
  const myData = lang === "fr" ? data.fr.contact : data.en.contact;

  return (
    <div className="contact" id="contact">
      <h4>
        {myData}
      </h4>

      <div className="icon_list">
        <IconButton target="_Blank" href="https://www.linkedin.com/in/lrakem/">
          <LinkedInIcon className="contact_icon" />
        </IconButton>

        <IconButton target="_Blank" href="https://github.com/Loucif-RAKEM">
          <GitHubIcon className="contact_icon" />
        </IconButton>

        <IconButton href="mailto:rakem.loucif@gmail.com">
          <MailIcon className="contact_icon" />
        </IconButton>
        <IconButton target="_Blank" href="https://icons8.com">
          <img
            src="/icons8-icons8-48.png"
            alt="icons8 logo"
            style={{ height: "28px", width: "28px" }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default Contact;
