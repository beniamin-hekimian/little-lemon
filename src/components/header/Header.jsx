import React from 'react';
import logo from '../../assets/icons/Logo.svg';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="Little Lemon brand logo" />
        </Link>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><a className="disabled-link" title="This feature is not available">Order Online</a></li>
            <li><a className="disabled-link custom-button" title="This feature is not available">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}