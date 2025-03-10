import React from 'react';
import './menu.css';
import menu from '../../assets/images/menu.jpg';
import meal1 from '../../assets/images/special1.jpg';

const meals = [
  {
    image: meal1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
  }
];

export default function Menu() {
  return (
    <section className="menu">
      <div>
        <img src={menu} alt="A chef preparing food in a restaurant kitchen" />
        <h3>Our Menu</h3>
      </div>

      <main className="meals-container">
        {meals.map((meal, index) => (
          <article className="meal" key={index}>
            <img src={meal.image} alt={meal.name} />
            <main>
              <div>
                <h4>{meal.name}</h4>
                <small>{meal.price}</small>
              </div>
              <p>{meal.description}</p>
            </main>
          </article>
        ))}
      </main>
    </section>
  );
}
