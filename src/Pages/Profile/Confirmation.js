import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Button, 
    Container, 
    Grid, 
    Avatar,
    Checkbox,
    FormControlLabel,
    Divider,
    Alert,
    CircularProgress
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../Context/BookingContext';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import tick from '../../ASSETS/tick.png';
import { createBooking } from '../../Apis/ConformationApis';

const Confirmation = () => {
    const navigate = useNavigate();
    const { bookingData, clearBookingData } = useBooking();
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const steps = [
        { number: 1, title: 'Select Doctor', subtitle: 'Choose your healthcare provider', active: false, completed: true },
        { number: 2, title: 'Schedule', subtitle: 'Select appointment slot', active: false, completed: true },
        { number: 3, title: 'Patient Info', subtitle: 'Confirm your details', active: false, completed: true },
        { number: 4, title: 'Confirmation', subtitle: 'Review and confirm', active: true, completed: false },
        { number: 5, title: 'Payment', subtitle: 'Choose payment method', active: false, completed: false }
    ];

    // Get data from context
    const appointmentData = {
        doctor: {
            name: bookingData.selectedDoctor ? `DR. ${bookingData.selectedDoctor === 1 ? 'Sarah Johnson' : bookingData.selectedDoctor === 2 ? 'Rajendhar Reddy' : 'Bharath Reddy'}` : "DR. Sarah Johnson",
            specialty: "Hair Specialist",
            experience: "15 years experience",
            avatar: "/api/placeholder/80/80"
        },
        consultation: {
            type: bookingData.consultingType || "Offline",
            date: bookingData.selectedDate ? `${bookingData.selectedDate}/06/2025, Saturday` : "30/06/2025, Saturday",
            time: bookingData.selectedTime || "11:00 AM EST"
        },
        patient: {
            fullName: bookingData.patientInfo ? `${bookingData.patientInfo.firstName} ${bookingData.patientInfo.lastName}`.trim() || "John Doe" : "John Doe",
            email: bookingData.patientInfo?.email || "johndoe@gmail.com",
            mobile: bookingData.patientInfo?.phone || "+1 (555) 123-4567",
            symptoms: bookingData.patientInfo?.currentSymptoms || "-",
            medications: bookingData.patientInfo?.currentMedications || "-",
            allergies: bookingData.patientInfo?.allergies || "-",
            medicalHistory: bookingData.patientInfo?.medicalHistory || "-"
        },
        payment: {
            mode: "Credit/Debit Card",
            consultationFee: "$899.0",
            totalAmount: "$899.0"
        }
    };

    // Handle booking confirmation
    const handleConfirmBooking = async () => {
        if (!agreeTerms) {
            setError('Please agree to the terms and conditions before proceeding.');
            return;
        }

        try {
            setLoading(true);
            setError(null);

            // Prepare booking data from context
            const bookingPayload = {
                doctorId: bookingData.selectedDoctor || 1,
                clinicId: bookingData.clinicId || 2,
                treatmentId: bookingData.treatmentId || 2,
                treatmentServiceId: bookingData.serviceId || 1,
                bookingType: bookingData.consultingType?.toLowerCase() || 'offline',
                consultingPrice: 899, // Set your price here
                bookingDate: bookingData.selectedDate ? `${new Date().getFullYear()}-06-${bookingData.selectedDate.toString().padStart(2, '0')}` : '2025-06-30',
                bookingTime: bookingData.selectedTime?.replace(/ AM| PM/, '').trim() || '11:00',
                userDetails: {
                    firstName: bookingData.patientInfo?.firstName || '',
                    lastName: bookingData.patientInfo?.lastName || '',
                    email:bookingData.patientInfo?.email || '',
                    dateOfBirth: bookingData.patientInfo?.dateOfBirth ? bookingData.patientInfo.dateOfBirth.replace(/\//g, '-') : '',
                    gender: bookingData.patientInfo?.gender || '',
                    phone: bookingData.patientInfo?.phone || ''
                },
                symptoms: bookingData.patientInfo?.currentSymptoms || '',
                medications: bookingData.patientInfo?.currentMedications || '',
                allergies: bookingData.patientInfo?.allergies || '',
             
                medicalHistory: bookingData.patientInfo?.medicalHistory || '',
                additionalInfo: 'Booking created from confirmation page',
                token: 'your_jwt_token_here' 
                // You'll need to get this from auth context or localStorage
            };

            console.log('Creating booking with data:', bookingPayload);

            const response = await createBooking(bookingPayload);
            console.log('Booking created successfully:', response);

            setBookingSuccess(true);
            // Clear booking data after successful booking
            setTimeout(() => {
                clearBookingData();
                // Navigate to success page or home
                navigate("/doctorlist/clinic/payment")
            }, 2000);

        } catch (error) {
            console.error('Booking creation failed:', error);
            setError(error?.response?.data?.message || 'Failed to create booking. Please try again.');
        } finally {
            
            setLoading(false);
        }
    };

    const preparationItems = [
        "Ensure stable internet connection for video calls",
        "Test your camera and microphone beforehand",
        "Prepare a list of current medications",
        "Have your insurance card ready if applicable"
    ];

    return (
        <>
            <Navbar />
            <Box sx={{ pt: 16, pb: 3, backgroundColor: '#fafbfc', minHeight: '100vh' }}>
                <Container maxWidth="lg">
                    {/* Header */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <img src={tick} alt="tick" sx={{ 
                            
                            display: 'block',
                            margin: '0 auto',
                            width: '50px',
                            height: '50px',
                            mb: 5
                        }} />
                        <Typography variant="h4" sx={{ 
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            mb: 2
                        }}>
                            Confirm Your Appointment
                        </Typography>
                        <Typography variant="body1" sx={{ 
                            color: '#666',
                            fontSize: '1rem'
                        }}>
                            Please review your appointment details before confirming
                        </Typography>
                    </Box>
                    {error && (
                        <Alert severity="error" sx={{ mb: 3 }}>
                            {error}
                        </Alert>
                    )}

                    {/* Success Alert */}
                    {bookingSuccess && (
                        <Alert severity="success" sx={{ mb: 3 }}>
                            Booking confirmed successfully! Redirecting...
                        </Alert>
                    )}

                    {/* Loading State */}
                    {loading && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <CircularProgress />
                        </Box>
                    )}

                    {/* Progress Steps */}
                     {/* Progress Steps */}
                    <Card sx={{
                        borderRadius: 2,
                        boxShadow: 'none',
                        border: '1px solid #e0e0e0',
                        backgroundColor: '#ffffff',
                        mb: 4,
                        overflow: 'visible'
                    }}>
                        <Box sx={{ 
                            p: { xs: 2, sm: 3 },
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'center' },
                            gap: { xs: 2, sm: 4 },
                            justifyContent: 'space-between'
                        }}>
                            {steps.map((step, index) => (
                                <Box key={step.number} sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center',
                                    gap: { xs: 1.5, sm: 2 },
                                    flex: 1,
                                    width: { xs: '100%', sm: 'auto' },
                                    mb: { xs: 1, sm: 0 }
                                }}>
                                    {/* Circle */}
                                    <Box sx={{
                                        width: { xs: 40, sm: step.completed ? 50 : 60 },
                                        height: { xs: 40, sm: step.completed ? 50 : 60 },
                                        borderRadius: '50%',
                                        backgroundColor: step.completed ? '#4CAF50' : step.active ? '#368ADD' : '#e0e0e0',
                                        color: step.completed ? '#fff' : step.active ? '#fff' : '#999',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1rem', sm: step.completed ? '1.2rem' : '1.4rem' },
                                        flexShrink: 0
                                    }}>
                                        {step.completed ? '✓' : step.number}
                                    </Box>
                                    
                                    {/* Text */}
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                            color: '#333',
                                            mb: 0.5
                                        }}>
                                            {step.title}
                                        </Typography>
                                        <Typography sx={{
                                            fontSize: { xs: '0.7rem', sm: '0.8rem' },
                                            color: '#666',
                                            lineHeight: 1.2
                                        }}>
                                            {step.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Card>

                    {/* Main Content */}
                    <Grid container spacing={3}>
                        {/* Left Column */}
                        <Grid item size={{xs:12, md:6}}>
                            {/* Doctor Details */}
                            <Card sx={{ mb: 3, borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: '#368ADD', 
                                        mb: 3 
                                    }}>
                                        Doctor Details
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar 
                                            src={appointmentData.doctor.avatar}
                                            sx={{ width: 60, height: 60 }}
                                        />
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                                                {appointmentData.doctor.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                                                {appointmentData.doctor.specialty}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <WorkIcon sx={{ fontSize: '1rem', color: '#666' }} />
                                                <Typography variant="body2" sx={{ color: '#666' }}>
                                                    {appointmentData.doctor.experience}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Consultation Details */}
                            <Card sx={{ mb: 3, borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: '#368ADD', 
                                        mb: 3 
                                    }}>
                                        Consultation Details
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <Typography variant="body2">
                                            <strong>Type:</strong> {appointmentData.consultation.type}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Date:</strong> {appointmentData.consultation.date}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Time:</strong> {appointmentData.consultation.time}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>

                        </Grid>

                        {/* Right Column */}
                        <Grid item size={{xs:12, md:6}}>
                            {/* Patient Information */}
                            <Card sx={{ mb: 3, borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: '#368ADD', 
                                        mb: 3 
                                    }}>
                                        Patient Information
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Full Name:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {appointmentData.patient.fullName}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Email:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {appointmentData.patient.email}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Mobile Number:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {appointmentData.patient.mobile}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Symptoms:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {appointmentData.patient.symptoms}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Current Medications:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {appointmentData.patient.medications}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Allergies:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {appointmentData.patient.allergies}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Medical History:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {appointmentData.patient.medicalHistory}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Pre-consultation Preparation */}
                            <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: '#368ADD', 
                                        mb: 3 
                                    }}>
                                        Pre-consultation Preparation
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                        {preparationItems.map((item, index) => (
                                            <Typography 
                                                key={index}
                                                component="li" 
                                                variant="body2" 
                                                sx={{ mb: 1, color: '#666' }}
                                            >
                                                {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>

                        </Grid>
                    </Grid>

                    {/* Terms and Navigation */}
                    <Box sx={{ mt: 4, mb: 4 }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    sx={{ color: '#368ADD' }}
                                />
                            }
                            label="I agree to the terms and conditions, privacy policy, and cancellation policy*"
                            sx={{ mb: 3 }}
                        />
                    </Box>

                    {/* Navigation Buttons */}
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        mt: 4 
                    }}>
                        <Button
                            variant="text"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => navigate(-1)}
                            sx={{
                                px: 4,
                                py: 1.5,
                                color: '#666',
                                '&:hover': {
                                    backgroundColor: '#f5f5f5'
                                }
                            }}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <CheckCircleIcon />}
                            onClick={handleConfirmBooking}
                            disabled={!agreeTerms || loading || bookingSuccess}
                            sx={{
                                px: 4,
                                py: 1.5,
                                backgroundColor: loading ? '#ccc' : bookingSuccess ? '#4CAF50' : '#368ADD',
                                '&:hover': {
                                    backgroundColor: loading ? '#ccc' : bookingSuccess ? '#45a049' : '#2c6bb3'
                                },
                                '&:disabled': {
                                    backgroundColor: '#ccc',
                                    color: '#666'
                                }
                            }}
                        >
                            {loading ? 'Creating Booking...' : bookingSuccess ? 'Booking Confirmed!' : 'Confirm Appointment'}
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Confirmation;
