import React from "react";
import "./Footer.scss";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn  } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { PiPottedPlantDuotone } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className="full">
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Useful Links</h1>
          <span>Track Order</span>
          <span>Wishlist</span>
          <span>Rewards</span>
          <span>Affiliate</span>
          <span>Corporate</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Privacy Policy</span>
          <span>Refund policy</span>
          <span>Shipping Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className="item">
          <h1>Follow Us</h1>
        <ul class="icons">
            <li><a><FaGithub/></a></li>
            <li><a><FaLinkedinIn/></a></li>
            <li><a><FaInstagram/></a></li>
            <li><a><FaTwitter/></a></li>
            <li><a><FaFacebook/></a></li>
        </ul>
       
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span className="newsletter">
            <form action="#" method="POST" className="NewsLetter">
              <input type="email" name='Email' placeholder="Enter your email" required/>  
              <input type="submit" value="Submit" className='button' style={{
                backgroundColor: '#3A9943',
                color: 'white',
                marginLeft: '10px',
                border:  'black',
                borderRadius: 4,
                cursor: 'pointer',
                opacity: 1
              }}/>
              </form>
           
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo"><PiPottedPlantDuotone className='mark'/>   Plantify</span>
          <span className="copyright">
            © Copyright 2020 - 2023. All Rights Reserved. Designed by OGGNtech
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;