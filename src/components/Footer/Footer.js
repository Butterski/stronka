import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>WoW you scrolled all the way through! Thank you for your time!</h3>
        <div className="footer-links">
          <a href="https://github.com/Butterski" className="footer-navbar-link">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/"
            className="footer-navbar-link"
          >
            LinkedIn
          </a>
          <a href="mailto:miloszkucharski@gmail.com" className="footer-navbar-link">
            E-Mail
          </a>
          <a
            href="https://discordapp.com/users/215900363222417410"
            className="footer-navbar-link"
          >
            Discord
          </a>
        </div>
      </div>
      <div className="footer-right">
        Made by Milosz Kucharski 🐱‍💻
      </div>
    </div>
  );
};
export default Footer;
