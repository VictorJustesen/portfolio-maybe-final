import React from 'react'
import './Landing.css'


export default function Landing(){return(
<section  className='container landing__container'>
    <h4 className='lasubheading'>Hej! Mit navn er</h4>

    <h1 className='laheading' >Victor Justesen</h1>
    <h2 className='lasubheading'> Jeg har brug for et arbejde</h2>
    <div className='latext'>
        <p className='text'> Jeg studerer software teknologi på dtu,
        og leder efter et sted hvor jeg kan bruge, og viderudvikle mine it evner.
        lige nu er jeg bedst til web development men det kan hurtig ændre sig.

        </p>

        <p className='text'style={{marginTop:"3px"}}> lyder det spændende? så kan du se mere om mig på siden her</p>
    </div>
    <div className='labtn'>
    <a className='btn'>Resume</a>
    <a className='btn'>Kontakt</a>
    </div>
</section>
)}