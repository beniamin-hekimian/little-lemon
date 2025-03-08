import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link index>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a className="disabled-link" title="This feature is not available">Order Online</a></li>
        <li><a className="disabled-link custom-button" title="This feature is not available">Login</a></li>
      </ul>
    </nav>
  );
}