import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material";
import Backgroundimg from "../../assets/contactusimages/Backgroundimg.png";
import Cardsection from "./Cardsection";
import useResponsive from "../../Hooks/useResponsive";
import { createEnquiry } from "../../Apis/EnqueryApis";
import { getAllTreatmentServices } from "../../Apis/EnqueryApis";

export default function Requestsection() {
  const { isMobile } = useResponsive();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    reason: "",
    message: "",
    agreeSentMsg: false,
  });

  // Services state
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState(null);

  // UI state
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Fetch services on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setServicesLoading(true);
        const response = await getAllTreatmentServices();
        setServices(response.data || []);
        setServicesError(null);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServicesError("Failed to load services");
        // Set default services as fallback
        setServices([
          { id: "service123", name: "General Consultation" },
          { id: "service456", name: "Hair Treatment" },
          { id: "service789", name: "Skin Treatment" },
        ]);
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Handle input changes
  const handleInputChange = (field) => (event) => {
    const value = field === 'agreeSentMsg' ? event.target.checked : event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.name || !formData.mobile || !formData.reason || !formData.message) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      return;
    }

    // Mobile number validation (10 digits)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid 10-digit mobile number",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    try {
      // Prepare data for API (using selected service ID)
      const enquiryData = {
        name: formData.name,
        mobile: formData.mobile, // Send mobile number instead of email
        serviceId: formData.reason, // Use selected service ID
        message: formData.message,
        agreeSentMsg: formData.agreeSentMsg,
      };

      // Call API
      const response = await createEnquiry(enquiryData);

      // Success
      setSnackbar({
        open: true,
        message: "Your enquiry has been submitted successfully!",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        mobile: "",
        reason: "",
        message: "",
        agreeSentMsg: false,
      });

    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setSnackbar({
        open: true,
        message: "Failed to submit enquiry. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ minHeight: "80vh" }}>
      <Box
        sx={{
          position: "relative",
          height: isMobile ? "50vh" : "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundImage: `url(${Backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          pb: 10,
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            width: {xs: "90%", md: "80%"},
            display: "flex",
            position: "relative",
            flexDirection: {xs: "column", md: "row"},
            top: {xs: "20%", md: "31%"},
            left: {xs: "5%", md: "5%"},
            color: "#000000",
            justifyContent: "space-between",
            gap: {xs: 2, md: 0}
          }}
        >
          <Typography variant="h2" sx={{fontSize: {xs: '2rem', md: '3rem'}}}>Contact</Typography>
          <Box
            sx={{
              width: {xs: "100%", md: "500px"},
            }}
          >
            <Typography
              variant="body2"
              sx={{
                marginRight: {xs: 0, md: "66px"},
                fontFamily: "Albert Sans",
                fontSize: {xs: '14px', md: '16px'},
                lineHeight: {xs: '20px', md: '24px'}
              }}
            >
              We are here to help you. Contact us using the form below, and we
              will get back to you as soon as possible.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: isMobile ? "-50%" : "-25%",
        }}
      >
        <Paper
          sx={{
            maxWidth: "100%",
            width: {xs:"90%",md:"80%"},
            borderRadius: 3,
            overflow: "hidden",
            display: "flex",
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)',
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left: Map */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              minHeight: { xs: 150, md: 400 },
              width: { xs: "100%", md: "55%" },
              p: { xs: 1, md: 2 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "8px",
                minHeight: "100%",
                height: "100%",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </Box>

          {/* Right: Form */}
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: {xs: "85%", md: "45%"},
            }}
          >
            <Typography variant="h4" sx={{fontSize: {xs: '1.5rem', md: '2rem'}}} gutterBottom>
              Request Call Back
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Name"
                variant="standard"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
                sx={{ width: "100%" }}
              />

              <TextField
                label="Mobile Number"
                type="tel"
                variant="standard"
                value={formData.mobile}
                onChange={handleInputChange('mobile')}
                required
                sx={{ width: "100%" }}
              />

              <FormControl
                variant="standard"
                sx={{ width: "100%" }}
                required
                disabled={servicesLoading}
              >
                
                <Select
                  value={formData.reason}
                  onChange={handleInputChange('reason')}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    {servicesLoading ? "Loading services..." : "Select Service"}
                  </MenuItem>
                  {services.map((service) => (
                    <MenuItem key={service.id} value={service.id}>
                      {service.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                multiline
                rows={2}
                placeholder="Write your query..."
                variant="standard"
                value={formData.message}
                onChange={handleInputChange('message')}
                required
                sx={{ width: "100%" }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.agreeSentMsg}
                    onChange={handleInputChange('agreeSentMsg')}
                    color="primary"
                    sx={{
                      color: '#368ADD',
                      '&.Mui-checked': {
                        color: '#368ADD',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 20,
                      }
                    }}
                  />
                }
                label="I would like to receive monthly newsletter on energy market reports."
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: {xs: '12px', md: '14px'}
                  }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="small"
                disabled={loading}
                sx={{
                  mt: 1,
                  width: {xs: "120px", md: "70px"},
                  height: "20px",
                  textTransform: "none",
                  borderRadius: 2,
                  background: "#368ADD",
                  color: "white",
                  padding: {xs: "10px 20px", md: "20px 70px"},
                  fontSize: {xs: "14px", md: "17px"},
                  marginLeft: {xs: "auto", md: "40%"},
                  alignSelf: {xs: "center", md: "flex-start"},
                  '&:disabled': {
                    background: '#ccc',
                  }
                }}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
