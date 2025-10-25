
import React, { useState } from "react";
import { scheduleData } from "../../Services/AuthApi";
import {
    Grid,
    Paper,
    Typography,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    Box,
    Divider,
} from "@mui/material";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../Context/BookingContext";

const ScheduleTime = () => {
    const [date, setDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("11:00 AM");
    const [consulting, setConsulting] = useState("offline");

    const navigate = useNavigate();
    const { updateBookingData } = useBooking();

    const handleContinue = () => {
        // Store the current state in context, even if defaults
        const appointmentDate = date ? date.format('YYYY-MM-DD') : null;
        const appointmentTime = selectedTime;
        const consultingType = consulting;

        updateBookingData('appointmentDate', appointmentDate);
        updateBookingData('appointmentTime', appointmentTime);
        updateBookingData('consultingType', consultingType);

        // Navigate to next page
        navigate('/doctorlist/clinic/patient-info'); // Replace with actual route
    };

    return (
        <Container maxWidth="lg">
            {/* <StepperNav/> */}
        <Box sx={{ p: 2 }}>
          
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Select Date & Time
            </Typography>

            <Grid container spacing={3}>
               
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper
                        variant="outlined"
                        sx={{
                            borderRadius: 2,
                            p: 2,
                            height: "100%",
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                                displayStaticWrapperAs="desktop"
                                slotProps={{
                                    actionBar: { actions: [] },
                                }}
                            // slots={{
                            //   layout: (props) => (
                            //     <Box>
                            //       {/* Month Header */}
                            //       {props.calendarHeader}

                            //       {/* Divider below month header */}
                            //       <Divider
                            //         sx={{
                            //           my: 1,
                            //           borderColor: "#e0e0e0",
                            //         }}
                            //       />

                            //       {/* Calendar grid */}
                            //       {props.calendar}
                            //     </Box>
                            //   ),
                            // }}
                            />
                        </LocalizationProvider>
                    </Paper>
                </Grid>


                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper
                        variant="outlined"
                        sx={{ p: 2, borderRadius: 2, height: "100%" }}
                    >
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                            Available Times
                        </Typography>

                        {/* Time Slots */}
                        <Grid container spacing={2}>
                            {scheduleData.times.map(({ time, disabled }) => (
                                <Grid size={{ xs: 6 }} key={time}>
                                    <Button
                                        fullWidth
                                        variant={selectedTime === time ? "contained" : "outlined"}
                                        disabled={disabled}
                                        onClick={() => setSelectedTime(time)}
                                        sx={{
                                            height: "50px",
                                            borderRadius: "10px",
                                            fontWeight: "bold",
                                            textTransform: "none",
                                            backgroundColor:
                                                selectedTime === time ? "#1976d2" : "#f5f9ff",
                                            color:
                                                selectedTime === time
                                                    ? "#fff"
                                                    : disabled
                                                        ? "#bdbdbd"
                                                        : "#1976d2",
                                            borderColor:
                                                selectedTime === time ? "#1976d2" : "#e0e0e0",
                                            "&:hover": {
                                                backgroundColor:
                                                    selectedTime === time ? "#1565c0" : "#e3f2fd",
                                            },
                                        }}
                                    >
                                        {time}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>

                        
                        <Divider sx={{ my: 3, borderColor: "#e0e0e0" }} />

                 
                        <Box
                            sx={{
                                p: 2,
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                sx={{ mb: 1, display: "flex", alignItems: "center" }}
                            >
                                🖥️ Consulting for?
                            </Typography>
                            <RadioGroup
                                row
                                value={consulting}
                                onChange={(e) => setConsulting(e.target.value)}
                            >
                                <FormControlLabel
                                    value="online"
                                    control={<Radio />}
                                    label="Online"
                                />
                                <FormControlLabel
                                    value="offline"
                                    control={<Radio />}
                                    label="Offline"
                                />
                            </RadioGroup>
                            {consulting === "online" && (
                                <Typography
                                    variant="caption"
                                    sx={{
                                        display: "block",
                                        mt: 1,
                                        color: "error.main",
                                        fontStyle: "italic",
                                    }}
                                >
                                    Choose online consulting to receive your Zoom meeting link.
                                </Typography>
                            )}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container  sx={{display:"flex", justifyContent:"space-between", mt: 6}}>

                <Button onClick={() => navigate(-1)} startIcon={<ArrowBack />}>Back</Button>
                <Button variant="contained" endIcon={<ArrowForward />} onClick={handleContinue}>
                    Continue
                </Button>

            </Grid>
        </Box>
        </Container>
    );
};

export default ScheduleTime;
