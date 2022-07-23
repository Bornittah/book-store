import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav className="flex space-btn align-center justify-center">
      <ul className="navbar flex space-btn">
        <li className="nav-link logo">BookStore CMS</li>
        <li className="nav-link">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="nav-link">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div>
        <Link to="/"><i className="fa fa-user icon" aria-hidden="true" /></Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
