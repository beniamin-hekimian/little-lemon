import React from 'react';
import './specials.css';
import Button from '../../components/button/Button';
import special1 from '../../assets/images/special1.jpg';
import special2 from '../../assets/images/special2.jpg';
import special3 from '../../assets/images/special3.jpg';
import delivery from '../../assets/icons/delivery.svg';

export default function Specials() {
  return (
    <section className="specials">

      <div className="title">
        <h3>This weeks specials!</h3>
        <Button>Online Menu</Button>
      </div>

      <div className="cards-container">
        {/* the first card */}
        <article>
          <img src={special1} alt="Greek Salad" />
          <main>
            <div>
              <h4>Greek salad</h4>
              <small>$12.99</small>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <a href="#">
              Order a delivery &nbsp;
              <img src={delivery} alt="Delivery icon" />
            </a>
          </main>
        </article>

        {/* the second card */}
        <article>
          <img src={special2} alt="Bruchetta" />
          <main>
            <div>
              <h4>Bruchetta</h4>
              <small>$5.99</small>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <a href="#">
              Order a delivery &nbsp;
              <img src={delivery} alt="Delivery icon" />
            </a>
          </main>
        </article>

        {/* the third card */}
        <article>
          <img src={special3} alt="Lemon Dessert" />
          <main>
            <div>
              <h4>Lemon Dessert</h4>
              <small>$5.00</small>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
            <a href="#">
              Order a delivery &nbsp;
              <img src={delivery} alt="Delivery icon" />
            </a>
          </main>
        </article>
      </div>

    </section>
  )
}
