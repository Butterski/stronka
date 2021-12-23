import React from "react";
import "./project.css";
import Fade from 'react-reveal/Fade'

function statusToEmoji(status){
  switch(status){
    case 'finished':
      return '🏁';
    case 'in_progress':
      return '🚧';
    case 'abandoned':
      return '🏴‍☠️';
    default:
      return '';
  }
}

function Project(props) {
  return (
    <Fade bottom>
    <div className="project">
      <div className="status">{statusToEmoji(props.status)}</div>
      <h4>{props.name}</h4>
      <p>
        <b>Description:</b> {props.desc}
      </p>
      <div>
			<div className="repo"><a href={props.link}>git</a></div>
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
    </Fade>
  );
}

export default Project;
