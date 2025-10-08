import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  Grid
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";

const MyBilling = () => {
  const appointments = [
    {
      id: 1,
      doctor: {
        name: "DR. Sarah Johnson",
        specialty: "Hair Specialist",
        experience: "10 years experience",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        status: "Confirmed"
      },
      appointment: {
        date: "Saturday, August 30, 2025",
        time: "11:00 AM EST",
        type: "Offline"
      },
      booking: {
        id: "APT-1756544321272",
        total: "₹899.0"
      }
    },
    {
      id: 2,
      doctor: {
        name: "DR. Rajendhar Reddy",
        specialty: "Dermatologist",
        experience: "8 years experience",
        avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
        status: "Confirmed"
      },
      appointment: {
        date: "Monday, September 2, 2025",
        time: "2:30 PM EST",
        type: "Online"
      },
      booking: {
        id: "APT-1756544321273",
        total: "₹750.0"
      }
    }
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#333" }}>
        My Billings
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {appointments.map((appointment) => (
          <Card
            key={appointment.id}
            sx={{
              borderRadius: 2,
              boxShadow: "none",
              border: "1px solid #e0e0e0",
              backgroundColor: "#ffffff"
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "flex-start" },
                gap: { xs: 2, md: 0 }
              }}>
                {/* Left Section - Doctor Info */}
                <Box sx={{
                  display: "flex",
                  alignItems: { xs: "center", md: "flex-start" },
                  gap: 2,
                  flex: 1,
                  width: { xs: "100%", md: "auto" }
                }}>
                  <Avatar
                    src={appointment.doctor.avatar}
                    alt={appointment.doctor.name}
                    sx={{
                      width: { xs: 50, sm: 60 },
                      height: { xs: 50, sm: 60 },
                      border: "2px solid #e0e0e0"
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant={{ xs: "subtitle1", md: "h6" }} sx={{
                      fontWeight: "bold",
                      color: "#368ADD",
                      mb: 0.5
                    }}>
                      {appointment.doctor.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                      {appointment.doctor.specialty}
                    </Typography>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mb: 1,
                      flexWrap: { xs: "wrap", md: "nowrap" }
                    }}>
                      <WorkIcon sx={{ fontSize: "1rem", color: "#666" }} />
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {appointment.doctor.experience}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4CAF50",
                        fontWeight: "bold",
                        backgroundColor: "#E8F5E8",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        display: "inline-block"
                      }}
                    >
                      {appointment.doctor.status}
                    </Typography>
                  </Box>
                </Box>

                {/* Right Section - Appointment Details */}
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 1, md: 1.5 },
                  minWidth: { xs: "auto", md: "200px" },
                  width: { xs: "100%", md: "auto" }
                }}>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: { xs: "wrap", md: "nowrap" }
                  }}>
                    <CalendarTodayIcon sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, color: "#666" }} />
                    <Typography variant="body2" sx={{ color: "#666", minWidth: "40px" }}>
                      Date
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                      {appointment.appointment.date}
                    </Typography>
                  </Box>

                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: { xs: "wrap", md: "nowrap" }
                  }}>
                    <AccessTimeIcon sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, color: "#666" }} />
                    <Typography variant="body2" sx={{ color: "#666", minWidth: "40px" }}>
                      Time
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                      {appointment.appointment.time}
                    </Typography>
                  </Box>

                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: { xs: "wrap", md: "nowrap" }
                  }}>
                    <ComputerIcon sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, color: "#666" }} />
                    <Typography variant="body2" sx={{ color: "#666", minWidth: "40px" }}>
                      Type
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                      {appointment.appointment.type}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Bottom Section - Booking Details */}
              <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 2, sm: 0 }
              }}>
                <Box>
                  <Typography variant="body2" sx={{ color: "#666", mb: 0.5 }}>
                    Booking ID
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: "#333" }}>
                    {appointment.booking.id}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                  <Typography variant="body2" sx={{ color: "#666", mb: 0.5 }}>
                    Total Paid
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                    {appointment.booking.total}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MyBilling;
