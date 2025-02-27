import React from 'react';
import './specials.css';

export default function Specials() {
  return (
    <section className="specials">
      <div>
        <h3>This weeks specials!</h3>
        <button>Online Menu</button>
      </div>
      <div>
        <article className="card">
          <img src="" alt="" />
          <main>
            <h4>Greek salad</h4>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <a href="">Order a delivery</a>
          </main>
        </article>
      </div>
    </section>
  )
}
