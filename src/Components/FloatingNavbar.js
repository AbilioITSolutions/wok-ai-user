import React, { useState } from 'react';
import {
    AppBar, Toolbar, Button, Box, IconButton, Drawer, List,
    ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../ASSETS/logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About us', path: '/about-us' },
    { name: 'Contact us', path: '/contact-us' }
];

function FloatingNavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle navigation with scroll to top
    const handleNavigation = (path) => {
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

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    // Function to check if nav item is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Function to get nav item styling
    const getNavItemStyle = (path) => ({
        color: isActive(path) ? '#007bff' : '#333',
        textTransform: 'none',
        mx: 1.5,
        fontSize: '1.1rem',
        padding: '10px 20px',
        minWidth: 'auto',
        backgroundColor: 'transparent',
        borderRadius: '0',
        '&:hover': {
            color: '#007bff',
        },
    });

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <AppBar
                    component="nav"
                    position="fixed"
                    sx={{
                        width: { xs: 'calc(100% - 40px)', sm: 'calc(100% - 120px)' }, // Responsive width
                        top: { xs: '20px', sm: '20px' },
                        left: 0,
                        right: 0,
                        mx: 'auto',
                        height: { xs: '70px', sm: '80px' },
                        opacity: 1,
                        backgroundColor: 'rgba(224, 220, 220, 0.8)',
                        backdropFilter: 'blur(1px)',
                        borderRadius: '15px',
                        border: '1px solid #fdfbfbff',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        color: '#000',
                        zIndex: 1000,
                    }}
                >
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: '100%',
                        padding: { xs: '0 10px', sm: '0 20px' }
                    }}>
                        {/* Logo Image */}
                        <Box
                            component="img"
                            onClick={() => handleNavigation('/')}
                            src={logo}
                            alt="WOK AI Logo"
                            sx={{
                                height: { xs: 40, sm: 60 },
                                width: 'auto',
                                cursor: 'pointer',
                            }}
                        />

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    sx={getNavItemStyle(item.path)}
                                    onClick={() => navigate(item.path)}
                                >
                                    {item.name}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                onClick={() => navigate('/login')}
                                sx={{
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    borderRadius: '10px',
                                    textTransform: 'none',
                                    padding: '7px 10px',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    marginLeft: 3,
                                    minWidth: '100px',
                                    '&:hover': {
                                        backgroundColor: '#0056b3',
                                    },
                                }}
                            >
                                Login
                            </Button>
                        </Box>

                        {/* Tablet Navigation (slightly smaller buttons) */}
                        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'none' }, alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    sx={{
                                        color: isActive(item.path) ? '#007bff' : '#333',
                                        textTransform: 'none',
                                        mx: 1,
                                        fontSize: '1rem',
                                        padding: '8px 12px',
                                        minWidth: 'auto',
                                        backgroundColor: 'transparent',
                                        borderRadius: '0',
                                        '&:hover': {
                                            color: '#007bff',
                                        },
                                    }}
                                    onClick={() => navigate(item.path)}
                                >
                                    {item.name}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    padding: '10px 20px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    marginLeft: 2,
                                    minWidth: '100px',
                                    '&:hover': {
                                        backgroundColor: '#0056b3',
                                    },
                                }}
                            >
                                Login
                            </Button>
                        </Box>

                        {/* Hamburger Icon (Mobile Only) */}
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton
                                color="inherit"
                                disableRipple
                                disableFocusRipple
                                disableTouchRipple
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{
                                    ml: 1,
                                    padding: '12px',

                                }}
                            >
                                <MenuIcon sx={{ fontSize: '28px' }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Drawer for Mobile Navigation */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        width: 280,
                        backgroundColor: 'rgba(240,240,240,0.98)',
                        borderRadius: '0 20px 20px 0',
                        mt: '80px',

                        height: 'fit-content',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        zIndex: 5300,
                    },
                }}
            >
                <List sx={{ mt: 3, padding: '0 10px' }}>
                    {navItems.map((item) => (
                        <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                sx={{
                                    textAlign: 'center',
                                    borderRadius: '10px',
                                    padding: '16px',
                                    margin: '0 10px',
                                    backgroundColor: 'transparent',
                                }}
                                onClick={() => {
                                    navigate(item.path);
                                    handleDrawerToggle(); // Close drawer after navigation
                                }}
                            >
                                <ListItemText
                                    primary={item.name}
                                    primaryTypographyProps={{
                                        fontSize: '1.2rem',
                                        fontWeight: '500',
                                        color: isActive(item.path) ? '#007bff' : 'inherit'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding sx={{ mt: 2, mb: 3, width: "100%" }}>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                onClick={() => navigate('/login')}
                                sx={{
                                    width: "100%",
                                    minWidth: "100%",
                                    height: '60px',
                                    backgroundColor: '#368ADD',
                                    color: 'white',
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
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