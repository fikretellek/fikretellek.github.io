const EachProject = ({ id }) => {
  const photos = [
    "https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/appoint.png",
    "https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/read.png",
    "https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/aut.png",
    "https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/message.png",
    "https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/map.png",
  ];
  const titles = [
    "This Appointment",
    "Read-me Hire-me",
    "Authenticator",
    "Message App",
    "Choropleth Map",
  ];
  const info = [
    "An event optimisation application enabling organisers to determine the most suitable time and location for all attendees. Utilised the Google Routes API to retrieve train journey details for each attendee across potential event destinations. Developed an algorithm to evaluate every event configuration and present results via a user-friendly frontend interface. Currently developing version 2, which will incorporate attendee accounts, allowing users to input their own travel details and view personalised journey plans on their mobile devices while travelling.",
    "An autogenerated portfolio platform designed for CodeYourFuture graduates, enabling them to showcase their profiles without dedicating significant time to portfolio creation. This solution supports graduates in focusing on personal development while gaining visibility among mentors and recruiters. Implemented a GitHub activity analysis feature to compute scores, assisting mentors and recruiters in assessing graduates' skill development efforts. Utilised JWT authentication and role-based authorisation to manage multiple user roles securely.",
    "A robust authentication API designed for developers to manage user credentials and handle authentication and authorisation workflows. Created this API for integration across my other projects. The application supports API key-based access and enables client applications to create, authenticate, authorise, update, and delete user accounts. Comprehensive API documentation is currently in progress.",
    "A messaging application leveraging WebSockets for real-time communication alongside HTTP requests for message transmission and retrieval. Integrated WebSocket and HTTP request mechanisms seamlessly. When a user sends a message via the API, it triggers WebSocket notifications for other users, prompting them to request updates for new messages.",
    "As part of a medical research initiative at Manchester University, I contributed to the development of choropleth maps visualising the distribution of optometrists across the UK. Processed postcode data from CSV files, storing the results in a structured database. Utilised the Postcodes.io API to convert postcodes into detailed address objects, extracting geographical information at country, region, county, and local district levels. Aggregated data at these levels to calculate population distributions, creating visual representations of density variations across administrative regions. Ensured precision and currency of visualisations using National Statistics maps and QGIS for data encoding and mapping.",
  ];
  const keys = [
    ["JS", "React", "Node.js", "Express.js", "Psql", "Docker", "CI/CD", "Google Routes API"],
    ["JS", "React", "Node.js", "Express.js", "Psql", "Github Rest API"],
    ["JS", "Node.js", "Express.js", "Psql", "JWT"],
    ["JS", "React", "Node.js", "Express.js", "WebSocket"],
    ["JS", "Node.js", "Express.js", "Rest APIs", "PostgreSQL", "QGIS"],
  ];
  const githubLinks = [
    "https://github.com/bkarimii/AppOintment-project",
    "https://github.com/RbAvci/Read-me-Hire-me",
    "https://github.com/fikretellek/authenticator",
    "https://github.com/fikretellek/Module-Servers/tree/chat-server/chat-server",
  ];
  const websiteLinks = [false, false, false, "https://fe-chat-react-app.netlify.app/"];
  return (
    <>
      <div className={"project-container " + (id % 2 == 1 ? "reversed-flex-direction" : "")}>
        <div id={"project-" + id} className="top-margin-for-header"></div>
        <div className="project-image-container">
          <div className="background-img-elm" id={"b" + id}>
            .
          </div>
          {photos[id - 1] && <img src={photos[id - 1]} alt="" />}
        </div>
        <div className="project-info-container">
          {titles[id - 1] && <h2 className="project-title">{titles[id - 1]}</h2>}
          {info[id - 1] && <p className="project-info">{info[id - 1]}</p>}
          <div className="project-tags-container">
            {keys[id - 1] && keys[id - 1].map((key) => <p className="project-tag">{key}</p>)}
          </div>
          <div className="project-link-logo-container">
            {githubLinks[id - 1] && (
              <a href={githubLinks[id - 1]} target="_blank">
                <img
                  className="project-link-logo"
                  src="https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/outline.png"
                  alt=""
                />
              </a>
            )}
            {websiteLinks[id - 1] ? (
              <a href={websiteLinks[id - 1]}>
                <img
                  className="project-link-logo"
                  src="https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/external-link.png"
                  alt=""
                />
              </a>
            ) : websiteLinks[id - 1] === false ? (
              <a className="not-implemented">
                <img
                  className="project-link-logo"
                  src="https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/external-link.png"
                  alt=""
                />
              </a>
            ) : (
              <a className="not-published">
                <img
                  className="project-link-logo"
                  src="https://raw.githubusercontent.com/fikretellek/fikretellek.github.io/refs/heads/main/src/assets/external-link.png"
                  alt=""
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EachProject;
