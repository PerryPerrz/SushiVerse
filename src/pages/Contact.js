import React from 'react'
import BannerImage from '../assets/ramen.jpeg'

import '../styles/Contact.css'

function Contact() {
    return (
        <div
            className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className='rightSide'>
                <h1> Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />

                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" />

                    <label htmlFor="message">Message</label>
                    <textarea rows="6" name="message" placeholder="Enter message..." type="text" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact