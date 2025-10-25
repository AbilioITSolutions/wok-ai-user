import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const BookingGuide = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" , backgroundColor: "#f9fafb" }}>
    <Navbar />
    <Box sx={{ p: { xs: 2, sm: 4 } , mt:16, minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{ color: "#9ca3af", fontSize: "0.9rem", mb: 2 }}
      >
        <Link underline="hover" color="inherit" href="#">
          Confirmed
        </Link>
        <Typography color="text.primary">Booking Guide</Typography>
      </Breadcrumbs>

      {/* Main Card */}
      <Card
        variant="outlined"
        sx={{
          borderRadius: 3,
          p: { xs: 3, sm: 5 },
          maxWidth: 900,
          mx: "auto",
          boxShadow: "none",
        }}
      >
        {/* Page Title */}
        <Typography
          variant="h5"
          sx={{
            color: "#0078ff",
            fontWeight: 700,
            mb: 3,
          }}
        >
          Doctor Booking Guide
        </Typography>

        {/* Steps Section */}
        {[
          {
            step: "Step 1: Search for a Doctor",
            points: [
              "Enter your health concern (e.g., fever, skin issues, eye checkup).",
              "Browse doctors by specialization (General Physician, Dermatologist, Dentist, etc.).",
            ],
          },
          {
            step: "Step 2: Choose Your Clinic",
            points: [
              "Wok AI auto–detects your location.",
              "Pick the nearest or most convenient clinic from the list.",
            ],
          },
          {
            step: "Step 3: Select Date & Time",
            points: [
              "View doctor’s availability in real–time.",
              "Choose your preferred appointment slot.",
            ],
          },
          {
            step: "Step 4: Confirm Your Details",
            points: [
              "Fill in your name, contact number, and patient details.",
              "Add notes for the doctor if needed.",
            ],
          },
          {
            step: "Step 5: Secure Your Booking",
            points: [
              "Confirm your appointment with one click.",
              "Pay online (optional) or at the clinic.",
            ],
          },
          {
            step: "Step 6: Get Confirmation",
            points: [
              "Receive instant SMS / app notification with booking ID.",
              "Option to reschedule or cancel anytime.",
            ],
          },
        ].map((section, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 1, color: "#111827" }}
            >
              {section.step}
            </Typography>
            <List dense sx={{ pl: 2 }}>
              {section.points.map((point, i) => (
                <ListItem key={i} sx={{ py: 0 }}>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "0.95rem", color: "#374151" }}
                    primary={`• ${point}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}

        <Divider sx={{ my: 3 }} />

        {/* Tip Section */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#111827", mb: 1 }}>
          Tip:
        </Typography>
        <Typography variant="body2" sx={{ color: "#4b5563" }}>
          Arrive 10–15 mins early at the clinic. Carry any old prescriptions or reports
          for smoother consultation.
        </Typography>
      </Card>
    </Box>
    <Footer />
    </Box>
  );
};

export default BookingGuide;
