
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../Context/BookingContext";
import { getDoctorsByClinicTreatmentService } from "../../Apis/TreatmentsApis";
import {
    Box,
    Typography,
    Breadcrumbs,
    Link,
    Card,
    Avatar,
    Chip,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    Container,
    Stack,
    CircularProgress,
    Alert
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const BookAppointment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { bookingData, updateBookingData } = useBooking();
    const [selectedDoctor, setSelectedDoctor] = useState(1);
    const [doctorsData, setDoctorsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Log state data received from navigation
    console.log("BookAppointment - Navigation state:", location.state);
    console.log("BookAppointment - Clinic ID:", location.state?.clinicId);
    console.log("BookAppointment - Treatment ID:", location.state?.treatmentId);
    console.log("BookAppointment - Service ID:", location.state?.serviceId);
    console.log("BookAppointment - Service Name:", location.state?.serviceName);

    const handleDoctorSelect = (doctorId) => {
        console.log('Selecting doctor:', doctorId);
        setSelectedDoctor(doctorId);
        updateBookingData('selectedDoctor', doctorId);
        console.log('Updated booking data:', bookingData);
    };

    // Load data from context on mount
    useEffect(() => {
        console.log('Booking data on mount:', bookingData);
        if (bookingData.selectedDoctor) {
            console.log('Loading selectedDoctor from context:', bookingData.selectedDoctor);
            setSelectedDoctor(bookingData.selectedDoctor);
        }
    }, []);

    // Fetch doctors data from API
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);
                const clinicId = location.state?.clinicId;
                const treatmentId = location.state?.treatmentId;
                const serviceId = location.state?.serviceId;

                if (clinicId && treatmentId && serviceId) {
                    const response = await getDoctorsByClinicTreatmentService(clinicId, treatmentId, serviceId);
                    console.log('Doctors API response:', response);

                    // Transform API data to match component structure
                    if (response && response.doctors && Array.isArray(response.doctors)) {
                        const transformedDoctors = response.doctors
                            .filter(doctor => doctor.status && !doctor.isDeleted) // Only active doctors
                            .map(doctor => ({
                                id: doctor.id,
                                name: doctor.name,
                                rating: doctor.rating || 4.9,
                                reviewCount: doctor.reviewsCount || 0,
                                experience: doctor.experience || 10,
                                specializations: doctor.doctorServices
                                    ? doctor.doctorServices
                                        .filter(service => service.status && service.treatment)
                                        .map(service => service.treatment.name)
                                    : ["General Practitioner"],
                                availability: `Available from ${doctor.start_time} - ${doctor.end_time}`,
                                isAvailable: doctor.status,
                                avatar: doctor.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
                            }));
                        setDoctorsData(transformedDoctors);
                    } else {
                        setDoctorsData([]);
                    }
                } else {
                    console.warn('Missing required parameters for fetching doctors');
                    setDoctorsData([]);
                }
            } catch (error) {
                console.error('Error fetching doctors:', error);
                setError('Failed to load doctors. Please try again.');
                setDoctorsData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, [location.state]);

    const steps = [
        { number: 1, title: "Select Doctor", subtitle: "Choose your healthcare provider", active: true },
        { number: 2, title: "Schedule", subtitle: "Select appointment slot", active: false },
        { number: 3, title: "Patient Info", subtitle: "Confirm your details", active: false },
        { number: 4, title: "Payment", subtitle: "Choose payment method", active: false },
        { number: 5, title: "Confirmation", subtitle: "Review and confirm", active: false }
    ];

    return (
        <>
            <Navbar />
            <Box sx={{ pt: 16, pb: 3, backgroundColor: '#fafbfc', minHeight: '100vh' }}>
                <Container maxWidth="lg">
                    {/* Breadcrumbs */}
                    <Breadcrumbs separator={<ChevronRightIcon fontSize="small" />} sx={{ mb: 2 }}>
                        <Link href="/doctorlist" sx={{ color: '#666', textDecoration: 'none' }}>
                            Find a Doctor
                        </Link>
                        <Typography color="text.primary">Layers Clinic</Typography>
                    </Breadcrumbs>


                    <Box sx={{ mb: 4 }}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'flex-start', sm: 'flex-start' },
                            mb: 1,
                            gap: { xs: 2, sm: 0 }
                        }}>
                            <Typography variant="h4" sx={{ 
                                fontWeight: 'bold',
                                fontSize: { xs: '1.5rem', sm: '2rem' },
                                color: '#333'
                            }}>
                                Book an Appointment
                            </Typography>
                            
                            {/* Right side info */}
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: { xs: 'flex-start', sm: 'center' }, 
                                gap: 2,
                                width: { xs: '100%', sm: 'auto' }
                            }}>
                                <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: 1,
                                    p: 1.5,
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 1,
                                    backgroundColor: '#f8f9fa',
                                    width: { xs: '100%', sm: 'auto' }
                                }}>
                                    <AccessTimeIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
                                    <Typography sx={{ color: '#666', fontSize: '0.9rem' }}>
                                        Average booking time: 5 minutes
                                    </Typography>
                                </Box>
                                
                                <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: 1
                                }}>
                                    <HelpOutlineIcon sx={{ color: 'red', fontSize: '1.2rem' }} />
                                    <Typography sx={{ color: 'red', fontSize: '0.9rem' }}>
                                        Need help?
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                        <Typography variant="body1" sx={{ 
                            color: '#666',
                            fontSize: '1rem',
                            mb: 4
                        }}>
                            Schedule your consultation with our qualified healthcare professionals
                        </Typography>
                    </Box>

                    {/* Progress Steps */}
                    <Card sx={{
                        borderRadius: 2,
                        boxShadow: 'none',
                        border: '1px solid #e0e0e0',
                        backgroundColor: '#ffffff',
                        mb: 4,
                        overflow: 'auto'
                    }}>
                        <Box sx={{ 
                            p: { xs: 2, sm: 3 },
                            display: 'flex', 
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'flex-start',
                            gap: { xs: 2, md: 4 },
                            justifyContent: 'space-between'
                        }}>
                            {steps.map((step, index) => (
                                <Box key={step.number} sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center',
                                    gap: 2,
                                    flex: 1,
                                    width: { xs: '100%', md: 'auto' }
                                }}>
                                    {/* Circle */}
                                    <Box sx={{
                                        width: { xs: 40, sm: 60 },
                                        height: { xs: 40, sm: 60 },
                                        borderRadius: '50%',
                                        backgroundColor: step.active ? '#368ADD' : '#e0e0e0',
                                        color: step.active ? '#fff' : '#999',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1.2rem', sm: '1.4rem' },
                                        flexShrink: 0
                                    }}>
                                        {step.number}
                                    </Box>
                                    
                                    {/* Text */}
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.9rem', sm: '1rem' },
                                            color: step.active ? '#368ADD' : '#333',
                                            mb: 0.5
                                        }}>
                                            {step.title}
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                            color: '#666',
                                        }}>
                                            {step.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Card>

                    {/* Select Doctor Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            mb: 3,
                            color: '#333'
                        }}>
                            Select Doctor
                        </Typography>

                        {/* Debug info */}
                       

                        {/* Loading State */}
                        {loading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                                <CircularProgress />
                            </Box>
                        )}

                        {/* Error State */}
                        {error && (
                            <Alert severity="error" sx={{ mb: 3 }}>
                                {error}
                            </Alert>
                        )}

                        {/* Doctors List */}
                        {!loading && !error && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {doctorsData.length === 0 ? (
                                    <Typography sx={{ textAlign: 'center', py: 4, color: '#666' }}>
                                        No doctors available for the selected criteria.
                                    </Typography>
                                ) : (
                                    doctorsData.map((doctor) => (
                                        <Card
                                            key={doctor.id}
                                            onClick={() => handleDoctorSelect(doctor.id)}
                                            sx={{
                                                borderRadius: 2,
                                                border: selectedDoctor === doctor.id ? '2px solid #368ADD' : '1px solid #e0e0e0',
                                                backgroundColor: '#ffffff',
                                                p: { xs: 2, sm: 3 },
                                                display: 'flex',
                                                flexDirection: { xs: 'column', sm: 'row' },
                                                alignItems: { xs: 'flex-start', sm: 'center' },
                                                gap: { xs: 2, sm: 3 },
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease-in-out',
                                                '&:hover': {
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                                }
                                            }}>
                                            {/* Radio Button and Avatar Container */}
                                            <Box sx={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                gap: 2,
                                                width: { xs: '100%', sm: 'auto' }
                                            }}>
                                                {/* Radio Button */}
                                                <Radio
                                                    checked={selectedDoctor === doctor.id}
                                                    onChange={() => handleDoctorSelect(doctor.id)}
                                                    sx={{
                                                        color: '#368ADD',
                                                        '&.Mui-checked': {
                                                            color: '#368ADD'
                                                        }
                                                    }}
                                                />

                                                {/* Avatar */}
                                                <Avatar
                                                    src={doctor.avatar}
                                                    alt={doctor.name}
                                                    sx={{
                                                        width: { xs: 60, sm: 80 },
                                                        height: { xs: 60, sm: 80 },
                                                        border: '2px solid #e0e0e0'
                                                    }}
                                                />
                                            </Box>

                                            {/* Doctor Info */}
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="h6" sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '1rem', sm: '1.1rem' },
                                                    mb: 1,
                                                    color: '#333'
                                                }}>
                                                    {doctor.name}
                                                </Typography>

                                                {/* Experience */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                    <WorkIcon sx={{ color: '#666', fontSize: '1rem' }} />
                                                    <Typography sx={{ color: '#666', fontSize: '0.9rem' }}>
                                                        {doctor.experience} years experience
                                                    </Typography>
                                                </Box>

                                                {/* Specializations */}
                                                <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                                                    {doctor.specializations.map((spec) => (
                                                        <Chip
                                                            key={spec}
                                                            label={spec}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: '#E6F0FF',
                                                                color: '#368ADD',
                                                                border: '1px solid #368ADD',
                                                                fontSize: '0.75rem',
                                                                height: 24,
                                                                mb: { xs: 0.5, sm: 0 }
                                                            }}
                                                        />
                                                    ))}
                                                </Box>

                                                {/* Rating */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                                    <StarIcon sx={{ color: '#FFC107', fontSize: '1rem' }} />
                                                    <Typography sx={{ color: '#666', fontSize: '0.85rem' }}>
                                                        {doctor.rating} ({doctor.reviewCount})
                                                    </Typography>
                                                </Box>

                                                {/* Availability */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <AccessTimeIcon sx={{ color: '#666', fontSize: '1rem' }} />
                                                    <Typography sx={{ 
                                                        color: '#666', 
                                                        fontSize: '0.85rem',
                                                        wordBreak: 'break-word'
                                                    }}>
                                                        {doctor.availability}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Card>
                                    ))
                                )}
                            </Box>
                        )}
                    </Box>

                    {/* Continue Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            disabled={!selectedDoctor}
                            onClick={() => {
                                console.log('Continue button clicked');
                                console.log('Navigating to schedule with selected doctor:', selectedDoctor);
                                navigate('/schedule', {
                                    state: {
                                        selectedDoctor: selectedDoctor
                                    }
                                });
                            }}
                            sx={{
                                backgroundColor: selectedDoctor ? '#368ADD' : '#ccc',
                                color: '#fff',
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                fontSize: '1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: selectedDoctor ? '#2c6bb3' : '#ccc'
                                }
                            }}
                            endIcon={<ChevronRightIcon />}
                        >
                            Continue
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default BookAppointment;

