import React, { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [rotating, setRotating] = useState({});

  const handleHoverIn = (id) => {
    setRotating((prev) => ({ ...prev, [id]: true }));
  };

  const handleHoverOut = (id) => {
    setTimeout(() => {
      setRotating((prev) => ({ ...prev, [id]: false }));
    }, 1000);
  };

  return (
    <>
      <div id="home-hero">
        {["about", "current", "why", "products", "collaboration", "cyf"].map((id) => (
          <div
            key={id}
            id={`${id}-hero`}
            className={`card-hero ${rotating[id] ? "rotate" : "rotate-back"}`}
            onPointerEnter={() => handleHoverIn(id)}
            onPointerLeave={() => handleHoverOut(id)}
          >
            <div className="inner-card">
              <h2>{id}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
