import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Link,
    Stack,
    IconButton,
    useTheme,
    useMediaQuery,
    Container,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../Assets/logo1.svg';

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#007bff',
                color: '#fff',
                pt: { xs: 6, md: 8 },
                pb: 4,
                px: { xs: 2, sm: 3, md: 6 },
                overflowX: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                {/* Top Grid */}
                <Grid container spacing={isMobile ? 4 : 5}>
                    {/* Logo + Social */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            component="img"
                            src={logo}
                            alt="WOK AI Logo"
                            sx={{
                                height: { xs: 70, md: 85 },
                                width: 'auto',
                                cursor: 'pointer',
                                mb: 3,
                            }}
                        />
                        <Stack direction="row" spacing={1.5}>
                            <IconButton sx={{ color: '#fff', fontSize: { xs: 26, md: 30 } }}>
                                <FacebookIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton sx={{ color: '#fff', fontSize: { xs: 26, md: 30 } }}>
                                <InstagramIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton sx={{ color: '#fff', fontSize: { xs: 26, md: 30 } }}>
                                <LinkedInIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton sx={{ color: '#fff', fontSize: { xs: 26, md: 30 } }}>
                                <YouTubeIcon fontSize="inherit" />
                            </IconButton>
                        </Stack>
                    </Grid>

                    {/* Useful Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: 3,
                            fontSize: { xs: '1.2rem', md: '1.3rem' }
                        }}>
                            Useful Links
                        </Typography>
                        <Stack spacing={1.5}>
                            {['Home', 'Services', 'About us', 'Contact', 'Find a doctor'].map((text, i) => (
                                <Link key={i} href="#" underline="none" color="inherit" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                    {text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Categories */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: 3,
                            fontSize: { xs: '1.2rem', md: '1.3rem' }
                        }}>
                            Categories
                        </Typography>
                        <Stack spacing={1.5}>
                            {['Hair', 'Skin', 'Dental', 'Eye Care', 'Surgery'].map((text, i) => (
                                <Link key={i} href="#" underline="none" color="inherit" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                    {text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: 3,
                            fontSize: { xs: '1.2rem', md: '1.3rem' }
                        }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={1.5}>
                            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                +91-743-561-0842
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                help@wokai.com
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                                Capital PK Rd, VIP Hills, Madhapur, Hyderabad, Telangana 500081
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Divider */}
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.3)', my: 4 }} />

                {/* Bottom Section */}
                <Grid
                    container
                    direction={isMobile ? 'column-reverse' : 'row'}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {/* Copyright */}
                    <Grid item xs={12} md="auto">
                        <Typography sx={{
                            fontSize: { xs: '0.95rem', md: '1rem' },
                            textAlign: { xs: 'center', md: 'left' },
                            mt: { xs: 2, md: 0 }
                        }}>
                            © 2010–2025 Freepik Company S.L. All rights reserved.
                        </Typography>
                    </Grid>

                    {/* Legal Links */}
                    <Grid item xs={12} md="auto">
                        <Stack
                            direction="row"
                            spacing={3}
                            justifyContent={isMobile ? 'center' : 'flex-end'}
                            sx={{ mt: { xs: 1, md: 0 } }}
                        >
                            <Link href="#" underline="none" color="inherit" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
                                Privacy Policy
                            </Link>
                            <Link href="#" underline="none" color="inherit" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
                                Terms & Conditions
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
