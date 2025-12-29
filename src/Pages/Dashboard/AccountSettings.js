import React from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Paper,
    Container
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import SettingsIcon from "@mui/icons-material/Settings";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CallIcon from "@mui/icons-material/Call";
import DescriptionIcon from "@mui/icons-material/Description";

const AccountSettings = () => {
    const menuItems = [
        { text: "Profile", icon: <PersonIcon /> },
        { text: "My Billings", icon: <ReceiptIcon /> },
        { text: "Bookings", icon: <BookOnlineIcon /> },
        { text: "Settings", icon: <SettingsIcon /> },
        { text: "Help Desk", icon: <HeadsetMicIcon />, color: "primary" },
        { text: "Log out", icon: <LogoutIcon />, color: "error" },
    ];

    const supportItems = [
        {
            title: "Live Chat Support",
            description: "Get instant help with booking your appointment",
            icon: <ChatBubbleOutlineIcon sx={{ fontSize: 30, color: "primary.main" }} />,
            button: <Button variant="contained">Chat Now</Button>,
        },
        {
            title: "Call Support",
            description: "Speak with our booking specialists",
            icon: <CallIcon sx={{ fontSize: 30, color: "primary.main" }} />,
            button: <Button variant="contained">+91 9010210735</Button>,
        },
        {
            title: "Booking Guide",
            description: "Step-by-step booking instructions",
            icon: <DescriptionIcon sx={{ fontSize: 30, color: "primary.main" }} />,
            button: <Button variant="contained">View Guide</Button>,
        },
    ];

    return (
        <Container>
            <Box p={3}>
                <Typography variant="h6" color="primary" gutterBottom>
                    Account Settings
                </Typography>
                <Grid container spacing={3}>
                    {/* Sidebar */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            <List>
                                {menuItems.map((item, index) => (
                                    <ListItem button key={index} sx={{ color: item.color ? `${item.color}.main` : "inherit" }}>
                                        <ListItemIcon sx={{ color: item.color ? `${item.color}.main` : "inherit" }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>

                    {/* Content */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            {supportItems.map((support, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    p={2}
                                    mb={2}
                                    borderRadius={2}
                                    border="1px solid #e0e0e0"
                                >
                                    <Box display="flex" alignItems="center" gap={2}>
                                        {support.icon}
                                        <Box>
                                            <Typography fontWeight={600}>{support.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {support.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    {support.button}
                                </Box>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AccountSettings;
