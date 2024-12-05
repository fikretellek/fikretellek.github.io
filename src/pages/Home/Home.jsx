import React, { useEffect, useState } from "react";
import "./Home.scss";
import HomeCard from "../../components/HomeCard/HomeCard";

const Home = () => {
  return (
    <>
      <div id="home-hero">
        {["about", "current", "passion", "products", "collab", "cyf"].map((id) => (
          <HomeCard key={id} id={id} />
        ))}
      </div>
    </>
  );
};

export default Home;
