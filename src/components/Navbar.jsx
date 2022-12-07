import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-light navbar-expand">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/books" className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
