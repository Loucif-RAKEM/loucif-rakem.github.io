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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="footer_curve"
      >
        <path
          fill="#5719e6"
          fillOpacity="1"
          d="M0,320L48,266.7C96,213,192,107,288,96C384,85,480,171,576,181.3C672,192,768,128,864,101.3C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <h4>{myData}</h4>

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
