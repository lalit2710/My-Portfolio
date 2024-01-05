import "./Workcardstyle.css"
import Workcard from "./Workcard"
import WorkAPI from "./WorkAPI"
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-headings">Projects</h1>
        <div className="project-container">
            {WorkAPI.map((val,ind) =>{
                return(
                    <Workcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    Source={val.Source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work