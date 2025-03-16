import { useState } from 'react';
import './reservation.css';
import restaurant from '../../assets/images/restaurant.jpg';

export default function Reservation({ availableTimes, dispatch, submitForm }) {
  // Define state variables for the form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");

  // Handlers to update state on form input change
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the form data to the global state
    dispatch({
      type: 'SUBMIT_FORM',
      payload: { date, time, guests, occasion },
    });

    // Call the submitForm function passed from BookingPage
    submitForm({ date, time, guests, occasion });
  };

  return (
    <section className="reservation">
      {/* header section */}
      <div>
        <img src={restaurant} alt="restaurant seats photo" />
        <h3>Reserve a table</h3>
      </div>

      <form onSubmit={handleSubmit}>
        {/* date input */}
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={handleDateChange} />
        </div>

        {/* time input */}
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={handleTimeChange}>
            <option value="" hidden>Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* guests input */}
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />
        </div>

        {/* occasion input */}
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={handleOccasionChange}>
            <option value="None">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <button type="submit" className="custom-button" aria-label="Submit reservation">Submit</button>
      </form>
    </section>
  );
}
