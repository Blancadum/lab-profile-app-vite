import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa los estilos

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">LaWebDeLasWebs</Link>
        <div className="navbar-links">
          <Link to="/signup" className="navbar-link">Sign Up</Link>
          <Link to="/login" className="navbar-link">Log In</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
