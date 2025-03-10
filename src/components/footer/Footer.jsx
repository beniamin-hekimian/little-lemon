import React from 'react';
import './footer.css';
import brand from '../../assets/images/footer.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/">
          <img src={brand} alt="Little Lemon brand icon" />
        </Link>

        {/* first links group */}
        <article className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><a className="disabled-link" title="This feature is not available">Order Online</a></li>
            <li><a className="disabled-link" title="This feature is not available">Login</a></li>
          </ul>
        </article>

        {/* second links group */}
        <article className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a>+123-456-789</a></li>
            <li><a>contact@littlelemon.com</a></li>
            <li><a>Support Center</a></li>
          </ul>
        </article>

        {/* third links group */}
        <article className="footer-section">
          <h4>Social Media</h4>
          <ul>
            <li><a>Facebook</a></li>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
          </ul>
        </article>
      </div>
    </footer>
  )
}