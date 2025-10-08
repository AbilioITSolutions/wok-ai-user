import axios from "axios";
import Config from "../Config";
const apiUrl = Config.apiUrl;
// Get all treatments
export const getAllTreatments = async () => {
    try {
        const response = await axios.get(`${apiUrl}/treatment/getalltreatment`);
        // Return the data array from the response structure: { status: true, data: [...] }
        return response.data;
    } catch (error) {
        console.error("Error fetching treatments:", error);
        throw error;
    }
};


export const getAllServicesByTReatment = async (treatmentId) => {
    try {
        const response = await axios.get(`${apiUrl}/treatment-services/getall-treatmentservice?treatmentId=${treatmentId}`);
        // Return the data array from the response structure: { status: true, data: [...] }
        return response.data;
    } catch (error) {
        console.error("Error fetching treatments:", error);
        throw error;
    }
};


export const getAllClinics = async () => {
    try {
        const response = await axios.get(`${apiUrl}/clinic/getall-clinics`);
        // Return the data array from the response structure: { status: true, data: [...] }
        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};

export const getAllClinicsByid = async (clinicId) => {
    try {
        const response = await axios.get(`${apiUrl}/clinic/getclinic/${clinicId}`);
        // Return the data array from the response structure: { status: true, data: [...] }
        return response.data;
    } catch (error) {
        console.error("Error fetching clinics:", error);
        throw error;
    }
};

export const getClinicWithTreatmentsServices = async (clinicId) => {
    try {
        const response = await axios.get(`${apiUrl}/clinic/getTreatments-servicesby-clinic?clinicId=${clinicId}`);
        // Return the data from the response structure: { status: true, data: [...] }
        return response.data;
    } catch (error) {
        console.error("Error fetching clinic with treatments:", error);
        throw error;
    }
};

export const getDoctorsByClinic = async (clinicId) => {
    try {
        const response = await axios.get(`${apiUrl}/doctors/getDoctorBy-clinic?clinicId=${clinicId}`);
        // Return the data from the response structure: { status: true, doctors: [...] }
        return response.data;
    } catch (error) {
        console.error("Error fetching doctors by clinic:", error);
        throw error;
    }
};

export const getServicePricesByClinic = async (clinicId) => {
    try {
        const response = await axios.get(`${apiUrl}/clinic/getservicepricesby-clinic?clinicId=${clinicId}`);
        // Return the data from the response structure: { status: true, data: [...] }
        return response.data;
    } catch (error) {
        console.error("Error fetching service prices by clinic:", error);
        throw error;
    }
};


export const getDoctorsByClinicTreatmentService = async (clinicId, treatmentId, serviceId) => {
    try {
        const response = await axios.get(`${apiUrl}/doctors/getDoctorBy-clinic?clinicId=${clinicId}&treatmentId=${treatmentId}&serviceId=${serviceId}`);
        // Return the data from the response structure: { status: true, doctors: [...] }
        return response.data;
    } catch (error) {
        console.error("Error fetching doctors by clinic, treatment and service:", error);
        throw error;
    }
};
    

export const getDoctorAvailableTimeSlots = async (doctorId) => {
    try {
        const response = await axios.get(`${apiUrl}/doctors/getdoctor-available-timeslots?doctorId=${doctorId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching doctor available time slots:", error);
        throw error;
    }
};