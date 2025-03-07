import React from 'react';
import './navbar.css';
import Button from '../button/Button';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a className="disabled-link" title="This feature is not available">Order Online</a></li>
        <li><Button>Login</Button></li>
      </ul>
    </nav>
  );
}