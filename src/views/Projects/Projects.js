import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="projects-container">
        <div className="project-container">
          <div className="projects-container-left">
            <h1>Repertuar app</h1>
            <h2><a href="https://rep.buterplayground.fun/">DEMO</a> <a href="https://github.com/Butterski/film-repertuar-app">REPO</a></h2>
            <h3>What I learned?</h3>
            <ul>
              <li>Creating Node.js backend</li>
              <li>Deploying Node.js backend to production using nginx</li>
              <li>Trained working with API</li>
              <li>Trained working with SQL</li>
              <li>Basics of authenticating</li>
            </ul>
          </div>
          <div className="projects-container-right">
            <img src="https://cdn.discordapp.com/attachments/1039292798261792888/1066130196706627624/image.png" alt="repertuarappfotos" />
          </div>
        </div>
        <hr />
        <div className="project-container">
          <div className="projects-container-left">
            <h1>Colors Game</h1>
            <h2> <a href="https://github.com/Butterski/color-game">REPO</a></h2>
            <h3>What I learned?</h3>
            <ul>
              <li>Creating React with TypeScript app</li>
              <li>TypeScript types</li>
              <li>Working with diffrent color types</li>
            </ul>
          </div>
          <div className="projects-container-right">
            <img src="https://cdn.discordapp.com/attachments/963464951077421136/1038541194856251492/image.png" alt="colorgamefoto" />
          </div>
        </div>
        <hr />
        <div className="project-container">
          <div className="projects-container-left">
            <h1>🍕Pizza Clicker</h1>
            <h2> <a href="https://github.com/Butterski/pizza-clicker">REPO</a></h2>
            <h3>What I learned?</h3>
            <ul>
              <li>Trained using Redux</li>
              <li>Trained some other css units and animations</li>
              <li>Using LocalStorage</li>
            </ul>
          </div>
          <div className="projects-container-right">
            <img src="https://cdn.discordapp.com/attachments/1039292798261792888/1045388356911120575/image.png" alt="pizzaclickerfoto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
