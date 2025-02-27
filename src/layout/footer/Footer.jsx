import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="" alt="" />
      </div>
      <div className="footer-section">
        <h4>Homepage Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Social Media Links</h4>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  )
}