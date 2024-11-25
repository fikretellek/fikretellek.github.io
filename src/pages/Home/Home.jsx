import "./Home.scss";

const Home = () => {
  return (
    <>
      <div id="home-hero">
        <div id="about-hero" className="card-hero">
          <div className="inner-card">
            <h2>about</h2>
          </div>
        </div>
        <div id="current-hero" className="card-hero">
          <div className="inner-card">
            <h2>current</h2>
          </div>
        </div>
        <div id="why-hero" className="card-hero">
          <div className="inner-card">
            <h2>why</h2>
          </div>
        </div>
        <div id="products-hero" className="card-hero">
          <div className="inner-card">
            <h2>products</h2>
          </div>
        </div>
        <div id="collaboration-hero" className="card-hero">
          <div className="inner-card">
            <h2>collab</h2>
          </div>
        </div>
        <div id="cyf-hero" className="card-hero">
          <div className="inner-card">
            <h2>cyf</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
