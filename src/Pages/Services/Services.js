import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    Button,
    IconButton
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import BusinessIcon from '@mui/icons-material/Business';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import DiamondIcon from '@mui/icons-material/Diamond';
import BuildIcon from '@mui/icons-material/Build';
import Servicebg  from "../../ASSETS/servicebg.png";
import Navbar from '../../Components/FloatingNavbar';
import services from '../../ASSETS/services1.png';
import eye from '../../ASSETS/eye_svgrepo.com.png';

const Services = () => {
    const serviceCategories = [
        {
            title: "Skin & Hair",
            description: "Get the perfect look with our expert haircuts, coloring, and treatments. Refresh and rejuvenate your skin with facials, body care, and hair removal services.",
            icon: <img src={services} alt="Service Icon" sx={{ fontSize: 50, color: '#007bff' }} />,
            link: "View Services"
        },
        {
            title: "Eye",
            description: "Get the perfect look with our expert haircuts, coloring, and treatments. Refresh and rejuvenate your skin with facials, body care, and hair removal services.",
            icon: <img src={eye} alt="Service Icon" sx={{ fontSize: 50, color: '#007bff' }} />,
            link: "View Services"
        },
        {
            title: "Knee & Joints",
            description: "Get the perfect look with our expert haircuts, coloring, and treatments. Refresh and rejuvenate your skin with facials, body care, and hair removal services.",
            icon: <AccessibilityIcon sx={{ fontSize: 50, color: '#007bff' }} />,
            link: "View Services"
        },
        {
            title: "Dental & Oral",
            description: "Get the perfect look with our expert haircuts, coloring, and treatments. Refresh and rejuvenate your skin with facials, body care, and hair removal services.",
            icon: <LocalHospitalIcon sx={{ fontSize: 50, color: '#007bff' }} />,
            link: "View Services"
        },
        {
            title: "Cosmetic Surgery",
            description: "Get the perfect look with our expert haircuts, coloring, and treatments. Refresh and rejuvenate your skin with facials, body care, and hair removal services.",
            icon: <MedicalServicesIcon sx={{ fontSize: 50, color: '#007bff' }} />,
            link: "View Services"
        },
        {
            title: "Gynaecology",
            description: "Get the perfect look with our expert haircuts, coloring, and treatments. Refresh and rejuvenate your skin with facials, body care, and hair removal services.",
            icon: <DiamondIcon sx={{ fontSize: 50, color: '#007bff' }} />,
            link: "View Services"
        },
        {
            title: "General Surgery",
            description: "Get the perfect look with our expert haircuts, coloring, and treatments. Refresh and rejuvenate your skin with facials, body care, and hair removal services.",
            icon: <BuildIcon sx={{ fontSize: 50, color: '#007bff' }} />,
            link: "View Services"
        }
    ];

    return (
        <Box sx={{ width: '100%', minHeight: '100vh' }}>
            <Navbar />
            {/* Hero Section with Background Image */}
            <Box
                sx={{
                    backgroundImage: `url(${Servicebg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    position: 'relative',
                   
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', pb: 8 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            color: '#007bff',
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            mb: 2,
                            textShadow: '0 2px 4px rgba(255,255,255,0.8)'
                        }}
                    >
                        Quick, Reliable, and always at your service.
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#007bff',
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                            opacity: 0.9,
                            textShadow: '0 1px 2px rgba(255,255,255,0.8)'
                        }}
                    >
                        Simplify daily work and focus on what really matters.
                    </Typography>
                </Container>
            </Box>

            {/* From Start to Finish Section */}
            <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#fff' }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#007bff',
                                    fontSize: { xs: '2rem', md: '2.4rem' },
                                    mb: 2,
                                    fontWeight: '700',
                                }}
                            >
                                From Start to Finish, <br/> We've Got You Covered!
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#666',
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                    lineHeight: 1.6,
                                    fontWeight: '500',
                                    width: '60%'
                                }}
                            >
                                Comprehensive healthcare services designed to meet all your medical needs with expert care and modern facilities.
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                px: 4,
                                py: 1.5,
                                fontSize: '0.8rem',
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: '#0056b3',
                                },
                            }}
                        >
                            Contact Now
                        </Button>
                    </Box>

                    {/* Service Categories Grid */}
                    <Grid container spacing={3}>
                        {serviceCategories.map((service, index) => (
                            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Card
                                    sx={{
                                        height: '280px',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4, textAlign: 'left' }}>
                                        <Box sx={{ mb: 1 }}>
                                            {service.icon}
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: '#333',
                                                mb: 2,
                                                fontSize: '1.2rem'
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#666',
                                                mb: 3,
                                                lineHeight: 1.6,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
                                        <Button
                                            variant="text"
                                            endIcon={<ArrowForwardIcon sx={{ fontSize: 20 }} />}
                                            sx={{
                                                color: '#e74c3c',
                                                textTransform: 'none',
                                                fontSize: '0.9rem',
                                                fontWeight: 600,
                                                '&:hover': {
                                                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                                                },
                                            }}
                                        >
                                            {service.link}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Services;
