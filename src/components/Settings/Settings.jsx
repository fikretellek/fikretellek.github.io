import "./Settings.scss";
import colorMode from "../../assets/mode.png";
import { useEffect, useState } from "react";
const Settings = () => {
  const [theme, setTheme] = useState(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("color-scheme", "dark");
      root.style.setProperty("--bg-color", "black");
      root.style.setProperty("--color", "white");
      root.style.setProperty("--color-hover", "rgb(25,25,25)");
      root.style.setProperty("--bg-color-accent", "white");
      root.style.setProperty("--color-accent", "black");
      root.style.setProperty("--color-logo", "brightness(0) invert(1)");
    } else {
      root.style.setProperty("color-scheme", "light");
      root.style.setProperty("--bg-color", "white");
      root.style.setProperty("--color", "black");
      root.style.setProperty("--color-hover", "rgb(245,245,245)");
      root.style.setProperty("--bg-color-accent", "black");
      root.style.setProperty("--color-accent", "white");
      root.style.setProperty("--color-logo", "brightness(0)");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    e.preventDefault();
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div id="settings-bar">
        <button id="settings-button" onClick={toggleTheme}>
          <img src={colorMode} alt="" />
        </button>
        <div id="mode-text-container">
          <p>change</p>
          <div id="mode-line"></div>
          <p>theme</p>
        </div>
      </div>
    </>
  );
};

export default Settings;
