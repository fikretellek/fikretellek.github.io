import NavBar from "../NavBar/NavBar";
import "./Header.scss";
import logo from "../../assets/fi-light.svg";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <NavLink id="logo-a" to="/">
          <div id="logo-new">
            <span id="l1" className="l-box"></span>
            <span id="l2" className="l-box"></span>
            <span id="l3" className="l-box"></span>
            <span id="l4" className="l-box"></span>
            <span id="l5" className="l-box"></span>
            <span id="l6" className="l-box"></span>
          </div>
        </NavLink>

        <NavBar />
      </header>
    </>
  );
};

export default Header;
