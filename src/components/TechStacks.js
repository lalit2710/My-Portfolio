import "./techStackstyle.css"
import React from 'react'
import Javascript from "../Assets/JavaScrpit.jpg"
import Reactpng from "../Assets/Reactjs.png"
import Javapng from "../Assets/java-icon250.png"
import RestAPI from "../Assets/1694684405.jpeg"
import HTMLimg from "../Assets/css3-html51661.jpg"
import bootstrap from "../Assets/BootStrap.png"
import intelliJ from "../Assets/IntelliJ_IDEA_logo_01.png"
import MySQL from "../Assets/mysql.png"
import Postman from "../Assets/Postman_(software).png"
import Springboot from "../Assets/2459546-middle.png"

const TechStacks = () => {
  return (
    <div className="tech-stacks-container">
      <h1>My Tech Stacks</h1>
      <div className="tech-stack-list">
        <div className="tech-stack">
          <img src={HTMLimg} alt="HTML-CSS" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '100%' }}></div>
          </div>
          <p>HTML, CSS</p>
        </div>
        <div className="tech-stack">
          <img src={Javascript} alt="JavaScript" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
          <p>JavaScript</p>
        </div>
        <div className="tech-stack">
          <img src={Reactpng} alt="React" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '80%' }}></div>
          </div>
          <p>React</p>
        </div>
        <div className="tech-stack">
          <img src={Javapng} alt="Java" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
          <p>Java</p>
        </div>
        <div className="tech-stack">
          <img src={Springboot} alt="Springboot" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
          <p>Springboot</p>
        </div>
        <div className="tech-stack">
          <img src={RestAPI} alt="RestAPI" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
          <p>Rest API</p>
        </div>
        <div className="tech-stack">
          <img src={bootstrap} alt="Bootstrap" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
          <p>BootStrap</p>
        </div>
        <div className="tech-stack">
          <img src={MySQL} alt="MySQL" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
          <p>MySQL</p>
        </div>
        <div className="tech-stack">
          <img src={intelliJ} alt="IntelliJ" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '100%' }}></div>
          </div>
          <p>IntelliJ Idea</p>
        </div>
        <div className="tech-stack">
          <img src={Postman} alt="Postman" />
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
          <p>Postman</p>
        </div>
      </div>
    </div>
  )
}

export default TechStacks