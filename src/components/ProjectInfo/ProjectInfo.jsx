import projects from "./ProjectsInfo.json";
import gitHubIcon from "../../assets/github-logo.png";
import websiteIcon from "../../assets/web.png";

import "./ProjectInfo.scss";

const ProjectInfo = ({ id }) => {
  return (
    <div id="project-info-container" className="active-project-info">
      <div>
        <h2 className="project-info-title">{projects[id].title}</h2>
        <div>
          <p className="project-info-summary">{projects[id].summary}</p>
        </div>
      </div>

      {projects[id].keyPointsTitle ? (
        <div>
          <h3 className="project-info-key-title">{projects[id].keyPointsTitle}</h3>
          <ul className="project">
            {projects[id].keyPoints.map((keyPoint, i) => (
              <li key={i}>
                <p>{keyPoint}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="project-links-container">
        {projects[id].githubLink != false ? (
          <a target="_blank" href={projects[id].githubLink}>
            <p>Github</p>
            <img src={gitHubIcon} alt="" />
          </a>
        ) : null}
        <a target="_blank" href={projects[id].websiteLink}>
          <p>{projects[id].githubLink === false ? "Academic Research" : "Website"}</p>
          <img src={websiteIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
