import React from "react"


export default function Work(props){
    return(
        <div className="work">
    <div className="job" >
        <h2 className="jobname">{props.jobname}</h2>
        <div className="jobdesc">{props.description}</div>
      
        <div className="buttons">
            <a className="btn" href="">Demo</a>
            <a className="btn" href={props.glink}>Github</a>
        </div>
        {props.tags}
        </div>
    </div>



    )
}