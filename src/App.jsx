import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import WaveBackground from "./components/WaveBackground/WaveBackground";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname !== "/" && !window.location.pathname.startsWith("/#")) {
      window.location.pathname = "/";
    }
  }, [navigate]);

  return (
    <>
      <WaveBackground />

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
