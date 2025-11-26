import React, { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import EventIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import head1 from "../assets/head1.png";
import head2 from "../assets/head2.png";
import head3 from "../assets/head3.png";
import head4 from "../assets/head4.png";
import blackhead1 from "../assets/blackhead1.png";
import blackhead2 from "../assets/blackhead2.png";
import blackhead3 from "../assets/blackhead3.png";
import blackhead4 from "../assets/blackhead4.png";

import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define menu items data first (without active state logic)
  const menuItemsData = [
    { label: "My Dashboard", normalIcon: blackhead1, activeIcon: head1, key: "dashboard", path: "/dashboard" },
    { label: "Find a Doctor", normalIcon: blackhead2, activeIcon: head2, key: "doctor", path: "/doctorlist" },
    { label: "My Appointments", normalIcon: blackhead3, activeIcon: head3, key: "appointments", path: "/apointments" },
    { label: "Reminders", normalIcon: blackhead4, activeIcon: head4, key: "reminders", path: "/remainder" },
  ];

  // Initialize active state based on current location
  const getInitialActiveState = () => {
    const currentPath = window.location.pathname;
    if (currentPath === '/profile') return 'profile';
    const matchingItem = menuItemsData.find(item => currentPath === item.path);
    return matchingItem ? matchingItem.key : null;
  };

  const [active, setActive] = useState(getInitialActiveState);
  const [mobileOpen, setMobileOpen] = useState(false);


  const menuItems = menuItemsData.map(item => ({
    ...item,
    icon: active === item.key ? <img src={item.activeIcon} alt={item.label} style={{ width: '16px', height: '16px' }} /> : <img src={item.normalIcon} alt={item.label} style={{ width: '16px', height: '16px' }} />
  }));

  useEffect(() => {
    const currentPath = window.location.pathname;

    // Use exact path matching instead of includes
    let newActiveKey = null;
    if (currentPath === '/profile') {
      newActiveKey = 'profile';
    } else {
      const matchingItem = menuItemsData.find(item => currentPath === item.path);
      newActiveKey = matchingItem ? matchingItem.key : null;
    }

    // Only update if the active key has changed to trigger animation
    if (active !== newActiveKey) {
      setActive(newActiveKey);
    }
  }, [location, active]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    // Find the target menu item and set it as active immediately for animation
    const targetItem = menuItems.find(item => item.path === path);
    if (targetItem) {
      setActive(targetItem.key);
    }
    
    navigate(path);
    
    // Robust scroll to top function
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const mainContainer = document.querySelector('#root');
      if (mainContainer) {
        mainContainer.scrollTop = 0;
      }
    };

    // Multiple scroll attempts
    scrollToTop();
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 100);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 150);
  };
  return (
    <Box sx={{ 
      backgroundColor: "#fff", 
      borderBottom: "2px solid #e0e0e0",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      width: "100%"
    }}>
        <Container maxWidth="xl">
        <Box
          sx={{
            height: "100px",
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "none",
            borderBottom: "none",  // <- no line
          }}
        >
        
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: "100%",
            px: { xs: 2, md: 4 },
            alignItems: "flex-end", // ensures underline is at bottom
          }}
        >
          {/* Left: Logo */}
          <Box  onClick={() => handleNavigation('/dashboard')} sx={{ display: "flex", alignItems: "center", height: "100%", cursor: "pointer" }}>
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Box>

          {/* Center: Menu Items - Hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { xs: 2, md: 6 },
              height: "100%",
              alignItems: "flex-end", 
             
            }}
          >
            {menuItems.map((item) => (
              <Box
                key={item.key}
                onClick={() => {
                  handleNavigation(item.path);
                }}
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 0.8,
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: active === item.key ? "#007bff" : "#333",
                  cursor: "pointer",
                  position: "relative",
                  height: "100%",
                  pb: 2.5,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    width: active === item.key ? "100%" : 0,
                    backgroundColor: "#007bff",
                    transition: "width 0.5s ease",
                    transformOrigin: "left center",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  {item.icon}
                </Box>
                <Typography sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  lineHeight: 1
                }}>{item.label}</Typography>
              </Box>
            ))}
          </Box>

          {/* Right: Profile and Mobile Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Profile - Hidden on mobile */}
            <Box
              onClick={() => handleNavigation('/profile')}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "flex-end",
                gap: 0.8,
                fontSize: "1rem",
                fontWeight: 500,
                color: active === 'profile' ? "#007bff" : "#333",
                cursor: "pointer",
                position: "relative",
                height: "100%",
                pb: 2.5,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: "2px",
                  width: active === 'profile' ? "100%" : 0,
                  backgroundColor: "#007bff",
                  transition: "width 0.5s ease",
                  transformOrigin: "left center",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircleIcon sx={{ fontSize: 22,mb:-0.5, color: active === 'profile' ? "#007bff" : "#333" }} />
              </Box>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: active === 'profile' ? "#007bff" : "#333",
                  display: "flex",
                  alignItems: "flex-end",
                  lineHeight: 1
                }}
              >
                Profile
              </Typography>
            </Box>

            {/* Mobile Menu Button - Centered */}
            <Box sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "flex-end",
              justifyContent: "center",
              height: "100%",
              pb:3.2   
            }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Box>
     

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            pt: 2,
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.key}
              onClick={() => {
                handleNavigation(item.path);
                setMobileOpen(false);
              }}
              sx={{
                cursor: "pointer",
                backgroundColor: active === item.key ? "#f0f8ff" : "transparent",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {item.icon}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  color: active === item.key ? "#007bff" : "#333",
                  fontWeight: active === item.key ? 600 : 400,
                  "& .MuiListItemText-primary": {
                    display: "flex",
                    alignItems: "center",
                  }
                }}
              />
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              handleNavigation('/profile');
              setMobileOpen(false);
            }}
            sx={{
              cursor: "pointer",
              backgroundColor: active === 'profile' ? "#f0f8ff" : "transparent",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 22, color: active === 'profile' ? "#007bff" : "#333" }} />
              </ListItemIcon>
            <ListItemText
              primary="Profile"
              sx={{
                color: active === 'profile' ? "#007bff" : "#333",
                fontWeight: active === 'profile' ? 600 : 400,
                "& .MuiListItemText-primary": {
                  display: "flex",
                  alignItems: "center",
                }
              }}
            />
          </ListItem>
        </List>
      </Drawer>
      </Container>
    </Box>
  
  );
}

export default Navbar;
