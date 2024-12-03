import { useState } from "react";
import "./Projects.scss";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";

const Products = () => {
  const [activeId, setActiveId] = useState("project-app");
  function handleActiveProject(e) {
    const parentLi = e.target.closest("li"); // Ensure the target is the parent <li>

    document.querySelectorAll(".image-area-project").forEach((li) => {
      li.classList.remove("active");
    });

    setActiveId(parentLi.id);

    parentLi.classList.add("active");
  }

  return (
    <>
      <div id="products-hero" className="active-page">
        <div id="active-card-color"></div>
        <div id="active-card" className="sub-page-card">
          <div id="inner-card" className="active-inner">
            <div id="project-app-info" className="project-info">
              <ProjectInfo id={activeId} classList="active-project-info" />
            </div>
          </div>
        </div>
        <div id="image-area" className="sub-page-card">
          <div id="inner-card" className="active-inner">
            <div id="image-carousel">
              <ul>
                <li
                  id="project-app"
                  onClick={(e) => handleActiveProject(e)}
                  className="image-area-project active"
                >
                  <h3>appointment</h3>
                  <img
                    src="src/assets/meeting-1.png"
                    id="a1"
                    className="p-image active"
                    alt="create meeting form on appointment project"
                  />
                  {/* <img
                    src="src/assets/meeting-2.png"
                    id="a2"
                    className="p-image"
                    alt="meeting search result on appointment project"
                  /> */}
                </li>
                <li
                  id="project-aut"
                  onClick={(e) => handleActiveProject(e)}
                  className="image-area-project"
                >
                  <h3>authenticator</h3>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </li>
                <li
                  id="project-read"
                  onClick={(e) => handleActiveProject(e)}
                  className="image-area-project"
                >
                  <h3>read-me hire-me</h3>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </li>
                <li
                  id="project-mess"
                  onClick={(e) => handleActiveProject(e)}
                  className="image-area-project"
                >
                  <h3>messages</h3>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </li>
                <li
                  id="project-map"
                  onClick={(e) => handleActiveProject(e)}
                  className="image-area-project"
                >
                  <h3>choropleth mapping</h3>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
