import React from 'react';
import './footer.css';
import brand from '../../assets/icons/brand.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={brand} alt="Little Lemon brand icon" />

        {/* first links group */}
        <article className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </article>

        {/* second links group */}
        <article className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">+123-456-789</a></li>
            <li><a href="#">contact@littlelemon.com</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </article>

        {/* third links group */}
        <article className="footer-section">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </article>
      </div>
    </footer>
  )
}