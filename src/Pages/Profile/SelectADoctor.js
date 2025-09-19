import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Chip,
  Radio,
  Button
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { doctors } from "../../Services/AuthApi";
import { Container } from "@mui/system";
// import StepperNav from "../../Routes/StepperNav";


const SelectADoctor = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(1);

  return (
   <Container maxWidth="lg">
    {/* <StepperNav/> */}
    <Box sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3, border: "1px solid #eee", width: '100%' }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
        Select Doctor
      </Typography>

      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid size={{ xs: 12, md: 12 }} key={doctor.id}>
            <Grid  size={{xs:12}} key={doctor.id}>
              <Card
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: doctor.available ? 1 : 0.5,
                  border:
                    selectedDoctor === doctor.id
                      ? "2px solid #1976d2"
                      : "1px solid #e0e0e0",
                  borderRadius: 3
                }}
                onClick={() => doctor.available && setSelectedDoctor(doctor.id)}
              >
                {/* Left Section (Avatar + Info) */}
                <Grid container spacing={2} alignItems="center" sx={{ flex: 1 }}>
                  {/* Avatar - takes half width */}
                  <Grid size={{xs:12, sm:3,  md:2}} sx={{ display: "flex", justifyContent: "center" }}>
                    <Avatar
                      src={doctor.image}
                      alt={doctor.name}
                      sx={{ width: 92, height: 92 }}
                    />
                  </Grid>

                  {/* Card Content - takes half width */}
                  <Grid size={{xs:12, sm:9, md:10}}>
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color={doctor.available ? "primary" : "text.disabled"}
                      >
                        {doctor.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {doctor.experience}
                      </Typography>

                      {/* Specializations */}
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
                        {doctor.specializations.map((spec, index) => (
                          <Chip
                            key={index}
                            label={spec}
                            size="small"
                            color="primary"
                            variant={doctor.available ? "outlined" : "filled"}
                            sx={{
                              bgcolor: doctor.available ? "transparent" : "#eee",
                              color: doctor.available ? "primary.main" : "text.disabled"
                            }}
                          />
                        ))}
                      </Box>

                      {/* Rating & Time */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          flexWrap: "wrap"
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <StarIcon color="warning" fontSize="small" />
                          <Typography variant="body2" color="text.secondary">
                            {doctor.rating} ({doctor.reviews})
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <AccessTimeIcon fontSize="small" color="action" />
                          <Typography variant="body2" color="text.secondary">
                            {doctor.time}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>

                {/* Right Section (Radio button) */}
                <Radio
                  checked={selectedDoctor === doctor.id}
                  onChange={() => setSelectedDoctor(doctor.id)}
                  disabled={!doctor.available}
                />
              </Card>
            </Grid>

          </Grid>
        ))}
      </Grid>

      {/* Continue Button */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          endIcon={<span>&rarr;</span>}
          disabled={!selectedDoctor}
        >
          Continue
        </Button>
      </Box>
    </Box>
    </Container>
  );
}

export default SelectADoctor;
