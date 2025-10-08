import React from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Avatar, 
    IconButton,
    Container,
    Divider
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Remainder = () => {
    // Mock data for reminders
    const reminders = [
        {
            id: 1,
            type: "upcoming",
            title: "Upcoming Appointment",
            description: "Your offline consultation with Layers Clinic is scheduled for tomorrow at 2:30 PM...",
            icon: "calendar",
            iconBgColor: "#FFC107",
            iconColor: "#fff"
        },
        {
            id: 2,
            type: "cancelled",
            title: "Cancelled Your Appointment",
            description: "Your consultation with Eye Clinic is cancelled please contact us.",
            icon: "cancel",
            iconBgColor: "#F44336",
            iconColor: "#fff"
        },
        {
            id: 3,
            type: "upcoming",
            title: "Upcoming Appointment",
            description: "Your offline consultation with Layers Clinic is scheduled for tomorrow at 2:30 PM...",
            icon: "calendar",
            iconBgColor: "#FFC107",
            iconColor: "#fff"
        }
    ];

    const getIcon = (iconType) => {
        if (iconType === "calendar") {
            return <CalendarTodayIcon sx={{ fontSize: '1.2rem' }} />;
        } else if (iconType === "cancel") {
            return <CancelIcon sx={{ fontSize: '1.2rem' }} />;
        }
        return <CalendarTodayIcon sx={{ fontSize: '1.2rem' }} />;
    };

    return (
        <>
            <Navbar />
            <Box sx={{ pt: 16, pb: 3, backgroundColor: '#fafbfc', minHeight: '100vh' }}>
                <Container maxWidth="xl">
                    {/* Reminders Card */}
                    <Card sx={{ 
                        borderRadius: '12px',
                        boxShadow: 'none',
                        border: '1px solid #d5d5d5',
                        mb: 4
                    }}>
                        <CardContent sx={{ p: 3 }}>
                            {/* Header */}
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
                                            You have 5 Reminders
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Reminders List */}
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                {reminders.map((reminder, index) => (
                                    <Box key={reminder.id}>
                                        <Box sx={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: 2,
                                            py: 2
                                        }}>
                                            {/* Icon */}
                                            <Avatar sx={{
                                                width: 40,
                                                height: 40,
                                                backgroundColor: reminder.iconBgColor,
                                                color: reminder.iconColor
                                            }}>
                                                {getIcon(reminder.icon)}
                                            </Avatar>

                                            {/* Reminder Details */}
                                            <Box sx={{ flex: 1 }}>
                                                <Typography sx={{
                                                    fontWeight: 'bold',
                                                    color: '#2c3e50',
                                                    fontSize: '1rem',
                                                    mb: 0.5
                                                }}>
                                                    {reminder.title}
                                                </Typography>
                                                <Typography sx={{
                                                    color: '#979797',
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.4
                                                }}>
                                                    {reminder.description}
                                                </Typography>
                                            </Box>

                                          

                                        </Box>
                                        
                                        {/* Divider */}
                                        {index < reminders.length - 1 && (
                                            <Divider sx={{ 
                                                borderColor: '#e0e0e0',
                                                mx: 5
                                            }} />
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Remainder;
