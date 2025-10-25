import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Card,
    CardContent,
    Container,
    CircularProgress,
    Alert
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import serviceIcon from './sectionsassets/hair-icon.png';
import headerBg from './sectionsassets/header-bg.png';
import { getAllTreatments } from '../../../Apis/TreatmentsApis';
import { useNavigate } from 'react-router-dom';
import colordesign from '../../../ASSETS/colordesign.png'
function ServicesSection() {
    const navigate = useNavigate();
    const [treatments, setTreatments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTreatments = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getAllTreatments();
                if (response.status) {
                    setTreatments(response.data || []);
                } else {
                    setError('Failed to load treatments');
                }
            } catch (err) {
                console.error('Error fetching treatments:', err);
                setError('An error occurred while fetching treatments');
            } finally {
                setLoading(false);
            }
        };

        fetchTreatments();
    }, []);

    // Show loading spinner while fetching data
    if (loading) {
        return (
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#e6f0ff',
                    height: { xs: '80vh', md: '100vh' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CircularProgress size={60} />
            </Box>
        );
    }

    // Show error message if there's an error
    if (error) {
        return (
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#e6f0ff',
                    height: { xs: '80vh', md: '100vh' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                }}
            >
                <Alert severity="error" sx={{ maxWidth: 600 }}>
                    {error}
                </Alert>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#e6f0ff',
                height: { xs: 'auto', md: '100vh' },
                minHeight: { xs: '80vh', md: '105vh' },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Left Side Decorative Icon */}
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '30%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    width: { xs: '120px', sm: '150px', md: '320px' },
                    height: { xs: '120px', sm: '150px', md: '320px' },
                    backgroundImage: `url(${colordesign})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.8,
                }}
            />
            {/* Top Text Box with Background Image */}
            <Box
                sx={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundSize: { xs: 'cover', md: '120%' },
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    pb: { xs: 12, sm: 16, md: 28 },
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'center', md: 'start' },
                            p: { xs: 2, sm: 3, md: 5 },
                            gap: { xs: 3, md: 0 },
                        }}
                    >
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
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                ml: { xs: 0, md: 4 },
                                alignItems: 'center',
                                justifyContent: { xs: 'center', md: 'flex-end' },
                            }}
                        >
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
                                <ArrowForwardIcon
                                    sx={{
                                        transform: 'rotate(180deg)',
                                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                                    }}
                                />
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
                        bottom: '20px !important',
                        left: '50% !important',
                        transform: 'translateX(-50%) !important',
                    },
                }}
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={treatments.length === 2 ? '15%' : 24}
                    slidesPerView={treatments.length === 1 ? 1 : 'auto'}
                    centeredSlides={false}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={treatments.length > 1}
                    breakpoints={{
                        480: {
                            slidesPerView: treatments.length === 1 ? 1 : (treatments.length === 2 ? 2 : 1.2),
                            spaceBetween: treatments.length === 2 ? 20 : 16,
                            centeredSlides: false
                        },
                        600: {
                            slidesPerView: treatments.length === 1 ? 1 : (treatments.length === 2 ? 2 : 2),
                            spaceBetween: treatments.length === 2 ? 40 : 20,
                            centeredSlides: false
                        },
                        960: {
                            slidesPerView: treatments.length === 1 ? 1 : (treatments.length === 2 ? 2 : 3),
                            spaceBetween: treatments.length === 2 ? 60 : 24,
                            centeredSlides: false
                        },
                    }}
                    style={{
                        paddingBottom: '60px',
                        width: '100%',
                    }}
                    className="services-swiper"
                >
                    {treatments.map((treatment, index) => (
                        <SwiperSlide key={treatment.id || index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    minHeight: { xs: 320, sm: 340, md: 360 },
                                    borderRadius: '16px',
                                    backgroundColor: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    p: { xs: 2  , sm: 2, md: 3 },
                                    mx: 'auto',
                                    maxWidth: { xs: 320, sm: 350, md: 420 },
                                    textAlign: 'left',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={treatment.imageUrl || serviceIcon}
                                    alt={treatment.name || 'Service Icon'}
                                    sx={{
                                        width: { xs: 80, sm: 90, md: 80 },
                                        height: { xs: 80, sm: 90, md: 80 },
                                        mb: { xs: 2, sm: 3, md: 3 },
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        alignSelf: 'flex-start',
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: { xs: 1, md: 0 }, width: '100%' }}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 600,
                                            color: '#003366',
                                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                            lineHeight: { xs: '1.3', md: '1.4' },
                                            mb: 2,
                                        }}
                                    >
                                        {treatment.treatmentName ||
                                            treatment.name ||
                                            treatment.title}
                                    </Typography>
                                    {treatment.description && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#666',
                                                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                                lineHeight: { xs: '1.4', md: '1.5' },
                                                mb: 0   ,
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {treatment.description}
                                        </Typography>
                                    )}
                                </CardContent>
                                <Box
                                   onClick={() => navigate(`/login`)}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        mt: 'auto',
                                        pt: 2,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            '& .view-services-text': {
                                                color: '#007bff',
                                            },
                                            '& .view-services-arrow': {
                                                transform: 'translateX(4px)',
                                                color: '#007bff',
                                            },
                                        },
                                    }}
                                >
                                    <Typography
                                        className="view-services-text"
                                        sx={{
                                            fontSize: { xs: '0.9rem', sm: '1rem', md: "1rem" },
                                            fontWeight: 600,
                                            color: '#ff4040',
                                            mr: 1,
                                            transition: 'color 0.3s ease',
                                        }}
                                    >
                                        View Services
                                    </Typography>
                                    <ArrowForwardIcon
                                        className="view-services-arrow"
                                        sx={{
                                            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1rem' },
                                            color: '#666',
                                            transition: 'transform 0.3s ease, color 0.3s ease',
                                        }}
                                    />
                                </Box>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}

export default ServicesSection;
