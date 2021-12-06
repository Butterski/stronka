import React from "react";
import "./header.css";
import { SocialIcon } from "react-social-icons";
const Header = () => (
  <div className="header">
    <div className="headertext">
      <div className="title"><b>Miłosz</b></div>
      <p>logo in progress</p>
    </div>
    {/* <img src={monkey} alt="logo" /> */}
    <div className="navbar">
      <SocialIcon
        className="socialIcon"
        fgColor="#171515"
        bgColor="white"
        url="https://github.com/Butterski"
      ></SocialIcon>
      <SocialIcon
        className="socialIcon"
        fgColor="white"
        url="https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/"
      ></SocialIcon>
      <SocialIcon
        className="socialIcon"
        fgColor="white"
        url="mailto:miloszkucharski@gmail.com"
      ></SocialIcon>
      <SocialIcon
        className="socialIcon"
        fgColor="white"
        url="https://discordapp.com/users/215900363222417410"
        label="Butters#9668"
        network="discord"
      ></SocialIcon>
    </div>
  </div>
);
export default Header;
