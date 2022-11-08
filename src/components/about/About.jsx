import React from 'react'
import './About.css'
import ME from '../../assets/IMG_1160.jpg'
import { useInView } from 'react-intersection-observer';

export default function About(){
    
    const { ref:first, inView:infirst } = useInView({"triggerOnce": true,"delay": 400, "threshold":0.05});
    const { ref:second, inView:insecond } = useInView({"triggerOnce": true, "delay": 1000, "rootMargin":"-20% 0px"});
    const { ref:third, inView:inthird } = useInView({"triggerOnce": true, "delay": 950,"threshold":1 });
    const { ref:fourth, inView:infourth } = useInView({"triggerOnce": true, "delay": 1300,"threshold":0.5 });
    
    return(
        
<section  className='container about__container'>
<h1  className={`${infirst ? "fadeIn heading" : "hidden"}`}>Om mig</h1>

    <div ref={first} className='aimgb'>

    <img ref={second} className={`${insecond ? "fadeIn aimg" : "hidden"}`} src={ME} alt="me"/>
    
   <div className='abouttext'>
    <h5  className={`${inthird ? "fadeIn text" : "hidden"}`}>
Jeg er en ung mand på 21 som nyder liver på DTU hvor jeg læser softwareteknologi.
 Jeg har dog et stort ønske om at kunne bruge mine evner i et mere proffesionelt miljø,
og jeg søger derfor et studiejob.

    </h5>
    <div ref={third} className='space'></div>
    <h5  className={`${infourth ? "fadeIn text" : "hidden"}`}>
    Jeg kan godt lide at smarte løsninger som er scalerbare, justerbare og giver mening. 
    Jeg kan lidt af hvert, med ekstra kompetence inden for web development. 
    Hvis du mangler en som lærer hurtigt så tøv ikke med at skrive til mig!  
    <div ref={fourth}></div>
    </h5>
    </div>
    </div>
</section>

)}