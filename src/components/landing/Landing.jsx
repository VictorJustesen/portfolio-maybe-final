import React from 'react'
import './Landing.css'


export default function Landing(){
    
    
   
    
    return(
<section id="landing" className='container landing__container'>

  
  <h4  className='firstlasubheading'>Hej! Mit navn er</h4>

    

    <h1  className='laheading' >Victor Justesen</h1>
    <h2 className='lasubheading'> Jeg har brug for et arbejde</h2>
    <div  className='latext'>
        <p className='text'> Jeg er en ung studerende,
        og leder efter et sted hvor jeg kan bruge, og viderudvikle mine it evner.
        Lige nu er jeg rimelig hooked på at lave hjemmesider og andet front-end arbejde, men det kan hurtigt ændre sig
        </p>
 <div className='space'></div>
        <p  className='text'style={{marginTop:"3px"}}> lyder det spændende? så kan du se mere om mig på siden her</p>
    </div>
    <div className='labtn'>
    <a className='btn'>Resume</a>
    <a href='#contact' className='btn'>Kontakt</a>
    </div>
<div id="about"></div>
</section >
)}