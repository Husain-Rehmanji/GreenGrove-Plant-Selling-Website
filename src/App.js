import React from 'react';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Contact from './components/Contact/Contact';
import Deal from './components/Deal/Deal';
import Faqs from './components/FAQS/Faqs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Icons from './components/Icons/Icons';
import Products from './components/Products/Products';
import Slider from './components/Slider/Slider';

const App = () => {
  return (
    <>
    <Header /> 
      <Slider />
      <Banner />
      <Category />
      <Products />
      <About />
      <Icons />
      <Deal />
      <Contact />
      <Faqs />
      <Footer />
    </>
      
  );
};

export default App;
