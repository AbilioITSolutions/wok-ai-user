import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import amayaClinicImg from  "../Assets/ProfileImages/amayaClinic.png";
import layersImg from "../Assets/ProfileImages/layersImg.png";

const Bookings = () => {
  const data = {
    appointments: [
      {
        id: 1,
        clinic: "Layers Clinic",
        specialist: "Hair Specialist",
        date: "Friday, August 29, 2025",
        time: "11:00 AM",
        status: "Scheduled",
        btnBackgroundColor: "#FFF4E5",
        color: "#FFA500",
        border: "none",
        logo: layersImg,
      },
      {
        id: 2,
        clinic: "Amaya Hair & Skin Clinic",
        specialist: "Hair Surgeon",
        date: "Friday, August 12, 2025",
        time: "10:30 AM",
        status: "Completed",
        btnBackgroundColor: "#E6FFEC",
        color: "#00B050",
        border: "none",
        logo: amayaClinicImg,
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 9 }}>
          <Box>
            {data.appointments.map((appt) => (
              <Box
                key={appt.id}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={2}
                borderRadius={2}
                mb={2}
                sx={{
                  border: "1px solid #E0E0E0",
                  bgcolor: "#fff",
                }}
              >
                {/* Left side - Clinic Info */}
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    src={appt.logo}
                    alt={appt.clinic}
                    sx={{ height: "50px", width: "50px" }}
                  />
                  <Box>
                    <Typography fontWeight="bold" sx={{ color: "#368ADD" }}>
                      {appt.clinic}
                    </Typography>
                    <Typography variant="body2" color="#A9A9A9">
                      {appt.specialist}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                      <CalendarTodayIcon fontSize="small" color="action" />
                      <Typography variant="caption">{appt.date}</Typography>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="caption">{appt.time}</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Right side - Status */}
                <Box display="flex" alignItems="center" gap={1}>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      color: appt.color,
                      backgroundColor: appt.btnBackgroundColor,
                      border: appt.border,
                      borderRadius: "12px",
                      fontSize: "12px",
                      textTransform: "none",
                      fontWeight: "bold",
                      px: 2,
                      "&:hover": {
                        backgroundColor: appt.btnBackgroundColor,
                      },
                    }}
                  >
                    {appt.status}
                  </Button>

                  <ChevronRightIcon sx={{ color: "#9E9E9E" }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bookings;






