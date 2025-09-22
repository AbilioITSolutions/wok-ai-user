import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    Card,
    CardContent,
    Container
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import serviceIcon from './Sectionsassets/hair-icon.png';
import headerBg from './Sectionsassets/header-bg.png';

const services = [
    { title: 'Follicular Unit Transplantation' },
    { title: 'Follicular Unit Extraction' },
    { title: 'Direct Hair Implantation' },
    { title: 'Orthokeratology' },
    { title: 'Laser Trabeculoplasty' },
];

function ServicesSection() {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#e6f0ff',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Top Text Box with Background Image */}
            <Box
                sx={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    py: { xs: 8, md: 12 },
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                        }}
                    >
                        Services for your health with price compare
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '1rem', md: '1.25rem' },
                        }}
                    >
                        Easy access to specialists who care about your well-being.
                    </Typography>
                </Container>
            </Box>

            {/* Full Width Swiper Section */}
            <Box
                sx={{
                    position: 'relative',
                    top: { xs: '-40px', md: '-60px' },
                    pb: { xs: 4, md: 8 },
                    width: '100%', // ensures full width
                }}
            >
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        600: { slidesPerView: 2 },
                        960: { slidesPerView: 3 },
                    }}
                    style={{ paddingBottom: '40px', width: '100%' }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: '16px',
                                    backgroundColor: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    p: 4,
                                    mx: 'auto',
                                    maxWidth: 320,
                                    textAlign: 'center',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={serviceIcon}
                                    alt="Service Icon"
                                    sx={{ width: 64, height: 64, mb: 3 }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600, color: '#003366' }}
                                    >
                                        {service.title}
                                    </Typography>
                                </CardContent>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        mt: 2,
                                        '&:hover': { backgroundColor: '#0056b3' },
                                    }}
                                >
                                    <ArrowForwardIcon />
                                </IconButton>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}

export default ServicesSection;
