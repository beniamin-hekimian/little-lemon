import { useState, useRef, useEffect } from "react";
import logo from '../../assets/icons/Logo.svg';
import './header.css';
import { Link } from 'react-router-dom';
import dropdown from '../../assets/icons/dropdown.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div>
        {/* little lemon logo */}
        <Link to="/">
          <img src={logo} alt="Little Lemon brand logo" />
        </Link>
        {/* main navbar links */}
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
        {/* hamburger menu icon */}
        <img src={dropdown} alt="hamburger menu icon" className="hamburger-menu" onClick={() => setIsOpen(!isOpen)} />
        {/* dropdown navbar links */}
        {isOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <ul>
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
              <li><Link to="/booking" onClick={() => setIsOpen(false)}>Reservations</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}