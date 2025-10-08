import React from "react";
import { Box, Typography, Avatar, Button, Grid, Card, CardContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import man from "../../ASSETS/ProfileImages/man.png";

const ProfileContent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* User Profile Header Section */}
      <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent sx={{ p: { xs: 0, sm: 3 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' },
            justifyContent: { xs: 'center', sm: 'space-between' },
            textAlign: { xs: 'center', sm: 'left' },
            gap: { xs: 2, sm: 3 }
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: { xs: 2, sm: 3 }
            }}>
              <Avatar
                src={man}
                alt="Rohit Reddy"
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: { xs: 60, sm: 80 },
                  border: '2px solid #e0e0e0'
                }}
              />
              <Box>
                <Typography variant={{ xs: "h6", sm: "h5" }} sx={{ fontWeight: 'bold', color: '#333', mb: 0.5 }}>
                  Rohit Reddy
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                  Patient | Since 2025
                </Typography>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  gap: 0.5
                }}>
                  <LocationOnIcon sx={{ fontSize: '1rem', color: '#666' }} />
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Hyderabad, Telangana, India
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{
                borderColor: '#368ADD',
                color: '#368ADD',
                textTransform: 'none',
                px: 2,
                py: 1,
                alignSelf: { xs: 'center', sm: 'flex-end' },
                '&:hover': {
                  borderColor: '#2c6bb3',
                  backgroundColor: '#f0f8ff'
                }
              }}
            >
              Edit
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Personal Information Section */}
      <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' },
            justifyContent: 'space-between',
            mb: 3,
            gap: { xs: 2, sm: 0 }
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#368ADD' }}>
              Personal information
            </Typography>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{
                borderColor: '#368ADD',
                color: '#368ADD',
                textTransform: 'none',
                px: 2,
                py: 1,
                '&:hover': {
                  borderColor: '#2c6bb3',
                  backgroundColor: '#f0f8ff'
                }
              }}
            >
              Edit
            </Button>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3 }}>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  First name
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  Rohit
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  Last name
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  Reddy
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  Email
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  rohitreddy@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  Mobile number
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  8753356677
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  Bio
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  N/A
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Address Section */}
      <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' },
            justifyContent: 'space-between',
            mb: 3,
            gap: { xs: 2, sm: 0 }
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#368ADD' }}>
              Address
            </Typography>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{
                borderColor: '#368ADD',
                color: '#368ADD',
                textTransform: 'none',
                px: 2,
                py: 1,
                '&:hover': {
                  borderColor: '#2c6bb3',
                  backgroundColor: '#f0f8ff'
                }
              }}
            >
              Edit
            </Button>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3 }}>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  Building name
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  Maruthi Sri Apartments
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  Street/Road/Area
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  YSR Statue, Madhapur
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  City
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  Hyderabad
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  State
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  Telangana
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  Country
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  India
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                  Zip Code
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                  500082
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileContent;
