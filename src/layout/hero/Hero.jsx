import React from 'react';
import hero from '../../assets/images/hero.jpg';
import './hero.css';
import Button from '../../components/button/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <main>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button>Reserve a Table</Button>
        </main>
        <img src={hero} alt="restaurant food" />
      </div>
    </section>
  )
}
