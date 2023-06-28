import React from 'react'
import Slider from '../../Components/Slider/Slider'
import Banner from '../../Components/Banner/Banner'
import { Helmet } from 'react-helmet'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Category from '../../Components/Category/Category'
import About from '../../Components/About/About'
import Faqs from '../../Components/FAQS/Faqs'
const Home = () => {
  return (
    
    <div className='home'>
      <Helmet>
          <title>Home</title>
          <meta name='description' content='One stop website for all your fashion needs'/>
          <meta name='keywords' content='Clothes, Shopping, Fashion, Style, Home' />
        </Helmet>
      <Slider />
      <Banner />
      <Category />
      <About />
      <Faqs/>
    </div>
  )
}

export default Home