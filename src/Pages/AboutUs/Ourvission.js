import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Vission from "../../Assets/Aboutusimages/Vission.png";
export default function Ourvission() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }
        }>     <Container maxWidth="lg" spacing={7}>
        <Box sx={{display:"flex", flexDirection:"column"}}>
        <Grid container spacing={6} alignItems="center" >
          {/* Left Image Section */}
          <Grid item xs={12} md={6}  sx={{display:"flex", flexDirection:"column" }}>
            <Box 

              component="img"
              src={Vission}
              alt="Person using tablet"
              sx={{
                 width: "500px",
                height:"300px",
                borderRadius: 3, // Rounded corners
                boxShadow: 3,
                objectFit: "cover",
                marginRight:"80px"
              }}
            />
          </Grid>

          {/* Right Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: "#368ADD", fontWeight: 300, mb: 2 , fontSize:"40px",font:"Albert Sans"
            
              }}
            >
              Our Vision
            </Typography>
            <Typography variant="body1" color="#000000" sx={{fontSize:"13px"}}>
              To create a world where accessing healthcare is effortless,
              trusted, and within <br/>everyone’s reach. Wok AI envisions a future
              where patients connect with the right<br/>ors at the right time,
              guided by technology that simplifies care without losing <br/>the
              human touch.
            </Typography>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
}
