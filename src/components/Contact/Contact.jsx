import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact-container">
      <div id="contact" className="top-margin-for-header"></div>
      <div id="contact-hero">
        <h2>Let's chat!</h2>
        <h1>Get in touch</h1>
        <p>
          Whether you have a project in mind, questions about my projects, or just want to chat
          tech, I'm always eager to engage with fellow enthusiasts.
          <br />
          Drop me a line and let's start the conversation!
        </p>
        <a id="mail" href="mailto:fikretellek@icloud.com?subject=Hello%20there!">
          email
        </a>
      </div>
    </section>
  );
};

export default Contact;
