import axios from "axios";
import config from "../Config";

const apiUrl = config.apiUrl;

// Create Enquiry API
export const createEnquiry = async (enquiryData) => {
    try {
        const response = await axios.post(`${apiUrl}/enquery/create-enquery`, enquiryData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating enquiry:", error);
        throw error;
    }
};

export const getAllTreatmentServices = async (queryParams = {}) => {
    try {
      const params = new URLSearchParams();
  
      // Add all query parameters to the URL
      Object.keys(queryParams).forEach(key => {
        if (queryParams[key] !== null && queryParams[key] !== undefined && queryParams[key] !== '') {
          params.append(key, queryParams[key]);
        }
      });
  
      const queryString = params.toString();
      const url = `${apiUrl}/treatment-services/admin/getall-treatmentservice${queryString ? `?${queryString}` : ''}`;
  
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };