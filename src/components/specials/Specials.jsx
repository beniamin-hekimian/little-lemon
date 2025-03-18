import './specials.css';
import { Link } from 'react-router-dom';
import delivery from '../../assets/icons/delivery.svg';
import menu from '../../data/menu.js';

export default function Specials() {
  // Filter the specials from the menu array
  const specials = menu.filter(item => item.special);

  return (
    <section className="specials" id="specials">
      <div className="title">
        <h3>This week's specials!</h3>
        <Link to="/menu" className="custom-button">Online Menu</Link>
      </div>

      <div className="cards-container">
        {specials.map(item => (
          <article key={item.id}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <main>
              <div>
                <h4>{item.name}</h4>
                <small>{item.price}</small>
              </div>
              <p>{item.description}</p>
              <a>
                Order a delivery &nbsp;
                <img src={delivery} alt="Delivery icon" />
              </a>
            </main>
          </article>
        ))}
      </div>
    </section>
  );
}