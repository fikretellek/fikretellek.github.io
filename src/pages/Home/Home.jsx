import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [rotating, setRotating] = useState({});

  const updateCardDimensions = () => {
    const cards = document.getElementsByClassName("card-hero");
    Array.from(cards).forEach((card) => {
      const height = card.clientHeight; // Get the dynamic height
      card.style.width = `${height}px`; // Set the width to match the height
    });
  };

  useEffect(() => {
    // Update dimensions on initial render
    updateCardDimensions();

    // Update dimensions whenever the window resizes
    window.addEventListener("resize", updateCardDimensions);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateCardDimensions);
  }, []);

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
