import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Assets/logo.svg';
import { useNavigate } from 'react-router';

const navItems = [
    { name: 'Home', link: "/" },
    { name: 'Services', link: "/services" },
    { name: 'About us', link: "/about-us" },
    { name: 'Contact us', link: "/contact-us" }
];

function FloatingNavBar() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    const handleNavigation = (route) => {
        navigate(route);
        setDrawerOpen(false); // Close drawer on mobile after navigation
    };

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <AppBar
                    component="nav"
                    position="fixed"
                    sx={{
                        width: 'calc(100% - 120px)',
                        top: '68px',
                        left: 0,
                        right: 0,
                        mx: 'auto',
                        height: '100px',
                        opacity: 1,
                        backgroundColor: 'rgba(240, 240, 240, 0.8)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        color: '#000',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                        {/* Logo Image */}
                        <Box
                            component="img"
                            src={logo}
                            alt="WOK AI Logo"
                            sx={{
                                height: 60,
                                width: 'auto',
                                cursor: 'pointer',
                            }}
                        />

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    onClick={() => handleNavigation(item.link)}
                                    sx={{
                                        color: '#333',
                                        textTransform: 'none',
                                        mx: 2,
                                        fontSize: '1rem',
                                        '&:hover': { color: '#007bff' },
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                onClick={() => handleNavigation("/login")}
                                sx={{
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    borderRadius: '20px',
                                    textTransform: 'none',
                                    px: 7,
                                    fontSize: '1rem',
                                    '&:hover': {
                                        backgroundColor: '#0056b3',
                                    },
                                    ml: 3,
                                }}
                            >
                                Login
                            </Button>
                        </Box>

                        {/* Hamburger Icon (Mobile Only) */}
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{ ml: 1 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* Drawer for Mobile Navigation */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        width: 250,
                        backgroundColor: 'rgba(240,240,240,0.95)',
                        borderRadius: '20px',
                        mt: '90px',
                    },
                }}
            >
                <List sx={{ mt: 3 }}>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton sx={{ justifyContent: 'center', pt: 2 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    borderRadius: '20px',
                                    textTransform: 'none',
                                    width: '90%',
                                    fontSize: '1rem',
                                    '&:hover': {
                                        backgroundColor: '#0056b3',
                                    },
                                }}
                            >
                                Login
                            </Button>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default FloatingNavBar;
