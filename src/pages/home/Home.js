// Home.js
import React from 'react'

import Navbar from '../../Components/FloatingNavBar'
import { Box } from '@mui/material'
import Hero from './Sections/Hero'
import SpecialistSearch from './Sections/SpecialistSearch'
import AboutSection from './Sections/AboutSection'
import ServicesSection from './Sections/ServicesSection'
import StoriesSection from './Sections/StoriesSection'
import PartnersSection from './Sections/PartnersSection'
import ContactSection from './Sections/ContactSection'
import Footer from '../../Components/Footer'

const Home = () => {
    return (
        <Box >
            <Navbar />
            <Hero />
            <SpecialistSearch />
            <AboutSection />
            <ServicesSection />
            <StoriesSection />
            <PartnersSection />
            <ContactSection />
            <Footer />
        </Box>
    )
}
export default Home