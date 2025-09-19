import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Link,
    Stack,
    IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../Assets/logo1.svg';

function Footer() {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#007bff',
                color: '#fff',
                pt: { xs: 8, md: 12 },
                pb: 6,
                px: { xs: 4, md: 8 },
            }}
        >
            {/* Top Grid */}
            <Grid container spacing={6}>
                {/* Logo + Social */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box
                        component="img"
                        src={logo}
                        alt="WOK AI Logo"
                        sx={{
                            height: 80, // bigger logo
                            width: 'auto',
                            cursor: 'pointer',
                            mb: 3,
                        }}
                    />
                    <Stack direction="row" spacing={2}>
                        <IconButton sx={{ color: '#fff', fontSize: 28 }}><FacebookIcon fontSize="inherit" /></IconButton>
                        <IconButton sx={{ color: '#fff', fontSize: 28 }}><InstagramIcon fontSize="inherit" /></IconButton>
                        <IconButton sx={{ color: '#fff', fontSize: 28 }}><LinkedInIcon fontSize="inherit" /></IconButton>
                        <IconButton sx={{ color: '#fff', fontSize: 28 }}><YouTubeIcon fontSize="inherit" /></IconButton>
                    </Stack>
                </Grid>

                {/* Useful Links */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.25rem' }}>
                        Useful Links
                    </Typography>
                    <Stack spacing={1.5}>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Home</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Services</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>About us</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Contact</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Find a doctor</Link>
                    </Stack>
                </Grid>

                {/* Categories */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.25rem' }}>
                        Categories
                    </Typography>
                    <Stack spacing={1.5}>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Hair</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Skin</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Dental</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Eye Care</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '1.05rem' }}>Surgery</Link>
                    </Stack>
                </Grid>

                {/* Contact Info */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, fontSize: '1.25rem' }}>
                        Contact Us
                    </Typography>
                    <Stack spacing={1.5}>
                        <Typography sx={{ fontSize: '1.05rem' }}>📞 +91-743-561-0842</Typography>
                        <Typography sx={{ fontSize: '1.05rem' }}>✉️ help@wokai.com</Typography>
                        <Typography sx={{ fontSize: '1.05rem' }}>
                            📍 Capital PK Rd, VIP Hills, Madhapur, Hyderabad, Telangana 500081
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>

            {/* Divider */}
            <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.3)', my: 5 }} />

            {/* Bottom Section */}
            <Grid container justifyContent="space-between" alignItems="center">
                {/* Legal Links */}
                <Grid item xs={12} md={6}>
                    <Stack direction="row" spacing={3}>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '0.95rem' }}>Privacy Policy</Link>
                        <Link href="#" underline="none" color="inherit" sx={{ fontSize: '0.95rem' }}>Terms & Conditions</Link>
                    </Stack>
                </Grid>

                {/* Copyright */}
                <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' }, mt: { xs: 2, md: 0 } }}>
                    <Typography sx={{ fontSize: '0.95rem' }}>
                        © 2010–2025 Freepik Company S.L. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
