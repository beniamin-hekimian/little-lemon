import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;