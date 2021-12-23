import React from "react";
import { HideOn } from "react-hide-on-scroll";
import "./topButton.css";

function goTop() {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
}

const TopButton = () => (
  <HideOn inverse height={100}>
    <button className="topButton" onClick={() => goTop()}>
      <span
        className="iconify arrow"
        key="topButton"
        data-icon="entypo:arrow-up"
      ></span>
    </button>
  </HideOn>
);
export default TopButton;
