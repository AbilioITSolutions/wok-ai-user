import axios from "axios";
import Config from "../Config";
const apiUrl = Config.apiUrl;

export const getMyReminders = async () => {
    const token = localStorage.getItem('authToken');
    try {
        const response = await axios.get(`${apiUrl}/booking/getmyreminders`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching reminders:", error);
        throw error;
    }
};
