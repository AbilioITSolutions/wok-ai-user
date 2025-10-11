import axios from "axios";
import config from "../Config";

const apiUrl = config.apiUrl;

// Get token from localStorage at runtime
const getToken = () => localStorage.getItem('authToken');

export const getdocuments = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${apiUrl}/users/getuserdocuments`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('Documents API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
};

export const getmedications = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${apiUrl}/users/getusermedications`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // Extract medications from all bookings with booking context
    const allMedications =
      response.data?.bookings?.flatMap(
        (booking) => (booking.medications || []).map(medication => ({
          ...medication,
          doctorName: booking.doctorName,
          treatmentServiceName: booking.treatmentServiceName,
          bookingDate: booking.bookingDate,
          bookingTime: booking.bookingTime,
          bookingId: booking.bookingId
        }))
      ) || [];

    return allMedications;
  } catch (error) {
    console.error("Error fetching medications:", error);
    throw error;
  }
};