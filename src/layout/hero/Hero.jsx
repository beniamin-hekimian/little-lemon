import React from 'react';
import hero from '../../assets/images/hero.jpg';
import './hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div>
        <main>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/booking" className="custom-button">Reserve a Table</Link>
        </main>
        <img src={hero} alt="restaurant food" />
      </div>
    </section>
  )
}
