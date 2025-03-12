import React from 'react';
import './reservation.css';
import restaurant from '../../assets/images/restaurant.jpg';

export default function Reservation() {
  return (
    <section className="reservation">
      {/* header section */}
      <div>
        <img src={restaurant} alt="restaurant seats photo" />
        <h3>Reserve a table</h3>
      </div>

      {/* form section */}
      <form>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" />
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time">
            <option hidden>Time</option>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
            <option>8:00 PM</option>
            <option>9:00 PM</option>
            <option>10:00 PM</option>
          </select>
        </div>
       <div>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
       </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option hidden>Occasion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>
        </div>
        <input type="submit" value="Submit" className="custom-button" />
      </form>
    </section>
  )
}
