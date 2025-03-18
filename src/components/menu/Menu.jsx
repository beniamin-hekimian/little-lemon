import { useState } from 'react';
import './menu.css';
import image from '../../assets/images/menu.jpg';
import menu from '../../data/menu.js';

export default function Menu() {
  const [selectedType, setSelectedType] = useState("meal");

  const filteredMenu = menu.filter((item) => item.type === selectedType);

  return (
    <section className="menu">
      <div>
        <img src={image} alt="A chef preparing food in a restaurant kitchen" />
        <h3>Our Menu</h3>
        <div className="filter-group">
          <button onClick={() => setSelectedType("meal")} className={selectedType === "meal" ? "active" : ""}>Meals</button>
          <button onClick={() => setSelectedType("dessert")} className={selectedType === "dessert" ? "active" : ""}>Desserts</button>
          <button onClick={() => setSelectedType("drink")} className={selectedType === "drink" ? "active" : ""}>Drinks</button>
        </div>
      </div>

      <main className="meals-container">
        {filteredMenu.map((item) => (
          <article className="meal" key={item.id}>
            <img src={item.image} alt={item.name} loading="lazy"/>
            <main>
              <div>
                <h4>{item.name}</h4>
                <small>{item.price}</small>
              </div>
              <p>{item.description}</p>
            </main>
          </article>
        ))}
      </main>
    </section>
  );
}
