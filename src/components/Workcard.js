import { NavLink } from "react-router-dom"
import "./Workcardstyle.css"

import React from 'react'

const Workcard = (props) => {
  return (
    <div className="project-card">
               <img src={props.imgsrc} alt="i"/> 
               <h2 className="project-title">{props.title}</h2>
               <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.Source} className="btn">Source
                        </NavLink>
                    </div>
               </div>
            </div>
  )
}

export default Workcard