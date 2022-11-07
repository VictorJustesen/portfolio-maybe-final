import React from 'react'
import './Contact.css'
import { useInView } from 'react-intersection-observer';


export default function Contact(){
    const { ref:first, inView:infirst } = useInView({"triggerOnce": true, "delay": 500 ,"threshold":1});
    return(

<section id="contact"ref={first} className={`${infirst ? "fadeIn contact__container" : "hidden"}`}>
   
    <h1 className='heading'>Mangler i en?</h1>
    <h2 className='subheading'>lad os tage en snak om hvad jeg kan hjælpe med</h2> 
    <a className='btn' href="mailto: gingerlord.and.co@gmail.com">Email</a>
    
</section>
)}