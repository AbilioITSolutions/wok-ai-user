import React from 'react';
import {
    Box,
    Typography,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import bgImage from './Sectionsassets/background.jpg';
import doctorImage from './Sectionsassets/doctor.png';

function AboutSection() {
    return (
        <Box
            sx={{
                maxHeight: '700px',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 8, sm: 10, md: 12 },
                gap: { xs: 6, md: 8 },
                my: 6
            }}
        >
            {/* Left Side: Image Layering */}
            <Box
                sx={{
                    position: 'relative',
                    width: { xs: '100%', md: '50%' },
                    height: { xs: 320, sm: 400, md: 460 },
                }}
            >
                {/* Background Image */}
                <Box
                    component="img"
                    src={bgImage}
                    alt="Background"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        zIndex: 1,
                    }}
                />

                {/* Foreground Image */}
                <Box
                    component="img"
                    src={doctorImage}
                    alt="Doctor"
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: { xs: '65%', md: '75%' },
                        zIndex: 2,
                    }}
                />
            </Box>

            {/* Right Side: Text Content */}
            <Box
                sx={{
                    pb: 4,
                    width: { xs: '100%', md: '45%' },
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        mb: 3,
                        color: '#007bff',
                        fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                >
                    About Wok AI Healthcare
                </Typography>

                <Typography sx={{ mb: 1, color: '#444', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    We believe that good health starts with easy access to trusted care. Our platform connects you with experienced doctors specializing in hair and eye health, ensuring you receive the right treatment at the right time.
                </Typography>

                <Typography sx={{ mb: 1, color: '#444', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    From booking appointments to finding the best specialists, we make the entire process simple and stress-free.
                </Typography>

                {/* Bullet Points with Green Dots */}
                <List sx={{ mb: 1, mt: 1 }}>
                    {[
                        'Easy doctor booking in just a few steps',
                        'Verified and trusted hair & eye specialists',
                        'Seamless experience with quick appointments',
                        'Focused on your health, confidence, and well-being',
                    ].map((text, index) => (
                        <ListItem
                            key={index}
                            disableGutters
                            sx={{ paddingY: 0.5 }} // Reduce vertical padding
                        >
                            <ListItemIcon sx={{ minWidth: 32 }}>
                                <Box
                                    sx={{
                                        width: 15,
                                        height: 15,
                                        borderRadius: '50%',
                                        backgroundColor: '#17d51eff',
                                        marginRight: 1,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{
                                    sx: {
                                        color: '#333',
                                        fontSize: '1rem',
                                        lineHeight: 1.4, // Tighter line spacing
                                        margin: 0, // Remove extra margin
                                    },
                                }}
                            />
                        </ListItem>
                    ))}
                </List>


                {/* Button */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        px: 4,
                        py: 1.25,
                        fontSize: '0.95rem',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
                        '&:hover': {
                            backgroundColor: '#0056b3',
                        },
                    }}
                >
                    Read More 🡢
                </Button>
            </Box>
        </Box>
    );
}

export default AboutSection;