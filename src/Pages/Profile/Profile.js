import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LogoutIcon from "@mui/icons-material/Logout";
import Navbar from "../../Components/Navbar";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  // state for modal
  const [openDelete, setOpenDelete] = useState(false);

  const sidebarItems = [
    { id: "profile", label: "Profile", icon: <PermIdentityIcon />, path: "/profile" },
    { id: "billing", label: "My Billings", icon: <ReceiptIcon />, path: "/profile/billing" },
    { id: "bookings", label: "Bookings", icon: <CurrencyRupeeIcon />, path: "/profile/bookings" },
    { id: "settings", label: "Settings", icon: <SettingsIcon />, path: "/profile/settings" },
    { id: "support", label: "Support", icon: <HeadsetMicIcon />, path: "/profile/support" },
  ];

  const handleTabClick = (item) => {
    setActiveTab(item.id);
    navigate(item.path);
  };

  const handleDeleteConfirm = () => {
    setOpenDelete(false);
    // here add your delete logic
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 14, mb: 4 }}>
        <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: 'column-reverse', md: 'row' } }}>
          {/* Left Sidebar */}
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              p: 2,
              backgroundColor: "#ffffff",
              width: { xs: '100%', md: "280px" },
              height: "fit-content",
              maxHeight: { xs: "none", md: "calc(100vh - 120px)" },
              overflowY: "auto",
              position: { xs: 'static', md: 'fixed' },
              top: { xs: 'auto', md: "120px" },
              left: { xs: 'auto', md: "24px" },
              order: { xs: 2, md: 1 },
              display: "block",
              zIndex: { xs: 'auto', md: 100 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#368ADD",
                fontWeight: 600,
                mb: 3,
                textAlign: { xs: "center", md: "left" },
                display: { xs: "block", md: "block" }
              }}
            >
              Account Settings
            </Typography>

            <List sx={{ p: 0 }}>
              {sidebarItems.map((item) => (
                <ListItem
                  key={item.id}
                  onClick={() => handleTabClick(item)}
                  sx={{
                    cursor: "pointer",
                    borderRadius: 1,
                    mb: 0.5,
                    backgroundColor: activeTab === item.id ? "#f0f8ff" : "transparent",
                    "&:hover": {
                      backgroundColor: activeTab === item.id ? "#f0f8ff" : "#f5f5f5",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: activeTab === item.id ? "#368ADD" : "#666",
                      minWidth: 36,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      color: activeTab === item.id ? "#368ADD" : "#333",
                      fontWeight: activeTab === item.id ? 600 : 400,
                      "& .MuiListItemText-primary": {
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                </ListItem>
              ))}

              {/* Logout */}
              <ListItem
                onClick={() => setOpenDelete(true)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 1,
                  mt: 1,
                  "&:hover": {
                    backgroundColor: "#fbeaea",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "red", minWidth: 36 }}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  sx={{
                    color: "red",
                    "& .MuiListItemText-primary": {
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>

          {/* Right Content Area */}
          <Box
            sx={{
           
              borderRadius: 2,
              p: { xs: 0, sm: 3 },
              backgroundColor: "#ffffff",
              minHeight: "auto",
              flex: 1,
              order: { xs: 1, md: 2 },
              marginLeft: { xs: 0, md: "320px" },
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Container>

      {/* Delete Confirmation Modal */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>{"Delete Account?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to Logout your account? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;
