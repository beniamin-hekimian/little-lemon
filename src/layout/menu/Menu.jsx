import React from 'react';
import './menu.css';
import menu from '../../assets/images/menu.jpg';
import meal1 from '../../assets/images/special1.jpg';

export default function Menu() {
  return (
    <section className="menu">
        <div>
            <img src={menu} alt="restaurant chef" />
            <h3>Our Menu</h3>
        </div>
        <main className="meals-container">
          {/* the first meal */}
          <article className="meal">
            <img src={meal1} alt="Greek salad" />
            <main>
              <div>
                <h4>Greek salad</h4>
                <small>$12.99</small>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </main>
          </article>

          {/* the first meal */}
          <article className="meal">
            <img src={meal1} alt="Greek salad" />
            <main>
              <div>
                <h4>Greek salad</h4>
                <small>$12.99</small>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </main>
          </article>

          {/* the first meal */}
          <article className="meal">
            <img src={meal1} alt="Greek salad" />
            <main>
              <div>
                <h4>Greek salad</h4>
                <small>$12.99</small>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </main>
          </article>

          {/* the first meal */}
          <article className="meal">
            <img src={meal1} alt="Greek salad" />
            <main>
              <div>
                <h4>Greek salad</h4>
                <small>$12.99</small>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </main>
          </article>

          {/* the first meal */}
          <article className="meal">
            <img src={meal1} alt="Greek salad" />
            <main>
              <div>
                <h4>Greek salad</h4>
                <small>$12.99</small>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </main>
          </article>

          {/* the first meal */}
          <article className="meal">
            <img src={meal1} alt="Greek salad" />
            <main>
              <div>
                <h4>Greek salad</h4>
                <small>$12.99</small>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </main>
          </article>
        </main>
    </section>
  )
}
