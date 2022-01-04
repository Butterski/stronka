import "./App.css";
import Project from "./components/Project/Project";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <img src="logo.svg" alt="logo" className="logo"></img>
          <div className="firstview">
            <Fade left>
              <div className="aboutme">
                <h1>Who am I?</h1>
                <p>
                  I am a person with great passion to IT, especially coding and
                  administrating systems. I self-taught myself most of the
                  things I know about the things I do.
                </p>
              </div>
            </Fade>
          </div>
          <div className="spenproj">
            <div className="specs">
              <h1>My skills</h1>
              <h3>Languages:</h3>
              <div>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                  alt="javascript"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                />
                <img
                  src="https://reactnative.dev/img/header_logo.svg"
                  alt="reactnative"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                  alt="nodejs"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
                  alt="mysql"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                />
              </div>
              <h3 align="left">Other Softwares or Tools:</h3>
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
              />
              <img
                src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
                alt="vscode"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                alt="linux"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
                alt="Raspberry Pi"
              />
              <img
                src="https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg"
                alt="WordPress"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                alt="photoshop"
              />
              <img
                src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
                alt="blender"
              />
              <h3 align="left">Things i want to learn in 2022:</h3>
              <img
                src="https://www.vectorlogo.zone/logos/vim/vim-icon.svg"
                alt="vim"
              />
              <img
                src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/redux.svg"
                alt="redux"
              />
              <img
                src="https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg"
                alt="ruby"
              />
              <img
                src="https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg"
                alt="nginx"
              />
              <img
                src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
                alt="typescript"
              />
              <a href="https://github.com/mkrl/misbrands">
              <img
                src="https://raw.githubusercontent.com/mkrl/misbrands/456ea8aa2c7873123dce3d746528bb9a3b6dd139/javascript.svg"
                alt="java?"
              />
              </a>
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwindcss"
              />
              <img
                src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
                alt="bootstrap"
              />
              <img
                src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
                alt="azure"
              />
            </div>
            <div className="projectsCont">
              <h1>My projects</h1>
              <p>Legend: 🏁-finished, 🚧-in progress, 🏴‍☠️-abandoned</p>

              <div className="projects">
                <Project
                  status="in_progress"
                  name="Stronka"
                  desc="that's the page you're seeing"
                  link="https://github.com/Butterski/stronka"
                  technologies={["react", "html-5", "css-3"]}
                />
                <Project
                  status="finished"
                  name="ImageToPixels"
                  desc="program i made as a joke to pixelise images and output every single pixel as div in html"
                  link="https://github.com/Butterski/ImageToHtmlPixels"
                  technologies={["python", "html-5", "css-3"]}
                />
                <Project
                  status="finished"
                  name="Card Validator"
                  desc="program that uses Luhn algorithm to verify your card number, i made it to train my c++ skills"
                  link="https://github.com/Butterski/cardvalidator"
                  technologies={["c-plusplus"]}
                />
                <Project
                  status="abandoned"
                  name="Artifact Trader Bot"
                  desc="discord bot i made with my friends to draw random items from game and give them random price"
                  link="https://github.com/Butterski/artifact-trader-bot"
                  technologies={["python"]}
                />
                <Project
                  status="abandoned"
                  name="Pong Master"
                  desc="python bot made to play pong game, very simple and only working on my monitor with very specific settings"
                  link="https://github.com/Butterski/pong-master"
                  technologies={["python"]}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
