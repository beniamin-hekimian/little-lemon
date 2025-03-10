import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Specials from '../components/specials/Specials';
import Testimonials from '../components/testimonials/Testimonials';
import About from '../components/about/About';
import Footer from  '../components/footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  )
}
