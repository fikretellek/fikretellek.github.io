import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <section id="skills-container">
        <div id="skills" className="top-margin-for-header"></div>
        <h1>Skills</h1>
        <div id="skills-list">
          <div className="skills">
            <h2>Languages</h2>
            <div className="list-of-skill-spams">
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
          <div className="skills">
            <h2>Frameworks & Libraries</h2>
            <div className="list-of-skill-spams">
              <span>NodeJS</span>
              <span>Express</span>
              <span>React</span>
            </div>
          </div>

          <div className="skills">
            <h2>Architecture & Patterns</h2>
            <div className="list-of-skill-spams">
              <span>REST APIs</span>
              <span>Graphql APIs</span>
              <span>Google Routes API</span>
              <span>Test Driven Development (TDD)</span>
              <span>Behavioral Driven Development (BDD)</span>
            </div>
          </div>
          <div className="skills">
            <h2>Tools & Others</h2>
            <div className="list-of-skill-spams">
              <span>Bash</span>
              <span>Git</span>
              <span>Postman</span>
              <span>Chrome Devtools</span>
              <span>Jest</span>
              <span>Agile</span>
            </div>
          </div>
          <div className="skills">
            <h2>Cloud & DevOps</h2>
            <div className="list-of-skill-spams">
              <span>AWS Services</span>
              <span>Docker</span>
              <span>Github Actions</span>
              <span>CI/CD</span>
            </div>
          </div>
          <div className="skills">
            <h2>Databases</h2>
            <div className="list-of-skill-spams">
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className="skills">
            <h2>Design & Presentation</h2>
            <div className="list-of-skill-spams">
              <span>Sketching</span>
              <span>Prototyping</span>
              <span>Wireframing</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
