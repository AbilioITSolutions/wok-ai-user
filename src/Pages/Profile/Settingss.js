import React from "react";
import {
  Box, Container, Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
const SettingsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {/* Sidebar */}
        {/* <Grid size={{xs:12,md:3}}>
          <Box
            sx={{
              border: "1px solid #E0E0E0",
              borderRadius: 2,
              p: 3,
              bgcolor: "#fff",
            }}
          >
            <Typography variant="h6" sx={{ color: "#368ADD", mb: 3 }}>
              Account Settings
            </Typography>

            <Typography sx={{ mb: 2, color: "#368ADD" }}>
              <PermIdentityIcon fontSize="small" sx={{ mr: 1 }} />
              Profile
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <ReceiptIcon fontSize="small" sx={{ mr: 1 }} />
              My Billings
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <CurrencyRupeeIcon fontSize="small" sx={{ mr: 1 }} />
              Bookings
            </Typography>
            <Typography sx={{ mb: 2,color:'#368ADD' }}>
              <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
              Settings
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <HeadsetMicIcon fontSize="small" sx={{ mr: 1 }} />
              Help Desk
            </Typography>
            <Typography sx={{ color: "#FF4040" }}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Log out
            </Typography>
          </Box>
        </Grid> */}

        {/* Right Content */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Box
            sx={{
              border: "1px solid #E0E0E0",
              borderRadius: 2,
              p: 3,
              bgcolor: "#fff",
            }}
          >
            {/* Header */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Box>
                <Typography variant="h6" sx={{ color: "#368ADD" }}>
                  Notification Settings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Never miss an opportunity receive booking updates in real time.
                </Typography>
              </Box>
              <Button sx={{ color: "red", textTransform: "none" }}>
                Clear all
              </Button>
            </Box>

            {/* Checkboxes */}
            <Box>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="All Reminders"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Clinic booking accept"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Daily offer updates"
              />
            </Box>

            {/* Toggles */}
            <Box mt={3}>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Box>
                  <Typography>Mobile Push Notifications</Typography>
                  <Typography variant="caption" color="text.secondary">
                    received push notification whenever your organisation require your actions
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>

              <Box display="flex" justifyContent="space-between" mb={2}>
                <Box>
                  <Typography>Desktop Notifications</Typography>
                  <Typography variant="caption" color="text.secondary">
                    received desktop notification whenever your organisation require your actions
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>

              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography>Email Notifications</Typography>
                  <Typography variant="caption" color="text.secondary">
                    received email notification whenever your organisation require your actions
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SettingsPage;
