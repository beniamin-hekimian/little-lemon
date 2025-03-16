import { lazy, useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const Confirmation = lazy(() => import('./components/confirmation/Confirmation'));

// Initialize available times
const initializeTimes = () => ([
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"
]);

// Reducer function to update availableTimes and store form data
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, availableTimes: initializeTimes() };
    case 'SUBMIT_FORM':
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

const initialState = {
  availableTimes: initializeTimes(),
  formData: null,
};

function App() {
  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="booking" element={<BookingPage availableTimes={state.availableTimes} dispatch={dispatch} />} />
          <Route path="confirmed" element={<Confirmation formData={state.formData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;