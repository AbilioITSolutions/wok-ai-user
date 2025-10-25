import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { Container } from '@mui/system';
 
const AbouttextPage = () => {
  return (
    <Box sx={{ backgroundColor: '#fff',  marginTop:{xs:"100px",md:"100px"}}}>
        <Container maxWidth="lg">
          
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography href="#" color="#368ADD"  sx={{ fontSize: '40px', font:"Albert Sans", fontWeight:"300"}}>
              Who are we?
            </Typography>
          </Box>

         
          <Box sx={{ textAlign: 'center', maxWidth: '100%', mx: 'auto' }}>
            <Typography variant="body1" sx={{ color:"#666", fontSize:"16px", font:"Albert Sans", lineHeight: 1.6, mb: 3 }}>
              We Are We are a Hyderabad-based Healthtech startup on a mission to simplify one of the most complex and stressful decisions in healthcare—choosing the right surgical care. Our platform is designed to empower patients with the clarity they deserve. Whether it's comparing hospitals, understanding the true cost of procedures, or seeking a trusted second opinion, we put the patient at the center of every decision. In a system often clouded by confusion, hidden charges, and limited transparency, we bring a breath of fresh air. Our technology bridges the gap between patients and providers, ensuring that every individual can make informed choices with confidence and peace of mind.
            </Typography>
          </Box>
        </Container>
    </Box>
  );
};

export default AbouttextPage;
