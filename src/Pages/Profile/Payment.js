import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Button, 
    Container, 
    Grid, 
    Radio,
    RadioGroup,
    FormControlLabel,
    Divider
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../Context/BookingContext';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Payment = () => {
    const navigate = useNavigate();
    const { bookingData, updateBookingData } = useBooking();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');

    useEffect(() => {
        if (bookingData.paymentMethod) {
            setSelectedPaymentMethod(bookingData.paymentMethod);
        }
    }, []);

    const steps = [
        { number: 1, title: 'Select Doctor', subtitle: 'Choose your healthcare provider', active: false, completed: true },
        { number: 2, title: 'Schedule', subtitle: 'Select appointment slot', active: false, completed: true },
        { number: 3, title: 'Patient Info', subtitle: 'Confirm your details', active: false, completed: true },
        { number: 4, title: 'Confirmation', subtitle: 'Review and confirm', active: false, completed: true },
        { number: 5, title: 'Payment', subtitle: 'Choose payment method', active: true, completed: false }
    ];

    const paymentMethods = [
        {
            id: 'credit-card',
            title: 'Credit/Debit Card',
            description: 'Pay securely with your card',
            icon: <CreditCardIcon sx={{ fontSize: '2rem', color: '#666' }} />
        },
        {
            id: 'paypal',
            title: 'PayPal',
            description: 'Pay with your PayPal account',
            icon: <AccountBalanceWalletIcon sx={{ fontSize: '2rem', color: '#666' }} />
        },
        {
            id: 'apple-pay',
            title: 'Apple Pay',
            description: 'Quick payment with Touch ID',
            icon: <PhoneAndroidIcon sx={{ fontSize: '2rem', color: '#666' }} />
        },
        {
            id: 'insurance',
            title: 'Health Insurance',
            description: 'Use your insurance coverage',
            icon: <LocalHospitalIcon sx={{ fontSize: '2rem', color: '#666' }} />
        }
    ];

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
        updateBookingData('paymentMethod', method);
    };

    // Get consultation details from context
    const consultationType = bookingData.consultingType === 'Online' ? 'Online Consultation' : 'Hair Transplant';
    const duration = '1 hour';
    const basePrice = '₹899.0';
    const totalPrice = '₹899.0';

    return (
        <>
            <Navbar />
            <Box sx={{ pt: 16, pb: 3, backgroundColor: '#fafbfc', minHeight: '100vh' }}>
                <Container maxWidth="lg">
                    {/* Header */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" sx={{ 
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            mb: 1,
                            color: '#333'
                        }}>
                            Payment Method
                        </Typography>
                    </Box>

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
                        {/* Left Column - Payment Methods */}
                        <Grid item size={{xs:12, md:6}}>
                            <Card sx={{ 
                                borderRadius: 2, 
                                boxShadow: 'none', 
                                border: '1px solid #e0e0e0',
                                backgroundColor: '#f8f9fa'
                            }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: '#333', 
                                        mb: 3 
                                    }}>
                                        Personal Details
                                    </Typography>
                                    
                                    <RadioGroup
                                        value={selectedPaymentMethod}
                                        onChange={(e) => handlePaymentMethodChange(e.target.value)}
                                    >
                                        {paymentMethods.map((method) => (
                                            <Card 
                                                key={method.id}
                                                sx={{
                                                    mb: 2,
                                                    borderRadius: 2,
                                                    border: selectedPaymentMethod === method.id ? '2px solid #368ADD' : '1px solid #e0e0e0',
                                                    backgroundColor: '#ffffff',
                                                    p: 2,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease-in-out',
                                                    '&:hover': {
                                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                                    }
                                                }}
                                                onClick={() => handlePaymentMethodChange(method.id)}
                                            >
                                                <FormControlLabel
                                                    value={method.id}
                                                    control={
                                                        <Radio
                                                            sx={{
                                                                color: '#368ADD',
                                                                '&.Mui-checked': {
                                                                    color: '#368ADD'
                                                                }
                                                            }}
                                                        />
                                                    }
                                                    label={
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                                                            {method.icon}
                                                            <Box>
                                                                <Typography sx={{ 
                                                                    fontWeight: 'bold', 
                                                                    fontSize: '1rem',
                                                                    color: '#333',
                                                                    mb: 0.5
                                                                }}>
                                                                    {method.title}
                                                                </Typography>
                                                                <Typography sx={{ 
                                                                    fontSize: '0.85rem',
                                                                    color: '#666'
                                                                }}>
                                                                    {method.description}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    }
                                                    sx={{ 
                                                        width: '100%', 
                                                        m: 0,
                                                        '& .MuiFormControlLabel-label': {
                                                            width: '100%'
                                                        }
                                                    }}
                                                />
                                            </Card>
                                        ))}
                                    </RadioGroup>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Right Column - Order Summary */}
                        <Grid item size={{xs:12, md:6}}>
                            <Card sx={{ 
                                borderRadius: 2, 
                                boxShadow: 'none', 
                                border: '1px solid #e0e0e0',
                                backgroundColor: '#f8f9fa'
                            }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold', 
                                        color: '#333', 
                                        mb: 3 
                                    }}>
                                        Order Summary
                                    </Typography>
                                    
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Consultation Type:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {consultationType}
                                            </Typography>
                                        </Box>
                                        
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Duration:
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {duration}
                                            </Typography>
                                        </Box>
                                        
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Base price
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                                {basePrice}
                                            </Typography>
                                        </Box>
                                        
                                        <Divider sx={{ my: 1 }} />
                                        
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography variant="h6" sx={{ 
                                                fontWeight: 'bold', 
                                                color: '#368ADD' 
                                            }}>
                                                Total
                                            </Typography>
                                            <Typography variant="h6" sx={{ 
                                                fontWeight: 'bold', 
                                                color: '#368ADD' 
                                            }}>
                                                {totalPrice}
                                            </Typography>
                                        </Box>
                                        
                                        <Box sx={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: 1,
                                            mt: 2,
                                            p: 2,
                                            backgroundColor: '#f0f8ff',
                                            borderRadius: 1
                                        }}>
                                            <LockIcon sx={{ color: '#4CAF50', fontSize: '1.2rem' }} />
                                            <Typography sx={{ 
                                                fontSize: '0.85rem',
                                                color: '#666'
                                            }}>
                                                Your payment information is encrypted and secure
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Navigation Buttons */}
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        mt: 4 
                    }}>
                        <Button
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => navigate(-1)}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderColor: '#ccc',
                                color: '#666',
                                '&:hover': {
                                    borderColor: '#999',
                                    backgroundColor: '#f5f5f5'
                                }
                            }}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => {
                                console.log('Appointment confirmed with payment method:', selectedPaymentMethod);
                                // Here you would typically process the payment and confirm appointment
                                alert('Appointment confirmed successfully!');
                            }}
                            sx={{
                                px: 4,
                                py: 1.5,
                                backgroundColor: '#368ADD',
                                '&:hover': {
                                    backgroundColor: '#2c6bb3'
                                }
                            }}
                        >
                            Confirm Appointment
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Payment;