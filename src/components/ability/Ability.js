import React from "react"

export default function Ability(props){
    return(

        <div className="skill">
            
          
              
          <div className="devicons">
            <i class={props.classtext}></i>
            </div>
           <div className="skilldesc">{props.text}</div>



    </div>



    )
}