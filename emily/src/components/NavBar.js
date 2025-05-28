import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/small_logo2.png';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Table by Emily" />
        </Link>
      </div>

      <div className="nav-links desktop-only">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/quote">Get a Quote</Link>
      </div>

      <button
        className="hamburger mobile-only"
        aria-label="Menu"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span/> <span/> <span/>
      </button>

      {menuOpen && (
        <div className="dropdown-menu">
          <Link to="/"      onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/quote" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
        </div>
      )}
    </nav>
  );
}
