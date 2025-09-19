
// // import React, {useState} from "react";
// import { Box, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// // import { steps } from "../Services/AuthApi";
// import { Container } from "@mui/system";

// // --- Custom Step Circle ---
// const StepCircle = styled("div")(({ theme, active }) => ({
//   backgroundColor: active ? theme.palette.success.main : theme.palette.primary.main,
//   color: "#fff",
//   width: 48,
//   height: 48,
//   borderRadius: "50%",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontWeight: "bold",
//   fontSize: 16,
//   flexShrink: 0,
//   cursor: "pointer"
// }));



// const LayerClinicNav = ({activeStep, setActiveStep, steps}) => {
//   // const [activeStep, setActiveStep] = useState(0);

//   return (
//     <Container maxWidth="lg">
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#fafafa",
//         p: { xs: 2, sm: 3 },
//         border: "1px solid #e0e0e0",
//         borderRadius: 2,
//         display: "flex",
//         justifyContent: "space-between",
//         overflowX: "auto",
//         gap: { xs: 2, sm: 3 }
//       }}
//     >
//       {steps.map((step, index) => (
//         <Box
//           key={index}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-start",
//             gap: 1.5,
//             flex: 1, 
//             minWidth: { xs: "220px", sm: "auto" }
//           }}
//         >
//           {/* Circle */}
//           {/* <StepCircle active={index === activeStep}>{index + 1}</StepCircle> */}

//           <StepCircle
//             active={index === activeStep}
//             onClick={() => setActiveStep(index)} 
//             style={{ cursor: "pointer" }} 
//           >
//             {index + 1}
//           </StepCircle>

//           {/* Labels */}
//           <Box>
//             <Typography
//               variant="subtitle1"
//               fontWeight="bold"
//               color={index === activeStep ? "text.primary" : "text.disabled"}
//             >
//               {step.label}
//             </Typography>
//             <Typography
//               variant="caption"
//               color={index === activeStep ? "text.secondary" : "text.disabled"}
//             >
//               {step.subLabel}
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//     </Container>
//   );
// }

// export default LayerClinicNav;


import { Box, Typography, Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

// --- Custom Step Circle ---
const StepCircle = styled("div")(({ theme, active }) => ({
  backgroundColor: active ? theme.palette.success.main : theme.palette.primary.main,
  color: "#fff",
  width: 48,
  height: 48,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: 16,
  flexShrink: 0,
  cursor: "pointer",
}));

const LayerClinicNav = ({ activeStep, setActiveStep, steps }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fafafa",
          p: { xs: 2, sm: 3 },
          border: "1px solid #e0e0e0",
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={Math.floor(12 / steps.length)} // auto-fit equal width on desktop
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
            >
              {/* Step Circle */}
              <StepCircle
                active={index === activeStep}
                onClick={() => setActiveStep(index)}
              >
                {index + 1}
              </StepCircle>

              {/* Labels */}
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color={index === activeStep ? "text.primary" : "text.disabled"}
                >
                  {step.label}
                </Typography>
                <Typography
                  variant="caption"
                  color={index === activeStep ? "text.secondary" : "text.disabled"}
                >
                  {step.subLabel}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default LayerClinicNav;


