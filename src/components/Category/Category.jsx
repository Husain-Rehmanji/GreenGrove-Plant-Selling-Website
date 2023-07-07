import React, { useState } from 'react';
import { GiBonsaiTree } from "react-icons/gi";
import './Category.css';

const Category = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="category" id="category">
        <h1 className="heading">Shop by Category</h1>

        <div className="box-container">
          <div className="box">
            <img src="../images/cat1.jpg" alt="" />
            <div className="content">
              <h3>bonsai</h3>
              <a href="#" className="btn" onClick={openModal}>
                shop now
              </a>
            </div>
          </div>
          {/* Other boxes */}
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

      {/* Modal */}
      {modalOpen && (
        <div className="modal-container">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2 className='steps-heading'>Planting a Bonsai</h2>
            <div className="video-container">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/P52yiXliWvQ?start=2"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    autoplay
  ></iframe>
</div>

<h3 className='steps-heading'><GiBonsaiTree className="bonsai-icon"/>Steps for Planting a Bonsai<GiBonsaiTree className="bonsai-icon"/></h3>
<ul className="steps-list">
  <li>Step 1: Prepare the soil mix</li>
  <li>Step 2: Trim and shape the bonsai tree</li>
  <li>Step 3: Remove the tree from its container</li>
  <li>Step 4: Trim and untangle the roots</li>
  <li>Step 5: Position the tree in the bonsai pot</li>
  <li>Step 6: Fill in with bonsai soil</li>
  <li>Step 7: Water and settle the soil</li>
  <li>Step 8: Apply mulch and place in the appropriate environment</li>
  <li>Step 9: Follow a watering and care routine</li>
  <li>Step 10: Prune and maintain the bonsai tree</li>
</ul>

          </div>
        </div>
      )}
    </>
  );
};

export default Category;
