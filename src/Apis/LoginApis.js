import axios from "axios";
import Config from "../Config";
const apiUrl = Config.apiUrl;
// Register user API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/users/register`, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      password: userData.password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Send OTP API
export const sendOTP = async (credentials) => {
  try {
    const response = await axios.post(`${apiUrl}/users/login/sentotp`, {
      userName: credentials.userName, // email or phone number
      password: credentials.password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login API (password-based login without OTP)
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${apiUrl}/users/login/verifypassword`, {
      userName: credentials.userName, // email or phone number
      password: credentials.password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Verify OTP API (separate OTP verification)
export const verifyOTP = async (otpData) => {
  try {
    const response = await axios.post(`${apiUrl}/users/login/verifyotp`, {
      userName: otpData.userName, // email or phone number
      otp: otpData.otp
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



