import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { Container } from '@mui/system';
 
const AbouttextPage = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', p: 4, marginTop:{xs:"100px",md:"200px"}}}>
        <Container maxWidth="lg">
             <Grid container spacing={4} alignItems="flex-start">
        {/* Left side link */}
        <Grid item size={{xs:12,md:5}}>
          <Link href="#" color="#2B58D6" underline="hover" sx={{ fontSize: '20px', font:"Albert Sans", fontWeight:"400"}}>
            Who are we?
          </Link>
        </Grid>

        {/* Main content */}
        <Grid item size={{xs:12,md:7}}>
          <Box>
            <Typography variant="h4" component="h1" sx={{ fontWeight: '300', mb: 2 , color:"#1E1E23" , fontSize:"30px" , fontWeight:"700" , lineHeight:"30px"}}>
              Book doctor appointments at <br />
              nearby clinics in just a few taps <br />
              with Wok AI.
            </Typography>

            <Typography variant="body2" sx={{ maxWidth: 650, color:"#BBBBBB", fontSize:"13px",font:"Albert Sans"}}>
              With Wok AI, your health is always in safe hands. You can easily find trusted clinics nearby,
              search doctors by specialty, rating, or availability, and book an appointment in just a few clicks—
              no waiting in long queues. Get instant confirmations and reminders, manage your bookings anytime,
              anywhere, and even access your past visit history for better health tracking. Stay connected with
              clinics you trust the most through a fast, secure, and reliable platform—because better care always
              starts with smarter booking.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
            </Container>   
           

    </Box>
  );
};

export default AbouttextPage;
