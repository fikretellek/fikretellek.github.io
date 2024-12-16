import "./Footer.scss";
import githubLogo from "../../assets/outline.png";
import linkLogo from "../../assets/external-link.png";
import linkedInLogo from "../../assets/linkedIn.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer-logo-container">
          <a target="_blank" href="https://github.com/fikretellek">
            <img className="footer-logo" src={githubLogo} alt="github logo" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/fikretellek/">
            <img className="footer-logo" src={linkedInLogo} alt="linked in logo" />
          </a>
        </div>
        <p>Created by Fikret Ellek</p>
      </footer>
    </>
  );
};

export default Footer;
