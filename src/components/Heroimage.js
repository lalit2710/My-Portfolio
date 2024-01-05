import "./Heroimagestyle.css"

import React from 'react'
import backgroundImg from "../Assets/coding-bkgrnd.jpg"
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" 
        src={backgroundImg} alt="backgroundImg"/>
      </div>
      <div className="content">
        <p>HI, I'M LALIT KUMAR</p>
        <h1>Full Stack Web Developer.</h1>
        <div>
          <Link to={"/project"} className="btn">Project</Link>
          <Link to={"/contact"} className="btn btn-light">Contact</Link>

        </div>
      </div>
    </div>
  )
}

export default Heroimage;