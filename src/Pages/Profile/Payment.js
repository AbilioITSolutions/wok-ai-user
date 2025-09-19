import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Divider,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import {paymentMethods} from ".././../Services/AuthApi"
import { Container } from "@mui/system";


const orderSummary = {
  consultationType: "Hair Transplant",
  duration: "1 hour",
  basePrice: 899,
};



const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <Container maxWidth="lg">
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 3,
        maxWidth: "100%",
        mt: 3,
      }}
    >
      {/* Title */}
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
        Payment Method
      </Typography>
   
      <Grid container spacing={3}>
        {/* LEFT: Payment Options */}
     
        <Grid size={{xs:12, md:6}}>
          <RadioGroup
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
          >
            {paymentMethods.map((method) => (
              <Paper
                key={method.id}
                variant="outlined"
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderColor:
                    selectedMethod === method.id ? "primary.main" : "#ddd",
                  bgcolor:
                    selectedMethod === method.id ? "primary.light" : "inherit",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedMethod(method.id)}
              >
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      mr: 2,
                      fontSize: "2rem",
                      color: selectedMethod === method.id ? "primary.main" : "text.secondary",
                    }}
                  >
                    {method.icon}
                  </Box>
                  <Box>
                    <Typography fontWeight="bold">{method.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {method.description}
                    </Typography>
                  </Box>
                </Box>
                <Radio value={method.id} />
              </Paper>
            ))}
          </RadioGroup>
        </Grid>
        

        {/* RIGHT: Order Summary */}
        <Grid size={{xs:12, md:6}}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography color="text.secondary">Consultation Type:</Typography>
              <Typography>{orderSummary.consultationType}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography color="text.secondary">Duration:</Typography>
              <Typography>{orderSummary.duration}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <Typography color="text.secondary">Base price</Typography>
              <Typography>₹{orderSummary.basePrice}</Typography>
            </Box>

            {/* Total */}
            <Divider sx={{ mb: 2 }} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Typography variant="h6" fontWeight="bold">
                Total
              </Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                ₹{orderSummary.basePrice}
              </Typography>
            </Box>

            {/* Secure Payment Info */}
            <Box display="flex" alignItems="center" mt={2}>
              <LockIcon color="success" sx={{ mr: 1 }} />
              <Box>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="success.main"
                >
                  Secure payment
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Your payment information is encrypted and secure.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      

      {/* Footer Buttons */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 3 }}
      >
        <Button variant="text">← Back</Button>
        <Button variant="contained" endIcon={<span>→</span>}>
          Continue
        </Button>
      </Grid>
    </Paper>
    </Container>
  );
};

export default Payment;
