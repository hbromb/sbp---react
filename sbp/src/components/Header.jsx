import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/SB FINAL [Recovered].png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="Shepherd Brombley Partnership home">
        <img
          className="brand-logo"
          src={logo}
          alt="Shepherd Brombley Partnership"
          width="3089"
          height="1266"
        />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span />
        <span />
        <span />
      </button>
      <nav id="main-navigation" className={`main-navigation ${menuOpen ? 'is-open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/portfolio" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <Link className="nav-contact" to="/contact" onClick={closeMenu}>Start a conversation</Link>
      </nav>
    </header>
  );
}

export default Header;
