
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/Book';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import img from '../ASSETS/logo.png'; 

const NavBar = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", borderBottom: "1px solid #ccc" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            gap: { xs: 2, md: 0 },
          }}
        >

          <Box>
            <img src={img} alt="logo" style={{ height: "60px", width: "80px" }} />
          </Box>


          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1, sm: 3, md: 5 },
              color: "#000",
            }}
          >
            <Typography variant="body1" display="flex" alignItems="center">
              <GridViewIcon sx={{ mr: 0.5 }} />
              My Dashboard
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <SearchIcon sx={{ mr: 0.5 }} />
              Find a Doctor
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <BookIcon sx={{ mr: 0.5 }} />
              My Appointments
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <NotificationsActiveIcon sx={{ mr: 0.5 }} />
              Reminders
            </Typography>
          </Box>


          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#000",
              mt: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="body1" display="flex" alignItems="center">
              <PersonOutlineIcon sx={{ mr: 0.5 }} />
              Profile
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;

