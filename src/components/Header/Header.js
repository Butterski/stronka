import React, { useState } from "react";
import "./header.css";
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

      <Slide right when={showList}>
        <div className="dropdownMenu">
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="https://github.com/Butterski">
                    {showList ? "GitHub" : null}
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.linkedin.com/in/mi%C5%82osz-kucharski-2a9804206/">
                    {showList ? "LinkedIn" : null}
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="mailto:miloszkucharski@gmail.com">
                    {showList ? "E-Mail" : null}
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://discordapp.com/users/215900363222417410">
                    {showList ? "Discord" : null}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Slide>
    </div>
  );
};
export default Header;
