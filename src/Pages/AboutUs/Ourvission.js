import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Vission from "../../ASSETS/Aboutusimages/Vission.png";
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
                 width: {xs:"100%",md:"500px"},
                height:"300px",
                borderRadius: 3, // Rounded corners
                
                objectFit: "cover",
                marginRight:{xs:"0px",md:"80px"}
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
            <Typography variant="body1" color="#000000" sx={{fontSize:"13px" , width:"500px"}}>
              To build a future where every patient—regardless of background or income—can access transparent, affordable, and high-quality surgical care. We envision a healthcare ecosystem where trust replaces uncertainty, and every decision is backed by data, empathy, and integrity. We believe that surgery decisions shouldn’t be overwhelming or opaque. Our vision is to make healthcare more human—where patients feel heard, informed, and empowered to choose what’s best for them.
            </Typography>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
}
