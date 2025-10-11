import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Avatar,
    Container,
    Divider,
    CircularProgress,
    Alert
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CancelIcon from '@mui/icons-material/Cancel';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { getMyReminders } from '../Apis/RemainderApis';

const Remainder = () => {
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReminders = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getMyReminders();
                setReminders(response.reminders || []);
            } catch (error) {
                console.error('Error fetching reminders:', error);
                setError('Failed to load reminders. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchReminders();
    }, []);

    const getIcon = (status) => {
        if (status === "cancelled") {
            return <CancelIcon sx={{ fontSize: '1.2rem' }} />;
        }
        return <CalendarTodayIcon sx={{ fontSize: '1.2rem' }} />;
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <Box sx={{ pt: 16, p: 4 }}>
                    <Alert severity="error">{error}</Alert>
                </Box>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: '#fafbfc'
            }}>
                <Box sx={{ flex: 1, pt: 16, pb: 3 }}>
                    <Container maxWidth="xl">
                        <Box  sx={{
                            borderRadius: '12px',
                            boxShadow: 'none',
                            
                            mb: 4
                        }}>
                            <CardContent sx={{ p: { xs: 0, md: 3} }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 3
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <NotificationsIcon sx={{
                                            color: '#FFC107',
                                            fontSize: '1.5rem'
                                        }} />
                                        <Box>
                                            <Typography variant="h6" sx={{
                                                fontWeight: 'bold',
                                                color: '#2c3e50',
                                                fontSize: '1.25rem',
                                                mb: 0.5
                                            }}>
                                                Reminders
                                            </Typography>
                                            <Typography sx={{
                                                color: '#666',
                                                fontSize: '0.9rem'
                                            }}>
                                                {`You have ${reminders.length} Reminders`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {reminders.length === 0 ? (
                                        <Typography sx={{ textAlign: 'center', color: '#666', py: 4 }}>
                                            No reminders found.
                                        </Typography>
                                    ) : (
                                        reminders.map((reminder, index) => (
                                            <Card
                                                key={reminder.bookingId}
                                                sx={{
                                                    borderRadius: '8px',
                                                    border: '1px solid #e0e0e0',
                                                    boxShadow: 'none',
                                                    py:1,
                                                    backgroundColor: '#fff'
                                                }}
                                            >
                                                <CardContent sx={{ p: 2 }}>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 2
                                                    }}>
                                                        <Avatar sx={{
                                                            width: 40,
                                                            height: 40,
                                                            backgroundColor: reminder.bookingStatus === 'cancelled' ? '#F44336' : '#FFC107',
                                                            color: '#fff'
                                                        }}>
                                                            {getIcon(reminder.bookingStatus)}
                                                        </Avatar>
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography sx={{
                                                                fontWeight: 'bold',
                                                                color: '#2c3e50',
                                                                fontSize: '1rem',
                                                                mb: 0.5
                                                            }}>
                                                                {reminder.reminderType}
                                                            </Typography>
                                                            <Typography sx={{
                                                                color: '#979797',
                                                                fontSize: '0.85rem',
                                                                lineHeight: 1.4
                                                            }}>
                                                                {reminder.message}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        ))
                                    )}
                                </Box>
                            </CardContent>
                        </Box>
                    </Container>
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default Remainder;