import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <>
      <section className="banner-container">

<div className="banner">
    <img src="../images/banner1.jpg" alt=""/>
    <div className="content">
        <span>new arrivals</span>
        <h3>house plants</h3>
        <a href="/#" class="btn">shop now</a>
    </div>
</div>
<div className="banner">
    <img src="../images/banner2.jpg" alt=""/>
    <div className="content">
        <span>new arrivals</span>
        <h3>office plants</h3>
        <a href="/#" class="btn">shop now</a>
    </div>
</div>

</section>
    </>
  )
}

export default Banner
