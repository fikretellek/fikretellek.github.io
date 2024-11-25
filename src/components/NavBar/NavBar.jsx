import { NavLink } from "react-router";
import "./NavBar.scss";
import { useEffect } from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>

          <li>
            <NavLink to="/about">about</NavLink>
          </li>

          <li>
            <NavLink to="/products">products</NavLink>
          </li>

          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
