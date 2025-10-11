import axios from "axios";
import config from "../Config";

const apiUrl = config.apiUrl;
const  token = localStorage.getItem('authToken')
// Create booking API function
export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${apiUrl}/booking/create-booking`, {
            doctorId: bookingData.doctorId,
            clinicId: bookingData.clinicId,
            treatmentId: bookingData.treatmentId,
            treatmentServiceId: bookingData.treatmentServiceId,
            bookingType: bookingData.bookingType,
            consultingPrice: bookingData.consultingPrice,
            bookingDate: bookingData.bookingDate,
            bookingTime: bookingData.bookingTime,
            
                fullName: bookingData.userDetails.firstName+" " +bookingData.userDetails.lastName,
                email:bookingData.userDetails.email,
                dob: bookingData.userDetails.dateOfBirth,
                gender: bookingData.userDetails.gender ,
                phoneNumber: bookingData.userDetails.phone,
            
            symptoms: bookingData.symptoms,
            medications: bookingData.medications,
            allergies: bookingData.allergies,
            agreeTerms:true,
            medicalHistory: bookingData.medicalHistory,
            additionalInfo: bookingData.additionalInfo
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error creating booking:', token);
        console.log("token", token)

        throw error;
       
    }
};