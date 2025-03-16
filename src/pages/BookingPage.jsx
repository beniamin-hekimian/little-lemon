import { useNavigate } from 'react-router-dom';
import Reservation from '../components/reservation/Reservation';

export default function BookingPage(props) {
  const navigate = useNavigate();

  // This function is called when the form is submitted
  const submitForm = (formData) => {
    console.log("Form Submitted:", formData);  // Logs the form data for debugging
    // Optionally dispatch form data if you need to store it in global state
    props.dispatch({ type: 'SUBMIT_FORM', payload: formData });

    // After submission, navigate to the confirmation page
    navigate("/confirmed");
  };

  return (
    <>
      <Reservation availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={submitForm} />
    </>
  );
}
