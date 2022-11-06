import React from 'react'
import './About.css'
import ME from '../../assets/IMG_1160.jpg'

export default function About(){return(
    
        
<section className='container about__container'>
<h1 id="about"className='heading'>Om mig</h1>
    <div className='aimgb'>

    <img className='aimg' src={ME} alt="me"/>
    
   <div>
    <h5 className='text about__text'>
Jeg er en ung mand på 21 som nyder liver på DTU hvor jeg læser softwareteknologi.
 Jeg har dog et stort ønske om at kunne bruge mine evner i et mere proffesionelt miljø,
og jeg søger derfor et studiejob.


    </h5>
    
    <h5 className='text about__text'>
    Jeg kan godt lide at smarte løsninger som er scalerbare, justerbare og giver mening. 
    Jeg kan lidt af hvert, med ekstra kompetence inden for web development. 
    Hvis du mangler en som lærer hurtigt så tøv ikke med at skrive til mig!  
    </h5>
    </div>
    </div>
</section>

)}