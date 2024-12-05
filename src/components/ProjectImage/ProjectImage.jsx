import "./ProjectImage.scss";
import meetingImg from "../../assets/meeting-1.png";
import { useEffect, useState } from "react";

const ProjectImage = ({ activeId, handleActiveProject }) => {
  const [renderImage, setRenderImage] = useState(true);
  const apps = ["app", "aut", "read", "mess", "map"];

  useEffect(() => {
    setRenderImage(false);
    setTimeout(() => {
      setRenderImage(true);
    }, 400);
  }, [handleActiveProject]);

  return (
    <ul id="projects-image-list">
      {apps.map((app, i) => {
        return (
          <li
            key={i}
            id={"project-" + app}
            onClick={(e) => handleActiveProject(e)}
            className={"image-area-project" + (activeId === "project-" + app ? " active" : "")}
          >
            <h3 className={activeId === "project-" + app ? " active" : ""}>{app}</h3>

            {renderImage && (
              <img
                src={meetingImg}
                id={"image-" + app}
                className={"p-image" + (activeId === "project-" + app ? " active" : "")}
                alt="new meeting form on appointment project"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectImage;
