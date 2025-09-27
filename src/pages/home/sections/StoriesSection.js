import React from 'react';
import anu from './Sectionsassets/anu.jpg';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Rating,
    Container,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const testimonials = Array(5).fill({
    name: 'Anupama Parameswaran',
    treatment: 'Hair Treatment',
    feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    rating: 5,
});

function StoriesSection() {
    return (
        <Box
            sx={{
                width: '100%',
                py: { xs: 6, md: 10 },
                textAlign: 'center',
            }}
        >
            {/* Heading inside container */}
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            color: '#007bff',
                            mb: 2,
                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                        }}
                    >
                        Every testimonial reflects <br />our commitment to quality care
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'gray',
                            mb: 2,
                            fontSize: { xs: '0.9rem', md: '1.1rem' },
                        }}
                    >
                        Your experiences guide us forward. Each story reminds us why quality care matters most.
                    </Typography>
                </Box>
            </Container>

            {/* Swiper 1 */}
            <Swiper
                modules={[FreeMode, Autoplay]}
                spaceBetween={24}
                slidesPerView={1.2}
                freeMode
                grabCursor
                autoplay={{
                    delay: 2000, // 1 second
                    disableOnInteraction: false,
                }}
                loop
                breakpoints={{
                    600: { slidesPerView: 1 },
                    960: { slidesPerView: 2 },
                }}
                style={{ paddingBottom: '20px', width: '100%' }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            sx={{
                                borderRadius: '16px',
                                backgroundColor: '#fff',
                                boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                                p: 4,
                                textAlign: 'left',
                                height: '100%',
                                minHeight: 230,
                                maxWidth: 580,
                                mx: 'auto',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{
                                        mb: 3,
                                        color: '#444',
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {testimonial.feedback}
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        mt: 2,
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box
                                            component="img"
                                            src={anu}
                                            alt={testimonial.name}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                mr: 2,
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 600, color: '#003366', mb: 0.5 }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: '0.95rem', color: '#777' }}>
                                                {testimonial.treatment}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Rating value={testimonial.rating} readOnly />
                                </Box>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper 2 */}
            <Swiper
                modules={[FreeMode, Autoplay]}
                spaceBetween={24}
                slidesPerView={1.2}
                freeMode
                grabCursor
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop
                breakpoints={{
                    600: { slidesPerView: 2 },
                    960: { slidesPerView: 3 },
                }}
                style={{ paddingBottom: '20px', width: '100%' }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            sx={{
                                borderRadius: '16px',
                                backgroundColor: '#fff',
                                boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                                p: 4,
                                textAlign: 'left',
                                height: '100%',
                                minHeight: 230,
                                maxWidth: 580,
                                mx: 'auto',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{
                                        mb: 3,
                                        color: '#444',
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {testimonial.feedback}
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        mt: 2,
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box
                                            component="img"
                                            src={anu}
                                            alt={testimonial.name}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                mr: 2,
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 600, color: '#003366', mb: 0.5 }}
                                            >
                                                {testimonial.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: '0.95rem', color: '#777' }}>
                                                {testimonial.treatment}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Rating value={testimonial.rating} readOnly />
                                </Box>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default StoriesSection;
