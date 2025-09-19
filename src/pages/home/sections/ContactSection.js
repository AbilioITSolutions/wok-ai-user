import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import phoneIcon from './sectionsassets/telephone.svg';

function ContactSection() {
    return (
        <Box
            sx={{
                width: '100%',
                py: { xs: 6, md: 10 },
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
                        width: 100,
                        height: 100,
                        mb: 3,
                        mx: 'auto',
                    }}
                />

                {/* Heading */}
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '1.6rem', md: '2rem' },
                    }}
                >
                    We're Here for You
                </Typography>

                {/* Subtext */}
                <Typography
                    sx={{
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        mb: 4,
                        maxWidth: 600,
                        mx: 'auto',
                        color: '#060606',
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
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        border: '1px solid #0b0b0bff',
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
