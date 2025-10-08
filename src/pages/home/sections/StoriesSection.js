import React from 'react';
import anu from './sectionsassets/anu.jpg';
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

// Dummy testimonials
const testimonials = Array(5).fill({
  name: 'Anupama Parameswaran',
  treatment: 'Hair Treatment',
  feedback:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
  rating: 5,
});

function StoriesSection() {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Section Heading */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#007bff',
              mb: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
              lineHeight: { xs: '1.3', md: '1.2' },
            }}
          >
            Every testimonial reflects <br /> our commitment to quality care
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'gray',
              mb: 2,
              fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.1rem' },
              lineHeight: { xs: '1.4', sm: '1.5', md: '1.6' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Your experiences guide us forward. Each story reminds us why quality
            care matters most.
          </Typography>
        </Box>
      </Container>

      {/* Swiper 1 - Moves Left */}
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={2}
        slidesPerView={1.1}
        freeMode
        grabCursor
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        speed={10000}
        loop
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 8 },
          480: { slidesPerView: 1.3, spaceBetween: 12 },
          600: { slidesPerView: 1.8, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          960: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 2, spaceBetween: 32 },
        }}
        style={{ paddingBottom: '20px', width: '100%' }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={`left-${index}`}>
            <Card
              sx={{
                borderRadius: '16px',
                backgroundColor: '#fff',
                boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                p: { xs: 2.5, sm: 3, md: 4 },
                textAlign: 'left',
                height: '100%',
                minHeight: { xs: 200, sm: 220, md: 230 },
                
                mx: 'auto',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                },
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    mb: { xs: 2, sm: 3 },
                    color: '#444',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: { xs: '1.5', md: '1.6' },
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
                        width: { xs: 35, sm: 40 },
                        height: { xs: 35, sm: 40 },
                        borderRadius: '50%',
                        objectFit: 'cover',
                        mr: { xs: 1.5, sm: 2 },
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ 
                          fontWeight: 600, 
                          color: '#003366', 
                          mb: 0.5,
                          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.95rem' }, 
                          color: '#777' 
                        }}
                      >
                        {testimonial.treatment}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      '& .MuiRating-icon': {
                        mr: { xs: 0.2, sm: 0.3 }
                      }
                    }} 
                  />
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper 2 - Moves Right */}
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.2}
        freeMode
        grabCursor
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={10000}
        loop
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 8 },
          480: { slidesPerView: 1.3, spaceBetween: 12 },
          600: { slidesPerView: 1.8, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          960: { slidesPerView: 2.5, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 32 },
        }}
        style={{ paddingBottom: '20px', width: '100%' }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={`right-${index}`}>
            <Card
              sx={{
                borderRadius: '16px',
                backgroundColor: '#fff',
                boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                p: { xs: 2.5, sm: 3, md: 4 },
                textAlign: 'left',
                height: '100%',
                minHeight: { xs: 200, sm: 220, md: 230 },
                maxWidth: { xs: 300, sm: 400, md: 650, lg: 700 },
                mx: 'auto',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                },
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    mb: { xs: 2, sm: 3 },
                    color: '#444',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: { xs: '1.5', md: '1.6' },
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
                        width: { xs: 35, sm: 40 },
                        height: { xs: 35, sm: 40 },
                        borderRadius: '50%',
                        objectFit: 'cover',
                        mr: { xs: 1.5, sm: 2 },
                      }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ 
                          fontWeight: 600, 
                          color: '#003366', 
                          mb: 0.5,
                          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.95rem' }, 
                          color: '#777' 
                        }}
                      >
                        {testimonial.treatment}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      '& .MuiRating-icon': {
                        mr: { xs: 0.2, sm: 0.3 }
                      }
                    }} 
                  />
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
