import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CallIcon from "@mui/icons-material/Call";
import { Box } from "@mui/system";
export default function Cardsection() {
  const cardData = [
    {
      icon: (
        <ChatBubbleOutlineIcon sx={{ fontSize: 40, color: "#368ADD", mb: 1 }} />
      ),
      title: "Live Chat Support",
      description: "Get instant help with booking your appointment",
      buttonText: "Chat Now",
    },
    {
      icon: <CallIcon sx={{ fontSize: 40, color: "#368ADD", mb: 1 }} />,
      title: "Call Support",
      description: "Speak with our booking specialists",
      buttonText: "+91 8765766724",
    },
  ];

  return (
    <Box sx={{ marginTop: "80px", height: "300PX" , mb:{xs:'300px',md:'0px'}}}>
      <Box>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  borderRadius: 3,
                  boxShadow: 3,
                  width: "400px",
                  height: "366p%",
                  background: "white",
                  marginBottom: "20px",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {card.icon}
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ my: 2 }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 0,
                    width: "250px",
                    padding: "10px 20px",
                    marginLeft: "80px",
                    marginBottom: "20px",
                    borderRadius: "10px",
                    background: "#368ADD",
                    alignItems: "center",
                  }}
                >
                  {card.buttonText}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
