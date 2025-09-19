
// import { useState } from "react";
// import { Box,Button } from '@mui/material';
// import './App.css';
// // import LayerClinicNav from './Pages/LayerClinicNav';
// // import BookAppointment from './Pages/Profile/BookAppointment';
// import SelectADoctor from './Pages/Profile/SelectADoctor';
// import ScheduleTime from './Pages/Profile/ScheduleTime';
// import PatientInfo from './Pages/Profile/PatientInfo';
// import Payment from './Pages/Profile/Payment';
// import Confirmation from './Pages/Confirmation';
// // import { BrowserRouter as Routes, Router, Route } from 'react-router';
// // import StepperNav from './Routes/StepperNav';


// function App() {

//   const [currentStep, setCurrentStep] = useState("select-doctor");

//    const goToStep = (step) => {
//     setCurrentStep(step);
//   };
//   return (
//     <Box width='100%'>
//       {/* <Router> */}
//         {/* <StepperNav /> */}
//       {/* <Routes>
//         <Route path="/select-doctor" element={<SelectADoctor />} />
//         <Route path="/schedule-time" element={<ScheduleTime />} />
//         <Route path="/patient-info" element={<PatientInfo />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/confirmation" element={<Confirmation />} />
//       </Routes>
//     </Router> */}

//       <Box display="flex" gap={2} mb={2}>
//         <Button onClick={() => goToStep("select-doctor")}>Select Doctor</Button>
//         <Button onClick={() => goToStep("schedule-time")}>Schedule Time</Button>
//         <Button onClick={() => goToStep("patient-info")}>Patient Info</Button>
//         <Button onClick={() => goToStep("payment")}>Payment</Button>
//         <Button onClick={() => goToStep("confirmation")}>Confirmation</Button>
//       </Box>

//        {currentStep === "select-doctor" && (
//         <SelectADoctor onNext={() => goToStep("schedule-time")} />
//       )}
//       {currentStep === "schedule-time" && (
//         <ScheduleTime onNext={() => goToStep("patient-info")} />
//       )}
//       {currentStep === "patient-info" && (
//         <PatientInfo onNext={() => goToStep("payment")} />
//       )}
//       {currentStep === "payment" && (
//         <Payment onNext={() => goToStep("confirmation")} />
//       )}
//       {currentStep === "confirmation" && <Confirmation />}
//     </Box>
//   );
// }

// export default App;


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

