import React from 'react'
import './Contact.css'

import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z94aeqa', 'template_m69edcg', form.current, 'o6zzPIptnVOhWUMDS')

    e.target.reset()
  };
  const { ref, inView } = useInView({"triggerOnce": true, "delay": 300, "threshold":0.5 });

  return (
    <section className={`${inView ? "fadeIn container contact__container" : "hidden"}`} id='contact'>
        <div ref={ref}className="contacttext"> 
    <h1 className='ha heading'>Brug for hjælp?</h1>
    
    <h2 className='subheading'>Send en besked! Så kan vi snakke om det</h2>
    </div>
    <div className='bo'>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Dit navn' required />
          <input type="email" name='email' placeholder='Din email' required />
          <textarea name="message" rows="7" placeholder="Din besked" required ></textarea>
          <button type='submit' className='btn'>Send mail</button>
        </form>
        </div>
    </section>
  )
}

export default Contact