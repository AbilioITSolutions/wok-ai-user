import axios from "axios";
import Config from "../Config";
const apiUrl = Config.apiUrl;

const token = localStorage.getItem('authToken');


// Function to submit clinic review
export const submitClinicReview = async (reviewData) => {
  const { userId, bookingId, clinicId, rating, message } = reviewData;
  try {
    const response = await axios.post(`${apiUrl}/review/review`, {
      userId,
      bookingId,
      clinicId,
      rating,
      message,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// Function to submit doctor review
export const submitDoctorReview = async (reviewData) => {
  const { userId, bookingId, doctorId, rating, message } = reviewData;
  try {
    const response = await axios.post(`${apiUrl}/review/review`, {
      userId,
      bookingId,
      doctorId,
      rating,
      message,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// Function to get reviews with query parameters
export const getReviews = async (queryParams = {}) => {
  try {
    const queryString = new URLSearchParams(queryParams).toString();
    const url = `${apiUrl}/review/getreviews${queryString ? `?${queryString}` : ''}`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
