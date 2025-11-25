import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Divider,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

// Icon Imports to match the visual style
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Used for location pin
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Cards = ({ data, onReviewClick }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/doctorlist/clinic' , {state:{Clinicid:data.id}});

  };

  // Default values for missing properties
  const safeData = {
    image: data?.image || '',
    name: data?.name || 'Unknown Clinic',
    rating: data?.rating || 0,
    location: data?.address || 'Location not available',
    reviews: data?.reviewsCount || 'No reviews',
    specialties: data?.clinic_service?.map(service => service.treatment?.name).filter(Boolean) || [],
    phone: data?.phone_number || 'Phone not available',
    email: data?.email || 'Email not available',
    priceRange: data?.clinic_service?.length > 0 
      ? `${Math.min(...data.clinic_service.map(s => parseInt(s.priceRange?.split('-')[0]) || 0))}-${Math.max(...data.clinic_service.map(s => parseInt(s.priceRange?.split('-')[1]) || 0))}`
      : 'Price not available',
  };

  // Styles for the Specialty Buttons (light blue background/dark blue text)
  const specialtyButtonStyle = {
    fontSize: "10px",
    height: "24px",
    padding: "0 10px",
    borderRadius: "6px",
    textTransform: "none",
    backgroundColor: "#E6F0FF", // Very light blue background
    color: "#368ADD",          // Primary blue text
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: "#C9E0FF",
      boxShadow: 'none',
    },
  };

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 400 }, // Responsive width for mobile/desktop view
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Subtle shadow from image
        display: "flex",
        flexDirection: "column",
        margin: 'auto',
        boxShadow: 'none',
        border: '1px solid #e0e0e0',
        cursor: 'pointer',
        
      }}
    >
      <Box 
        onClick={handleCardClick}
        sx={{ cursor: 'pointer' }}
      >
      {/* 1. Image Area */}
      <CardMedia
        component="img"
        height="230"
        image={safeData.image}
        alt={safeData.name}
        sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            objectFit: 'cover' 
        }}
      />

      {/* 2. Content Area */}
      <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
        {/* Name and Rating Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
           
          }}
        >
          <Typography variant="h6" component="div" sx={{ color: "#368ADD", fontWeight: 600 }}>
            {safeData.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", color: "text.secondary", fontSize: '0.9rem' }}>
            <StarIcon sx={{ fontSize: "16px", color: "#FFC107", mr: 0.5 }} />
            <Typography  onClick={(e) => {
              e.stopPropagation();
              onReviewClick();
            }}   component="span" variant="body1" sx={{ fontWeight: 600 }}>
              {safeData.rating}
            </Typography>
          </Box>
        </Box>

        {/* Location and Reviews Row */}
        <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#A9A9A9' }}>
              <LocationOnIcon sx={{ fontSize: "18px", mr: 0.5 }} />
              <Typography variant="body2" component="span" sx={{ fontSize: "14px", color: "#A9A9A9" }}>
                {safeData.location}
              </Typography>
          </Box>
          <Box 
            onClick={(e) => {
              e.stopPropagation();
              onReviewClick();
            }} 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              cursor: "pointer", 
              color: "#A9A9A9", 
              "&:hover": { color: "#368ADD" } 
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "13px", mr: 0.5 , color: "#A9A9A9" }}>
              {safeData.reviews}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "13px" , color: "#A9A9A9"}}>
            Rating 
            </Typography>
          </Box>
        </Box>

        {/* Specialty Tags/Buttons */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          {safeData.specialties.map((val, index) => (
            <Button
              key={index}
              size="small"
              sx={specialtyButtonStyle}
            >
              {val}
            </Button>
          ))}
        </Box>

        {/* Contact Info */}
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', color: '#A9A9A9', mb: 0.5 }}>
                <LocalPhoneIcon sx={{ fontSize: '16px', mr: 1 }} />
                <Typography variant="body2" sx={{ fontSize: "14px" }}>
                    {safeData.phone}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', color: '#A9A9A9', mb: 1 }}>
                <EmailIcon sx={{ fontSize: '16px', mr: 1 }} />
                <Typography variant="body2" sx={{ fontSize: "14px" }}>
                    {safeData.email}
                </Typography>
            </Box>
        </Box>

        <Divider sx={{ my: 1, borderColor: '#eee' }} />

        {/* Price Range */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 }}>
          <Box sx={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              backgroundColor: '#A9A9A9', 
              mr: 1 
            }} 
          />
          <Typography variant="body2" sx={{ color: "#A9A9A9" }}>
            Price Range:{" "}
            <Typography component="span" sx={{ color: "red", fontWeight: 600 }}> 
                ₹{safeData.priceRange}
            </Typography>
          </Typography>
        </Box>

      </CardContent>
      </Box>

      {/* 3. Action Area */}
      <CardActions sx={{ padding: '16px', paddingTop: 0 }}>
        <Button 
          variant="contained" 
          disableElevation 
          fullWidth
          onClick={handleCardClick}
          sx={{
            backgroundColor: "#368ADD", // Primary Blue Button
            '&:hover': {
                backgroundColor: "#2977C9",
            },
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            padding: '10px 0'
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
