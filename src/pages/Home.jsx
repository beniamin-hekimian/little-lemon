import React from 'react';
import Header from '../layout/header/Header';
import Hero from '../layout/hero/Hero';
import Specials from '../layout/specials/Specials';
import Testimonials from '../layout/testimonials/Testimonials';
import Footer from  '../layout/footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      {/* <Footer /> */}
    </>
  )
}
