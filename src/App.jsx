import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { useState } from "react";
import Skills from "./components/Skills/Skills.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <main>
        <Hero />
        <Projects handleLinkClick={handleLinkClick} />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
