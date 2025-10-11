import axios from "axios";
import Config from "../Config";
const apiUrl = Config.apiUrl;

const token = localStorage.getItem('authToken');

// Get user profile API
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users/myprofile`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get user appointments/bookings API
export const getUserAppointments = async () => {
  try {
    const response = await axios.get(`${apiUrl}/booking/myappointments`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};// Update user profile API
export const updateUserProfile = async (userId, profileData) => {
  try {
    // Check if profileData contains a file (image)
    const hasFile = profileData.profileImage instanceof File;

    let response;
    if (hasFile) {
      // Use FormData for file upload
      const formData = new FormData();

      // Add the file
      formData.append('profileImage', profileData.profileImage);

      // Add other fields if they exist
      Object.keys(profileData).forEach(key => {
        if (key !== 'profileImage' && profileData[key] !== undefined) {
          formData.append(key, profileData[key]);
        }
      });

      response = await axios.put(`${apiUrl}/users/update-profile/${userId}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } else {
      // Use JSON for regular updates
      response = await axios.put(`${apiUrl}/users/update-profile/${userId}`, profileData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
