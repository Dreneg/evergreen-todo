import React from 'react';
import './Header.css';

function Header(): JSX.Element {
  return (
    <header className="header d-flex align-content-center flex-wrap">
      <span className="icon bi bi-kanban mx-2 mx-lg-4 d-"></span>
      <span>EverGreen Todo</span>
    </header>
  );
}

export default Header;
