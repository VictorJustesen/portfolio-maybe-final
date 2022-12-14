import React from "react"

import { useInView } from 'react-intersection-observer';

export default function Ability(props){

  const { ref:first, inView:infirst } = useInView({"triggerOnce": true, "delay": 600, "threshold":0.2 });

    return(

        <div ref={first}className={`${infirst ? "fadeIn skill" : "hidden"}`}>
            
          
              
          <div className="devicons">
            <i class={props.classtext}></i>
            </div>
           <div className="skilldesc">{props.text}</div>



    </div>



    )
}