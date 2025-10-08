import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import phoneIcon from './sectionsassets/telephone.svg';

function ContactSection() {
    return (
        <Box
            sx={{
                width: '100%',
                py: { xs: 4, sm: 6, md: 10 },
                px: { xs: 2, sm: 3, md: 0 },
                textAlign: 'center',
                color: '#007bff',
            }}
        >
            {/* Keep content centered */}
            <Container maxWidth="md">
                {/* Icon */}
                <Box
                    component="img"
                    src={phoneIcon}
                    alt="Phone Support"
                    sx={{
                        width: { xs: 80, sm: 90, md: 100 },
                        height: { xs: 80, sm: 90, md: 100 },
                        mb: { xs: 2, sm: 2, md: 1 },
                        mx: 'auto',
                    }}
                />

                {/* Heading */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        mb: { xs: 2, sm: 2, md: 1 },
                        fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' },
                        lineHeight: { xs: '1.3', md: '1.2' },
                    }}
                >
                    We're Here for You
                </Typography>

                {/* Subtext */}
                <Typography
                    sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                        mb: { xs: 4, sm: 4, md: 3 },
                        maxWidth: { xs: '100%', sm: '90%', md: 600 },
                        mx: 'auto',
                        color: '#060606',
                        lineHeight: { xs: '1.4', md: '1.3' },
                        px: { xs: 1, sm: 2, md: 0 },
                    }}
                >
                    Reach out anytime for assistance with our services.
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        fontWeight: 600,
                        px: { xs: 3, sm: 4, md: 4 },
                        py: { xs: 1.2, sm: 1.5, md: 1.5 },
                        borderRadius: '8px',
                        border: '1px solid #0b0b0bff',
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1rem' },
                        minWidth: { xs: '140px', sm: '160px', md: '180px' },
                        '&:hover': {
                            backgroundColor: '#e6e6e6',
                            color: '#000',
                        },
                    }}
                >
                    Request Call Back
                </Button>
            </Container>
        </Box>
    );
}

export default ContactSection;
