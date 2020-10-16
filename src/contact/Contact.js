import React from "react";
import "./Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";


function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="content">
        <h1>Contact <PhoneIcon color="secondary" /></h1>
      </div>
    </div>
  );
}

export default Contact;
