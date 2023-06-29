import React from 'react'
import "./Contact.jsx"

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">

<h1 className="heading">get in touch</h1>

<div className="row">

    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4924.514770116857!2d72.83754807308758!3d19.10763427995263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1687943162537!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

    <form action="">

        <div className="inputBox">
            <input type="text" required/>
            <label>name</label>
        </div>
        <div className="inputBox">
            <input type="email" required/>
            <label>email</label>
        </div>
        <div className="inputBox">
            <input type="number" required/>
            <label>number</label>
        </div>
        <div className="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
        </div>

        <input type="submit" value="send message" class="btn"/>

    </form>

</div>

</section>

    </>
  )
}

export default Contact
