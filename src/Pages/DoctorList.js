import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Cards from "../Common/Cards";
import img1 from '../ASSETS/one.png'
import img2 from '../ASSETS/two.png'
import img3 from '../ASSETS/three.png'
import Navbar from "../Components/Navbar";
import { Container } from "@mui/system";
import Footer from "../Components/Footer";
import { getAllClinics } from "../Apis/TreatmentsApis";

const DoctorList = () => {
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        setLoading(true);
        const data = await getAllClinics();
        // Assuming the API returns { status: true, data: [...] }
        if (data.status) {
          setClinics(data.data);
        } else {
          // Fallback to hardcoded data if API fails
          setClinics([
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
            }
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch clinics:", error);
        setError("Failed to load clinics. Please try again later.");
        // Fallback to hardcoded data on error
        setClinics([
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
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchClinics();
  }, []);
  return (
    <>
    <Box sx={{pt:16 , pb:3 , backgroundColor:'#fafbfc'}}>
      <Navbar />
      <Container maxWidth="xl">
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between",
        gap: 2,
        mb:3,
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "stretch", sm: "center" }
      }}>
        <TextField
          gutterBottom
          aria-label="empty textarea"
          placeholder="Search treatment, clinic or anything.."
          sx={{
            width: { xs: "100%", sm: "80%" },
            height: "50px",
            backgroundColor: "#ffffff",
            "& .MuiOutlinedInput-root": {
              height: "50px",
              backgroundColor: "#ffffff",
              "& fieldset": {
                borderColor: "#e0e0e0",
              },
              "&:hover fieldset": {
                borderColor: "#bdbdbd",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#368ADD",
              },
            },
            "& .MuiInputBase-input": {
              padding: "8px 12px",
              fontSize: { xs: "0.85rem", sm: "0.9rem" },
            },
          }}
        />
        <Button
          variant="contained"
          href="#contained-buttons"
          sx={{ 
            height: "50px", 
            width: { xs: "100%", sm: "18%" },
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
            textTransform: "none",
            fontWeight: 500,
            backgroundColor: "#368ADD",
            "&:hover": {
              backgroundColor: "#2977C9",
            }
          }}
        >
          <FilterAltIcon sx={{ mr: 1 }} /> Filter
        </Button>
      </Box>
      <Typography gutterBottom variant="h6" sx={{ color: "#368ADD" , mb:3 }}>
        Recommended Clinics
      </Typography>

      {loading && (
        <Typography variant="h6" sx={{ textAlign: 'center', py: 4 }}>
          Loading clinics...
        </Typography>
      )}

      {error && (
        <Typography variant="h6" sx={{ textAlign: 'center', py: 4, color: 'error.main' }}>
          {error}
        </Typography>
      )}

      {!loading && !error && (
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 2, sm: 3, md: 4 },
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: "center",
          width: "100%",
          maxWidth: "1290px",
          margin: "0 auto"
        }}>
          {clinics.map((item) => (
            <Box sx={{
              flex: { xs: "0 0 90%", sm: "0 0 calc(50% - 18px)", md: "0 0 calc(33.333% - 24px)" },
              minWidth: { xs: "280px", sm: "300px", md: "320px" },
              maxWidth: { xs: "350px", sm: "400px", md: "420px" },
              mx: { xs: 0, sm: 0 }
            }}>
              <Cards data={item} />
            </Box>
          ))}
        </Box>
      )}
      </Container>
     
    </Box>
    <Footer />
    </>
  );
};

export default DoctorList;
