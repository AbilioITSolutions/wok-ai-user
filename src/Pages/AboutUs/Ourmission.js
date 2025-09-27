import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Mission from "../../Assets/Aboutusimages/Mission.png";
export default function Ourmission() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper"  }}>
      <Container maxWidth="lg" spacing={7}>
        <Box sx={{display:"flex", flexDirection:"column"}}>
        <Grid container spacing={6} alignItems="center" >
          {/* Left Text Section */}
          <Grid item xs={12} md={6} sx={{marginRight:"20px"}}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: "#368ADD", fontWeight: 300, mb: 2 , fontSize:"40px",font:"Albert Sans" , margin:"20px",}}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" color="#000000" sx={{fontSize:"13px"}} >
              At Wok AI, our mission is to make quality healthcare accessible,
              simple, and <br/>reliable for everyone. We bridge the gap between
              patients and trusted doctors <br/>by bringing clinic appointments
              closer, faster, and smarter. Through <br/>technology, we honor the
              timeless value of personal care while building a <br/>future where
              booking a doctor is as easy as a tap.
            </Typography>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Mission}
              alt="Doctors in surgery"
              sx={{
                width: "500px",
                height:"300px",
                borderRadius: 3, // Rounded corners
                boxShadow: 3,
                objectFit: "cover",
                marginLeft:"90px"
              }}
            />
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
}
