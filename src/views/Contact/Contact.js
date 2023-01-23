import React, { useState } from "react";
import "./contact.css";
import { SocialIcon } from "react-social-icons";

import logo from "../../assets/logo.svg";

const Contact = () => {
  const [socialLink, setSocialLink] = useState({
    text: "​",  //<- this is 0 width space
    link: "",
  }); 
  return (
    <div className="contacts">
    <div className="socials-logo-container">
      <div className="contacts-logo">
        <img src={logo} alt="logo" />
      </div>
        <div className="social-list">
          <h1>You can reach me here 👇</h1>
          <div className="contact-social-icons">
            <SocialIcon
              className="social-icon"
              fgColor="#171515"
              bgColor="white"
              url="https://github.com/Butterski"
              onMouseEnter={() =>
                setSocialLink({
                  text: "github.com/Butterski",
                  link: "https://github.com/Butterski",
                })
              }
            />
            <SocialIcon
              className="social-icon"
              fgColor="white"
              url="https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/"
              onMouseEnter={() =>
                setSocialLink({
                  text: "linkedin.com/in/miloszkucharski",
                  link: "https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/",
                })
              }
            />
            <SocialIcon
              className="social-icon"
              fgColor="white"
              url="mailto:miloszkucharski@gmail.com"
              onMouseEnter={() =>
                setSocialLink({
                  text: "miloszkucharski@gmail.com",
                  link: "mailto:miloszkucharski@gmail.com",
                })
              }
            />
            <SocialIcon
              className="social-icon"
              fgColor="white"
              url="https://discordapp.com/users/215900363222417410"
              label="Butters#9668"
              network="discord"
              onMouseEnter={() =>
                setSocialLink({
                  text: "Butters#9668",
                  link: "https://discordapp.com/users/215900363222417410",
                })
              }
            />
          </div>
          <br />
          <h2>
            <a href={socialLink.link}>{socialLink.text}</a>
          </h2>
        </div>
    </div>
    {/* need to update my resume */}
      {/* <div className="resumes-container">
        <div className="left-resume-container">
          <a
            href="https://drive.google.com/file/d/10GVclxK-BEtFcTyKrLY0y6Q_XCZeOJB1/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="preview-button"> English Version Resume</button>
          </a>
        </div>
        <div className="mid-pause"></div>
        <div className="right-resume-container">
          <a
            href="https://drive.google.com/file/d/1ib5H_7EBtxFklxGS6yPXH_eKgXbGnuaQ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="preview-button">Polish Version Resume</button>
          </a>
        </div>
      </div> */}
    </div>
  );
};
export default Contact;
