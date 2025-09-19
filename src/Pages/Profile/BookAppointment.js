
import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { appointmentData } from "../../Services/AuthApi"
import { Container } from "@mui/system";



const BookAppointment = () => {
  return (
    
    <Container maxWidth='lg'>
      <Box sx={{ px: { xs: 2, md: 4 }, py: 3, backgroundColor: "#fafafa", width: "100%" }}>
        
        <Breadcrumbs separator="›" sx={{ mb: 1, fontSize: 14, color: "gray" }}>
          {appointmentData.breadcrumb.map((item, index) => (
            <Link
              key={index}
              underline="hover"
              color={index === appointmentData.breadcrumb.length - 1 ? "text.primary" : "inherit"}
              href="#"
            >
              {item}
            </Link>
          ))}
        </Breadcrumbs>

       
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 2, md: 0 }
          }}
        >
        
          <Box>
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: "1.4rem", md: "2rem" } }}>
              {appointmentData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {appointmentData.subtitle}
            </Typography>
          </Box>

        
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // stack vertically on xs, row on sm+
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
              mt: { xs: 2, md: 0 }
            }}
          >
           
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: 1,
                px: 2,
                py: 1,
                width: { xs: "100%", sm: "auto" }
              }}
            >
              <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">{appointmentData.bookingInfo.text}</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", color: "error.main" }}>
              <HelpOutlineIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" fontWeight="medium" color="error">
                {appointmentData.help.text}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default BookAppointment;

