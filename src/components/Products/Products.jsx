import React from 'react'
import "./products.css"

const Products = () => {
  return ( 
    <>
     <section className="product" id="product">

<h1 className="heading"> new products </h1>

<div className="box-container">

    <div className="box">
        <span className="discount">-10%</span>
        <div className="icons">
            <a href="/#" className="fas fa-heart"></a>
            <a href="/#" className="fas fa-share"></a>
            <a href="/#" className="fas fa-eye"></a>
        </div>
        <img src="../images/product1.jpg" alt=""/>
        <h3>latest plants</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <div className="quantity">
            <span> quantity : </span>
            <input type="number" min="1" max="100" value="1"/>
        </div>
        <div className="price">Rs 147 <span>Rs 182</span></div>
        <a href="/#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-25%</span>
        <div className="icons">
            <a href="/#" className="fas fa-heart"></a>
            <a href="/#" className="fas fa-share"></a>
            <a href="/#" className="fas fa-eye"></a>
        </div>
        <img src="../images/product2.jpg" alt=""/>
        <h3>latest plants</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <div className="quantity">
            <span> quantity : </span>
            <input type="number" min="1" max="100" value="1"/>
        </div>
        <div className="price">Rs 258 <span>Rs 359</span></div>
        <a href="/#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-7%</span>
        <div className="icons">
            <a href="/#" className="fas fa-heart"></a>
            <a href="/#" className="fas fa-share"></a>
            <a href="/#" className="fas fa-eye"></a>
        </div>
        <img src="../images/product3.jpg" alt=""/>
        <h3>latest plants</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <div className="quantity">
            <span> quantity : </span>
            <input type="number" min="1" max="100" value="1"/>
        </div>
        <div className="price">Rs 213 <span> Rs 456</span></div>
        <a href="/#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-4%</span>
        <div className="icons">
            <a href="/#" className="fas fa-heart"></a>
            <a href="/#" className="fas fa-share"></a>
            <a href="/#" className="fas fa-eye"></a>
        </div>
        <img src="../images/product4.jpg" alt=""/>
        <h3>latest plants</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <div className="quantity">
            <span> quantity : </span>
            <input type="number" min="1" max="100" value="1"/>
        </div>
        <div className="price">Rs 321 <span>Rs 465</span></div>
        <a href="/#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-4%</span>
        <div className="icons">
            <a href="/#" className="fas fa-heart"></a>
            <a href="/#" className="fas fa-share"></a>
            <a href="/#" className="fas fa-eye"></a>
        </div>
        <img src="../images/product5.jpg" alt=""/>
        <h3>latest plants</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <div className="quantity">
            <span> quantity : </span>
            <input type="number" min="1" max="100" value="1"/>
        </div>
        <div className="price">Rs 198 <span>Rs 301</span></div>
        <a href="/#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <span className="discount">-4%</span>
        <div className="icons">
            <a href="/#" className="fas fa-heart"></a>
            <a href="/#" className="fas fa-share"></a>
            <a href="/#" className="fas fa-eye"></a>
        </div>
        <img src="../images/product6.jpg" alt=""/>
        <h3>latest plants</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
        </div>
        <div className="quantity">
            <span> quantity : </span>
            <input type="number" min="1" max="100" value="1"/>
        </div>
        <div className="price">Rs 224 <span>Rs 398</span></div>
        <a href="/#" className="btn">add to cart</a>
    </div>

    

</div>

</section>
 
    </>
  )
}

export default Products
