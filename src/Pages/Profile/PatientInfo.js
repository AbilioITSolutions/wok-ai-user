import React, { useState, useEffect } from 'react';
import {
  Box,
    Typography, 
    Card, 
    CardContent, 
    Button, 
    Container, 
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
    InputAdornment
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../Context/BookingContext';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const PatientInfo = () => {
    const navigate = useNavigate();
    const { bookingData, updateBookingData } = useBooking();
    const [formData, setFormData] = useState(bookingData.patientInfo || {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        currentSymptoms: '',
        currentMedications: '',
        allergies: '',
        medicalHistory: '',
        isNewPatient: false,
        hasInsurance: false,
        consentTreatment: false,
        agreePrivacy: false
    });

    useEffect(() => {
        if (bookingData.patientInfo) {
            setFormData(bookingData.patientInfo);
        }
    }, [bookingData.patientInfo]);

    const steps = [
        { number: 1, title: 'Select Doctor', subtitle: 'Choose your healthcare provider', active: false, completed: true },
        { number: 2, title: 'Schedule', subtitle: 'Select appointment slot', active: false, completed: true },
        { number: 3, title: 'Patient Info', subtitle: 'Confirm your details', active: true, completed: false },
        { number: 4, title: 'Confirmation', subtitle: 'Review and confirm', active: false, completed: false },
        { number: 5, title: 'Payment', subtitle: 'Choose payment method', active: false, completed: false }
    ];

    const handleInputChange = (field) => (event) => {
        const newFormData = {
      ...formData,
            [field]: event.target.value
        };
        setFormData(newFormData);
        updateBookingData('patientInfo', newFormData);
    };

    const handleCheckboxChange = (field) => (event) => {
        const newFormData = {
            ...formData,
            [field]: event.target.checked
        };
        setFormData(newFormData);
        updateBookingData('patientInfo', newFormData);
    };

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
        Patient Information
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

                    {/* Patient Information Form */}
                    <Card sx={{
                        borderRadius: 2,
                        boxShadow: 'none',
                        border: '1px solid #e0e0e0',
                        backgroundColor: '#ffffff',
                        mb: 4
                    }}>
                        <CardContent sx={{ p: 4 }}>
                            <Grid container spacing={4}>
        {/* Personal Details */}
                                <Grid item size={{xs:12, md:6}}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <PersonIcon sx={{ color: '#368ADD', mr: 1, fontSize: '1.5rem' }} />
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                            Personal Details
                                        </Typography>
            </Box>

                                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={formData.firstName}
                                            onChange={handleInputChange('firstName')}
                                            variant="outlined"
                                            size="small"
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  value={formData.lastName}
                                            onChange={handleInputChange('lastName')}
                                            variant="outlined"
                                            size="small"
                />
                                    </Box>
                                    
                <TextField
                  fullWidth
                  label="Email ID"
                  value={formData.email}
                                        onChange={handleInputChange('email')}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 3 }}
                                    />
                                    
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={formData.phone}
                                        onChange={handleInputChange('phone')}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 3 }}
                                    />
                                    
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                                            placeholder="DD/MM/YYYY"
                                            value={formData.dateOfBirth}
                                            onChange={handleInputChange('dateOfBirth')}
                                            variant="outlined"
                                            size="small"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <CalendarTodayIcon sx={{ color: '#666' }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <FormControl fullWidth size="small">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={formData.gender}
                                                onChange={handleInputChange('gender')}
                                                label="Gender"
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
                                    </Box>
        </Grid>

        {/* Medical Information */}
                                <Grid item size={{xs:12, md:6}}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <FavoriteIcon sx={{ color: '#368ADD', mr: 1, fontSize: '1.5rem' }} />
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                            Medical Information
                                        </Typography>
            </Box>

                <TextField
                  fullWidth
                  label="Current Symptoms"
                                        placeholder="Please describe here..."
                  value={formData.currentSymptoms}
                                        onChange={handleInputChange('currentSymptoms')}
                  multiline
                                        rows={3}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 3 }}
                                    />
                                    
                <TextField
                  fullWidth
                  label="Current Medications"
                                        placeholder="Please describe here..."
                  value={formData.currentMedications}
                                        onChange={handleInputChange('currentMedications')}
                                        multiline
                                        rows={3}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 3 }}
                                    />
                                    
                <TextField
                  fullWidth
                  label="Allergies"
                                        placeholder="Please describe here..."
                  value={formData.allergies}
                                        onChange={handleInputChange('allergies')}
                                        multiline
                                        rows={3}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 3 }}
                                    />
                                    
                <TextField
                  fullWidth
                  label="Medical History"
                                        placeholder="Please describe here..."
                  value={formData.medicalHistory}
                                        onChange={handleInputChange('medicalHistory')}
                  multiline
                                        rows={3}
                                        variant="outlined"
                                        size="small"
                />
        </Grid>
      </Grid>

                            {/* Additional Information */}
                            <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid #e0e0e0' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <SettingsIcon sx={{ color: '#368ADD', mr: 1, fontSize: '1.5rem' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                        Additional Information
                                    </Typography>
          </Box>

                                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
              <FormControlLabel
                control={
                  <Checkbox
                                                checked={formData.isNewPatient}
                                                onChange={handleCheckboxChange('isNewPatient')}
                                                sx={{ color: '#368ADD' }}
                  />
                }
                label="I am a new patient to this doctor"
              />
              <FormControlLabel
                control={
                  <Checkbox
                                                checked={formData.hasInsurance}
                                                onChange={handleCheckboxChange('hasInsurance')}
                                                sx={{ color: '#368ADD' }}
                  />
                }
                label="I have health insurance"
              />
              <FormControlLabel
                control={
                  <Checkbox
                                                checked={formData.consentTreatment}
                                                onChange={handleCheckboxChange('consentTreatment')}
                                                sx={{ color: '#368ADD' }}
                  />
                }
                label="I consent to receive medical treatment"
              />
              <FormControlLabel
                control={
                  <Checkbox
                                                checked={formData.agreePrivacy}
                                                onChange={handleCheckboxChange('agreePrivacy')}
                                                sx={{ color: '#368ADD' }}
                  />
                }
                label="I agree to the privacy policy and terms"
              />
                                </Box>
      </Box>
                        </CardContent>
                    </Card>

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
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => navigate('/doctorlist/clinic/confirmation')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                backgroundColor: '#368ADD',
                                '&:hover': {
                                    backgroundColor: '#2c6bb3'
                                }
                            }}
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

export default PatientInfo;
