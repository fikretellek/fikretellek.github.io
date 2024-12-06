import React, { useEffect, useState } from "react";
import "./ProjectImage.scss";

import app1 from "../../assets/app-1.png";
import app2 from "../../assets/app-2.png";
import app3 from "../../assets/app-3.png";
import aut1 from "../../assets/aut-1.png";
import aut2 from "../../assets/aut-2.png";
import aut3 from "../../assets/aut-3.png";
import read1 from "../../assets/read-1.png";
import read2 from "../../assets/read-2.png";
import read3 from "../../assets/read-3.png";
import mess1 from "../../assets/mess-1.png";
import mess2 from "../../assets/mess-2.png";
import mess3 from "../../assets/mess-3.png";

const ProjectImage = ({ activeId, handleActiveProject }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [imageKey, setImageKey] = useState(Date.now());
  const [shouldRenderImage, setShouldRenderImage] = useState(true);

  const apps = ["app", "aut", "read", "mess", "map"];
  const images = {
    app: [app1, app2, app3],
    aut: [aut1, aut2, aut3],
    read: [read1, read2, read3],
    mess: [mess1, mess2, mess3],
    map: [app1, app2, app3],
  };

  useEffect(() => {
    setShouldRenderImage(false);

    const timer = setTimeout(() => {
      setActiveImage(0);
      setImageKey(Date.now());
      setShouldRenderImage(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [activeId]);

  function handleActiveImage(app, direction) {
    setActiveImage((prevImage) => {
      const appImages = images[app];
      const newImage =
        direction === "next"
          ? (prevImage + 1) % appImages.length
          : prevImage === 0
          ? appImages.length - 1
          : prevImage - 1;

      setImageKey(Date.now());
      return newImage;
    });
  }

  return (
    <ul id="projects-image-list">
      {apps.map((app, i) => (
        <li
          key={i}
          id={`project-${app}`}
          onClick={(e) => handleActiveProject(e)}
          className={`image-area-project${activeId === `project-${app}` ? " active" : ""}`}
        >
          <h3 className={activeId === `project-${app}` ? "active" : ""}>{app}</h3>

          {shouldRenderImage && (
            <>
              {activeImage > 0 && (
                <button
                  onClick={() => handleActiveImage(app, "previous")}
                  id="previous-button"
                  className="navigate-button"
                >
                  <p>{"<"}</p>
                </button>
              )}
              <img
                key={`${app}-${imageKey}`}
                src={images[app][activeImage]}
                id={`image-${app}`}
                className={`p-image${activeId === `project-${app}` ? " active" : ""}`}
                alt={`${app} project screenshot`}
              />

              {activeImage < images[app].length - 1 && (
                <button
                  onClick={() => handleActiveImage(app, "next")}
                  id="next-button"
                  className="navigate-button"
                >
                  <p>{">"}</p>
                </button>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProjectImage;
