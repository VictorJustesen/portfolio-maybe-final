import React from 'react'
import './Abilities.css'
import Skill from "./Ability"
import Work from "./work.js"

export default function Abilities(){
    return(
    <section className='container abilities__container'>

        <h1 className='heading' >Kompetencer</h1>
        <h2 className='subheading'>Noget af det jeg kan lide at rode med</h2>
        <div className='portfolio'>
      
            <div>
                
        <div className="skills"> 
            
            <Skill text="ReactJS" classtext="devicon-react-original-wordmark colored" level="mellem"/>
            <Skill text="Python" classtext="devicon-python-plain colored" level="mellem"/>
            <Skill text="HTML5" classtext="devicon-html5-plain colored" level="mellem"/>
            <Skill text="CSS" classtext="devicon-css3-plain colored" level="mellem"/>
            <Skill text="Github" classtext="devicon-github-original-wordmark colored" level="mellem"/>
            <Skill text="Java" classtext="devicon-java-plain colored" level="mellem"/>
            <Skill text="Git" classtext="devicon-git-plain colored" level="mellem"/>
            <Skill text="JavaScript" classtext="devicon-javascript-plain colored" level="mellem"/>
        </div>
        </div>
        <div className="jobsogtekst">   

        
            <div className="works">
              
                <Work jobname="Elon Musk promise timeline" 
                description="Med denne side kan man følge med i Elon musks tidslinje på løfter" tags="React, CSS, HTML, JavaScript"/>
               
                <Work jobname="Portfolio" glink="https://github.com/VictorJustesen/portfolio-Victor-Justesen" tags="JavaScript, React, CSS, HTML" description="Denne hjemmeside "/>
                
                
            
            </div>






        </div>
        </div>
    </section>

    )
}