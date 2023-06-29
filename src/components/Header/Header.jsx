import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
    <header>
        <div className="header-1">

            <div className="share">
            <span> follow us : </span>
            <a href="/#" className="fab fa-facebook-f"></a>
            <a href="/#" className="fab fa-twitter"></a>
            <a href="/#" className="fab fa-instagram"></a>
            <a href="/#" className="fab fa-linkedin"></a>
            </div>

            <div className="call">
            <span> Call us : </span>
            <a href="/#">+123-456-789</a>
            </div>

        </div>
        <div className="header-2">

        <a href="/#" className="logo"> <i className="fas fa-leaf" /> Plantify </a>

        <form action="" className="search-bar-container">
            <input type="search" id="search-bar" placeholder="search here..." />
            <label for="search-bar" class="fas fa-search"></label>
        </form>

        </div>

        <div className="header-3">

        <div id="menu-bar" className="fas fa-bars"></div>

        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#category">Category</a>
            <a href="#product">Product</a>
            <a href="#deal">Deal</a>
            <a href="#contact">Contact</a>
        </nav>

        <div class="icons">
            <a href="/#" class="fas fa-shopping-cart"></a>
            <a href="/#" class="fas fa-heart"></a>
            <a href="/#" class="fas fa-user-circle"></a>
        </div>

    </div>
    </header>     
    </>
  )
}

export default Header
