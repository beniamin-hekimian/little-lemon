import { useEffect } from 'react';
import './confirmation.css';

export default function Confirmation({ formData }) {
  useEffect(() => {
    console.log("Form Submitted:", formData);
  }, [formData]);

  return (
    <section className="confirmation">
      <h2>Reservation Confirmed</h2>
      <p>Thank you for your reservation. Here are your details:</p>
      <ul>
        <li>Date: {formData?.date}</li>
        <li>Time: {formData?.time}</li>
        <li>Guests: {formData?.guests}</li>
        <li>Occasion: {formData?.occasion}</li>
      </ul>
    </section>
  );
}
