import { useState } from 'react';
import './reservation.css';
import restaurant from '../../assets/images/restaurant.jpg';

const availableTimes = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];

export default function Reservation() {
  // Define state variables for the form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Handlers to update state on form input change
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

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
          <input type="date" id="res-date" value={date} onChange={handleDateChange} />
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={handleTimeChange}>
            {availableTimes.map((time, index) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
       <div>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />
       </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={handleOccasionChange}>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <input type="submit" value="Submit" className="custom-button" />
      </form>
    </section>
  )
}
