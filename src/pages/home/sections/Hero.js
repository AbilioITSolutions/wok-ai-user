import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from './sectionsassets/doctors.jpeg';

function Hero() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                pb: 10,
                color: '#fff',
            }}
        >
            {/* Dark Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                }}
            />

            {/* Bottom White Gradient Fade */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '150px',
                    background: 'linear-gradient(to top, white, transparent)',
                    zIndex: 1,
                }}
            />

            {/* Text */} <Box sx={{ zIndex: 2, textAlign: 'center', px: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#007bff' }}>
                    First the right surgery at the right price
                </Typography>
                <Typography variant="h5" sx={{ color: 'black' }}>
                    Compare surgery costs across India's best hospitals. Get second opinions. Make informed decisions
                </Typography>
            </Box>
        </Box>
    );
}

export default Hero;
