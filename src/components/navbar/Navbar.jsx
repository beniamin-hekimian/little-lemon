import React from 'react';
import './navbar.css';
import Button from '../button/Button';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><Button>Login</Button></li>
      </ul>
    </nav>
  );
}