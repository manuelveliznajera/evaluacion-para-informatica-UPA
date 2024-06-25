import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ( {url} ) => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/img/logo-upa.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">Inicio</Link>
          <Link to={ `/${url}`} className="nav-link">{url}</Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;