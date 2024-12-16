import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Settings from "./components/Settings/Settings.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Settings />
    <App />
  </StrictMode>
);
