import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/priyabrat.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Priyabrat Swain </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Dhenkanal, Odisha (India)
                </span>
                . I am currently pursuing B.Tech in Computer Science and Engineering
                at{" "}
                <span className="different">
                  NIT Rourkela.
                </span>
               
                {" "}During my academic journey, I consistently achieved academic excellence with a current CGPA of{" "}
                <span className="different">8.65</span>(till 5th Semester), demonstrating my ability to adapt to complex challenges and excel in a 
rigorous environment. I have acquired a strong command in various programming languages and 
technologies, including <span className="different">C++, Python, MySQL, HTML, CSS, JavaScript, Node.js, Express.js, React.js, 
REST API development, MongoDB and Git</span>. My academic coursework, coupled with several 
personal projects has equipped me with the technical skills required to excel in the fast-paced world 
of modern technology.
              </h4>
              <h4 className="center">Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Leadership{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Fitness Freak{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                expeditions and adventures{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
