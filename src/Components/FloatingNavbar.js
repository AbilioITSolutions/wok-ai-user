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

const navItems = ['Home', 'Services', 'About us', 'Contact us'];

function FloatingNavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <AppBar
                    component="nav"
                    position="fixed"
                    sx={{
                        width: { xs: 'calc(100% - 40px)', sm: 'calc(100% - 120px)' }, // Responsive width
                        top: { xs: '20px', sm: '55px' },
                        left: 0,
                        right: 0,
                        mx: 'auto',
                        height: { xs: '70px', sm: '95px' },
                        opacity: 1,
                        backgroundColor: 'rgba(224, 220, 220, 0.8)',
                        backdropFilter: 'blur(1px)',
                        borderRadius: '15px',
                        border: '1px solid #fdfbfbff',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        color: '#000',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
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
                                    key={item}
                                    sx={{
                                        color: '#333',
                                        textTransform: 'none',
                                        mx: 1.5,
                                        fontSize: '1.1rem',
                                        padding: '10px 20px',
                                        minWidth: 'auto',
                                        '&:hover': {
                                            color: '#007bff',
                                            backgroundColor: 'rgba(0, 123, 255, 0.1)',
                                            borderRadius: '8px'
                                        },
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    borderRadius: '10px',
                                    textTransform: 'none',
                                    padding: '12px 30px',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    marginLeft: 3,
                                    minWidth: '120px',
                                    '&:hover': {
                                        backgroundColor: '#0056b3',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
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
                                    key={item}
                                    sx={{
                                        color: '#333',
                                        textTransform: 'none',
                                        mx: 1,
                                        fontSize: '1rem',
                                        padding: '8px 12px',
                                        minWidth: 'auto',
                                        '&:hover': {
                                            color: '#007bff',
                                            backgroundColor: 'rgba(0, 123, 255, 0.1)',
                                            borderRadius: '6px'
                                        },
                                    }}
                                >
                                    {item}
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
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{
                                    ml: 1,
                                    padding: '12px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    }
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
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        width: 280,
                        backgroundColor: 'rgba(240,240,240,0.98)',
                        borderRadius: '20px 0 0 20px',
                        mt: '80px',
                        height: 'fit-content',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                }}
            >
                <List sx={{ mt: 3, padding: '0 10px' }}>
                    {navItems.map((item) => (
                        <ListItem key={item} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                sx={{
                                    textAlign: 'center',
                                    borderRadius: '10px',
                                    padding: '16px',
                                    margin: '0 10px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 123, 255, 0.1)',
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={item}
                                    primaryTypographyProps={{
                                        fontSize: '1.2rem',
                                        fontWeight: '500'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding sx={{ mt: 2, mb: 3 }}>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    minwidth: '340px',
                                    height: '60px',
                                    backgroundColor: '#368ADD',
                                    color: 'white',
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#0056b3',
                                        transform: 'translateY(-2px)',
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