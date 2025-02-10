import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">Bienvenido a <span className="highlight">LaWebDeLasWebs</span></h1>
        <p className="home-description">Desarrollo web y Posicionamiento SEO</p>
        <div className="button-group">
          <Link to="/signup" className="button button-green">Sign Up</Link>
          <Link to="/login" className="button button-blue">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
