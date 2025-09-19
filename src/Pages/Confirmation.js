import React, { useState } from "react";
import {
    Box,
    Grid,
    Paper,
    Typography,
    Button,
    Divider,
    Checkbox,
    FormControlLabel,
} from "@mui/material";


import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import { confirmationData } from "../Services/AuthApi"
import { Container } from "@mui/system";


const Confirmation = () => {
    const [agree, setAgree] = useState(false);

    return (
        <Container maxWidth="lg">
            <Box sx={{ p: { xs: 2, md: 4 } }}>
                <Paper
                    variant="outlined"
                    sx={{ borderRadius: 3, p: { xs: 2, md: 4 }, textAlign: "center" }}
                >

                    <CheckCircleIcon sx={{ fontSize: 70, color: "green", mb: 1 }} />
                    <Typography variant="h5" fontWeight="bold">
                        Confirm Your Appointment
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Please review your appointment details before confirming
                    </Typography>

                    <Grid container spacing={3}>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Box sx={{ display:"flex", flexDirection:"column" }}>
                                    <Typography variant="subtitle1" fontWeight="bold" color="primary"  sx={{float:"left"}}>
                                        Doctor Details
                                    </Typography>
                                </Box>
                                {/* <Divider sx={{ my: 1 }} /> */}
                                <Box alignItems="center" gap={2}>
                                   <Box>
                                     <img
                                        src={confirmationData.doctor.image}
                                        alt="doctor"
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            float:"left"
                                        }}
                                    />
                                   </Box>
                                    <Box textAlign="left">
                                        <Typography fontWeight="bold">
                                            {confirmationData.doctor.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {confirmationData.doctor.specialty}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {confirmationData.doctor.experience}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Patient Info */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    Patient Information
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                {Object.entries(confirmationData.patient).map(([key, value]) => (
                                    <Typography key={key} variant="body2" sx={{ my: 0.5 }}>
                                        <b>
                                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}:
                                        </b>{" "}
                                        {value}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>

                        {/* Consultation Details */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    Consultation Details
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <Typography variant="body2">
                                    <b>Type :</b> {confirmationData.consultation.type}
                                </Typography>
                                <Typography variant="body2">
                                    <b>Date :</b> {confirmationData.consultation.date}
                                </Typography>
                                <Typography variant="body2">
                                    <b>Time :</b> {confirmationData.consultation.time}
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Payment Summary */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    Payment Summary
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <Typography variant="body2">
                                    <b>Payment Mode :</b> {confirmationData.payment.mode}
                                </Typography>
                                <Typography variant="body2">
                                    <b>Consultation Fee :</b> {confirmationData.payment.fee}
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <Typography variant="subtitle1" color="primary" fontWeight="bold">
                                    Total Amount: {confirmationData.payment.total}
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Preparation */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    Pre-consultation Preparation
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                {confirmationData.preparation.map((item, index) => (
                                    <Typography key={index} variant="body2" sx={{ my: 0.5 }}>
                                        • {item}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>

                        {/* Cancellation Policy */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                    Cancellation Policy
                                </Typography>
                                <Divider sx={{ my: 1 }} />
                                <Typography variant="body2" color="text.secondary">
                                    {confirmationData.cancellationPolicy}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* ✅ Terms & Confirm Button */}
                    <Box sx={{ mt: 3, textAlign: "left" }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                />
                            }
                            label="I agree to the terms and conditions, privacy policy, and cancellation policy*"
                        />
                    </Box>

                    <Box
                        sx={{
                            mt: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Button variant="text">← Back</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={!agree}
                            endIcon={<CheckCircleIcon />}
                        >
                            Confirm Appointment
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Confirmation;