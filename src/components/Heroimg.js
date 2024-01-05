import "./HeroimgStyle.css";
import Profileimg from "../Assets/Myself.png"
import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero-img">
        <div className="profile-img">
            <img src={Profileimg} alt="Lalit-Kumar"/>
        </div>
        <div className="heading">
                <h1>ABOUT MYSELF</h1>
                <p>Hello, I'm Lalit Kumar, a passionate software enthusiast with a unique journey into the world of technology. My professional voyage started with a B.Tech in Mechanical Engineering back in 2019. Initially diving into the mechanical realm, I embarked on a fulfilling journey at MSD Technologies as a Technical Engineer.</p>
                <p>While at MSD, I stumbled upon an exciting opportunity that ignited my passion for IT. Exploring the realms of website creation and more, I found myself increasingly drawn towards software development. This pivotal realization led me to pursue a Full Stack Development course at AccioJob from Feb 2022 to Feb 2023.</p>
                <p> During this transformative period, I embraced both backend and frontend development. Crafting a Ticketing Application with Java, Spring Boot, MySQL, and RestAPIs exemplified my backend prowess. Additionally, I delved into the creation of engaging projects like a Snake game and a Text Editor akin to Notepad using Java and Java Swing.</p> 
                <p> Venturing into frontend development, I dabbled in a Weather API project. With this, I curated a tool that provides detailed location-specific weather information—just by entering a location name—offering insights like current temperature, longitude, and latitude.My journey continued as I joined AajTak as an IT Executive in Dec 2022, yet unforeseen circumstances led to a redirection in my path in Aug 2023.</p> 
                <p> Currently, I am wholeheartedly committed to transitioning into a role as a Software Developer/Engineer. Equipped with the skills honed through my diverse experiences, I'm eager to contribute my expertise and passion to innovative projects in the realm of software development.</p>
            </div>
    </div>
  )
}

export default Heroimg