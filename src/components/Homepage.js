import { Link } from "react-router-dom"
import "./Homepagestyle.css"
import pic1 from "../Assets/fullstack.webp"
import pic2 from "../Assets/frontend.webp"
import pic3 from "../Assets/Springboot.jpg"

import React from 'react'

const Homepage = () => {
  return (
    <div className="Homepage">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Lalit Kumar, a Mechanical Engineer turned Full Stack Developer passionate about software, seeking innovative roles in tech projects.</p>
            <Link to="./contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="img-stack top">
                    <img src= {pic1} className="img" alt="Dev"/>
                </div>
                <div className="img-stack middle">
                    <img src= {pic2} className="img" alt="D"/>
                </div>
                <div className="img-stack bottom">
                    <img src= {pic3} className="img" alt="Developer"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Homepage