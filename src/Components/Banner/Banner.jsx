import React from 'react'
import './Banner.css'
import img1 from './images/banner1.jpg'
import img2 from './images/banner2.jpg'
const Banner = () => {
  return (
    <div>
      <section class="banner-container">

        <div class="banner">
            <img src={img1} alt="" />
            <div class="content">
                <span>new arrivals</span>
                <h3>house plants</h3>
                <a href="#" class="btn">shop now</a>
            </div>
        </div>
        <div class="banner">
            <img src={img2} alt="" />
            <div class="content">
                <span>new arrivals</span>
                <h3>office plants</h3>
                <a href="#" class="btn">shop now</a>
            </div>
        </div>

        </section>
    </div>
  )
}

export default Banner
