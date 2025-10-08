import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";

const SettingsPage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 3, sm: 3 }}>
        {/* Right Content */}
        <Grid item size={{xs:12,md:12  }}>
          <Box
            sx={{
              border: "1px solid #E0E0E0",
              borderRadius: { xs: 1.5, sm: 2 },
              p: { xs: 2, sm: 3 },
              bgcolor: "#fff",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                mb: { xs: 3, sm: 2 },
                gap: { xs: 2, sm: 0 }
              }}
            >
              <Box sx={{
                flex: 1,
                minWidth: 0
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#368ADD",
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    mb: { xs: 0.5, sm: 1 }
                  }}
                >
                  Notification Settings
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    lineHeight: { xs: 1.4, sm: 1.5 }
                  }}
                >
                  Never miss an opportunity receive booking updates in real time.
                </Typography>
              </Box>
              <Button
                sx={{
                  color: "red",
                  textTransform: "none",
                  textDecoration: 'underline',
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  p: { xs: 1, sm: 1.5 },
                  minWidth: 'auto',
                  alignSelf: { xs: 'flex-end', sm: 'center' }
                }}
              >
                Clear all
              </Button>
            </Box>

            {/* Checkboxes */}
            <Box sx={{
              mb: { xs: 3, sm: 4 }
            }}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#368ADD",
                      '&.Mui-checked': {
                        color: "#368ADD",
                      },
                      py: { xs: 0.5, sm: 1 }
                    }}
                  />
                }
                label="All Reminders"
                sx={{
                  width: '100%',
                  py: { xs: 0.5, sm: 1 }
                }}
              />
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#368ADD",
                      '&.Mui-checked': {
                        color: "#368ADD",
                      },
                      py: { xs: 0.5, sm: 1 }
                    }}
                  />
                }
                label="Clinic booking accept"
                sx={{
                  width: '100%',
                  py: { xs: 0.5, sm: 1 }
                }}
              />
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#368ADD",
                      '&.Mui-checked': {
                        color: "#368ADD",
                      },
                      py: { xs: 0.5, sm: 1 }
                    }}
                  />
                }
                label="Daily offer updates"
                sx={{
                  width: '100%',
                  py: { xs: 0.5, sm: 1 }
                }}
              />
            </Box>

            {/* Toggles */}
            <Box>
              {/* Mobile Push Notifications */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  mb: { xs: 3, sm: 2 },
                  gap: { xs: 2, sm: 0 },
                  p: { xs: 2, sm: 0 },
                  borderRadius: { xs: 1, sm: 0 },
                  bgcolor: { xs: '#f8f9fa', sm: 'transparent' }
                }}
              >
                <Box sx={{
                  flex: 1,
                  mb: { xs: 1, sm: 0 }
                }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem' },
                      fontWeight: { xs: 500, sm: 400 },
                      mb: { xs: 0.5, sm: 0.5 }
                    }}
                  >
                    Mobile Push Notifications
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '0.75rem' },
                      lineHeight: { xs: 1.4, sm: 1.5 },
                      display: { xs: 'block', sm: 'block' }
                    }}
                  >
                    received push notification whenever your organisation require your actions
                  </Typography>
                </Box>
                <Switch
                  defaultChecked
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#368ADD',
                      '&:hover': {
                        backgroundColor: 'rgba(54, 138, 221, 0.08)',
                      },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#368ADD',
                    },
                  }}
                />
              </Box>

              {/* Desktop Notifications */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  mb: { xs: 3, sm: 2 },
                  gap: { xs: 2, sm: 0 },
                  p: { xs: 2, sm: 0 },
                  borderRadius: { xs: 1, sm: 0 },
                  bgcolor: { xs: '#f8f9fa', sm: 'transparent' }
                }}
              >
                <Box sx={{
                  flex: 1,
                  mb: { xs: 1, sm: 0 }
                }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem' },
                      fontWeight: { xs: 500, sm: 400 },
                      mb: { xs: 0.5, sm: 0.5 }
                    }}
                  >
                    Desktop Notifications
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '0.75rem' },
                      lineHeight: { xs: 1.4, sm: 1.5 },
                      display: { xs: 'block', sm: 'block' }
                    }}
                  >
                    received desktop notification whenever your organisation require your actions
                  </Typography>
                </Box>
                <Switch
                  defaultChecked
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#368ADD',
                      '&:hover': {
                        backgroundColor: 'rgba(54, 138, 221, 0.08)',
                      },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#368ADD',
                    },
                  }}
                />
              </Box>

              {/* Email Notifications */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: { xs: 2, sm: 0 },
                  p: { xs: 2, sm: 0 },
                  borderRadius: { xs: 1, sm: 0 },
                  bgcolor: { xs: '#f8f9fa', sm: 'transparent' }
                }}
              >
                <Box sx={{
                  flex: 1,
                  mb: { xs: 1, sm: 0 }
                }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', sm: '1rem' },
                      fontWeight: { xs: 500, sm: 400 },
                      mb: { xs: 0.5, sm: 0.5 }
                    }}
                  >
                    Email Notifications
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.75rem', sm: '0.75rem' },
                      lineHeight: { xs: 1.4, sm: 1.5 },
                      display: { xs: 'block', sm: 'block' }
                    }}
                  >
                    received email notification whenever your organisation require your actions
                  </Typography>
                </Box>
                <Switch
                  defaultChecked
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#368ADD',
                      '&:hover': {
                        backgroundColor: 'rgba(54, 138, 221, 0.08)',
                      },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#368ADD',
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SettingsPage;