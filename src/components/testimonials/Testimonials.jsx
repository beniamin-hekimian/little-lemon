import './testimonials.css';
import reviews from '../../data/reviews.js';

export default function Testimonials() {
  return (
    <section className="testimonials">
        <div>
            <h3>Testimonials</h3>
            <main>
              {reviews.map((review) => (
                <article className="review" key={review.id}>
                  <div>
                    <img src={review.image} alt={review.name} loading="lazy" />
                    <h4>{review.name}</h4>
                  </div>
                  <q>{review.text}</q>
                  <small>{review.stars}</small>
                </article>
              ))}
            </main>
        </div>
    </section>
  )
}
