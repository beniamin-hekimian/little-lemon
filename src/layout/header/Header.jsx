import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../assets/icons/Logo.svg';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <a href="">
        <img src={logo} alt="Little Lemon brand logo" />
      </a>
      <Navbar />
    </header>
  )
}