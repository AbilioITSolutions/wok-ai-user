import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
    InputAdornment,
    CircularProgress,
    Alert,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getAllTreatments, getAllServicesByTReatment } from '../../../Apis/TreatmentsApis';

function SpecialistSearch() {
    const [selectedTreatment, setSelectedTreatment] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [treatments, setTreatments] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [servicesLoading, setServicesLoading] = useState(false);
    const [error, setError] = useState(null);
    const [servicesError, setServicesError] = useState(null);

    // Fetch treatments on component mount
    useEffect(() => {
        const fetchTreatments = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getAllTreatments();

                // Handle API response structure: { status: true, data: [...] }
                const treatmentsArray = response && response.data && Array.isArray(response.data)
                    ? response.data
                    : [];
                setTreatments(treatmentsArray);
            } catch (err) {
                console.error('Failed to fetch treatments:', err);
                setError('Failed to load treatments. Please try again.');
                // Fallback to static data if API fails
                setTreatments([
                    { id: 1, name: 'Hair Transplant' },
                    { id: 2, name: 'Skin Treatment' },
                    { id: 3, name: 'Eye Surgery' },
                    { id: 4, name: 'Dental Care' },
                    { id: 5, name: 'Cosmetic Surgery' },
                    { id: 6, name: 'General Surgery' },
                    { id: 7, name: 'Orthopedic Surgery' },
                    { id: 8, name: 'Cardiology' },
                    { id: 9, name: 'Neurology' },
                    { id: 10, name: 'Gynecology' },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchTreatments();
    }, []);

    // Fetch services when treatment is selected
    useEffect(() => {
        if (selectedTreatment) {
            const fetchServices = async () => {
                try {
                    setServicesLoading(true);
                    setServicesError(null);

                    // Find the selected treatment object to get its ID
                    const selectedTreatmentObj = treatments.find(t => t.name === selectedTreatment);

                    if (selectedTreatmentObj && selectedTreatmentObj.id) {
                        const response = await getAllServicesByTReatment(selectedTreatmentObj.id);

                        // Handle API response structure: { status: true, data: [...] }
                        const servicesArray = response && response.data && Array.isArray(response.data)
                            ? response.data
                            : [];
                        setServices(servicesArray);
                    } else {
                        setServices([]);
                    }
                } catch (err) {
                    console.error('Failed to fetch services:', err);
                    setServicesError('Failed to load services. Please try again.');
                    setServices([]);
                } finally {
                    setServicesLoading(false);
                }
            };

            fetchServices();
        } else {
            // Clear services when no treatment is selected
            setServices([]);
            setSelectedService('');
        }
    }, [selectedTreatment, treatments]);

    const handleTreatmentChange = (event) => {
        setSelectedTreatment(event.target.value);
        // Clear selected service when treatment changes
        setSelectedService('');
    };

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '85%', sm: '90%', md: '1100px' },
                mx: 'auto',
                mt: { xs: 4, sm: 6, md: 8 },
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 4, sm: 5, md: 6 },
                border: '1px solid #e0e0e0',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                backgroundColor: '#fff',
                textAlign: 'center',
            }}
        >
            {/* Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    mb: { xs: 4, sm: 5, md: 6 },
                    color: '#1a1a1a',
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    lineHeight: 1.2,
                }}
            >
                Find Your Specialist
            </Typography>

            {/* Form */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    gap: { xs: 2, sm: 2, md: 3 },
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    mx: 'auto',
                    maxWidth: { xs: '100%', sm: '100%', md: '1000px' },
                }}
            >
                {/* Select Treatment Dropdown */}
                <TextField
                    select
                    value={selectedTreatment}
                    onChange={handleTreatmentChange}
                    placeholder="Select Treatment"
                    variant="outlined"
                    disabled={loading}
                    sx={{
                        flex: { xs: 1, sm: 1, md: 1.5 },
                        backgroundColor: '#fff',
                        '& .MuiOutlinedInput-root': {
                            height: { xs: '48px', sm: '50px', md: '52px' },
                            fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                            borderRadius: '8px',
                            '& fieldset': {
                                borderColor: '#d0d0d0',
                                borderWidth: '1.5px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#007bff',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#007bff',
                                borderWidth: '2px',
                            },
                            '&.Mui-disabled': {
                                backgroundColor: '#f5f5f5',
                                cursor: 'not-allowed',
                            },
                        },
                        '& .MuiSelect-select': {
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '12px',
                        },
                    }}
                    InputProps={{
                        startAdornment: loading ? (
                            <InputAdornment position="start">
                                <CircularProgress size={16} sx={{ color: '#666', mr: 1 }} />
                            </InputAdornment>
                        ) : (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#666', fontSize: { xs: 20, sm: 21, md: 22 } }} />
                            </InputAdornment>
                        ),
                    }}
                >
                    {error ? (
                        <MenuItem disabled>
                            <Alert severity="error" sx={{ width: '100%', py: 0.5 }}>
                                {error}
                            </Alert>
                        </MenuItem>
                    ) : Array.isArray(treatments) && treatments.length > 0 ? (
                        treatments.map((treatment) => (
                            <MenuItem key={treatment.id} value={treatment.name}>
                                {treatment.name}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>
                            No treatments available
                        </MenuItem>
                    )}
                </TextField>

                {/* Choose Service Dropdown */}
                <TextField
                    select
                    value={selectedService}
                    onChange={handleServiceChange}
                    placeholder="Choose Service"
                    variant="outlined"
                    disabled={servicesLoading || !selectedTreatment}
                    sx={{
                        flex: { xs: 1, sm: 1, md: 1.5 },
                        backgroundColor: '#fff',
                        '& .MuiOutlinedInput-root': {
                            height: { xs: '48px', sm: '50px', md: '52px' },
                            fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                            borderRadius: '8px',
                            '& fieldset': {
                                borderColor: '#d0d0d0',
                                borderWidth: '1.5px',
                            },
                            '&:hover fieldset': {
                                borderColor: '#007bff',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#007bff',
                                borderWidth: '2px',
                            },
                            '&.Mui-disabled': {
                                backgroundColor: '#f5f5f5',
                                cursor: 'not-allowed',
                            },
                        },
                        '& .MuiSelect-select': {
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '12px',
                        },
                    }}
                    InputProps={{
                        startAdornment: servicesLoading ? (
                            <InputAdornment position="start">
                                <CircularProgress size={16} sx={{ color: '#666', mr: 1 }} />
                            </InputAdornment>
                        ) : (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#666', fontSize: { xs: 20, sm: 21, md: 22 } }} />
                            </InputAdornment>
                        ),
                    }}
                >
                    {!selectedTreatment ? (
                        <MenuItem disabled>
                            <em>Select a treatment first</em>
                        </MenuItem>
                    ) : servicesError ? (
                        <MenuItem disabled>
                            <Alert severity="error" sx={{ width: '100%', py: 0.5 }}>
                                {servicesError}
                            </Alert>
                        </MenuItem>
                    ) : Array.isArray(services) && services.length > 0 ? (
                        services.map((service) => (
                            <MenuItem key={service.id} value={service.name}>
                                {service.name}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>
                            No services available
                        </MenuItem>
                    )}
                </TextField>

                {/* Search Button */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        px: { xs: 3, sm: 4, md: 5 },
                        py: 1.5,
                        height: { xs: '48px', sm: '50px', md: '52px' },
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                        fontWeight: 600,
                        borderRadius: '12px',
                        textTransform: 'none',
                        minWidth: { xs: '120px', sm: '130px', md: '140px' },
                        boxShadow: '0 4px 16px rgba(0, 123, 255, 0.3)',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#0056b3',
                            boxShadow: '0 6px 20px rgba(0, 123, 255, 0.4)',
                            transform: 'translateY(-1px)',
                        },
                        '&:active': {
                            transform: 'translateY(0)',
                        },
                    }}
                >
                    Search
                </Button>
            </Box>
        </Box>
    );
}

export default SpecialistSearch;
