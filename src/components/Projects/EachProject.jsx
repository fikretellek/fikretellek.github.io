import appointment from "../../assets/appoint.png";
import readme from "../../assets/read.png";
import aut from "../../assets/aut.png";
import mess from "../../assets/message.png";
import map from "../../assets/map.png";
import b1 from "../../assets/b1.jpg";
const EachProject = ({ id }) => {
  const photos = [appointment, readme, aut, mess, map];
  const backgrounds = [b1];
  return (
    <>
      <div className={"project-container " + (id % 2 == 1 ? "reversed-flex-direction" : "")}>
        <div id={"project-" + id} className="top-margin-for-header"></div>
        <div style={{ backgroundImage: backgrounds[id - 1] }} className="project-image-container">
          <div className="background-img-elm" id={"b" + id}>
            .
          </div>
          <img src={photos[id - 1]} alt="" />
        </div>
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
