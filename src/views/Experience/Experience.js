import React from "react";
import "./experience.css";
import skillweb from "../../assets/skillweb.png";

const Experience = () => {
  return (
    <div>
      <div className="experience-container">
        <div className="experience-container-left">
          <h1>Wordpress Developer</h1>
          <h3>{"03/2021 -> 09/2021"}</h3>
          <h2>What I learned?</h2>
          <ul>
            <li>developing websites</li>
            <li>projecting websites</li>
            <li>cooperating with other developers</li>
            <li>deploying websites</li>
            <li>working with kanban board</li>
          </ul>
        </div>
        <div className="experience-container-right">
          <img src={skillweb} alt="fotos" />
        </div>
      </div>
    </div>
  );
};
export default Experience;
