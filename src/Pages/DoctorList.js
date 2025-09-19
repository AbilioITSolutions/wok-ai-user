import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Cards from "../Common/Cards";
import img1 from '../Assets/one.png'
import img2 from '../Assets/two.png'
import img3 from '../Assets/three.png'


const DoctorList = () => {
  const clinics = [
    {
      id: "1",
      name: "Layers Clinic",
      location: "Jubilee Hills, Hyderabad",
      specialties: ["Cardiology", "Oncology", "Surgery"],
      rating: 4.8,
      reviews: "4,250+ reviews",
      phone: "+91 9000572727",
      email: "info@layersclinics.com",
      priceRange: "20K to 1.2K",
      image: img1,
      coordinates: [17.4239, 78.4483],
    },
    {
      id: "2",
      name: "Sikara clinics",
      location: "Kothapet, Hyderabad",
      specialties: ["Hair", "Skin", "Laser"],
      rating: 4.8,
      reviews: "4,250+ reviews",
      phone: "1800 4123 1867",
      email: "enquiry@sikaraclinics.com",
      priceRange: "45K to 1K",
      image: img2,
      coordinates: [17.3691, 78.5386],
    },
    {
      id: "3",
      name: "Hair Creations",
      location: "Dilsuknagar, Hyderabad",
      specialties: ["Hair Transplant", "GFC for Hair", "FUE"],
      rating: 4.8,
      reviews: "4,250+ reviews",
      phone: "+91 90528 72222",
      email: "haircreations@gmail.com",
      priceRange: "79K to 2.2K",
      image: img3,
      coordinates: [17.3682, 78.5265],
    },
    {
      id: "4",
      name: "Layers Clinic",
      location: "Jubilee Hills, Hyderabad",
      specialties: ["Cardiology", "Oncology", "Surgery"],
      rating: 4.8,
      reviews: "4,250+ reviews",
      phone: "+91 9000572727",
      email: "info@layersclinics.com",
      priceRange: "20K to 1.2K",
      image: img1,
      coordinates: [17.3682, 78.5265],
    },
    {
      id: "5",
      name: "Sikara clinics",
      location: "Kothapet, Hyderabad",
      specialties: ["Hair", "Skin", "Laser"],
      rating: 4.8,
      reviews: "4,250+ reviews",
      phone: "1800 4123 1867",
      email: "enquiry@sikaraclinics.com",
      priceRange: "45K to 1K",
      image: img2,
      coordinates: [17.3691, 78.5386],
    },
    {
      id: "6",
      name: "Hair Creations",
      location: "Dilsuknagar, Hyderabad",
      specialties: ["Hair Transplant", "GFC for Hair", "FUE"],
      rating: 4.8,
      reviews: "4,250+ reviews",
      phone: "+91 90528 72222",
      email: "haircreations@gmail.com",
      priceRange: "79K to 2.2K",
      image: img3,
      coordinates: [17.3682, 78.5265],
    },
  ];
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          gutterBottom
          aria-label="empty textarea"
          placeholder="Search treatment, clinic or anything.."
          style={{ width: "83%", height: "40px" }}
        />
        <Button
          variant="contained"
          href="#contained-buttons"
          sx={{ mb: "39px", height: "55px", width: "15%" }}
        >
          <FilterAltIcon /> Filter
        </Button>
      </Box>
      <Typography gutterBottom variant="h6" sx={{ color: "#368ADD" }}>
        Recommended Clinics
      </Typography>

      {clinics.map((item) => (
        <Box>
          <Cards data={item} />
        </Box>
      ))}
    </Box>
  );
};

export default DoctorList;
