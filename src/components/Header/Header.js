import React, { useState } from "react";
import "./header.css";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

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
        <Link to={'/'} className="navbar-link">
          Skills
        </Link>
        <Link to={"/contact"} className="navbar-link">
          Contact
        </Link>
      </div>

      <Slide right when={showList}>
        <div className="dropdownMenu">
          <table>
            <tbody>
              <tr>
                <td>
                  <Link to={"/experience"} onClick={() => setShowList(false)}>
                    {showList ? "Experience" : null}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={"/stronka"} onClick={() => setShowList(false)}>
                    {showList ? "Skills" : null}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={"/contact"} onClick={() => setShowList(false)}>
                    {showList ? "Contact" : null}
                  </Link>
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
