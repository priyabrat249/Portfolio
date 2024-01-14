import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import travelbuddy from "../../assets/travelbuddy.png";
import carrierhunt from "../../assets/carrierhunt.png"
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
                    src={travelbuddy}
                    alt="Travelbuddy"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>TravelBuddy</h2>
                <p>
                  TravelBuddy is a perfect tool for travel exploration to you through different parts of the world.It also has booking and conditional search functionality.
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
