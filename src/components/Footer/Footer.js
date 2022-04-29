import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>WoW you scrolled all the way through! Thank you for your time!</h3>
        <div className="socials-footer">
          <a href="https://github.com/Butterski" className="navbar-link">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/"
            className="navbar-link"
          >
            LinkedIn
          </a>
          <a href="mailto:miloszkucharski@gmail.com" className="navbar-link">
            E-Mail
          </a>
          <a
            href="https://discordapp.com/users/215900363222417410"
            className="navbar-link"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
