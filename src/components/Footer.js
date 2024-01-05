import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./FooterStyle.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-section">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                    <p>1507,Antriksha Golf Link</p>
                    <p> Greater Noida,India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+91-8171040340</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>ltk143.lk@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>Summary</h4>
                <p>Mechanical Engineering graduate (2019) turned Full Stack Developer (2022) proficient in Java, Spring Boot, SQL, HTML, CSS, JavaScript, and React. Seeking fresh opportunities to apply my diverse skill set and drive innovation in a dynamic work environment.</p>
                <div className="social">
                    <a href="https://www.facebook.com/ltkloverboy/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                    <a href="https://twitter.com/sady_chauhan" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/lalit-kumar-a85546154/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                    <a href="https://www.instagram.com/sady_chauhan/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                    <a href="https://github.com/lalit2710" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer