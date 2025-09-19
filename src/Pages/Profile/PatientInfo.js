// PatientInfo.js
import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  Divider,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Container } from "@mui/system";
// import StepperNav from "../../Routes/StepperNav";

const PatientInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    currentSymptoms: "",
    currentMedications: "",
    allergies: "",
    medicalHistory: "",
    newPatient: false,
    insurance: false,
    consent: false,
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

//   const handleSubmit = () => {
//     console.log("Patient Info JSON:", formData);
//   };

  return (
    <Container maxWidth="lg">
      {/* <StepperNav/> */}
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Patient Information
      </Typography>

      
      {/* Side by side equal width sections */}
      <Grid container spacing={3}>
        {/* Personal Details */}
        <Grid size={{xs:12, md:6}}>
          <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
            <Box display="flex" alignItems="center" mb={2}>
              <PersonIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Personal Details</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />
              </Grid>
              <Grid size={{xs:12, md:6}}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date of Birth"
                  name="dob"
                  InputLabelProps={{ shrink: true }}
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select Gender</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Medical Information */}
        <Grid size={{xs:12, md:6}}>
          <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
            <Box display="flex" alignItems="center" mb={2}>
              <FavoriteBorderIcon color="error" sx={{ mr: 1 }} />
              <Typography variant="h6">Medical Information</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Symptoms"
                  name="currentSymptoms"
                  value={formData.currentSymptoms}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  placeholder="Please describe here..."
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Medications"
                  name="currentMedications"
                  value={formData.currentMedications}
                  onChange={handleChange}
                  placeholder="Please describe here..."
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  placeholder="Please describe here..."
                />
              </Grid>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Medical History"
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  placeholder="Please describe here..."
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Additional Info */}
      <Box mt={3}>
        <Paper  sx={{ p: 4 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <SettingsIcon color="action" sx={{ mr: 1 }} />
            <Typography variant="h6">Additional Information</Typography>
          </Box>
          {/* <Divider sx={{ mb: 2 }} /> */}

          <Grid container spacing={2}>
            <Grid size={{xs:12, md:6}}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="newPatient"
                    checked={formData.newPatient}
                    onChange={handleChange}
                  />
                }
                label="I am a new patient to this doctor"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="insurance"
                    checked={formData.insurance}
                    onChange={handleChange}
                  />
                }
                label="I have health insurance"
              />
            </Grid>
            <Grid size={{xs:12, sm:6, md:6}}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                }
                label="I consent to receive medical treatment"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                  />
                }
                label="I agree to the privacy policy and terms"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {/* Buttons */}
      <Grid container  sx={{display:"flex", justifyContent:"space-between", mt: 2 }}>
      
                      <Button startIcon={<ArrowBack />}>Back</Button>
                      <Button variant="contained" endIcon={<ArrowForward />}>
                          Continue
                      </Button>
      
                  </Grid>
    </Box>
    </Container>
  );
};

export default PatientInfo;
