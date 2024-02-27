import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(true);
  };

  const closeBtn = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <span
        className="material-symbols-outlined"
        id="hamburgerMenu"
        onClick={handleClick}
        style={{
          fontWeight: '800',
          fontSize: '3.5rem',
          color: 'white',
          display: isMenuOpen ? 'none' : 'block',
        }}
      >
        menu
      </span>
      <div
        className="sidebar"
        style={{ display: isMenuOpen ? 'flex' : 'none' }}
      >
        <span
          className="material-symbols-outlined"
          id="closeBtn"
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
          onClick={closeBtn}
        >
          close
        </span>
        <h1 style={{ margin: '20px 0' }}>Menu</h1>
        <Link to="/home" className="linkItem" onClick={handleLinkClick}>
          <div className="sidebarItem">
            <h2>Home</h2>
            <span className="material-symbols-outlined">home</span>
          </div>
        </Link>
        <Link to="/exercises" className="linkItem" onClick={handleLinkClick}>
          <div className="sidebarItem">
            <h2>Übungen</h2>
            <span className="material-symbols-outlined">fitness_center</span>
          </div>
        </Link>
        <Link to="/nutrition" className="linkItem" onClick={handleLinkClick}>
          <div className="sidebarItem">
            <h2>Rezepte</h2>
            <span className="material-symbols-outlined">restaurant</span>
          </div>
        </Link>
        <Link to="/settings" className="linkItem" onClick={handleLinkClick}>
          <div className="sidebarItem">
            <h2>Einstellungen</h2>
            <span className="material-symbols-outlined">settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;