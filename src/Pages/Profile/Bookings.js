import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Avatar,
    Chip,
    IconButton,
    CircularProgress,
    Alert
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getUserAppointments } from '../../Apis/ProfileApis';

const Bookings = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getUserAppointments();
                setAppointments(response.data || []);
            } catch (error) {
                console.error('Error fetching appointments:', error);
                setError('Failed to load appointments. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    // Loading state
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    // Error state
    if (error) {
        return (
            <Alert severity="error" sx={{ mb: 2 }}>
                {error}
            </Alert>
        );
    }

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

            {appointments.length === 0 ? (
                <Typography variant="body1" sx={{ color: '#666', textAlign: 'center', py: 4 }}>
                    No appointments found
                </Typography>
            ) : (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1.5, sm: 2 }
                }}>
                    {appointments.map((appointment) => (
                        <Card
                            key={appointment.id}
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
                                        <Typography component="img"
                                            src={appointment.doctor?.image}
                                            
                                            sx={{
                                                width: { xs: 40, sm: 70 },
                                                height: { xs: 40, sm: 70 },
                                                backgroundColor: '#8B1538',
                                                borderRadius: '50%',
                                                color: '#ffffff',
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1rem', sm: '1.2rem' },
                                                flexShrink: 0
                                            }}
                                        />
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
                                                {appointment.clinic?.name || 'Clinic Name'}
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
                                                {appointment.treatment_service?.name || 'Specialty'}
                                            </Typography>

                                            {/* Date and Time */}
                                            <Box sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: { xs: 1.5, sm: 2 },
                                                flexWrap: 'wrap',
                                                mt:1
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
                                                        {appointment.bookingDate ? new Date(appointment.bookingDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Date not available'}
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
                                                        {appointment.bookingTime || 'Time not available'}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: '#666',
                                                            fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                                        }}
                                                    >
                                                        {appointment.bookingType || 'Time not available'}
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
                                            label={appointment.bookingStatus || 'Scheduled'}
                                            sx={{
                                                backgroundColor: '#FFF3E0',
                                                color: '#FF9800',
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
                                            
                                        </IconButton>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Bookings;
