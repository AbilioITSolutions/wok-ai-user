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
    IconButton,
    Stack,
    CircularProgress,
    Alert
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useBooking } from '../../Context/BookingContext';
import { getDoctorAvailableTimeSlots } from '../../Apis/TreatmentsApis';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Schedule = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { bookingData, updateBookingData } = useBooking();
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(bookingData.selectedDate || today.getDate());
    const [selectedTime, setSelectedTime] = useState(bookingData.selectedTime || '11:00 AM');
    const [consultingType, setConsultingType] = useState(bookingData.consultingType || 'Offline');

    // Log the received doctor data when component mounts or bookingData changes
    useEffect(() => {
        console.log('Schedule Component - Booking Data:', bookingData);
        if (bookingData.selectedDoctor) {
            console.log('Selected Doctor Details:', {
                id: bookingData.selectedDoctor.id,
                name: bookingData.selectedDoctor.name,
                specializations: bookingData.selectedDoctor.specializations,
                experience: bookingData.selectedDoctor.experience,
                rating: bookingData.selectedDoctor.rating
            });
        } else {
            console.warn('No doctor selected in booking context');
        }
    }, [bookingData]);

    // New state for API integration
    const [timeSlots, setTimeSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const selectedDoctor = location.state?.selectedDoctor;

    useEffect(() => {
        if (bookingData.selectedDate) {
            setSelectedDate(bookingData.selectedDate);
        }
        if (bookingData.selectedTime) {
            setSelectedTime(bookingData.selectedTime);
        }
        if (bookingData.consultingType) {
            setConsultingType(bookingData.consultingType);
        }
    }, [bookingData]);

    // Fetch available time slots for selected doctor
    useEffect(() => {
        const fetchTimeSlots = async () => {
            if (selectedDoctor) {
                try {
                    setLoading(true);
                    setError(null);
                    const response = await getDoctorAvailableTimeSlots(selectedDoctor);
                    console.log('Time slots API response:', response);

                    console.log('Raw API response:', response);
                    
                    if (response && response.status && Array.isArray(response.slots)) {
                        // Map the slots array to the expected format
                        const slots = response.slots.map(slotTime => ({
                            time: slotTime,  // Keep the original time string (e.g., "07:00 AM")
                            available: true
                        }));
                        
                        console.log('Processed slots:', slots);
                        setTimeSlots(slots);
                    } else {
                        console.warn('No valid slots found in response');
                        setTimeSlots([]);
                    }
                } catch (error) {
                    console.error('Error fetching time slots:', error);
                    setError('Failed to load available time slots. Please try again later.');
                    // Set empty slots on error - no fallback default slots
                    setTimeSlots([]);
                } finally {
                    setLoading(false);
                }
            } else {
                console.warn('No selected doctor found');
                setTimeSlots([]);
                setLoading(false);
            }
        };

        fetchTimeSlots();
    }, [selectedDoctor]);

    const steps = [
        { number: 1, title: 'Select Doctor', subtitle: 'Choose your healthcare provider', active: false, completed: true },
        { number: 2, title: 'Schedule', subtitle: 'Select appointment date', active: true, completed: false },
        { number: 3, title: 'Patient Info', subtitle: 'Confirm your details', active: false, completed: false },
        { number: 4, title: 'Payment', subtitle: 'Choose payment method', active: false, completed: false },
        { number: 5, title: 'Confirmation', subtitle: 'Review and confirm', active: false, completed: false }
    ];

    // Calendar state
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const generateCalendar = () => {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const firstDayWeekday = firstDayOfMonth.getDay();
        const daysInMonth = lastDayOfMonth.getDate();
        
        const calendar = [];
        
        // Add day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            calendar.push({ day, date: null, isPast: false, isToday: false, isCurrentMonth: false });
        });

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayWeekday; i++) {
            calendar.push({ day: '', date: null, isPast: false, isToday: false, isCurrentMonth: false });
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const cellDate = new Date(currentYear, currentMonth, day);
            const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const cellDateOnly = new Date(currentYear, currentMonth, day);
            const isPast = cellDateOnly < todayDateOnly;
            const isToday = cellDateOnly.getTime() === todayDateOnly.getTime();
            
            calendar.push({
                day: '',
                date: day,
                isPast,
                isToday,
                isCurrentMonth: true
            });
        }

        return calendar;
    };

    const calendarDays = generateCalendar();

    const handlePrevMonth = () => {
        let newMonth, newYear;
        if (currentMonth === 0) {
            newMonth = 11;
            newYear = currentYear - 1;
        } else {
            newMonth = currentMonth - 1;
            newYear = currentYear;
        }
        
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
        
        // For past months, don't select any date (set to null)
        // For current month, select today if it exists
        const newMonthDate = new Date(newYear, newMonth, 1);
        const isCurrentMonth = newMonthDate.getMonth() === today.getMonth() && newMonthDate.getFullYear() === today.getFullYear();
        
        if (isCurrentMonth) {
            setSelectedDate(today.getDate());
        } else {
            // For past or future months, don't select any date
            setSelectedDate(null);
        }
    };

    const handleNextMonth = () => {
        let newMonth, newYear;
        if (currentMonth === 11) {
            newMonth = 0;
            newYear = currentYear + 1;
        } else {
            newMonth = currentMonth + 1;
            newYear = currentYear;
        }
        
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
        
        // Only select today if it's the current month, otherwise no selection
        const newMonthDate = new Date(newYear, newMonth, 1);
        const isCurrentMonth = newMonthDate.getMonth() === today.getMonth() && newMonthDate.getFullYear() === today.getFullYear();
        
        if (isCurrentMonth) {
            setSelectedDate(today.getDate());
        } else {
            // For future months, don't select any date
            setSelectedDate(null);
        }
    };
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handleContinue = () => {
        // Create full date string from selectedDate, currentMonth, currentYear
        let dateString;
        if (selectedDate) {
            const fullDate = new Date(currentYear, currentMonth, selectedDate);
            if (isNaN(fullDate.getTime())) {
                // Invalid date (e.g., February 31), use current date
                dateString = new Date().toISOString().split('T')[0];
            } else {
                dateString = fullDate.toISOString().split('T')[0]; // YYYY-MM-DD format
            }
        } else {
            // If no date selected, use current date
            dateString = new Date().toISOString().split('T')[0];
        }

        // Store current state in context
        updateBookingData('selectedDate', dateString);
        updateBookingData('selectedTime', selectedTime);
        updateBookingData('consultingType', consultingType);

        // Navigate to next page
        navigate('/doctorlist/clinic/patient-info');
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
                            Select Date & Time
                        </Typography>
                    </Box>

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

                    {/* Calendar and Time Selection */}
                    <Grid container spacing={3}>
                        {/* Calendar */}
                        <Grid item size={{xs:12, md:6}}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Box sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center',
                                        mb: 3
                                    }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            {monthNames[currentMonth]} {currentYear}
                                        </Typography>
                                        <Box>
                                            <IconButton 
                                                size="small" 
                                                sx={{ mr: 1 }}
                                                onClick={handlePrevMonth}
                                            >
                                                <ChevronLeftIcon />
                                            </IconButton>
                                            <IconButton 
                                                size="small" 
                                                sx={{ color: '#368ADD' }}
                                                onClick={handleNextMonth}
                                            >
                                                <ChevronRightIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>

                                    {/* Calendar Grid */}
                                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 }}>
                                        {calendarDays.map((day, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    height: 40,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: day.date ? '0.9rem' : '0.8rem',
                                                    fontWeight: day.date ? 'normal' : 'bold',
                                                    color: day.date ? (day.isPast ? '#ccc' : '#333') : '#666',
                                                    backgroundColor: (selectedDate && day.date === selectedDate) ? '#368ADD' : 
                                                                  day.isToday ? '#E6F0FF' : 'transparent',
                                                    color: (selectedDate && day.date === selectedDate) ? '#fff' : 
                                                           day.isToday ? '#368ADD' : 
                                                           day.isPast ? '#ccc' : '#333',
                                                    borderRadius: 1,
                                                    cursor: day.date && (day.isToday || !day.isPast) && day.isCurrentMonth ? 'pointer' : 'default',
                                                    opacity: day.isPast ? 0.5 : 1,
                                                    border: day.isToday ? '2px solid #368ADD' : 'none',
                                                    '&:hover': day.date && (day.isToday || !day.isPast) && day.isCurrentMonth ? {
                                                        backgroundColor: (selectedDate && day.date === selectedDate) ? '#368ADD' : '#f0f0f0'
                                                    } : {}
                                                }}
                                                onClick={() => {
                                                    if (day.date && day.isCurrentMonth) {
                                                        // Allow selection of today even if it might be marked as past due to time comparison
                                                        if (day.isToday || !day.isPast) {
                                                            setSelectedDate(day.date);
                                                            updateBookingData('selectedDate', day.date);
                                                        }
                                                    }
                                                }}
                                            >
                                                {day.date ? day.date : day.day}
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Available Times */}
                        <Grid item size={{xs:12, md:6}}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                                        Available Times
                                    </Typography>

                                    {/* Error State */}
                                    {error && (
                                        <Alert severity="warning" sx={{ mb: 3 }}>
                                            {error}
                                        </Alert>
                                    )}

                                    {/* Loading State */}
                                    {loading && (
                                        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                                            <CircularProgress />
                                        </Box>
                                    )}

                                    {/* Time Slots Grid */}
                                    {!loading && !error && (
                                        <Box>
                                            {timeSlots.length === 0 ? (
                                                <Typography sx={{ textAlign: 'center', py: 4, color: '#666' }}>
                                                    No time slots available for this doctor.
                                                </Typography>
                                            ) : (
                                                <Box sx={{ 
                                                    display: 'grid', 
                                                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' },
                                                    gap: 1.5,
                                                    mb: 4,
                                                    px: 1
                                                }}>
                                                    {timeSlots.map((slot, index) => (
                                                        <Box
                                                            key={index}
                                                            sx={{
                                                                p: 1.5,
                                                                textAlign: 'center',
                                                                borderRadius: '8px',
                                                                backgroundColor: slot.time === selectedTime ? '#368ADD' : '#F5F9FF',
                                                                color: slot.time === selectedTime ? '#fff' : '#333',
                                                                border: slot.time === selectedTime ? 'none' : '1px solid #E0E0E0',
                                                                cursor: 'pointer',
                                                                fontWeight: 500,
                                                                fontSize: '0.875rem',
                                                                transition: 'all 0.2s ease',
                                                                '&:hover': {
                                                                    backgroundColor: slot.time === selectedTime ? '#2D7BC8' : '#E6F0FF',
                                                                    borderColor: slot.time === selectedTime ? '#2D7BC8' : '#B3D1FF'
                                                                }
                                                            }}
                                                            onClick={() => {
                                                                setSelectedTime(slot.time);
                                                                updateBookingData('selectedTime', slot.time);
                                                            }}
                                                        >
                                                            {slot.time}
                                                        </Box>
                                                    ))}
                                                </Box>
                                            )}
                                        </Box>
                                    )}

                                    {/* Consulting Type */}
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                            Consulting for?
                                        </Typography>
                                        <RadioGroup
                                            value={consultingType}
                                            onChange={(e) => {
                                                setConsultingType(e.target.value);
                                                updateBookingData('consultingType', e.target.value);
                                            }}
                                            sx={{ mb: 2 }}
                                        >
                                            <Box sx={{ 
                                                display: 'flex', 
                                                gap: 2,
                                                border: '1px solid #e0e0e0',
                                                borderRadius: 1,
                                                p: 2
                                            }}>
                                                <FormControlLabel 
                                                    value="Online" 
                                                    control={<Radio />} 
                                                    label="Online"
                                                    sx={{
                                                        flex: 1,
                                                        border: consultingType === 'Online' ? '2px solid #368ADD' : '1px solid #e0e0e0',
                                                        borderRadius: 1,
                                                        p: 1,
                                                        m: 0,
                                                        backgroundColor: consultingType === 'Online' ? '#f0f8ff' : 'transparent',
                                                        '&:hover': {
                                                            backgroundColor: '#f8f9fa'
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel 
                                                    value="Offline" 
                                                    control={<Radio />} 
                                                    label="Offline"
                                                    sx={{
                                                        flex: 1,
                                                        border: consultingType === 'Offline' ? '2px solid #368ADD' : '1px solid #e0e0e0',
                                                        borderRadius: 1,
                                                        p: 1,
                                                        m: 0,
                                                        backgroundColor: consultingType === 'Offline' ? '#f0f8ff' : 'transparent',
                                                        '&:hover': {
                                                            backgroundColor: '#f8f9fa'
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        </RadioGroup>
                                        {consultingType === 'Online' && (
                                            <Typography sx={{ color: 'red', fontSize: '0.8rem', mt: 1 }}>
                                                Choose online consulting to receive your Zoom meeting link.
                                            </Typography>
                                        )}
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
                            onClick={() => navigate(-1)}
                            startIcon={<ArrowBackIcon />}
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
                            onClick={handleContinue}
                            disabled={!selectedDate || !selectedTime || !consultingType}
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

export default Schedule;
