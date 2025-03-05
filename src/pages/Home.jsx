import React from 'react';
import Header from '../layout/header/Header';
import Hero from '../layout/hero/Hero';
import Specials from '../layout/specials/Specials';
import Footer from  '../layout/footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      {/* <Footer /> */}
    </>
  )
}
