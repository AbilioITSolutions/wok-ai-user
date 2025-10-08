import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [bookingData, setBookingData] = useState({
        // Doctor selection
        selectedDoctor: null,
        
        // Schedule data
        selectedDate: null,
        selectedTime: null,
        consultingType: 'Offline',
        
        // Patient information
        patientInfo: {
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
        },
        
        // Payment information
        paymentMethod: 'credit-card'
    });

    // Load data from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('bookingData');
        if (savedData) {
            try {
                setBookingData(JSON.parse(savedData));
            } catch (error) {
                console.error('Error loading booking data:', error);
            }
        }
    }, []);

    // Save data to localStorage whenever bookingData changes
    useEffect(() => {
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
    }, [bookingData]);

    const updateBookingData = (section, data) => {
        setBookingData(prev => ({
            ...prev,
            [section]: typeof data === 'object' && data !== null ? { ...prev[section], ...data } : data
        }));
    };

    const clearBookingData = () => {
        setBookingData({
            selectedDoctor: null,
            selectedDate: null,
            selectedTime: null,
            consultingType: 'Offline',
            patientInfo: {
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
            },
            paymentMethod: 'credit-card'
        });
        localStorage.removeItem('bookingData');
    };

    const value = {
        bookingData,
        updateBookingData,
        clearBookingData
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};
