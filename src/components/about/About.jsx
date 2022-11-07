import React from 'react'
import './About.css'
import ME from '../../assets/IMG_1160.jpg'
import { useInView } from 'react-intersection-observer';

export default function About(){
    
    const { ref:first, inView:infirst } = useInView({"triggerOnce": true, "delay": 350 ,"threshold":1});
    const { ref:second, inView:insecond } = useInView({"triggerOnce": true, "delay": 1200 ,});
    const { ref:third, inView:inthird } = useInView({"triggerOnce": true, "delay": 500,"threshold":0.5 });
    const { ref:fourth, inView:infourth } = useInView({"triggerOnce": true, "delay": 750,"threshold":0.5 });
    
    return(
        
<section  className='container about__container'>
<h1 ref={first} className={`${infirst ? "fadeIn heading" : "hidden"}`}>Om mig</h1>

    <div className='aimgb'>

    <img ref={second} className={`${insecond ? "fadeIn aimg" : "hidden"}`} src={ME} alt="me"/>
    
   <div className='abouttext'>
    <h5 ref={third} className={`${inthird ? "fadeIn text" : "hidden"}`}>
Jeg er en ung mand på 21 som nyder liver på DTU hvor jeg læser softwareteknologi.
 Jeg har dog et stort ønske om at kunne bruge mine evner i et mere proffesionelt miljø,
og jeg søger derfor et studiejob.

    </h5>
    <div className='space'></div>
    <h5 ref={fourth} className={`${infourth ? "fadeIn text" : "hidden"}`}>
    Jeg kan godt lide at smarte løsninger som er scalerbare, justerbare og giver mening. 
    Jeg kan lidt af hvert, med ekstra kompetence inden for web development. 
    Hvis du mangler en som lærer hurtigt så tøv ikke med at skrive til mig!  
    </h5>
    </div>
    </div>
</section>

)}