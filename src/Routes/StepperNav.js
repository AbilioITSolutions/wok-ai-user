// import React from "react";
// import { Stepper, Step, StepLabel } from "@mui/material";
// import { useLocation, useNavigate } from "react-router";
// // import { useNavigate, useLocation } from "react-router-dom";

// const steps = [
//   { label: "Select Doctor", path: "/select-doctor" },
//   { label: "Schedule Time", path: "/schedule-time" },
//   { label: "Patient Info", path: "/patient-info" },
//   { label: "Payment", path: "/payment" },
//   { label: "Confirmation", path: "/confirmation" },
// ];

// const StepperNav = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Find current step based on URL
//   const activeStep = steps.findIndex((step) =>
//     location.pathname.startsWith(step.path)
//   );

//   return (
//     <Stepper activeStep={activeStep} alternativeLabel>
//       {steps.map((step, index) => (
//         <Step key={step.label} onClick={() => navigate(step.path)}>
//           <StepLabel>{step.label}</StepLabel>
//         </Step>
//       ))}
//     </Stepper>
//   );
// };

// export default StepperNav;
