import React from 'react'
import './Contact.css'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z94aeqa', 'template_m69edcg', form.current, 'o6zzPIptnVOhWUMDS')

    e.target.reset()
  };

  return (
    <section className='container contact__container' id='contact'>
        <div className='contacttext'> 
    <h1 className='heading'>Brug for hjælp?</h1>
    
    <h2 className='subheading'>send en besked! Så kan vi snakke om det</h2>
    </div>
    <div className='bo'>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact