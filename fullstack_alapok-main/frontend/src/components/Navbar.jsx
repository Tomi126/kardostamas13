import React from "react";
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/">Kezdőlap</a></li>
        <li><a href="/useradd">Felhasználók hozzáadása</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;