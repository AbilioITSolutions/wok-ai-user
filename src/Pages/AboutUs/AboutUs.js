import React from 'react'
import AbouttextPage from './Abouttextpage'
import Ourmission from './Ourmission'
import Ourvission from './Ourvission'
import FloatingNavBar from "../../Components/FloatingNavbar"
import Footer from "../../Components/Footer"
import AboutHeropage from './AboutHeropage'


const AboutUs = () => {
  return (
    <div>
      <FloatingNavBar/>
<AboutHeropage/>
      
      <AbouttextPage/>
      <Ourmission/>
      <Ourvission/>
      <Footer/>
      
    </div>
  )
}

export default AboutUs
