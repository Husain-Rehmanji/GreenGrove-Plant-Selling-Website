import React from 'react';
import './Category.css';

const Category = () => {
  return (
    <>
      <section className="category" id="category">
        <h1 className="heading">Shop by Category</h1>

        <div className="box-container">
          <div className="box">
            <img src="../images/cat1.jpg" alt="" />
            <div className="content">
              <h3>bonsai</h3>
              <a href="#" className="btn">shop now</a>
            </div>
          </div>
          <div className="box">
        <img src="../images/cat2.jpg" alt=""/>
        <div className="content">
            <h3>plants for house</h3>
            <a href="#" className="btn">shop now</a>
        </div>
    </div>
    <div className="box">
        <img src="../images/cat3.jpg" alt=""/>
        <div className="content">
            <h3>plants for office</h3>
            <a href="#" className="btn">shop now</a>
        </div>
    </div>
    <div className="box">
        <img src="../images/cat4.jpg" alt=""/>
        <div className="content">
            <h3>gift plants</h3>
            <a href="#" className="btn">shop now</a>
        </div>
    </div>
        </div>
      </section>

    </>
  );
};

export default Category;
