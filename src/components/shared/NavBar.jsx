import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav>
    <ul>
        <li>
          <Link to="/">BookStore CMS</Link>
        </li>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div>
        <Link to="">Profile</Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
