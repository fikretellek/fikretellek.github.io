import projects from "./ProjectsInfo.json";

const ProjectInfo = ({ id }) => {
  return (
    <>
      <div>
        <h2 className="project-info-title">{projects[id].title}</h2>
        <p className="project-info-summary">{projects[id].summary}</p>
      </div>
      <div>
        <h3 className="project-info-key-title">{projects[id].keyPointsTitle}</h3>
        <ul className="project">
          {projects[id].keyPoints.map((keyPoint) => (
            <>
              <li>
                <p>{keyPoint}</p>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div>
        <a href={projects[id].githubLink}>
          <p>Github Repo</p>
          <img src="src/assets/github-logo.png" style={{ width: "10px" }} alt="" />
        </a>
        <a href={projects[id].websiteLink}>
          <p>Website Link</p>
          <img src="src/assets/github-logo.png" style={{ width: "10px" }} alt="" />
        </a>
      </div>
    </>
  );
};

export default ProjectInfo;
