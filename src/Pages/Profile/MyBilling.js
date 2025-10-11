import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  Grid,
  CircularProgress,
  Alert
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";
import { getUserAppointments } from '../../Apis/ProfileApis';

const MyBilling = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getUserAppointments();
                setAppointments(response.data || []);
            } catch (error) {
                console.error('Error fetching appointments:', error);
                setError('Failed to load billing information. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Alert severity="error" sx={{ mb: 2 }}>
                {error}
            </Alert>
        );
    }

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#333" }}>
        My Billings
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {appointments.length === 0 ? (
            <Typography variant="body1" sx={{ color: '#666', textAlign: 'center', py: 4 }}>
                No billing information found.
            </Typography>
        ) : ( 
          appointments.map((appointment) => (
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
                    src={appointment.doctor?.image}
                    alt={appointment.doctor?.name || 'Doctor'}
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
                      {appointment.doctor?.name || 'Doctor Name'}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                      {appointment.treatment_service?.name || 'Specialty'}
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
                        {`${appointment.doctor?.experience || 'N/A'} years experience`}
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
                      {appointment.bookingType || 'Scheduled'}
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
                      {appointment.bookingDate ? new Date(appointment.bookingDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Date not available'}
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
                      {appointment.bookingTime || 'Time not available'}
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
                      {appointment.appointment_type || 'Online'}
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
                    {appointment.id}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                  <Typography variant="body2" sx={{ color: "#666", mb: 0.5 }}>
                    Total Paid
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                    {`₹${appointment.consultingPrice || '0.00'}`}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )))
      }
      </Box>
    </Box>
  );
};

export default MyBilling;
