import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import ContactForum from '../components/ContactForum'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT ME" text="Let's have a chat"/>
      <ContactForum/>
      <Footer/>
    </div>
  )
}

export default Contact