import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import TechStacks from '../components/TechStacks'

const Skills = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SKILLS" text="Explore my skills showcased below for a glimpse of expertise."/>
      <TechStacks/>
      <Footer/>
    </div>
  )
}

export default Skills