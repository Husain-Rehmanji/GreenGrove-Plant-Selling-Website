import React from 'react'
import './Category.css'
import cat1 from './images/cat1.jpg'
import cat2 from './images/cat2.jpg'
import cat3 from './images/cat3.jpg'
import cat4 from './images/cat4.jpg'
const Category = () => {
  return (
    <div>
      <section class="category" id="category">

<h1 class="heading"> shop by category </h1>

<div class="box-container">

    <div class="box">
        <img src={cat1} alt="" />
        <div class="content">
            <h3>bonsai</h3>
            <a href="#" class="btn">shop now</a>
        </div>
    </div>
    <div class="box">
        <img src={cat2} alt="" />
        <div class="content">
            <h3>plants for house</h3>
            <a href="#" class="btn">shop now</a>
        </div>
    </div>
    <div class="box">
        <img src={cat3} alt="" />
        <div class="content">
            <h3>plants for office</h3>
            <a href="#" class="btn">shop now</a>
        </div>
    </div>
    <div class="box">
        <img src={cat4} alt="" />
        <div class="content">
            <h3>gift plants</h3>
            <a href="#" class="btn">shop now</a>
        </div>
    </div>

</div>

</section>
    </div>
  )
}

export default Category
