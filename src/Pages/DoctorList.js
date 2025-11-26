import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Avatar,
  Rating,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Common/Cards";
import img1 from "../assets/one.png";
import img2 from "../assets/two.png";
import img3 from "../assets/three.png";
import { getAllClinics } from "../Apis/TreatmentsApis";
import { getReviews } from "../Apis/RatingApi";

const DoctorList = () => {
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedClinicId, setSelectedClinicId] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewsError, setReviewsError] = useState(null);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        setLoading(true);
        const data = await getAllClinics();
        if (data.status) setClinics(data.data);
        else {
          setError("Failed to load clinics.");
        }
      } catch {
        setError("Failed to load clinics.");
      } finally {
        setLoading(false);
      }
    };
    fetchClinics();
  }, []);

  // Fetch reviews when selectedClinicId changes
  useEffect(() => {
    if (selectedClinicId) {
      const fetchReviews = async () => {
        try {
          setReviewsLoading(true);
          setReviewsError(null);
          const response = await getReviews({ clinicId: selectedClinicId });
          const data = response.data;
          setReviews(Array.isArray(data?.reviews) ? data.reviews : []);
          setAverageRating(data?.averageRating || 0);
          setReviewsCount(data?.reviewsCount || 0);
        } catch (error) {
          console.error("Error fetching reviews:", error);
          setReviewsError("Failed to load reviews.");
        } finally {
          setReviewsLoading(false);
        }
      };
      fetchReviews();
    }
  }, [selectedClinicId]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleFilter = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllClinics(searchQuery);
      if (data.status) setClinics(data.data);
      else {
        setError("Failed to load clinics.");
      }
    } catch {
      setError("Failed to load clinics.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box sx={{ pt: 16, pb: 3, backgroundColor: "#fafbfc" }}>
        <Navbar />
        <Container maxWidth="xl">
          {/* Search & Filter */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              mb: 3,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "stretch", sm: "center" },
            }}
          >
            <TextField
              placeholder="Search treatment, clinic or anything.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: { xs: "100%", sm: "80%" },
                height: "50px",
                backgroundColor: "#ffffff",
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleFilter}
              sx={{
                height: "50px",
                width: { xs: "100%", sm: "18%" },
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                textTransform: "none",
                backgroundColor: "#368ADD",
                "&:hover": { backgroundColor: "#2977C9" },
              }}
            >
              <FilterAltIcon sx={{ mr: 1 }} /> Filter
            </Button>
          </Box>

          <Typography variant="h6" sx={{ color: "#368ADD", mb: 3 }}>
            Recommended Clinics
          </Typography>

          {loading && (
            <Typography variant="h6" align="center">
              Loading clinics...
            </Typography>
          )}

          {!loading && !error && (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 2, sm: 3, md: 4 },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              {clinics.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    flex: {
                      xs: "0 0 90%",
                      sm: "0 0 calc(50% - 18px)",
                      md: "0 0 calc(33.333% - 24px)",
                    },
                    minWidth: { xs: "280px", sm: "300px", md: "320px" },
                  }}
                >
                  <Cards data={item} onReviewClick={() => { setSelectedClinicId(item.id); setOpen(true); }} />
                </Box>
              ))}
            </Box>
          )}
        </Container>
      </Box>
      <Footer />

      {/* ===== Rating & Reviews Dialog ===== */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: { 
            borderRadius: "20px", 
            padding: 2,
            maxHeight: '500px',
            overflow: 'hidden'
          },
        }}
      >
        <DialogContent sx={{ 
          '&::-webkit-scrollbar': { display: 'none' }, 
          '-ms-overflow-style': 'none', 
          scrollbarWidth: 'none' 
        }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight="bold">
              Rating & Reviews
            </Typography>
            <IconButton onClick={handleClose} color="error">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Overall Rating */}
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <StarIcon sx={{ color: "#fbc02d" }} />
            <Typography fontWeight="bold">{averageRating}</Typography>
      
          </Box>

          {/* Recent Reviews */}
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ mt: 2, mb: 1 }}
          >
            Recent Reviews
          </Typography>

          <Box sx={{ 
            maxHeight: '200px', 
            overflowY: 'scroll', 
            '&::-webkit-scrollbar': { display: 'none' }, 
            '-ms-overflow-style': 'none', 
            scrollbarWidth: 'none' 
          }}>
            {reviewsLoading && (
              <Typography variant="body2" color="text.secondary">
                Loading reviews...
              </Typography>
            )}

            {reviewsError && (
              <Typography variant="body2" color="error">
                {reviewsError}
              </Typography>
            )}

            {!reviewsLoading && !reviewsError && reviews.length === 0 && (
              <Typography variant="body2" color="text.secondary">
                No reviews available.
              </Typography>
            )}

            {!reviewsLoading && !reviewsError && reviews.map((review, index) => (
              <Box key={index} sx={{ display: "flex", mb: 3 }}>
                <Avatar
                  sx={{ width: 50, height: 50, mr: 2 }}
                >
                  {review?.user?.image ? (
                    <img src={review?.user?.image} alt="review user" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    review?.user?.fullName?.[0]
                  )}
                </Avatar>
                <Box>
                  <Typography fontWeight="bold">{review?.user?.fullName || "Anonymous"}</Typography>
                  <Rating value={review.rating} readOnly size="small" />
                  <Typography variant="caption" color="text.secondary">
                    {review.createdAt ? new Date(review.createdAt).toLocaleDateString() : "Unknown Date"}
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    {review.message || "No comment provided."}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DoctorList;
