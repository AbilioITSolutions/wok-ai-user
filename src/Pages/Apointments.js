import React from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Avatar, 
    Chip, 
    IconButton,
    Container
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Apointments = () => {
    // Mock data for future appointments
    const appointments = [
        {
            id: 1,
            clinicName: "Layers Clinic",
            specialty: "Hair Specialist",
            date: "Friday, August 29, 2025",
            time: "11:00 AM",
            status: "Scheduled",
            statusColor: "#FF9800",
            statusBgColor: "#FFF3E0",
            avatar: "L", // Will be styled as Layers logo
            avatarBgColor: "#8B1538"
        },
        {
            id: 2,
            clinicName: "Amaya Hair & Skin Clinic",
            specialty: "Hair Surgeon",
            date: "Monday, September 2, 2025",
            time: "10:30 AM",
            status: "Confirmed",
            statusColor: "#4CAF50",
            statusBgColor: "#E8F5E8",
            avatar: "A", // Will be styled as Amaya logo
            avatarBgColor: "#F5F5DC"
        }
    ];

    return (
        <>
            <Navbar />
            <Box sx={{ pt: 16, pb: 3, backgroundColor: '#fafbfc', minHeight: '100vh' }}>
                <Container maxWidth="xl">
                    {/* Appointments History Card */}
                    <Card sx={{ 
                        borderRadius: '12px',
                        
                        mb: 4,
                        boxShadow: 'none',
                        border: '1px solid #d5d5d5'
                    }}>
                        <CardContent  sx={{ p: 3 }}>
                            {/* Header */}
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-between', 
                                alignItems: { xs: 'flex-start', sm: 'center' },
                                mb: 2,
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: { xs: 1, sm: 0 } }}>
                                    <CalendarTodayIcon sx={{ color: '#368ADD', fontSize: '1.5rem' }} />
                                    <Typography variant="h6" sx={{ 
                                        fontWeight: 'bold',
                                        color: '#2c3e50',
                                        fontSize: '1.25rem'
                                    }}>
                                        My Appointments
                                    </Typography>
                                </Box>
                                <Box sx={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: 1,
                                    width: { xs: '100%', sm: 'auto' },
                                    justifyContent: { xs: 'space-between', sm: 'flex-end' }
                                }}>
                                    <Typography sx={{ 
                                        color: '#666',
                                        fontSize: '0.9rem'
                                    }}>
                                        2 Upcoming Appointments
                                    </Typography>
                                   
                                </Box>
                            </Box>

                            {/* Appointments List */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {appointments.map((appointment) => (
                                    <Card key={appointment.id} sx={{
                                        borderRadius: '8px',
                                        border: '1px solid #d5d5d5',
                                        boxShadow: 'none',
                                    }}>
                                        <CardContent sx={{ p: 2 }}>
                                            <Box sx={{ 
                                                display: 'flex', 
                                                flexDirection: { xs: 'column', sm: 'row' },
                                                alignItems: { xs: 'flex-start', sm: 'center' },
                                                gap: 2 
                                            }}>
                                                {/* Avatar */}
                                                <Avatar sx={{
                                                    width: 48,
                                                    height: 48,
                                                    backgroundColor: appointment.avatarBgColor,
                                                    color: appointment.avatar === 'L' ? '#fff' : '#333',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.2rem'
                                                }}>
                                                    {appointment.avatar}
                                                </Avatar>

                                                {/* Appointment Details */}
                                                <Box sx={{ 
                                                    flex: 1,
                                                    mb: { xs: 2, sm: 0 }
                                                }}>
                                                    <Typography sx={{
                                                        color: '#368ADD',
                                                        fontWeight: 600,
                                                        fontSize: '1rem',
                                                        mb: 0.5
                                                    }}>
                                                        {appointment.clinicName}
                                                    </Typography>
                                                    <Typography sx={{
                                                        color: '#666',
                                                        fontSize: '0.85rem',
                                                        mb: 1
                                                    }}>
                                                        {appointment.specialty}
                                                    </Typography>
                                                    <Box sx={{ 
                                                        display: 'flex', 
                                                        alignItems: 'center', 
                                                        gap: 1,
                                                        flexWrap: { xs: 'wrap', sm: 'nowrap' }
                                                    }}>
                                                        <CalendarTodayIcon sx={{ 
                                                            color: '#999', 
                                                            fontSize: '0.9rem' 
                                                        }} />
                                                        <Typography sx={{
                                                            color: '#666',
                                                            fontSize: '0.8rem'
                                                        }}>
                                                            {appointment.date}
                                                        </Typography>
                                                        <Box sx={{ 
                                                            width: '1px', 
                                                            height: '12px', 
                                                            backgroundColor: '#ddd',
                                                            mx: 1,
                                                            display: { xs: 'none', sm: 'block' }
                                                        }} />
                                                        <AccessTimeIcon sx={{ 
                                                            color: '#999', 
                                                            fontSize: '0.9rem',
                                                            ml: { xs: 0, sm: 0 }
                                                        }} />
                                                        <Typography sx={{
                                                            color: '#666',
                                                            fontSize: '0.8rem'
                                                        }}>
                                                            {appointment.time}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                {/* Status and Arrow */}
                                                <Box sx={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: { xs: 'space-between', sm: 'flex-end' },
                                                    gap: 1,
                                                    width: { xs: '100%', sm: 'auto' }
                                                }}>
                                                    <Chip
                                                        label={appointment.status}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: appointment.statusBgColor,
                                                            color: appointment.statusColor,
                                                            fontWeight: 500,
                                                            fontSize: '0.75rem',
                                                            height: '24px'
                                                        }}
                                                    />
                                                   
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
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

export default Apointments;