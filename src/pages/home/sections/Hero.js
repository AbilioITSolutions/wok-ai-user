import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from './sectionsassets/doctorshero.svg';

function Hero() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '105vh',
                width: '100%',
                overflow: 'hidden',
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(150%)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                pb: 10,
                color: '#fff',
            }}
        >
            {/* Enhanced Dark Overlay with subtle gradient */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)',
                    zIndex: 1,
                }}
            />

            {/* Enhanced Bottom Gradient Fade */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '200px',
                    background: 'linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, transparent 100%)',
                    zIndex: 1,
                }}
            />

            {/* Enhanced Text Container */}
            <Box sx={{
                zIndex: 2,
                textAlign: 'center',
                // px: 2,
                // mb: 4,
                animation: 'fadeInUp 1s ease-out'
            }}>
                <Typography variant="h3" sx={{
                    fontWeight: 'bold',
                    color: '#368ADD',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    
                    fontWeight: '700',
                    letterSpacing: '0.5px'
                }}>
                    Find the right surgery at the right price
                </Typography>
                <Typography variant="h5" sx={{
                    color: 'black',
                    fontSize: { xs: '1.1rem', sm: '1.4rem' },
                    lineHeight: 1.6,
                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)',
                    mx: 'auto',
                    fontWeight: '440',
                }}>
                    Compare surgery costs across India's best hospitals. Get second opinions. Make informed decisions
                </Typography>
            </Box>

            {/* Subtle animation styling */}
            <style>
                {`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
        </Box>
    );
}

export default Hero;