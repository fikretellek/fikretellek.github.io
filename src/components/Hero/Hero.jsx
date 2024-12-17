import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div id="home"></div>
      <section id="hero">
        <h3>Hello, my name is</h3>
        <h1>Fikret Ellek</h1>
        <h2 className="purple">I enjoy crafting code and</h2>
        <h2 className="purple">building dreams</h2>
        <h3>
          <a href="#projects">Check out my projects</a>
        </h3>
      </section>
    </>
  );
};

export default Hero;
