import { useState } from "react";
import "./Projects.scss";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import ProjectImage from "../../components/ProjectImage/ProjectImage";

const Products = () => {
  const [activeId, setActiveId] = useState("project-app");

  function handleActiveProject(e) {
    const parentLi = e.target.closest("li");

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
              <ProjectInfo id={activeId} />
            </div>
          </div>
        </div>
        <div id="image-area" className="sub-page-card">
          <div id="inner-card" className="active-inner">
            <div id="image-carousel">
              <ProjectImage activeId={activeId} handleActiveProject={handleActiveProject} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
