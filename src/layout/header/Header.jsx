import React from 'react';
import Navbar from '../../components/navbar/Navbar';
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
        <Navbar />
      </div>
    </header>
  )
}