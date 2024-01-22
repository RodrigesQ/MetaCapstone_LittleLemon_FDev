import React from 'react';
//import HeaderElement from '../components/HeaderElement';
import Nav from '../components/Header'
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      {/*<HeaderElement />*/}
      <Nav />
      <HeroSection />
      <Specials />
      <Footer />
    </>
  )
}

export default Home
