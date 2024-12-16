import { useState } from "react";
import "./Projects.scss";
import EachProject from "./EachProject";

const Projects = (props) => {
  const [activeProjectCard, setActiveProjectCard] = useState("");

  const handleActiveCard = (card) => {
    const parentElm = document.getElementById("projects-grid");
    if (card === 1) {
      parentElm.style.gridTemplateColumns = "1.5fr 0.5fr";
      parentElm.style.gridTemplateRows = "1.5fr 0.5fr";
    } else if (card === 2) {
      parentElm.style.gridTemplateColumns = "0.5fr 1.5fr";
      parentElm.style.gridTemplateRows = "1.5fr 0.5fr";
    } else if (card === 3) {
      parentElm.style.gridTemplateColumns = "1.5fr 0.5fr";
      parentElm.style.gridTemplateRows = "0.5fr 1.5fr";
    } else if (card === 4) {
      parentElm.style.gridTemplateColumns = "0.5fr 1.5fr";
      parentElm.style.gridTemplateRows = "0.5fr 1.5fr";
    }
  };

  //   const resetActiveCard = () => {
  //     const parentElm = document.getElementById("projects-grid");

  //     parentElm.style.gridTemplateColumns = "1fr 1fr";
  //     parentElm.style.gridTemplateRows = "1fr 1fr";
  //   };

  return (
    <>
      <section id="projects-container">
        <div id="projects" className="top-margin-for-header"></div>
        <div id="projects-hero">
          <h1>
            <a href="#projects" onClick={() => props.handleLinkClick("#projects")}>
              Projects
            </a>
          </h1>
          <div id="projects-grid">
            {/* onMouseLeave={resetActiveCard}*/}
            <a
              href="#project-1"
              onPointerOver={() => handleActiveCard(1)}
              className="project-grid-elm"
            ></a>
            <a
              href="#project-2"
              onPointerOver={() => handleActiveCard(2)}
              className="project-grid-elm"
            ></a>
            <a
              href="#project-3"
              onPointerOver={() => handleActiveCard(3)}
              className="project-grid-elm"
            ></a>
            <a
              href="#project-4"
              onPointerOver={() => handleActiveCard(4)}
              className="project-grid-elm"
            ></a>
          </div>
        </div>

        <div id="projects-info">
          {[1, 2, 3, 4].map((elm) => (
            <EachProject id={elm} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
