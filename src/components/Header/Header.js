import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="header-logo" />
        <div className="header-title">Jazam</div>
        <button className="header-button">Estoque</button>
      </div>
      <div className="notification">
        <span role="img" aria-label="notifications">🔔</span>
      </div>
    </header>
  );
}

export default Header;
