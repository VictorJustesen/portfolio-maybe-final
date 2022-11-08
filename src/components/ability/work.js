import React from "react"

import { useInView } from 'react-intersection-observer';

export default function Work(props){

    const { ref:first, inView:infirst } = useInView({"triggerOnce": true, "delay": 600, "threshold":0.2,  });

    return(
        <div ref={first}className={`${infirst ? "fadeIn work" : "hidden"}`}>
    <div className="job" >
        <h2 className="jobname">{props.jobname}</h2>
        <div className="jobdesc">{props.description}</div>
      
        <div className="buttons">
            <a className="btn" target="blank" href="">Demo</a>
            <a className="btn" target="blank" href={props.glink}>Github</a>
        </div >
        <div className="jobdesc">{props.tags}</div>
        </div >
    </div>



    )
}