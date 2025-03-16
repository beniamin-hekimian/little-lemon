import React from 'react';
import './about.css';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';
import date from '../../assets/icons/date.svg';
import time from '../../assets/icons/time.svg';
import location from '../../assets/icons/location.svg';

export default function About() {
  return (
    <section className="about" id="about">
      <main>
        <h3>About Us</h3>
        <h4>Little Lemon Restaurant</h4>
        <p>Little Lemon is a family-owned Mediterranean restaurant founded by brothers Adrian and Mario. With a passion for traditional cuisine, they bring authentic Mediterranean flavors to the heart of the city. Our chefs use only the freshest ingredients to craft delicious, wholesome dishes. Whether you're here for a quick lunch, cozy dinner, or special occasion, our warm atmosphere and exceptional service will make you feel at home.</p>
        <address>
          <p>
            <img src={date} alt="calendar icon" /> <strong>Monday to Saturday</strong>
          </p>
          <p>
            <img src={time} alt="time icon" /> Open from <strong>5:00 PM to 10:00 PM</strong>
          </p>
          <p>
            <img src={location} alt="location icon" /> Location: 123 Mediterranean St., <strong>Chicago</strong>
          </p>
        </address>
      </main>
      <div className="image-container">
          <img src={about1} alt="Mario and Adrian A" loading="lazy" />
          <img src={about2} alt="Mario and Adrian B" loading="lazy" />
      </div>
    </section>
  )
}
