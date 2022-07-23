import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="header">
    <nav className="flex space-btn align-center justify-center">
      <ul className="navbar flex space-btn justify-center align-center">
        <li className="nav-link logo">BookStore CMS</li>
        <li className="nav-link">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="nav-link">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className="profile">
        <i className="fa fa-user icon" aria-hidden="true" />
      </div>
    </nav>
  </header>
);

export default NavBar;
