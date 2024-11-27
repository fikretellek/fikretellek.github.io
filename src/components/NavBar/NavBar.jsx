import { NavLink } from "react-router";
import "./NavBar.scss";
import { useEffect } from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <p>home</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              <p>about</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/products">
              <p>projects</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              <p>contact</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
