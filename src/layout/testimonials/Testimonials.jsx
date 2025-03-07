import React from 'react';
import './testimonials.css';
import review1 from '../../assets/images/review1.webp';
import review2 from '../../assets/images/review2.webp';
import review3 from '../../assets/images/review3.webp';
import review4 from '../../assets/images/review4.webp';

export default function Testimonials() {
  return (
    <section className="testimonials">
        <div>
            <h3>Testimonials</h3>
            <main>
                {/* the first review */}
                <article className="review">
                  <div>
                    <img src={review1} alt="Sophia Carter" />
                    <h4>Sophia Carter</h4>
                  </div>
                  <q>Absolutely loved the food! Fresh ingredients and amazing flavors.</q>
                  <br />
                  <small>⭐⭐⭐⭐⭐ 5</small>
                </article>

                {/* the second review */}
                <article className="review">
                  <div>
                    <img src={review2} alt="James Mitchell" />
                    <h4>James Mitchell</h4>
                  </div>
                  <q>Great ambiance and service. The seafood platter was fantastic!</q>
                  <br />
                  <small>⭐⭐⭐⭐ 4</small>
                </article>

                {/* the third review */}
                <article className="review">
                  <div>
                    <img src={review3} alt="Emma Rodriguez" />
                    <h4>Emma Rodriguez</h4>
                  </div>
                  <q>Authentic Mediterranean taste! The baklava was the best I've ever had.</q>
                  <br />
                  <small>⭐⭐⭐⭐⭐ 5</small>
                </article>

                {/* the fourth review */}
                <article className="review">
                  <div>
                    <img src={review4} alt="Liam Anderson" />
                    <h4>Liam Anderson</h4>
                  </div>
                  <q>Lovely place, great for a cozy dinner. The pasta was delicious!</q>
                  <br />
                  <small>⭐⭐⭐⭐ 4</small>
                </article>
            </main>
        </div>
    </section>
  )
}
