import React from "react";
import {
    Container,
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    Avatar,
    // Chip,
    Divider,
    Button
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MedicationIcon from "@mui/icons-material/Medication";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import layersImg from '../../Assets/DasboardImages/layersImg.png';
import amayaClinicImg from '../../Assets/DasboardImages/amayaClinic.png';
import upCominglogo from '../../Assets/DasboardImages/upcominglogo.svg';
import cancelledlogo from '../../Assets/DasboardImages/cancelledlogo.svg';
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



const Dashboard = () => {
    const user = {
        name: "John",
        date: "Saturday, August 30, 2025",
        subtitle: "Here's your health overview",
        cards: [
            {
                title: "Appointment History",
                subtitle: "Tomorrow 2:30 PM",
                icon: <CalendarMonthIcon color="primary" fontSize="medium" />
            },
            {
                title: "Health Summary",
                subtitle: "Excellent (95/100)",
                icon: <FavoriteBorderIcon sx={{ color: "green" }} fontSize="medium" />
            },
            {
                title: "Medications",
                subtitle: "3 active prescriptions",
                icon: <MedicationIcon sx={{ color: "orange" }} fontSize="medium" />
            },
            {
                title: "Documents",
                subtitle: "5 recent files",
                icon: <DescriptionIcon sx={{ color: "purple" }} fontSize="medium" />
            }
        ]
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Greeting */}
            <Box mb={3}>
                <Typography variant="h4" fontWeight="bold">
                    Good afternoon, {user.name}!
                </Typography>
                <Typography variant="body2" color='#A9A9A9'>
                    {user.date} • {user.subtitle}
                </Typography>
            </Box>

            {/* Cards */}
            <Grid container spacing={1} sx={{ mb: 3 }}>
                {user.cards.map((card, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Card
                            sx={{
                                borderRadius: 2,
                                border: '1px solid #e0e0e0',
                                cursor: "pointer",
                                boxShadow: 'none'
                            }}
                        >
                            <CardContent sx={{ padding: '16px !important' }}>
                                <Box display="flex" alignItems="center" gap={2} mb={1}>
                                    {card.icon}
                                    <Box sx={{ marginLeft: '5px' }}>
                                        <Typography variant="subtitle1" fontWeight="600">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color='#A9A9A9'>
                                            {card.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <QuickInfo />
            <HealthSummary />
        </Container>

    );
};

export default Dashboard;



export const QuickInfo = () => {
    const data = {
        appointments: [
            {
                id: 1,
                clinic: "Layers Clinic",
                specialist: "Hair Specialist",
                date: "Friday, August 29, 2025",
                time: "11:00 AM",
                status: "Scheduled",
                statusColor: "warning",
                btnBackgroundColor: "#FFEEC3",
                color: '#FFB600',
                border: '1px solid #FFB600',
                logo: layersImg
            },
            {
                id: 2,
                clinic: "Amaya Hair & Skin Clinic",
                specialist: "Hair Surgeon",
                date: "Friday, August 12, 2025",
                time: "10:30 AM",
                status: "Completed",
                statusColor: "success",
                btnBackgroundColor: "#DCFFDE",
                color: '#02D210',
                border: '1px solid #02D210',
                logo: amayaClinicImg
            }
        ],
        reminders: [
            {
                id: 1,
                title: "Upcoming Appointment",
                description:
                    "Your offline consultation with Layers Clinic is scheduled for tomorrow at 2:30 PM...",
                icon: upCominglogo
            },
            {
                id: 2,
                title: "Cancelled Your Appointment",
                description:
                    "Your consultation with Eye Clinic is cancelled please contact us.",
                icon: cancelledlogo
            },
            {
                id: 3,
                title: "Upcoming Appointment",
                description:
                    "Your offline consultation with Layers Clinic is scheduled for tomorrow at 2:30 PM...",
                icon: upCominglogo
            }
        ]
    };

    return (
        <Box sx={{ py: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>Quick Info</Typography>
            <Grid container spacing={1}>
                {/* Left - Appointments */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <Card sx={{ borderRadius: 2, border: '1px solid #e0e0e0', boxShadow:"none" }}>
                        <CardContent>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                mb={2}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: '10px' }}>
                                    <Box>
                                        <CalendarMonthIcon sx={{ color: '#368ADD', marginRight: '5px' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">
                                            Appointments History
                                        </Typography>
                                        <Typography variant="body2" color='#A9A9A9' mb={2}>
                                            {data.appointments.length} Appointment Available
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: '10px' }}>
                                    <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
                                        View all
                                    </Typography>
                                    <Box>
                                        <ArrowForwardIcon sx={{ fontSize: '16px', color: '#368ADD' }} />
                                    </Box>
                                </Box>
                            </Box>



                            {data.appointments.map((appt, index) => (

                                <Box
                                    key={appt.id}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    p={2}
                                    borderRadius={2}
                                    mb={2}
                                    sx={{ border: '1px solid #eee' }}
                                >
                                    {/* Left side - Clinic Info */}
                                    <Box display="flex" alignItems="center" gap={2} bo>
                                        <Avatar src={appt.logo} alt={appt.clinic} sx={{ height: '50px', width: '50px' }} />
                                        <Box>
                                            <Typography fontWeight="200" sx={{ color: '#368ADD' }}>{appt.clinic}</Typography>
                                            <Typography variant="body2" color='#A9A9A9'>
                                                {appt.specialist}
                                            </Typography>
                                            <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                                                <CalendarMonthIcon fontSize="small" color="action" />
                                                <em>
                                                    <Typography variant="caption">{appt.date}</Typography> </em>
                                                <AccessTimeIcon fontSize="small" color="action" />
                                                <em>
                                                    <Typography variant="caption">{appt.time}</Typography>
                                                </em>

                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* Right side - Status */}
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <Button variant="outlined" sx={{ color: appt.color, backgroundColor: appt.btnBackgroundColor, border: appt.border, borderRadius: '50px', fontSize: '12px' }}>{appt.status}</Button>

                                        <ChevronRightIcon />
                                    </Box>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right - Reminders */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <Card sx={{ borderRadius: 2, border: '1px solid #e0e0e0',boxShadow:"none" }}>
                        <CardContent sx={{ padding: '16px !important' }}>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                mb={3}
                                
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: '10px' }}>
                                    <Box>
                                        <NotificationsActiveIcon sx={{ color: '#FFB600', marginRight: '5px' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">
                                            Reminders
                                        </Typography>
                                        <Typography variant="body2" color='#A9A9A9' mb={1.7}>
                                            You have {data.reminders.length} Reminders
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: '10px' }}>
                                    <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
                                        Read all
                                    </Typography>
                                    <Box>
                                        <ArrowForwardIcon sx={{ fontSize: '16px', color: '#368ADD' }} />
                                    </Box>
                                </Box>
                            </Box>

                            {data.reminders.map((rem, index) => (

                                <Box key={rem.id} >
                                    {index !== data.reminders.length - 1 && <Divider />}
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        py={1.25}
                                    >
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Box><img src={rem.icon} style={{ height: '50px', width: '50px' }} /></Box>
                                            <Box>
                                                <Typography fontWeight="600">
                                                    {rem.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    fontSize={'13px'}
                                                    color='#A9A9A9'
                                                    // noWrap
                                                    sx={{ maxWidth: 250 }}

                                                >
                                                    {rem.description}
                                                </Typography>
                                            </Box>
                                            <hr style={{ height: '40px', marginLeft: "35px" }} />
                                        </Box>
                                        <ChevronRightIcon />
                                    </Box>
                                    {index !== data.reminders.length - 1 && <Divider />}
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};






export const HealthSummary = () => {
    const vitals = [
        {
            icon: <FavoriteBorderIcon color="primary" />,
            label: "Blood Pressure",
            value: "120/80",
            unit: "mmHg",
            status: "Normal",
            statusColor: "green",
        },
        {
            icon: <MonitorHeartIcon color="primary" />,
            label: "Heart Rate",
            value: "72",
            unit: "bpm",
            status: "Normal",
            statusColor: "green",
        },
        {
            icon: <FitnessCenterIcon color="primary" />,
            label: "Weight",
            value: "165",
            unit: "lbs",
            status: "Stable",
            statusColor: "goldenrod",
        },
        {
            icon: <DeviceThermostatIcon color="primary" />,
            label: "Temperature",
            value: "108.6",
            unit: "°F",
            status: "High",
            statusColor: "red",
        },
    ];

    return (
        <Grid container spacing={1}>
            {/* Left big box */}
            <Grid size={{ xs: 12, md: 8 }}>
                <Box
                    p={2}
                    borderRadius={2}
                    border="1px solid #e0e0e0"
                     boxShadow="none"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    
                >
                    {/* Header */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <FavoriteIcon color="success" />
                                <Typography fontWeight={600}>Health Summary</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ fontSize: "small", color: '#A9A9A9', marginLeft: '30px' }} >Latest vitals & medications</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1} sx={{ cursor: "pointer" }}>
                            <AutorenewIcon fontSize="small" color="primary" />
                            <Typography variant="body2" color="primary">
                                Update
                            </Typography>
                        </Box>
                    </Box>

                    <Divider />

                    {/* Vitals */}
                    <Box display="flex" justifyContent="center" flexWrap="wrap"  >
                        {vitals.map((item, index) => (
                            <Box
                                boxShadow="none"
                                key={index}
                                flex="1"
                                minWidth="120px"
                                lineHeight={1}
                                px={2}
                                py={3}
                                borderRight={
                                    index !== vitals.length - 1 ? "1px solid #e0e0e0" : "none"
                                }
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {React.cloneElement(item.icon, { sx: { fontSize: 18 } })}
                                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                                        {item.label}
                                    </Typography>
                                </Box>
                                <Typography variant="h6" fontWeight={550} mb={0.75}>
                                    {item.value}{" "}
                                    <Typography component="span" variant="body2" sx={{ color: '#A9A9A9' }}>
                                        {item.unit}
                                    </Typography>
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FiberManualRecordIcon sx={{ height: '10px', color: item.statusColor }} />
                                    <Typography
                                        variant="caption"
                                        sx={{ color: 'black', fontWeight: 500 }}
                                    >
                                        {item.status}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Grid>

            {/* Right small box */}
            <Grid size={{ xs: 12, md: 4 }}>
                <Box
                    //   p={1}
                    borderRadius={2}
                    border="1px solid #e0e0e0"
                    boxShadow="none"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    textAlign="center"
                >
                    <LocalPharmacyIcon sx={{ fontSize: 32, color: "grey.400" }} />
                    <Typography variant="subtitle1" color="text.secondary">
                        Medications
                    </Typography>
                    <Typography variant="body2" color="text.disabled">
                        3 active prescriptions
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};
