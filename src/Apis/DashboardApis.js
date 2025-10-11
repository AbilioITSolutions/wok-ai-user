import axios from "axios";
import config from "../Config";

const apiUrl = config.apiUrl;

// Get token from localStorage at runtime
const getToken = () => localStorage.getItem('authToken');

export const getUserHealthSummary = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${apiUrl}/users/getuserhealthsummary`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('Health Summary API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user health summary:', error);
    throw error;
  }
};
