import React from 'react'
import './Abilities.css'
import Skill from "./Ability"
import Work from "./work.js"
import { useInView } from 'react-intersection-observer';

export default function Abilities(){

    const { ref:first, inView:infirst } = useInView({"triggerOnce": true, "delay": 250, "threshold":1 });
    const { ref:second, inView:insecond } = useInView({"triggerOnce": true, "delay":  500,"threshold":1 });

    return(
    <section  className='container abilities__container'>

        <h1 id="abilites" ref={first} className={`${infirst ? "fadeIn heading" : "hidden"}`} >Kompetencer</h1>
        <h2 ref={second} className={`${insecond ? "fadeIn subheading" : "hidden"}`}>Noget af det jeg kan lide at rode med</h2>
        <div className='portfolio'>
      
            
                
        <div className="skills"> 
            
            <Skill text="ReactJS" classtext="devicon-react-original colored" level="mellem"/>
            <Skill text="Python" classtext="devicon-python-plain colored" level="mellem"/>
            <Skill text="HTML5" classtext="devicon-html5-plain colored" level="mellem"/>
            <Skill text="CSS" classtext="devicon-css3-plain colored" level="mellem"/>
            <Skill text="Github" classtext="devicon-github-original colored" level="mellem"/>
            <Skill text="Java" classtext="devicon-java-plain colored" level="mellem"/>
            <Skill text="Git" classtext="devicon-git-plain colored" level="mellem"/>
            <Skill text="JavaScript" classtext="devicon-javascript-plain colored" level="mellem"/>
        </div>
        
      

        
            <div className="works">
              
                <Work jobname="Elon Musk promise timeline" 
                description="Med denne side kan man følge med i Elon musks tidslinje på løfter" tags="React, CSS, HTML, JavaScript"/>
               
                <Work jobname="Portfolio" glink="https://github.com/VictorJustesen/portfolio-Victor-Justesen" tags="JavaScript, React, CSS, HTML" description="Denne hjemmeside "/>
                
                <Work jobname="Portfolio" glink="https://github.com/VictorJustesen/portfolio-Victor-Justesen" tags="JavaScript, React, CSS, HTML" description="Denne hjemmeside "/>

            </div>






        
        </div>
    </section>

    )
}