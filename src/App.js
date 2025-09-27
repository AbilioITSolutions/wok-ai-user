import React, { useState } from "react";
import { Box } from "@mui/material";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DoctorList from "./Pages/DoctorList";
import PageRoutes from "./Routes/PageRoutes";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box>
      <PageRoutes />
    </Box>
  );
}

export default App;


