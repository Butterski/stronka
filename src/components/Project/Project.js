import React from "react";
import "./project.css";

function Project(props) {
  return (
    <div className="project">
      <div className="status">{props.status}</div>
      <h4>{props.name}</h4>
      <p>
        <b>Description:</b> {props.desc}
      </p>
      <div>
			<div className="repo"><a href={"https://github.com/Butterski/"+props.link}>git</a></div>
        <div className="icons">
          {props.technologies.map((techno) => {
            return (
              <span
                className="iconify techIcon"
                key={techno}
                data-icon={"logos:" + techno}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
