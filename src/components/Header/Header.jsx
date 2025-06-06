import React from 'react';
import './Header.css'; // Importamos sus estilos

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-logo">ALISPORT</h1>
      <nav className="header-nav">
        <a href="#" className="header-link">NOSOTROS</a>
        <a href="#" className="header-link">INICIAR SESIÓN</a>
      </nav>
    </header>
  );
};

export default Header;