import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-light navbar-expand-lg">
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
}

export default Navbar;
