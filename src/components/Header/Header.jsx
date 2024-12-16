import { useState } from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <>
      <header>
        <a id="logo-link" href="#home" onClick={() => props.handleLinkClick("#home")}>
          <div id="logo">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className={props.activeLink === "#home" ? "activeNav" : ""}>Portfolio</p>
        </a>

        <nav>
          <a href="#projects" onClick={() => props.handleLinkClick("#projects")}>
            <p className={props.activeLink === "#projects" ? "activeNav" : ""}>Projects</p>
          </a>
          <a href="#skills" onClick={() => props.handleLinkClick("#skills")}>
            <p className={props.activeLink === "#skills" ? "activeNav" : ""}>Skills</p>
          </a>
          <a href="#about" onClick={() => props.handleLinkClick("#about")}>
            <p className={props.activeLink === "#about" ? "activeNav" : ""}>About</p>
          </a>
          <a href="#contact" onClick={() => props.handleLinkClick("#contact")}>
            <p className={props.activeLink === "#contact" ? "activeNav" : ""}>Contact</p>
          </a>
          <button>RESUME</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
