import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
// import {NavLink} from "react-router-dom"
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateIcon from "@mui/icons-material/Create";
import man from "../../Assets/ProfileImages/man.png";

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        sx={{ color: "#368ADD", fontWeight: 600, mb: 3 }}
      >
        Account Settings
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 3 }}>
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: "#368ADD", mb: 1 }}>
              <PermIdentityIcon sx={{ mr: 1 }} />
              Profile
            </Typography>
            <hr />

            <Typography variant="body1" sx={{ mb: 1 }}>
              <ReceiptIcon sx={{ mr: 1 }} />
              My Billings
            </Typography>
            <hr />

            <Typography variant="body1" sx={{ mb: 1 }}>
              <CurrencyRupeeIcon sx={{ mr: 1 }} />
              Bookings
            </Typography>
            <hr />

            <Typography variant="body1" sx={{ mb: 1 }}>
              <SettingsIcon sx={{ mr: 1 }} />
              Settings
            </Typography>
            <hr />

            <Typography variant="body1" sx={{ mb: 1 }}>
              <HeadsetMicIcon sx={{ mr: 1 }} />
              Help Desk
            </Typography>
            <hr />

            <Typography
              variant="body1"
              sx={{ color: "#FF4040", fontWeight: 600 }}
            >
              <LogoutIcon sx={{ mr: 1 }} />
              Log out
            </Typography>
          </Box>
        </Grid>

        {/* 
<Grid size={{ xs: 12, md: 3 }}>
  <Box
    sx={{
      border: "1px solid #e0e0e0",
      borderRadius: 2,
      p: 2,
    }}
  >
    <NavLink
      to="/profile"
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#368ADD" : "inherit",
        fontWeight: isActive ? 600 : 400,
      })}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        <PermIdentityIcon sx={{ mr: 1 }} />
        Profile
      </Typography>
    </NavLink>
    <hr />

    <NavLink
      to="/billings"
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#368ADD" : "inherit",
        fontWeight: isActive ? 600 : 400,
      })}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        <ReceiptIcon sx={{ mr: 1 }} />
        My Billings
      </Typography>
    </NavLink>
    <hr />

    <NavLink
      to="/bookings"
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#368ADD" : "inherit",
        fontWeight: isActive ? 600 : 400,
      })}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        <CurrencyRupeeIcon sx={{ mr: 1 }} />
        Bookings
      </Typography>
    </NavLink>
    <hr />

    <NavLink
      to="/settings"
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#368ADD" : "inherit",
        fontWeight: isActive ? 600 : 400,
      })}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        <SettingsIcon sx={{ mr: 1 }} />
        Settings
      </Typography>
    </NavLink>
    <hr />

    <NavLink
      to="/helpdesk"
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#368ADD" : "inherit",
        fontWeight: isActive ? 600 : 400,
      })}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        <HeadsetMicIcon sx={{ mr: 1 }} />
        Help Desk
      </Typography>
    </NavLink>
    <hr />

    <Typography
      variant="body1"
      sx={{ color: "#FF4040", fontWeight: 600, cursor: "pointer" }}
      onClick={() => {
        // handle logout logic
        console.log("Logging out...");
      }}
    >
      <LogoutIcon sx={{ mr: 1 }} />
      Log out
    </Typography>
  </Box>
</Grid> */}

        {/* Main Content */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Box sx={{ p: 2 }}>
            {/* Profile Header */}
            <Box
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                p: 3,
                mb: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  component="img"
                  src={man}
                  alt="Profile"
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                  }}
                />
                <Box>
                  <Typography variant="h6">Rohit Reddy</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Patient | Since 2025
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hyderabad, Telangana, India
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="outlined"
                size="small"
                sx={{ borderRadius: "40px", px: 3 }}
              >
                Edit <CreateIcon sx={{ ml: 1, fontSize: 18 }} />
              </Button>
            </Box>

            {/* Personal Information */}
            <Box
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                p: 3,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography variant="h6" color="#368ADD">
                  Personal information
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "40px", px: 3 }}
                >
                  Edit <CreateIcon sx={{ ml: 1, fontSize: 18 }} />
                </Button>
              </Box>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    First name
                  </Typography>
                  <Typography fontWeight={500}>Rohit</Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    Last name
                  </Typography>
                  <Typography fontWeight={500}>Reddy</Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    Full name
                  </Typography>
                  <Typography fontWeight={500}>
                    rohitreddy@gmail.com
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    Mobile number
                  </Typography>
                  <Typography fontWeight={500}>8753356677</Typography>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    Bio
                  </Typography>
                  <Typography fontWeight={500}>N/A</Typography>
                </Grid>
              </Grid>
            </Box>

            {/* Address */}
            <Box
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                p: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography variant="h6" color="#368ADD">
                  Address
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "40px", px: 3 }}
                >
                  Edit <CreateIcon sx={{ ml: 1, fontSize: 18 }} />
                </Button>
              </Box>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    Building name
                  </Typography>
                  <Typography fontWeight={500}>
                    Maruthi Sri Apartments
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    Street/Road/Area
                  </Typography>
                  <Typography fontWeight={500}>
                    YSR Statue, Madhapur
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    City
                  </Typography>
                  <Typography fontWeight={500}>Hyderabad</Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    State
                  </Typography>
                  <Typography fontWeight={500}>Telangana</Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    Country
                  </Typography>
                  <Typography fontWeight={500}>India</Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="#A9A9A9">
                    Zip Code
                  </Typography>
                  <Typography fontWeight={500}>500082</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;

