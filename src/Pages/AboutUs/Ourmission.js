import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Mission from "../../ASSETS/Aboutusimages/Mission.png";
export default function Ourmission() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper"  }}>
      <Container maxWidth="lg" spacing={7}>
        <Box sx={{display:"flex", flexDirection:"column"}}>
        <Grid container spacing={6} alignItems="center" >
          {/* Left Text Section */}
          <Grid item size={{xs:12,md:5}} sx={{marginRight:"20px"}}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: "#368ADD", fontWeight: 300, mb: 2 , fontSize:"40px",font:"Albert Sans" , margin:"20px",}}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" color="#000000" sx={{fontSize:"13px"}} >
              At Wok AI, our mission is to make quality healthcare accessible,
              simple, and reliable for everyone. We bridge the gap between
              patients and trusted doctors by bringing clinic appointments
              closer, faster, and smarter. Through technology, we honor the
              timeless value of personal care while building a future where
              booking a doctor is as easy as a tap.
            </Typography>
          </Grid>

          {/* Right Image Section */}
          <Grid item size={{xs:12,md:6}}>
            <Box
              component="img"
              src={Mission}
              alt="Doctors in surgery"
              sx={{
                width: {xs:"100%",md:"500px"},
                height:"300px",
                borderRadius: 3, // Rounded corners
                boxShadow: 3,
                objectFit: "cover",
                marginLeft:{xs:"0px",md:"90px"}
              }}
            />
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
}
