import React from 'react';
import './menu.css';
import menu from '../../assets/images/menu.jpg';

const meals = [
  {
    image: new URL('../../assets/images/special1.jpg', import.meta.url).href,
    name: "Greek Salad",
    price: "$12.99",
    description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    image: new URL('../../assets/images/special2.jpg', import.meta.url).href,
    name: "Bruchetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    image: new URL('../../assets/images/special3.jpg', import.meta.url).href,
    name: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  },
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
            <img src={meal.image} alt={meal.name} loading="lazy"/>
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
