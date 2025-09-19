import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import img1 from '../ASSETS/logo2.png';


const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#368ADD", mt: "40px", pt: 4, pb: 2 }}>
            <Container>
                <Grid container spacing={4} alignItems="flex-start">

                    <Grid item xs={12} sm={4} md={3}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                            <img src={img1} alt="Logo" style={{ width: '120px', height: "100px" }} />

                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant='h6' sx={{ color: "#fff", mb: 1 }}>
                            Useful Links
                        </Typography>
                        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, color: "#fff" }}>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Find the Doctor</li>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant='h6' sx={{ color: "#fff", mb: 1 }}>
                            Categories
                        </Typography>
                        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, color: "#fff" }}>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Find the Doctor</li>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={3}>
                        <Typography variant='h6' sx={{ color: "#fff", mb: 1 }}>
                            Contact Us
                        </Typography>
                        <Typography variant='body2' sx={{ color: "#fff", mb: 1 }}>
                            📞 +91 7345768412
                        </Typography>
                        <Typography variant='body2' sx={{ color: "#fff", mb: 1 }}>
                            ✉️ help@wokai.com
                        </Typography>
                        <Typography variant='body2' sx={{ color: "#fff" }}>
                            🏢 Capital Pk Road, Ayyappa Society, Vip Hills,<br />
                            Silicon Valley, Madhapur, Hyderabad,<br />
                            Telangana 500081
                        </Typography>
                    </Grid>
                </Grid>
            </Container>


            <Box sx={{ backgroundColor: "#227AD2", mt: 4, py: 1 }}>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Typography variant='body2' color="#fff" textAlign={{ xs: 'center', sm: 'left' }}>
                                © 2010–2025 Freepik Company S.L. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant='body2' color="#fff" textAlign={{ xs: 'center', sm: 'right' }}>
                                Terms & Conditions
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
