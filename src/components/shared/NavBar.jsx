import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav className="flex space-btn">
      <ul className="navbar flex space-btn">
        <li className="nav-link">
          <Link to="/">BookStore CMS</Link>
        </li>
        <li className="nav-link">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="nav-link">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div>
        <Link to="/">Profile</Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
