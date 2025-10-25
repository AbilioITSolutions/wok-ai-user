import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  CircularProgress,
  Alert,
  Dialog,
  DialogContent,
  Button,
  Divider,
  TextField,
  Rating,
  Snackbar,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { getUserAppointments } from "../../Apis/ProfileApis";
import bookingclinic from "../../ASSETS/bookingclinic.png"
import bookingdoctor from "../../ASSETS/bookingdoctor.png"
import star from "../../ASSETS/star.png"
import selectedstar from "../../ASSETS/selectedstar.png"
import { submitClinicReview, submitDoctorReview } from "../../Apis/RatingApi";

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dialog States
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Review states
  const [clinicRating, setClinicRating] = useState(0);
  const [doctorRating, setDoctorRating] = useState(0);
  const [clinicReview, setClinicReview] = useState("");
  const [doctorReview, setDoctorReview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getUserAppointments();
        setAppointments(response.data || []);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setError("Failed to load appointments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Handle Submit Review
  const handleSubmitReview = async () => {
    setSubmitting(true);
    try {
      const bookingId = selectedAppointment?.id;

      if (clinicRating > 0 && clinicReview.trim()) {
        await submitClinicReview({
        
          bookingId,
          clinicId: selectedAppointment?.clinic?.id,
          rating: clinicRating,
          message: clinicReview,
        });
      }

      if (doctorRating > 0 && doctorReview.trim()) {
        await submitDoctorReview({
          bookingId,
          doctorId: selectedAppointment?.doctor?.id,
          rating: doctorRating,
          message: doctorReview,
        });
      }

      // Success - close dialog and reset
      setOpenDialog(false);
      setClinicRating(0);
      setDoctorRating(0);
      setClinicReview("");
      setDoctorReview("");
      setSnackbar({
        open: true,
        message: "Reviews submitted successfully!",
        severity: "success",
      });
    } catch (error) {
      console.error("Error submitting reviews:", error);
      setSnackbar({
        open: true,
        message: "Failed to submit reviews. Please try again.",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  // Loading state
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: { xs: 2, sm: 3 },
          color: "#333",
          fontSize: { xs: "1.1rem", sm: "1.25rem" },
        }}
      >
        My Bookings
      </Typography>

      {appointments.length === 0 ? (
        <Typography
          variant="body1"
          sx={{ color: "#666", textAlign: "center", py: 4 }}
        >
          No appointments found
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.5, sm: 2 },
          }}
        >
          {appointments.map((appointment) => (
            <Card
              key={appointment.id}
              sx={{
                borderRadius: { xs: 1.5, sm: 2 },
                boxShadow: "none",
                border: "1px solid #e0e0e0",
                backgroundColor: "#ffffff",
                transition: "all 0.2s ease-in-out",
                cursor: appointment.bookingStatus === "completed" ? "pointer" : "default",
                "&:hover": {
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transform: appointment.bookingStatus === "completed" ? "translateY(-1px)" : "none",
                },
              }}
              onClick={() => {
                if (appointment.bookingStatus === "completed") {
                  setSelectedAppointment(appointment);
                  setOpenDialog(true);
                }
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: {
                      xs: "flex-start",
                      sm: "center",
                    },
                    justifyContent: "space-between",
                    gap: { xs: 1.5, sm: 0 },
                    flexWrap: { xs: "wrap", sm: "nowrap" },
                  }}
                >
                  {/* Left Section - Clinic Info */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: { xs: "flex-start", sm: "center" },
                      gap: { xs: 1.5, sm: 2 },
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <Typography
                      component="img"
                      src={appointment.doctor?.image}
                      sx={{
                        width: { xs: 40, sm: 70 },
                        height: { xs: 40, sm: 70 },
                        backgroundColor: "#8B1538",
                        borderRadius: "50%",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        flexShrink: 0,
                      }}
                    />
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#368ADD",
                          mb: { xs: 0.25, sm: 0.5 },
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {appointment.clinic?.name || "Clinic Name"}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          mb: { xs: 0.75, sm: 1 },
                          fontSize: { xs: "0.8rem", sm: "0.875rem" },
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {appointment.treatment_service?.name || "Specialty"}
                      </Typography>

                      {/* Date and Time */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: { xs: 1.5, sm: 2 },
                          flexWrap: "wrap",
                          mt: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 0.5, sm: 1 },
                            minWidth: "fit-content",
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{
                              fontSize: { xs: "0.9rem", sm: "1rem" },
                              color: "#666",
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#666",
                              fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            }}
                          >
                            {appointment.bookingDate
                              ? new Date(
                                  appointment.bookingDate
                                ).toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                              : "Date not available"}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 0.5, sm: 1 },
                            minWidth: "fit-content",
                          }}
                        >
                          <AccessTimeIcon
                            sx={{
                              fontSize: { xs: "0.9rem", sm: "1rem" },
                              color: "#666",
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#666",
                              fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            }}
                          >
                            {appointment.bookingTime || "Time not available"}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#666",
                              fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            }}
                          >
                            {appointment.bookingType || ""}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Right Section - Status and Arrow */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: { xs: "flex-start", sm: "center" },
                      gap: { xs: 0.5, sm: 1 },
                      flexShrink: 0,
                    }}
                  >
                    <Chip
                      label={appointment.bookingStatus || "Scheduled"}
                      sx={{
                        backgroundColor: appointment.bookingStatus === "completed" ? "# #90EE9090" : "#FFF3E0",
                        color: appointment.bookingStatus === "completed" ? "#02D210" : "#FF9800",
                        fontWeight: "bold",
                        fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        height: { xs: "24px", sm: "28px" },
                        "& .MuiChip-label": {
                          px: { xs: 1, sm: 1.5 },
                        },
                      }}
                    />
                   {appointment.bookingStatus === "completed" && <IconButton
                      size="small"
                      sx={{
                        color: "#333",
                        p: { xs: 0.5, sm: 1 },
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click when clicking the button
                        setSelectedAppointment(appointment);
                        setOpenDialog(true);
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* Review Dialog Box */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: { borderRadius: "16px", p: 1 },
        }}
      >
        <DialogContent>
          <Box display="flex" justifyContent="flex-end">
            <IconButton  onClick={() => setOpenDialog(false)} color="error">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            gap={3}
            flexWrap="wrap"
          >
            {/* For Clinic */}
            <Box flex={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <img src={bookingclinic} alt="Booking Clinic" />
                <Typography variant="h6" color="primary">
                  For Clinic
                </Typography>
              </Box>

              <Typography fontStyle="italic" mt={1}>
                Rate Your Experience
              </Typography>
              <Rating
                value={clinicRating}
                onChange={(e, newValue) => setClinicRating(newValue)}
                size="large"
                precision={1}
                emptyIcon={<img src={star} alt="Star" style={{ width: 26, height: 26 }} />}
                icon={<img src={selectedstar} alt="Selected Star" style={{ width: 26, height: 26 }} />}
              />

              <Typography fontStyle="italic" mt={2}>
                Write a Review
              </Typography>
              <TextField
                multiline
                rows={4}
                fullWidth
                value={clinicReview}
                onChange={(e) => setClinicReview(e.target.value)}
                sx={{ mt: 1 }}
              />
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderStyle: "dashed" }}
            />

            {/* For Doctor */}
            <Box flex={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <img src={bookingdoctor} alt="Booking Doctor" />
                <Typography variant="h6" color="primary">
                  For Doctor
                </Typography>
              </Box>

              <Typography fontStyle="italic" mt={1}>
                Rate Your Experience
              </Typography>
              <Rating
                value={doctorRating}
                onChange={(e, newValue) => setDoctorRating(newValue)}
                size="large"
                precision={1}
                emptyIcon={<img src={star} alt="Star" style={{ width: 26, height: 26 }} />}
                icon={<img src={selectedstar} alt="Selected Star" style={{ width: 26, height: 26 }} />}
              />

              <Typography fontStyle="italic" mt={2}>
                Write a Review
              </Typography>
              <TextField
                multiline
                rows={4}
                fullWidth
                value={doctorReview}
                onChange={(e) => setDoctorReview(e.target.value)}
                sx={{ mt: 1 }}
              />

              <Box textAlign="right" mt={3}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#368ADD',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#2c3e50',
                    },
                  }}
                  onClick={handleSubmitReview}
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

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
};

export default Bookings;
