import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
} from '@mui/material';

const healthcareSpecialties = {
    specialties: [
        'Cardiology',
        'Orthopedics',
        'Neurology',
        'Gynecology',
        'Pediatrics',
        'Dermatology',
        'Urology',
        'Gastroenterology',
        'Psychiatry',
        'General Surgery',
    ],
};

function SpecialistSearch() {
    const [selectedSpecialty, setSelectedSpecialty] = useState('');

    const handleChange = (event) => {
        setSelectedSpecialty(event.target.value);
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '95%', sm: '90%', md: '1300px' },
                mx: 'auto',
                mt: { xs: 6, sm: 8, md: 10 },
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 3, sm: 5, md: 6 },
                border: '1px solid #e0e0e0',
                borderRadius: { xs: '12px', md: '16px' },
                boxShadow: {
                    xs: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    md: '0 8px 24px rgba(0, 0, 0, 0.06)',
                },
                backgroundColor: '#fff',
                textAlign: 'center',
            }}
        >
            {/* Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 600,
                    mb: { xs: 3, sm: 4, md: 4 },
                    color: '#333',
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
                    lineHeight: 1.2,
                }}
            >
                Find Your Specialist
            </Typography>

            {/* Form */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 2, md: 3 },
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    maxWidth: 900,
                    mx: 'auto',
                }}
            >
                {/* Dropdown */}
                <TextField
                    select
                    value={selectedSpecialty}
                    onChange={handleChange}
                    label="Choose clinic, doctor, treatment"
                    variant="outlined"
                    fullWidth
                    sx={{
                        flex: 1,
                        backgroundColor: '#f9f9f9',
                        '& .MuiOutlinedInput-root': {
                            height: { xs: '48px', sm: '52px', md: '56px' },
                            fontSize: { xs: '0.95rem', md: '1rem' },
                        },
                        '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.95rem', md: '1rem' },
                        },
                    }}
                >
                    {healthcareSpecialties.specialties.map((specialty) => (
                        <MenuItem key={specialty} value={specialty}>
                            {specialty}
                        </MenuItem>
                    ))}
                </TextField>

                {/* Button */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        flex: 1,
                        backgroundColor: '#007bff',
                        color: '#fff',
                        px: { xs: 3, sm: 4, md: 5 },
                        py: { xs: 1.75, sm: 1.75, md: 2 },
                        height: { xs: '48px', sm: '52px', md: '56px' },
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        fontWeight: 500,
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#0056b3',
                            boxShadow: '0 6px 16px rgba(0, 123, 255, 0.4)',
                        },
                        '&:active': {
                            transform: 'translateY(1px)',
                        },
                    }}
                >
                    Find a Doctor
                </Button>
            </Box>
        </Box>
    );
}

export default SpecialistSearch;
