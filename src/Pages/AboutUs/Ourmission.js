import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import Mission from "../../assets/Aboutusimages/Mission.png";
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
              sx={{ color: "#368ADD", fontWeight: 300, mb: 2 , fontSize:"40px",font:"Albert Sans" }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" color="#000000" sx={{fontSize:"13px"}} >
              Our mission is to revolutionize the way patients approach surgical care by placing their needs, concerns, and choices at the forefront. We strive to simplify the decision-making process by offering clear comparisons of hospitals and procedures, helping patients understand the true costs involved, and providing access to trusted second opinions from experienced medical professionals. Through our platform, we aim to eliminate confusion, reduce financial uncertainty, and foster transparency in every interaction. By leveraging technology and a patient-first philosophy, we are committed to making surgical care more accessible, affordable, and empowering—so that every individual can make informed decisions with confidence and peace of mind.
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
