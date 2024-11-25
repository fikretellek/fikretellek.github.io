import "./Footer.scss";
import githubLogo from "../../assets/github-logo.png";
import codewarsLogo from "../../assets/codewars-logo.png";
import linkedinLogo from "../../assets/linkedin-logo.png";
import instagramLogo from "../../assets/instagram-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <p>fikret ellek portfolio</p>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/fikretellek">
              <img src={githubLogo} alt="github link to github.com/fikretellek" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://codewars.com/users/fikretellek">
              <img src={codewarsLogo} alt="github link to github.com/fikretellek" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/fikretellek">
              <img src={linkedinLogo} alt="github link to github.com/fikretellek" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/fikretellek">
              <img src={instagramLogo} alt="github link to github.com/fikretellek" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
