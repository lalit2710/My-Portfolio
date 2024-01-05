import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Tmonial from '../components/Tmonial'

const Testimonials = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="TESTIMONIALS" text="Discover what others say about my work—testimonials that speak volumes."/>
      <Tmonial/>
      <Footer/>
    </div>
  )
}

export default Testimonials