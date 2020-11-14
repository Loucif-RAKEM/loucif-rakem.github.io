import React from "react";
import "./Contact.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h4>
        2020, Designed with <FavoriteIcon color="secondary" /> By Loucif Rakem
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
