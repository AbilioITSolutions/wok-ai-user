import React from "react";
import { Box, Grid, Typography, Button, Paper, Container } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const supportItems = [
  {
    icon: <ChatBubbleOutlineIcon color="primary" />,
    title: "Live Chat Support",
    subtitle: "Get instant help with booking your appointment",
    action: <Button variant="contained">Chat Now</Button>,
  },
  {
    icon: <PhoneIcon color="primary" />,
    title: "Call Support",
    subtitle: "Speak with our booking specialists",
    action: (
      <Button variant="contained">+91 8765766724</Button>
    ),
  },
  {
    icon: <InsertDriveFileIcon color="primary" />,
    title: "Booking Guide",
    subtitle: "Step-by-step booking instructions",
    action: <Button variant="contained">View Guide</Button>,
  },
];

export default function SupportGrid() {
  return (
    <Grid container spacing={2}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, md: 9 }}>
          {supportItems.map((support, index) => (
            <Paper
              key={index}
              variant="outlined"
              sx={{
                p: 2,
                mb: 2,
                borderRadius: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                {support.icon}
                <Box>
                  <Typography fontWeight={600}>
                    {support.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {support.subtitle}
                  </Typography>
                </Box>
              </Box>
              {support.action}
            </Paper>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}
