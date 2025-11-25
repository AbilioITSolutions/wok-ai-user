import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import logo1 from './sectionsassets/1.svg';
import logo2 from './sectionsassets/2.svg';
import logo3 from './sectionsassets/3.svg';
import logo4 from './sectionsassets/4.svg';
import logo5 from './sectionsassets/5.svg';

function PartnersSection() {
    const firstRow = [logo1, logo2, logo3];
    const secondRow = [logo4, logo5];

    const logoStyle = {
        width: 200,
        height: 100,
        borderRadius: 2.5, // 20px
        border: '2px solid #fff',
        objectFit: 'contain',
        filter: 'brightness(0) invert(1)',
        transition: 'transform 0.2s linear',
        padding: 2,
    };

    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#007bff',
                py: { xs: 6, md: 10 },
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem' },
                        lineHeight: 1.2,
                    }}
                >
                    Together towards better care.
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                        mb: { xs: 4, md: 6 },
                        maxWidth: 700,
                        mx: 'auto',
                        px: { xs: 1, sm: 2 },
                    }}
                >
                    Collaborating with clients who share our vision for health.
                </Typography>

                {/* First Row: 3 logos */}
                <Grid container spacing={4} justifyContent="center" mb={4}>
                    {firstRow.map((logo, index) => (
                        <Grid item key={index}>
                            <Box
                                component="img"
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                sx={logoStyle}
                            />
                        </Grid>
                    ))}
                </Grid>

                {/* Second Row: 2 logos */}
                <Grid container spacing={4} justifyContent="center">
                    {secondRow.map((logo, index) => (
                        <Grid item key={index}>
                            <Box
                                component="img"
                                src={logo}
                                alt={`Partner ${index + 4}`}
                                sx={logoStyle}
                              
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default PartnersSection;
