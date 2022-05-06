import React, { useState } from "react";
import "./header.css";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

import Experience from "../../views/Experience/Experience";

const Header = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div className="header">
      <div className="header-text">
        <div className="title">
          <Link to="/" className="header-link">
            <b>Miłosz</b>
          </Link>
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
        <Link to={"/experience"} className="navbar-link">
          Experience
        </Link>
        <Link to={"/experience"} className="navbar-link">
          Skills
        </Link>
        <Link to={'/experience'} className="navbar-link">Resume</Link>
        <Link to={'/experience'} className="navbar-link">Contact</Link>
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
