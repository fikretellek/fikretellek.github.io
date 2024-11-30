import { NavLink } from "react-router";
import "./NavBar.scss";
import { useEffect } from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link-to-another-page">
              <p>home</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="link-to-another-page">
              <p>about</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className="link-to-another-page">
              <p>projects</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="link-to-another-page">
              <p>contact</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
