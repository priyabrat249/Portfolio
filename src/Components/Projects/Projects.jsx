import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import { IoLogoFirebase,IoLogoCss3 } from "react-icons/io5";

import travelbuddy from "../../assets/travelbuddy.png";
import carrierhunt from "../../assets/carrierhunt.png";
import bird from "../../assets/bird.png";
import cinewave from "../../assets/cinewave.png"
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={cinewave}
                    alt="cinewave"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Cinewave</h2>
                <p>
                Developed a responsive movie browsing website with lists,
search functionality, and movie details. Added a user‐friendly dark mode option.Utilized React Hooks like useState to manage multiple states,
useEffect for performing side effects, and custom hooks like useFetch to retrieve data from the TMDB Api.
                </p>
                <div>
                  <FaReact/>
                  <SiTailwindcss/>
                  
                </div>
                <div>
                  <a
                    href="https://cinewave-tmdb.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/priyabrat249"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={travelbuddy}
                    alt="Travelbuddy"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>TravelBuddy</h2>
                <p>
                  TravelBuddy is a perfect tool for travel exploration to you through different parts of the world.Implemented features like log in, custom search based on place,
Booking, Form handling.Exposed to http methods like POST, GET, PUT, DELETE using
express and mongoDB
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  
                </div>
                <div>
                  <a
                    href="https://travelbuddy-priyabrat.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/priyabrat249/TravelBuddy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={bird}
                    alt="Bird"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Bird Chat-App</h2>
                <p>
                Developed an interactive Chat web app ,featuring user‐friendly
login and registration ,realtime communication,image sharing
and search function.exposed to Firebase Authentication, database, storage.Done using ReactJS , Firebase.
                </p>
                <div>
                  <FaReact/>
                  <IoLogoFirebase/>
                </div>
                <div>
                  <a
                    href="https://bird-chat.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/priyabrat249/Bird-Chat-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={carrierhunt}
                    alt="CarrierHunt"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>CarrierHunt</h2>
                <p>
                A Frontend WebApp which  allows
user to search job on the basis of role,company and Location.In
the HomePage, It shows the available Jobs.
                </p>
                <div>
                  <FaReact/>
                  <SiTailwindcss/>
                  
                </div>
                <div>
                  <a
                    href="https://carrier-hunt.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/priyabrat249/Carrier-Hunt/tree/master/client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
