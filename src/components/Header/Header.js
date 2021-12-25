import React, { useState } from "react";
import "./header.css";
import { SocialIcon } from "react-social-icons";
import Slide from "react-reveal/Slide";

const Header = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div className="header">
      <div className="headertext">
        <div className="title">
          <b>Miłosz</b>
        </div>
        <p>logo in progress</p>
      </div>
      <div className="dropdownbutton">
        <button onClick={() => setShowList(!showList)}>
          <span
            className="iconify dropdownarrow"
            key="topButton"
            data-icon="radix-icons:dropdown-menu"
          ></span>
        </button>
      </div>
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

      <Slide right when={showList}>
        <div className="dropdownMenu">
          <table>
            <tr>
              <td>
                <a href="https://github.com/Butterski">GitHub</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/">
                  LinkedIn
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="mailto:miloszkucharski@gmail.com">e-mail</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://discordapp.com/users/215900363222417410">
                  Discord
                </a>
              </td>
            </tr>
          </table>
        </div>
      </Slide>
    </div>
  );
};
export default Header;
