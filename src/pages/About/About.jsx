import "./About.scss";

const About = () => {
  return (
    <>
      <div id="about-hero" className="active-page">
        <div id="active-card-color"></div>
        <div id="active-card" className="sub-page-card">
          <div id="inner-card" className="active-inner">
            <div id="about-me">
              <h2>
                a little <span style={{ color: "purple" }}>about</span> me
              </h2>
              <p>
                Hi! I’m Fikret, a full-stack software engineer with a unique story. I started out as
                an architect, designing everything from bold facades to cozy homes, before trading
                my
                <span style={{ color: "purple" }}> AutoCAD</span> skills for{" "}
                <span style={{ color: "purple" }}>JavaScript</span>. Now, I build innovative web
                applications, blending creativity and logic to solve real-world problems. My journey
                has been all about growth, adaptability, and creating things that matter—whether in
                design or tech.
              </p>
            </div>
            <div id="skill-set">
              <h2>
                tools I <span style={{ color: "purple" }}>code</span> with
              </h2>
              <ul>
                <li>
                  <img
                    alt="JavaScript"
                    src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
                  />
                </li>
                <li>
                  <img
                    alt="React"
                    src="https://img.shields.io/badge/-React-0091C7?style=for-the-badge&logo=react&logoColor=white"
                  />
                </li>
                <li>
                  <img
                    alt="Nodejs"
                    src="https://img.shields.io/badge/-Nodejs-2D8E4F?style=for-the-badge&logo=Node.js&logoColor=white"
                  />
                </li>
                <li>
                  <img
                    alt="Express.js"
                    src="https://img.shields.io/badge/-Express.js-333333?style=for-the-badge&logo=express&logoColor=white"
                  />
                </li>
                <li>
                  <img
                    alt="PostgreSQL"
                    src="https://img.shields.io/badge/-PostgreSQL-2F4A92?style=for-the-badge&logo=postgresql&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="GraphQL"
                    src="https://img.shields.io/badge/-GraphQL-600F67?style=for-the-badge&logo=graphql&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="Git"
                    src="https://img.shields.io/badge/-Git-6D2F3B?style=for-the-badge&logo=git&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="npm"
                    src="https://img.shields.io/badge/-npm-8F3339?style=for-the-badge&logo=npm&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="HTML5"
                    src="https://img.shields.io/badge/-HTML5-D85D2D?style=for-the-badge&logo=html5&logoColor=white"
                  />
                </li>
                <li>
                  <img
                    alt="CSS"
                    src="https://img.shields.io/badge/-CSS-3B5998?style=for-the-badge&logo=css3&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="Docker"
                    src="https://img.shields.io/badge/-Docker-1798C1?style=for-the-badge&logo=docker&logoColor=white"
                  />
                </li>
                <li>
                  <img
                    alt="GitHub Actions"
                    src="https://img.shields.io/badge/-GitHub_Actions-444D74?style=for-the-badge&logo=github-actions&logoColor=white"
                  />
                </li>
                <li>
                  <img
                    alt="AWS"
                    src="https://img.shields.io/badge/-AWS-232F3E?style=for-the-badge&logo=amazon&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="JWT"
                    src="https://img.shields.io/badge/-JWT-933D41?style=for-the-badge&logo=json-web-tokens&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="CI/CD"
                    src="https://img.shields.io/badge/-CI/CD-3B9F8E?style=for-the-badge&logo=circleci&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="Jest"
                    src="https://img.shields.io/badge/-Jest-9B2C5A?style=for-the-badge&logo=jest&logoColor=white"
                  />
                </li>

                <li>
                  <img
                    alt="WebSockets"
                    src="https://img.shields.io/badge/-WebSockets-1D82A7?style=for-the-badge&logo=Socket.io&logoColor=white"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="image-area" className="sub-page-card">
          <div id="photo-card">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQECXUXvwU432Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711816469455?e=1738800000&v=beta&t=CpA8pFZ5PdvE5zY_HGMaSJhUyKEZALXIapON0i6IAGs"
              alt="fikret ellek photo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
