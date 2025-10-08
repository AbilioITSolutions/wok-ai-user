import { Box } from "@mui/material";
import React from "react";
import Requestsection from "./Requestsection";
import Cardsection from "./Cardsection";
import FloatingNavBar from "../../Components/FloatingNavbar";
import Footer from "../../Components/Footer";

const ContactUS = () => {
  return (
    <Box>
      <FloatingNavBar />
      <Requestsection />

      <Cardsection />
      <Footer />
    </Box>
  );
};

export default ContactUS;
