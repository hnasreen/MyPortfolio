import React from "react";
import "./App.css";
import "./mediaqueries.css";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiCountingworkspro } from "react-icons/si";
import { BsShieldFillPlus } from "react-icons/bs";

const App = () => {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const openResume = () => {
    window.open(
      "https://res.cloudinary.com/dcq6ethny/image/upload/v1728309539/portfolio/kdo1jjrznrsieamgaj6n.pdf"
    );
  };

  const navigateToContact = () => {
    location.href = "./#contact";
  };

  const navigateToExperience = () => {
    location.href = "./#experience";
  };

  const navigateToSkills = () => {
    location.href = "./#skills";
  };

  const navigateToProjects = () => {
    location.href = "./#projects";
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Nasreen Hayath Basha</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
           
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Nasreen Hayath Basha</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Nasreen</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btns-container">
            <button className="btn btn-color-2" onClick={openResume}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={navigateToContact}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <FaLinkedin
              style={{ color: "black" }}
              className="icon" // You can add your custom styles here
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nasreen-hayath-basha-2350b8251/",
                  "_blank"
                )
              }
            />
            <FaGithub
              style={{ color: "black" }}
              className="icon" // You can add your custom styles here
              onClick={() =>
                window.open("https://github.com/hnasreen", "_blank")
              }
            />
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="https://res.cloudinary.com/dcq6ethny/image/upload/v1727697406/portfolio/uoojtw7axk6lpurpbars.jpg"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <MdOutlineWorkspacePremium
                  className="icon"
                  style={{ color: "black" }}
                />
                <h3 style={{ color: "rgb(59, 57, 57)" }}>Experience</h3>
                <p>RPA Developer | 4 Months</p>
                <p>Data Administrator | 1 Year</p>
              </div>
              <div className="details-container">
                <FaGraduationCap className="icon" style={{ color: "black" }} />
                <h3 style={{ color: "rgb(59, 57, 57)" }}>Education</h3>
                <p>BCA | MCA</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                I am a motivated professional specializing in automation and
                full-stack web development. With a proactive approach and quick
                learning ability, I excel in adapting to new technologies and
                solving technical challenges. My experience includes creating
                efficient automation solutions and developing dynamic web
                applications, backed by a strong foundation in data management.
                <br />
                <br />I have a proven track record in designing effective
                workflows, conducting thorough testing, and improving data
                accuracy. My focus is on leveraging technology to streamline
                processes and drive operational efficiency, delivering practical
                solutions for continuous improvement.
              </p>
            </div>
          </div>
        </div>
        <MdKeyboardDoubleArrowDown
          className="icon arrow"
          onClick={navigateToProjects}
        />
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="project-scroll-container">
            {/* Project Card 1 */}
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="https://res.cloudinary.com/dcq6ethny/image/upload/v1727697406/portfolio/jtvr7em6nqhpdk8phlxg.png"
                  alt="Project 1"
                  className="project-img"
                />
                <div className="project-info">
                  <h2 className="experience-sub-title project-title" style={{color:'#353535'}}>
                    Job Seeking App
                  </h2>
                  <h5
                    style={{
                      color: "#555", // Neutral text color for the technology names
                      textAlign: "center",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "500",
                      padding: "12px 24px",
                      backgroundColor: "#F9F9F9", // Soft lavender background
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Gentle shadow for a modern look
                      height:'40px',
                      // textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    <span style={{ color: "#555555", fontWeight: "bold"}}>
                      Technologies used
                    </span>{" "}
                    <br />
                    React.js, Node.js, Express.js, MongoDB
                  </h5>

                  <div className="btn-container">
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/hnasreen/JobSeekingApp-Frontend",
                          "_blank"
                        )
                      }
                    >
                      Frontend Code
                    </button>
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/hnasreen/JobSeekerApp-Backend",
                          "_blank"
                        )
                      }
                    >
                      Backend Code
                    </button>
                    <button
                      style={{ backgroundColor: "#353535", color: "white" }}
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://jobseekingapp-frontend.netlify.app",
                          "_blank"
                        )
                      }
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="https://res.cloudinary.com/dcq6ethny/image/upload/v1727697406/portfolio/kurcdxielrepea8qeibk.png"
                  alt="Project 2"
                  className="project-img"
                />
                <div className="project-info">
                  <h2 className="experience-sub-title project-title" style={{ color:'#353535'}}>
                    PickYourStay
                  </h2>
                  <h5
                    style={{
                      color: "#555", // Neutral text color for the technology names
                      textAlign: "center",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "500",
                      padding: "12px 24px",
                      backgroundColor: "#F9F9F9", // Soft lavender background
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Gentle shadow for a modern look
                      height:'40px',
                      // textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    <span style={{ color: "#555555", fontWeight: "bold"}}>
                      Technologies used
                    </span>{" "}
                    <br />
                    React.js, Node.js, Express.js, MongoDB, TailwindCSS
                  </h5>
                  <div className="btn-container">
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/hnasreen/Booking-App---MERN-Stack---Frontend",
                          "_blank"
                        )
                      }
                    >
                      Frontend Code
                    </button>
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/hnasreen/Booking-MERN-Stack-App---Backend",
                          "_blank"
                        )
                      }
                    >
                      Backend Code
                    </button>
                    <button
                      style={{ backgroundColor: "#353535", color: "white" }}
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://bookingmernapp.netlify.app/",
                          "_blank"
                        )
                      }
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}

            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="https://res.cloudinary.com/dcq6ethny/image/upload/v1727697406/portfolio/oauyb8xmpkcjkt4f8efp.png"
                  alt="Project 3"
                  className="project-img"
                />
                <div className="project-info">
                  <h2 className="experience-sub-title project-title" style={{ color:'#353535'}}>
                    Ecommerce App
                  </h2>
                  <h5
                    style={{
                      color: "#555", // Neutral text color for the technology names
                      textAlign: "center",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "500",
                      padding: "12px 24px",
                      backgroundColor: "#F9F9F9", // Soft lavender background
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Gentle shadow for a modern look
                      height:'40px',
                      // textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    <span style={{ color: "#555555", fontWeight: "bold" }}>
                      Technologies used
                    </span>{" "}
                    <br />
                    React.js, Node.js, Express.js, MongoDB, Bootstrap
                  </h5>
                  <div className="btn-container">
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/hnasreen/Ecommerce-MERN-Application---Client",
                          "_blank"
                        )
                      }
                    >
                      Frontend Code
                    </button>
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/hnasreen/Ecommerce-MERN-Application---Server",
                          "_blank"
                        )
                      }
                    >
                      Backend Code
                    </button>
                    <button
                      style={{ backgroundColor: "#353535", color: "white" }}
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://ecommerceapp-mernstack.netlify.app/",
                          "_blank"
                        )
                      }
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="https://res.cloudinary.com/dcq6ethny/image/upload/v1727697405/portfolio/iejzpaf2aflvxegtw3sb.png"
                  alt="Project 4"
                  className="project-img"
                />
                <div className="project-info">
                  <h2 className="experience-sub-title project-title" style={{ color:'#353535'}}>
                    Gmail Clone
                  </h2>
                  <h5
                    style={{
                      color: "#555", // Neutral text color for the technology names
                      textAlign: "center",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "500",
                      padding: "12px 24px",
                      backgroundColor:"#F9F9F9", // Soft lavender background
                      borderRadius: "10px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
                      height:'40px',
                      // textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    <span style={{ color: "#555555", fontWeight: "bold" }}>
                      Technologies used
                    </span>{" "}
                    <br />
                    React.js, Node.js, Express.js, MongoDB, Bootstrap
                  </h5>
                  <div className="btn-container">
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/hnasreen/Capstone-Project-Gmail-Clone-Front-End",
                          "_blank"
                        )
                      }
                    >
                      Frontend Code
                    </button>
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/hnasreen/Capstone-Project---Gmail-Clone---Backend",
                          "_blank"
                        )
                      }
                    >
                      Backend Code
                    </button>
                    <button
                      style={{ backgroundColor: "#353535", color: "white" }}
                      className="btn btn-color-2 project-btn"
                      onClick={() =>
                        window.open(
                          "https://capstoneprojectgmailclonefrontend.netlify.app/",
                          "_blank"
                        )
                      }
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MdKeyboardDoubleArrowDown
          className="icon arrow"
          onClick={navigateToExperience}
        />
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>

        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container" style={{ textAlign: "center" }}>
              <h2 className="experience-sub-title">RPA Developer</h2>
              <p style={{ fontWeight: "normal", marginBottom: "16px" }}>
                Developed and tested automation solutions using Automation
                Anywhere, ensuring seamless functionality and efficiency.
                Collaborated with cross-functional teams to implement RPA
                solutions while swiftly resolving challenges and optimizing
                processes.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiCountingworkspro style={{ color: "rgb(59, 57, 57)" }} />
                <h3 style={{ marginLeft: "8px", color: "rgb(59, 57, 57)" }}>
                  Automation Anywhere A360
                </h3>
              </div>
            </div>

            <div className="details-container" style={{ textAlign: "center" }}>
              <h2 className="experience-sub-title">Data Administrator</h2>
              <p style={{ fontWeight: "normal", marginBottom: "16px" }}>
                Conducted data analysis and validation to ensure accuracy and
                quality, while maintaining client datasets and meeting
                operational requirements. Collaborated with underwriting teams
                and IT support to resolve data-related issues, enhancing overall
                data integrity and compliance.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SiCountingworkspro style={{ color: "rgb(59, 57, 57)" }} />
                <h3 style={{ marginLeft: "8px", color: "rgb(59, 57, 57)" }}>
                  Microsoft Office
                </h3>
              </div>
            </div>
          </div>
        </div>
        <MdKeyboardDoubleArrowDown
          className="icon arrow"
          onClick={navigateToSkills}
        />
      </section>

      <section id="skills">
        <p className="section__text__p1">Discover My</p>
        <h1 className="title">Skills</h1>
        <div className="skills-details-container">
          <div className="skills-inner-container">
            {" "}
            {/* Container for all skills */}
            {[
              "ReactJS",
              "MongoDB",
              "NodeJS",
              "ExpressJS",
              "Bootstrap",
              "Tailwind CSS",
              "Javascript",
              "HTML5, CSS",
              "Automation Anywhere A360",
              "MySQL",
              "Microsoft Office",
              "Postman",
              "GitHub",
              "Web Application Development",
              "Frontend & Backend Integration",
              "RESTful API Management",
              "Testing & Debugging",
              "Database Management",
            ].map((skill, index) => (
              <article key={skill} className="skill-item">
                <BsShieldFillPlus
                  className="icon"
                  style={{ color: "#3B4D61" }}
                />
                <h3>{skill}</h3>
              </article>
            ))}
          </div>
        </div>
        <MdKeyboardDoubleArrowDown
          className="icon arrow"
          onClick={navigateToContact}
        />
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <MdEmail className="icon contact-icon" style={{ color: "black" }} />
            <p>
              <a href="mailto:hnasreen1993@gmail.com">hasreen1993@gmail.com</a>
            </p>
          </div>

          <div className="contact-info-container">
            <FaLinkedin
              style={{ color: "black" }}
              className="icon contact-icon" // You can add your custom styles here
            />
            <p>
              <a
                href="https://www.linkedin.com/in/nasreen-hayath-basha-2350b8251/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <BiSolidPhoneCall style={{ color: "black", fontSize: "22px" }} />
            <p style={{ color: "black" }}>(+91)-9894641781</p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright © 2024 Nasreen Hayath Basha. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
