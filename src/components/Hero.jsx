import React from 'react'
import hero from '../assets/images/hero.jpg'

export default function Hero() {
  return (
    <section>
        <main>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
        </main>
        <img src={hero} alt="restaurant food" />
    </section>
  )
}
