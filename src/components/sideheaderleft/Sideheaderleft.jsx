import React from 'react'
import './Sideheaderleft.css'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFacebook} from "react-icons/bs"
export default function Sideheaderleft(){return(

<div  className='left'>
    <div className='shicons'>
    <a className='linkedin' target="blank" href="https://www.linkedin.com/in/victor-skaarup-justesen-5266281b8/"><BsLinkedin/></a>
    <a className='github' target="blank" href="https://github.com/VictorJustesen"><BsGithub/></a>
    <a className='mail' target="blank" href="mailto: victorjustesenweb@gmail.com"><MdEmail/></a>
    <a className='facebook' target="blank" href="https://www.facebook.com/victor.justesen/"> <BsFacebook/></a>
    </div>
    <a href="mailto: gingerlord.and.co@gmail.com" className='righttext'>Gingerlord.and.co@gmail.com</a>

</div>
)}