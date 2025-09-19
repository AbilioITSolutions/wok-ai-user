// Home.js
import React from 'react'
import Navbar from '../../components/Navbar'
import { Box } from '@mui/material'
import Hero from './sections/Hero'
import SpecialistSearch from './sections/SpecialistSearch'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import StoriesSection from './sections/StoriesSection'
import PartnersSection from './sections/PartnersSection'
import ContactSection from './sections/ContactSection'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <Box sx={{ width: '100%', overflowX: 'hidden', p: 0, m: 0 }}>
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