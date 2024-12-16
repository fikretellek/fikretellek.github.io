const EachProject = ({ id }) => {
  return (
    <>
      <div className={"project-container " + (id % 2 == 1 ? "reversed-flex-direction" : "")}>
        <div id={"project-" + id} className="top-margin-for-header"></div>
        <div className="project-image-container"></div>
        <div className="project-info-container">
          <h1>asdcasdcasc</h1>
          <h2>sacasdcasd</h2>
          <h3>sacascasdc</h3>
          <p>asdcascas</p>
          <button>casdc</button>
          <a href="asdcasc">ascasdcasdc</a>
        </div>
      </div>
    </>
  );
};

export default EachProject;
