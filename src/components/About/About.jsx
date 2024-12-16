import "./About.scss";

const About = () => {
  return (
    <>
      <section id="about-container">
        <div id="about" className="top-margin-for-header"></div>
        <h1>About</h1>
        <div id="about-hero">
          <div id="about-img"></div>
          <div id="about-info">
            <p>Hi, my name is Fikret. I enjoy crafting code and building dreams.</p>
            <p>
              My passion for Software Engineering began during my studies in architecture, where I
              worked on creating structures using parametric design principles. I realised that
              coding is not so different from designing, both involve combining atomic components to
              build complex projects. While studying and later working as an architect, I developed
              strong problem-solving skills, finding solutions for complex projects and
              collaborating with diverse teams to successfully deliver projects. After graduating
              from CodeYourFuture, I transitioned these problem-solving skills to software
              engineering, alongside my technical expertise and personal strengths. I am currently
              focusing on developing expertise in web development, software engineering, and
              database technologies.
            </p>

            <p>
              My career is driven by a commitment to{" "}
              <span className="bold">continuous learning</span> and staying ahead in an
              ever-evolving field. I specialise in <span className="bold">developing </span>,{" "}
              <span className="bold">testing</span>, and <span className="bold">debugging</span>{" "}
              high-performance web applications, combining technical expertise with creative{" "}
              <span className="bold">problem-solving</span> to deliver{" "}
              <span className="bold">robust, user-friendly solutions</span>. With a strong focus on
              clean, <span className="bold">efficient code</span> and{" "}
              <span className="bold">attention to detail</span>, I strive to build applications that
              exceed expectations. My journey from a curious student to a proficient web developer
              highlights my dedication to growth, innovation, and excellence in software
              engineering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
