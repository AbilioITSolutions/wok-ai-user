import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Avatar,
    Chip,
    IconButton
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Bookings = () => {
    // Mock data for bookings
    const bookings = [
        {
            id: 1,
            clinicName: "Layers Clinic",
            specialty: "Hair Specialist",
            date: "Friday, August 29, 2025",
            time: "11:00 AM",
            status: "Scheduled",
            statusColor: "#FF9800",
            statusBgColor: "#FFF3E0",
            logo: "L",
            logoBgColor: "#8B1538"
        },
        {
            id: 2,
            clinicName: "Amaya Hair & Skin Clinic",
            specialty: "Hair Surgeon",
            date: "Friday, August 12, 2025",
            time: "10:30 AM",
            status: "Completed",
            statusColor: "#4CAF50",
            statusBgColor: "#E8F5E8",
            logo: "A",
            logoBgColor: "#F5F5DC"
        }
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 'bold',
                    mb: { xs: 2, sm: 3 },
                    color: '#333',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
            >
                My Bookings
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 1.5, sm: 2 }
            }}>
                {bookings.map((booking) => (
                    <Card
                        key={booking.id}
                        sx={{
                            borderRadius: { xs: 1.5, sm: 2 },
                            boxShadow: 'none',
                            border: '1px solid #e0e0e0',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                transform: 'translateY(-1px)'
                            }
                        }}
                    >
                        <CardContent sx={{
                            p: { xs:2, sm: 3 }
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: { xs: 'flex-start', sm: 'center' },
                                justifyContent: 'space-between',
                                gap: { xs: 1.5, sm: 0 },
                                flexWrap: { xs: 'wrap', sm: 'nowrap' }
                            }}>
                                {/* Left Section - Clinic Info */}
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                    gap: { xs: 1.5, sm: 2 },
                                    flex: 1,
                                    minWidth: 0 // Allow flex item to shrink
                                }}>
                                    <Avatar
                                        sx={{
                                            width: { xs: 40, sm: 50 },
                                            height: { xs: 40, sm: 50 },
                                            backgroundColor: booking.logoBgColor,
                                            color: '#ffffff',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1rem', sm: '1.2rem' },
                                            flexShrink: 0
                                        }}
                                    >
                                        {booking.logo}
                                    </Avatar>
                                    <Box sx={{
                                        minWidth: 0, // Allow text to wrap
                                        flex: 1
                                    }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: '#368ADD',
                                                mb: { xs: 0.25, sm: 0.5 },
                                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            {booking.clinicName}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#666',
                                                mb: { xs: 0.75, sm: 1 },
                                                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            {booking.specialty}
                                        </Typography>

                                        {/* Date and Time */}
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'row', sm: 'column' },
                                            gap: { xs: 0.5, sm: 0.5 },
                                            flexWrap: 'wrap'
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: { xs: 0.5, sm: 1 },
                                                minWidth: 'fit-content'
                                            }}>
                                                <CalendarTodayIcon sx={{
                                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                                    color: '#666'
                                                }} />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#666',
                                                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                                    }}
                                                >
                                                    {booking.date}
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: { xs: 0.5, sm: 1 },
                                                minWidth: 'fit-content'
                                            }}>
                                                <AccessTimeIcon sx={{
                                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                                    color: '#666'
                                                }} />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#666',
                                                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                                    }}
                                                >
                                                    {booking.time}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Right Section - Status and Arrow */}
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                    gap: { xs: 0.5, sm: 1 },
                                    flexShrink: 0
                                }}>
                                    <Chip
                                        label={booking.status}
                                        sx={{
                                            backgroundColor: booking.statusBgColor,
                                            color: booking.statusColor,
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.7rem', sm: '0.8rem' },
                                            height: { xs: '24px', sm: '28px' },
                                            '& .MuiChip-label': {
                                                px: { xs: 1, sm: 1.5 }
                                            }
                                        }}
                                    />
                                    <IconButton
                                        size="small"
                                        sx={{
                                            color: '#333',
                                            p: { xs: 0.5, sm: 1 },
                                            '&:hover': {
                                                backgroundColor: '#f5f5f5'
                                            }
                                        }}
                                    >
                                        <ChevronRightIcon sx={{
                                            fontSize: { xs: '1.2rem', sm: '1.5rem' }
                                        }} />
                                    </IconButton>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Bookings;
