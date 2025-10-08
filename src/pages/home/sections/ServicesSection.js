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
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import serviceIcon from './sectionsassets/hair-icon.png';
import headerBg from './sectionsassets/header-bg.png';

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
                height: { xs: 'auto', md: '100vh' },
                minHeight: { xs: '80vh', md: '100vh' },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Top Text Box with Background Image */}
            <Box
                sx={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundSize: { xs: 'cover', md: '120%' },
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    pb: { xs: 12, sm: 16, md: 24 },
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between', 
                        alignItems: { xs: 'center', md: 'start' },
                        p: { xs: 2, sm: 3, md: 5 },
                        gap: { xs: 3, md: 0 }
                    }}>
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.5rem' },
                                    lineHeight: { xs: '1.3', md: '1.2' },
                                }}
                            >
                                Services for your health with price compare
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
                                    lineHeight: { xs: '1.4', md: '1.3' },
                                }}
                            >
                                Easy access to specialists who care about your well-being.
                            </Typography>
                        </Box>
                        <Box sx={{ 
                            display: { xs: 'flex', md: 'flex' }, 
                            gap: 2, 
                            ml: { xs: 0, md: 4 }, 
                            alignItems: 'center',
                            justifyContent: { xs: 'center', md: 'flex-end' }
                        }}>
                            <IconButton
                                className="swiper-button-prev"
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    color: '#fff',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '8px',
                                    width: { xs: '40px', md: '48px' },
                                    height: { xs: '40px', md: '48px' },
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#000',
                                    },
                                }}
                            >
                                <ArrowForwardIcon sx={{ 
                                    transform: 'rotate(180deg)', 
                                    fontSize: { xs: '1.2rem', md: '1.5rem' } 
                                }} />
                            </IconButton>
                            <IconButton
                                className="swiper-button-next"
                                sx={{
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '8px',
                                    width: { xs: '40px', md: '48px' },
                                    height: { xs: '40px', md: '48px' },
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#000',
                                    },
                                }}
                            >
                                <ArrowForwardIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Container> 
            </Box>

            {/* Full Width Swiper Section */}
            <Box
                sx={{
                    position: 'relative',
                    top: { xs: '-60px', sm: '-80px', md: '-150px' },
                    pb: { xs: 6, sm: 8, md: 12 },
                    width: '100%',
                    px: { xs: 0, sm: 3, md: 0 },
                    '& .services-swiper .swiper-pagination': {
                        position: 'absolute !important',
                        bottom: '20px !important',
                        left: '50% !important',
                        transform: 'translateX(-50%) !important',
                        display: 'flex !important',
                        justifyContent: 'center !important',
                        alignItems: 'center !important',
                        gap: '8px !important',
                        zIndex: 10,
                        opacity: '1 !important',
                        visibility: 'visible !important',
                        height: 'auto !important',
                        '&.swiper-pagination-bullets': {
                            display: 'flex !important',
                            alignItems: 'center !important',
                            height: 'auto !important',
                        },
                    },
                    '& .services-swiper .swiper-pagination-bullet': {
                        width: '8px !important',
                        height: '8px !important',
                        backgroundColor: '#ccc !important',
                        borderRadius: '50% !important',
                        cursor: 'pointer !important',
                        transition: 'all 0.3s ease !important',
                        opacity: '1 !important',
                        visibility: 'visible !important',
                        display: 'inline-block !important',
                        margin: '0 4px !important',
                        border: 'none !important',
                        outline: 'none !important',
                        flexShrink: '0 !important',
                        alignSelf: 'center !important',
                        '&:hover': {
                            backgroundColor: '#007bff !important',
                        },
                    },
                    '& .services-swiper .swiper-pagination-bullet-active': {
                        backgroundColor: '#007bff !important',
                        transform: 'scale(1.2) !important',
                        opacity: '1 !important',
                    },
                }}
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={{ xs: 16, sm: 20, md: 24 }}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ 
                        clickable: true,
                        type: 'bullets',
                        dynamicBullets: false,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        480: { slidesPerView: 1.2, spaceBetween: 16 },
                        600: { slidesPerView: 2, spaceBetween: 20 },
                        960: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    style={{ 
                        paddingBottom: '60px', 
                        width: '100%',
                        '--swiper-pagination-color': '#007bff',
                        '--swiper-pagination-bullet-size': '12px',
                        '--swiper-pagination-bullet-horizontal-gap': '8px',
                    }}
                    className="services-swiper"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    minHeight: { xs: 280, sm: 280, md: 300 },
                                    borderRadius: '16px',
                                    backgroundColor: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    p: { xs: 3, sm: 4, md: 5 },
                                    mx: 'auto',
                                    maxWidth: { xs: 280, sm: 300, md: 320 },
                                    textAlign: 'center',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={serviceIcon}
                                    alt="Service Icon"
                                    sx={{ 
                                        width: { xs: 80, sm: 90, md: 100 }, 
                                        height: { xs: 80, sm: 90, md: 100 }, 
                                        mb: { xs: 2, sm: 3, md: 3 } 
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: { xs: 1, md: 2 } }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ 
                                            fontWeight: 600, 
                                            color: '#003366',
                                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                            lineHeight: { xs: '1.3', md: '1.4' }
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                </CardContent>
                                <Typography
                                    sx={{ fontSize: { xs: '40px', sm: '50px', md: '60px' }, color: '#777' }}
                                >
                                    <ArrowForwardIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' } }} />
                                </Typography>
                                
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}

export default ServicesSection;
