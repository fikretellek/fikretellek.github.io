import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer-logo-container">
          <a target="_blank" href="https://github.com/fikretellek">
            <img
              className="footer-logo"
              src="https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/outline.png"
              alt="github logo"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/fikretellek/">
            <img
              className="footer-logo"
              src="https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/linkedin.png"
              alt="linked in logo"
            />
          </a>
        </div>
        <p>Created by Fikret Ellek</p>
      </footer>
    </>
  );
};

export default Footer;
