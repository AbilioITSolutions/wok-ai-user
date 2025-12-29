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
import { Link as RouterLink } from 'react-router-dom';
import logo from '../ASSETS/logo1.svg';

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
                <Grid container spacing={{ xs: 3, sm: 4, md: 8 }}>
                    {/* Logo + Social */}
                    <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
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
                        <Stack direction="row" spacing={{ xs: 1, sm: 1.5 }}>
                            <IconButton sx={{
                                color: '#fff',
                                fontSize: { xs: 22, sm: 26, md: 30 },
                                p: { xs: 0.5, sm: 1 }
                            }}>
                                <FacebookIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton sx={{
                                color: '#fff',
                                fontSize: { xs: 22, sm: 26, md: 30 },
                                p: { xs: 0.5, sm: 1 }
                            }}>
                                <InstagramIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton sx={{
                                color: '#fff',
                                fontSize: { xs: 22, sm: 26, md: 30 },
                                p: { xs: 0.5, sm: 1 }
                            }}>
                                <LinkedInIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton sx={{
                                color: '#fff',
                                fontSize: { xs: 22, sm: 26, md: 30 },
                                p: { xs: 0.5, sm: 1 }
                            }}>
                                <YouTubeIcon fontSize="inherit" />
                            </IconButton>
                        </Stack>
                    </Grid>

                    {/* Useful Links */}
                    <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: { xs: 2, sm: 3 },
                            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                        }}>
                            Useful Links
                        </Typography>
                        <Stack spacing={{ xs: 1, sm: 1.5 }}>
                            {['Home', 'Services', 'About us', 'Contact', 'Find a doctor'].map((text, i) => (
                                <Link key={i} href="#" underline="none" color="inherit" sx={{
                                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                    '&:hover': { opacity: 0.8 }
                                }}>
                                    {text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Categories */}
                    <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: { xs: 2, sm: 3 },
                            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                        }}>
                            Categories
                        </Typography>
                        <Stack spacing={{ xs: 1, sm: 1.5 }}>
                            {['Hair', 'Skin', 'Dental', 'Eye Care', 'Surgery'].map((text, i) => (
                                <Link key={i} href="#" underline="none" color="inherit" sx={{
                                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                    '&:hover': { opacity: 0.8 }
                                }}>
                                    {text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: { xs: 2, sm: 3 },
                            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                        }}>
                            Contact Us
                        </Typography>
                        <Stack spacing={{ xs: 1, sm: 1.5 }}>
                            <Typography sx={{
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                lineHeight: { xs: 1.4, md: 1.5 }
                            }}>
                                +91 9010210735
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                lineHeight: { xs: 1.4, md: 1.5 }
                            }}>
                                wokaihealthcare@gmail.com
                            </Typography>
                            <Typography sx={{
                                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem' },
                                lineHeight: { xs: 1.3, md: 1.4 }
                            }}>
                                3-51/A , first floor brundhavan colony , bandlaguda jagir ,RR dist ,500086
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Divider */}
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.3)', my: { xs: 3, sm: 4 } }} />

                {/* Bottom Section */}
                <Grid
                    container
                    direction={isMobile ? 'column-reverse' : 'row'}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {/* Copyright */}
                    <Grid item size={{ xs: 12, md: "auto" }} >
                        <Typography sx={{
                            fontSize: { xs: '0.95rem', md: '1rem' },
                            textAlign: { xs: 'center', md: 'left' },
                            mt: { xs: 2, md: 0 }
                        }}>
                            © 2010–2025 Freepik Company S.L. All rights reserved.
                        </Typography>
                    </Grid>

                    {/* Legal Links */}
                    <Grid item size={{ xs: 12, md: "auto" }} >
                        <Stack
                            direction="row"
                            spacing={3}
                            justifyContent={isMobile ? 'center' : 'flex-end'}
                            sx={{ mt: { xs: 1, md: 0 } }}
                        >
                            <Link component={RouterLink} to="/privacy-policy" underline="none" color="inherit" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
                                Privacy Policy
                            </Link>
                            <Link component={RouterLink} to="/terms-and-conditions" underline="none" color="inherit" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
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
