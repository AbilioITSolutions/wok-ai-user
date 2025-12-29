import React from "react";
import { Box, Grid, Typography, Button, Paper, Container } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useNavigate } from "react-router-dom";

export default function SupportGrid() {
  const navigate = useNavigate();

  const supportItems = [
    {
      icon: <ChatBubbleOutlineIcon color="primary" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />,
      title: "Live Chat Support",
      subtitle: "Get instant help with booking your appointment",
      action: <Button
        sx={{
          width: { xs: '100%', sm: 'auto' },
          minWidth: { xs: 'auto', sm: '120px' },
          bgcolor: '#368ADD',
          fontSize: { xs: '0.8rem', sm: '0.875rem' },
          py: { xs: 1, sm: 1.5 }
        }}
        variant="contained"
      >
        Chat Now
      </Button>,
    },
    {
      icon: <PhoneIcon color="primary" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />,
      title: "Call Support",
      subtitle: "Speak with our booking specialists",
      action: (
        <Button
          sx={{
            width: { xs: '100%', sm: 'auto' },
            minWidth: { xs: 'auto', sm: '140px' },
            bgcolor: '#368ADD',
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            py: { xs: 1, sm: 1.5 }
          }}
          variant="contained"
        >
          +91 9010210735
        </Button>
      ),
    },
    {
      icon: <InsertDriveFileIcon color="primary" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />,
      title: "Booking Guide",
      subtitle: "Step-by-step booking instructions",
      action: <Button
        onClick={() => navigate("/booking-guide")}
        sx={{
          width: { xs: '100%', sm: 'auto' },
          minWidth: { xs: 'auto', sm: '120px' },
          bgcolor: '#368ADD',
          fontSize: { xs: '0.8rem', sm: '0.875rem' },
          py: { xs: 1, sm: 1.5 }
        }}
        variant="contained"
      >
        View Guide
      </Button>,
    },
  ];

  return (
    <Grid container spacing={{ xs: 1, sm: 2 }}>
      <Container maxWidth="xl" sx={{ mt: { xs: 2, sm: 4 } }}>
        <Grid size={{ xs: 12, md: 12 }}>
          {supportItems.map((support, index) => (
            <Paper
              key={index}
              variant="outlined"
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                mb: { xs: 1.5, sm: 2 },
                borderRadius: { xs: 1.5, sm: 2 },
                display: "flex",
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: "space-between",
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: { xs: 2, sm: 0 },
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={{ xs: 1.5, sm: 2 }}
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: 0 // Allow flex item to shrink
                }}
              >
                {support.icon}
                <Box sx={{
                  minWidth: 0, // Allow text to wrap properly
                  flex: 1
                }}>
                  <Typography
                    fontWeight={600}
                    sx={{
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      mb: { xs: 0.25, sm: 0.5 },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {support.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      lineHeight: { xs: 1.4, sm: 1.5 },
                      display: '-webkit-box',
                      WebkitLineClamp: { xs: 2, sm: 3 },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {support.subtitle}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{
                width: { xs: '100%', sm: 'auto' },
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-end' },
                mt: { xs: 1, sm: 0 }
              }}>
                {support.action}
              </Box>
            </Paper>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}
