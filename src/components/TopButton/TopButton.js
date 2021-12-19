import React from "react";
import "./topButton.css";

function handleclick(){
  console.log("yo")
}

const TopButton = () => (
  <div className="topButton">
  <a href="#" onClick={handleclick()}>
    <span
      className="iconify arrow"
      key="topButton"
      data-icon="bi:arrow-up-square"
      onClick={console.log('yo')}
    ></span>
    </a>
  </div>
);
export default TopButton;
