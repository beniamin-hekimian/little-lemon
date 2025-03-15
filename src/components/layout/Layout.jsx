import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './layout.css';

export default function Layout(){
  return (
    <>
      <Header />
        <Suspense fallback={<p className='loading-text'>Loading...</p>}>
          <Outlet />
        </Suspense>
      <Footer />
    </>
  )
}