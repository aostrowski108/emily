import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './small_logo2.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/howitworks', label: 'Experience' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Table by Emily" />
          <div className="brand-text">
            <p>Chef Emily</p>
            <span>Private Dining</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a className="nav-cta desktop-cta" href="mailto:emily@tablebyemily.com">
          Book an Event
        </a>

        <button
          className={`mobile-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-panel ${menuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="nav-cta" href="mailto:emily@tablebyemily.com" onClick={() => setMenuOpen(false)}>
            Book an Event
          </a>
        </nav>
      </div>
    </header>
  );
}
