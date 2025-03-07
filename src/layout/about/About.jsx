import React from 'react';
import './about.css';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';

export default function About() {
  return (
    <section className="about">
        <main>
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>Little Lemon is a family-owned Mediterranean restaurant founded by brothers Adrian and Mario. With a passion for traditional cuisine, they bring authentic Mediterranean flavors to the heart of the city. Our chefs use only the freshest ingredients to craft delicious, wholesome dishes. Whether you're here for a quick lunch, cozy dinner, or special occasion, our warm atmosphere and exceptional service will make you feel at home.</p>
        </main>
        <div className="image-container">
            <img src={about1} alt="Mario and Adrian A" />
            <img src={about2} alt="Mario and Adrian B" />
        </div>
    </section>
  )
}
