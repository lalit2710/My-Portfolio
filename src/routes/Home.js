import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Homepage from '../components/Homepage'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage/>
        <Homepage/>
        <Footer/>
    </div>
  )
}

export default Home