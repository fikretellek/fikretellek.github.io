import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

import "./HomeCard.scss";
import CardsInfo from "./CardInfo.json";

const HomeCard = ({ id }) => {
  const [direction, setDirection] = useState({});
  const leaveTimeoutRef = useRef(null);

  const updateCardDimensions = () => {
    const cards = document.getElementsByClassName("card-hero");
    Array.from(cards).forEach((card) => {
      const height = card.clientHeight;
      card.style.width = `${height}px`;
    });
  };

  useEffect(() => {
    updateCardDimensions();

    window.addEventListener("resize", updateCardDimensions);

    return () => window.removeEventListener("resize", updateCardDimensions);
  }, []);

  const handleRotateToBackSide = (id) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setDirection((prev) => ({ ...prev, [id]: "back" }));
  };

  const handleRotateToFront = (id) => {
    leaveTimeoutRef.current = setTimeout(() => {
      setDirection((prev) => ({ ...prev, [id]: "front" }));
      leaveTimeoutRef.current = null;
    }, 1000);
  };

  return (
    <div
      id={`${id}-hero`}
      className={`card-hero ${direction[id]}`}
      onMouseEnter={() => handleRotateToBackSide(id)}
      onMouseLeave={() => handleRotateToFront(id)}
    >
      <div className="inner-card">
        <div className="card-front">
          <h2 className="card-title">{id}</h2>
        </div>
        <div className="card-backside">
          <p className="card-text">{CardsInfo[id].text}</p>

          {CardsInfo[id].button ? (
            <NavLink
              className="card-button"
              to={
                id === "cyf"
                  ? "https://codeyourfuture.io/"
                  : id === "products"
                  ? "projects"
                  : id === "collab"
                  ? "contact"
                  : "/" + id
              }
            >
              <p>{CardsInfo[id].button}</p>
            </NavLink>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
