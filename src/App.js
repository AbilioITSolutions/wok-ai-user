


import React, { useState } from "react";
import { Box } from "@mui/material";

import LayerClinicNav from "./Pages/LayerClinicNav";
import SelectADoctor from "./Pages/Profile/SelectADoctor";
import ScheduleTime from "./Pages/Profile/ScheduleTime";
import PatientInfo from "./Pages/Profile/PatientInfo";
import Payment from "./Pages/Profile/Payment";
import Confirmation from "./Pages/Confirmation";
import BookAppointment from "./Pages/Profile/BookAppointment"
import { steps } from "./Services/AuthApi";



function App() {
  const [activeStep, setActiveStep] = useState(0);


  const renderPage = () => {
    switch (activeStep) {
      case 0:
        return <SelectADoctor onNext={() => setActiveStep(1)} />;
      case 1:
        return <ScheduleTime onNext={() => setActiveStep(2)} />;
      case 2:
        return <PatientInfo onNext={() => setActiveStep(3)} />;
      case 3:
        return <Payment onNext={() => setActiveStep(4)} />;
      case 4:
        return <Confirmation />;
      default:
        return null;
    }
  };

  return (

    

      <Box sx={{ p: 2 }}>
          <BookAppointment/>
        <LayerClinicNav activeStep={activeStep} setActiveStep={setActiveStep} steps={steps} />


        <Box sx={{ mt: 3 }}>{renderPage()}</Box>
      </Box>
    
  );
}

export default App;

