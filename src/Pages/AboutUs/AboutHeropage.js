import { Box } from "@mui/system";
import React from "react";
import Bgimage from "../../assets/Aboutusimages/Bgimage.png";
import Dcotorimg from "../../assets/Aboutusimages/Doctorsimage.png";

const AboutHeropage = () => {
  return (
    <Box>
      {/* Background Section */}
      <Box
        sx={{
          height: { xs: "50vh", md: "120vh" },
          width: "100%",
          backgroundImage: `url(${Bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          pb: 10,
          color: "#fff",
        }}
      ></Box>

      {/* Foreground Image (no absolute, overlaps bottom) */}
      <Box
        component="img"
        src={Dcotorimg}
        alt="Doctors"
        sx={{
          display: "block",
          mx: "auto",
          mt: { xs: "-100px", md: "-300px" }, // overlap bottom of background
          width: { xs: "90%", md: "90%" },
          height: {xs:'auto',md:"39vw"},
        }}
      />
    </Box>
  );
};

export default AboutHeropage;
