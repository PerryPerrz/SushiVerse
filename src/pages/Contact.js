import React from 'react'
import BannerImage from '../assets/ramen.jpeg'
import { useForm, ValidationError } from '@formspree/react';

import '../styles/Contact.css'

function Contact() {
    const [state, handleSubmit] = useForm("mdovjqrd");

    return (
        <div
            className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className='rightSide'>
                <h1> Contact Us</h1>

                <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        placeholder="Enter full name..."
                        name="name"
                        type="text"
                        pattern='[A-Za-z\s]+'
                        required
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        placeholder="Enter email..."
                        name="email"
                        type="email"
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Enter message..."
                        rows="6"
                        name="message"
                        type="text"
                        pattern='[A-Za-z\s]+'
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button type="submit" disabled={state.submitting || state.succeeded}><span>{!state.succeeded && !state.submitting ? "Submit" : state.succeeded ? "Submitted !" : "Submit in progress..."}</span></button>
                </form>
            </div>
        </div>
    )
}

export default Contact