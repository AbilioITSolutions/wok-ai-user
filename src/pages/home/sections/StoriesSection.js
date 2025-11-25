import React from 'react';
// Profile images for testimonials

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

// Diverse testimonials with varied ratings and feedback
const testimonials = [
  {
    name: 'Anupama Parameswaran',
    treatment: 'Hair Regrowth Treatment',
    feedback: 'After struggling with hair loss for years, I saw visible results within just 2 months of treatment. The doctors were extremely knowledgeable and the staff made me feel comfortable throughout the process.',
    rating: 5,
  },
  {
    name: 'Rahul Sharma',
    treatment: 'Skin Rejuvenation',
    feedback: 'The skin treatment has transformed my complexion completely. The dermatologist took time to understand my skin type and suggested a personalized care routine that worked wonders.',
    rating: 4,
  },
  {
    name: 'Priya Patel',
    treatment: 'Laser Hair Removal',
    feedback: 'I was skeptical at first, but the results have been amazing. The procedure was virtually painless and the staff made sure I was comfortable throughout. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Vikram Mehta',
    treatment: 'Weight Management',
    feedback: 'The weight management program was well-structured and the nutritionist was very supportive. I lost 12kg in 4 months and have maintained it for 6 months now.',
    rating: 4,
  },
  {
    name: 'Sneha Reddy',
    treatment: 'Acne Treatment',
    feedback: 'After trying multiple treatments elsewhere, I finally found a solution here. My skin has never been clearer. The doctors are patient and the follow-up care is excellent.',
    rating: 5,
  },
  {
    name: 'Arjun Kapoor',
    treatment: 'Hair Transplant',
    feedback: 'The hair transplant procedure was done professionally. The results look very natural. The only reason I\'m giving 4 stars is because of the waiting time during follow-ups.',
    rating: 4,
  },
  {
    name: 'Meera Nair',
    treatment: 'Anti-Aging Treatment',
    feedback: 'The anti-aging treatment has made a noticeable difference in my skin texture and fine lines. The staff is professional and the clinic maintains high hygiene standards.',
    rating: 5,
  }
];
const profileImages = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/women/3.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/4.jpg'
];
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
                transition: 'transform 0.3s linear, box-shadow 0.3s linear',
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
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minHeight: '4.5em',
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
                      src={profileImages[index % profileImages.length]}
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
                      }}
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
                transition: 'transform 0.3s linear, box-shadow 0.3s linear',
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    mb: { xs: 2, sm: 3 },
                    color: '#444',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    lineHeight: { xs: '1.5', md: '1.6' },
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minHeight: '4.5em',
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
                      src={profileImages[index % profileImages.length]}
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
                      }}
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
