import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    Avatar,
    Divider,
    Button,
    Link,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress,
    Alert
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MedicationIcon from "@mui/icons-material/Medication";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import layersImg from '../../ASSETS/DasboardImages/layersImg.png';
import amayaClinicImg from '../../ASSETS/DasboardImages/amayaClinic.png';
import upCominglogo from '../../ASSETS/DasboardImages/upcominglogo.svg';
import cancelledlogo from '../../ASSETS/DasboardImages/cancelledlogo.svg';
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Navbar from "../../Components/Navbar";
import PopupModal from "../../Components/Popupmodal";
import { getUserHealthSummary } from "../../Apis/DashboardApis";
import { getmedications } from "../../Apis/AppointmentsApis";
import { getUserAppointments } from "../../Apis/ProfileApis";
import { getMyReminders } from "../../Apis/RemainderApis";
import { useNavigate } from "react-router-dom";
import bell from '../../ASSETS/bell.png';
import timer from '../../ASSETS/timer.png';
import Loader from '../../Components/Loader';

const Dashboard = () => {
    const [appointmentsData, setAppointmentsData] = useState([]);
    const [remindersData, setRemindersData] = useState([]);
    const [healthData, setHealthData] = useState(null);
    const [medicationsData, setMedicationsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch all data (appointments, reminders, health summary, medications)
                const [appointmentsResponse, remindersResponse, healthResponse, medicationsResponse] = await Promise.all([
                    getUserAppointments(),
                    getMyReminders(),
                    getUserHealthSummary(),
                    getmedications()
                ]);

                setAppointmentsData(appointmentsResponse?.data || []);
                setRemindersData(remindersResponse?.reminders || remindersResponse?.data?.reminders || []);
                setHealthData(healthResponse);
                setMedicationsData(medicationsResponse || []);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ mt: '100px', pb: 4 }}>
            <Navbar />
            <Loader open={loading} />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Greeting */}
                <Box mb={3}>
                    <Typography variant="h4" fontWeight="bold">
                        Welcome to your Dashboard
                    </Typography>
                    <Typography variant="body2" color='#A9A9A9'>
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} • Here's your health overview
                    </Typography>
                </Box>

                {error ? (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                ) : (
                    !loading && (
                        <>
                            <QuickInfo
                                appointmentsData={appointmentsData}
                                remindersData={remindersData}
                                loading={loading}
                                error={error}
                                navigate={navigate}
                            />
                            <HealthSummary
                                healthData={healthData}
                                medicationsData={medicationsData}
                                loading={loading}
                                error={error}
                                setModalOpen={setModalOpen}
                                setModalImages={setModalImages}
                                setModalTitle={setModalTitle}
                            />
                        </>
                    )
                )}

            </Container>
            <PopupModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                images={modalImages}
                title={modalTitle}
            />
        </Box>
    );
};

export default Dashboard;

export const QuickInfo = ({ appointmentsData = [], remindersData = [], loading = false, error = null, navigate }) => {
    // Debug: Log the data structures
    // Use API data for appointments and reminders
    const data = {
        appointments: appointmentsData,
        reminders: Array.isArray(remindersData) ? remindersData : []
    };

    // Debug: Log the processed data

    return (
        <Box sx={{ py: 0 }}>

            <Grid container spacing={2}>
                {/* Left - Appointments */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card sx={{ borderRadius: 2, border: '1px solid #e0e0e0', boxShadow: "none", height: '100%' }}>
                        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <CalendarMonthIcon sx={{ color: '#368ADD' }} />
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: '1.2' }}>
                                            Appointments History
                                        </Typography>
                                        <Typography variant="body2" color='#A9A9A9'>
                                            {data.appointments.length} Appointment Available
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" alignItems="center" onClick={() => navigate('/apointments')} gap={1} sx={{ cursor: "pointer" }}>
                                    <Typography variant="body2" color="primary">View all</Typography>
                                    <ArrowForwardIcon sx={{ fontSize: 16, color: '#368ADD' }} />
                                </Box>
                            </Box>

                            {data.appointments.slice(0, 2).map((appt) => (
                                <Box
                                    key={appt.id}
                                    display="flex"
                                    flexDirection={{ xs: 'column', sm: 'row' }}
                                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                                    justifyContent="space-between"
                                    p={2}
                                    borderRadius={2}
                                    mb={2}
                                    sx={{ border: '1px solid #eee' }}
                                >
                                    <Box display="flex" alignItems="center" gap={2} mb={{ xs: 2, sm: 0 }}>
                                        <Avatar
                                            sx={{
                                                height: 64,
                                                width: 64,
                                                backgroundColor: appt.clinic?.image || appt.clinic?.logo || appt.clinic?.imageUrl || appt.clinic?.logoUrl ? 'transparent' : '#368ADD',
                                                color: 'white',
                                                border: appt.clinic?.image || appt.clinic?.logo || appt.clinic?.imageUrl || appt.clinic?.logoUrl ? 'none' : 'auto'
                                            }}
                                            src={appt.clinic?.logo_image || appt.clinic?.image || appt.clinic?.imageUrl || appt.clinic?.logoUrl}
                                        >
                                            {!(appt.clinic?.image || appt.clinic?.logo || appt.clinic?.imageUrl || appt.clinic?.logoUrl) &&
                                                (appt.clinic?.name || appt.clinic || 'C').charAt(0)
                                            }
                                        </Avatar>
                                        <Box>
                                            <Typography sx={{ color: '#368ADD' }}>
                                                {appt.clinic?.name || appt.clinic || 'Clinic Name'}
                                            </Typography>
                                            <Typography variant="body2" color='#A9A9A9'>
                                                {appt.treatment_service?.name || appt.specialist || 'Specialty'}
                                            </Typography>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                gap={1}
                                                mt={0.5}
                                                flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
                                            >
                                                <CalendarMonthIcon fontSize="small" color="action" />
                                                <Typography variant="caption" sx={{ mr: { xs: 1, sm: 0 } }}>
                                                    {appt.bookingDate ? new Date(appt.bookingDate).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    }) : 'Date N/A'}
                                                </Typography>
                                                <AccessTimeIcon fontSize="small" color="action" />
                                                <Typography variant="caption">
                                                    {appt.bookingTime || 'Time N/A'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        gap={1}
                                        width={{ xs: '100%', sm: 'auto' }}
                                        justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
                                    >
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                color: appt.bookingStatus === 'completed' ? '#02D210' :
                                                    appt.bookingStatus === 'cancelled' ? '#F44336' : '#FFB600',
                                                backgroundColor: appt.bookingStatus === 'completed' ? '#DCFFDE' :
                                                    appt.bookingStatus === 'cancelled' ? '#FFEBEE' : '#FFEEC3',
                                                border: appt.bookingStatus === 'completed' ? '1px solid #02D210' :
                                                    appt.bookingStatus === 'cancelled' ? '1px solid #F44336' : '1px solid #FFB600',
                                                borderRadius: '50px',
                                                fontSize: '12px',
                                                width: '120px',
                                                height: '28px',
                                                minHeight: '28px',
                                                padding: '4px 12px'
                                            }}
                                        >
                                            {appt.bookingStatus || 'Scheduled'}
                                        </Button>

                                        <ChevronRightIcon onClick={() => navigate('/apointments')} />
                                    </Box>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right - Reminders */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Card sx={{ borderRadius: 2, border: '1px solid #e0e0e0', boxShadow: "none", height: '100%' }}>
                        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
                            <Box
                                display="flex"
                                flexDirection={{ xs: 'column', sm: 'row' }}
                                justifyContent="space-between"
                                alignItems={{ xs: 'flex-start', sm: 'center' }}
                                mb={2}
                            >
                                <Box display="flex" alignItems="center" gap={1} mb={{ xs: 1, sm: 0 }}>
                                    <img src={bell} alt="" style={{ width: '24px', height: '24px' }} />
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: '1.2' }}>Reminders</Typography>
                                        <Typography variant="body2" color='#A9A9A9'>
                                            You have {data.reminders.length} Reminders
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" alignItems="center" onClick={() => navigate('/remainder')} gap={1} sx={{ cursor: "pointer" }}>
                                    <Typography variant="body2" color="primary">Read all</Typography>
                                    <ArrowForwardIcon sx={{ fontSize: 16, color: '#368ADD' }} />
                                </Box>
                            </Box>

                            {data.reminders.slice(0, 3).map((rem, index) => (
                                <Box key={rem.id}>
                                    <Box
                                        display="flex"
                                        flexDirection={{ xs: 'column', sm: 'row' }}
                                        alignItems={{ xs: 'flex-start', sm: 'center' }}
                                        justifyContent="space-between"
                                        py={1.25}
                                    >
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap={2}
                                            mb={{ xs: 1, sm: 0 }}
                                            width={{ xs: '100%', sm: 'auto' }}
                                        >
                                            <Box sx={{
                                                width: 50,
                                                height: 50,
                                                backgroundColor: '#FFEEC3',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <img src={timer} alt="" style={{ width: '24px', height: '24px' }} />
                                            </Box>
                                            <Box sx={{ maxWidth: { xs: '100%', sm: 200 }, flex: 1 }}>
                                                <Typography
                                                    fontWeight="600"
                                                    sx={{
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        maxWidth: '100%'
                                                    }}
                                                >
                                                    {rem.reminderType || rem.title || 'Reminder'}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    fontSize="13px"
                                                    color='#A9A9A9'
                                                    sx={{
                                                        maxWidth: '100%',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                >
                                                    {rem.message || rem.description || 'No description available'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            display="flex"
                                            justifyContent={{ xs: 'flex-end', sm: 'center' }}
                                            width={{ xs: '100%', sm: 'auto' }}
                                        >
                                            <ChevronRightIcon />
                                        </Box>
                                    </Box>
                                    {index !== data.reminders.length - 3 && <Divider />}
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};



export const HealthSummary = ({ healthData, medicationsData, loading, error, setModalOpen, setModalImages, setModalTitle }) => {

    // Default vitals data (fallback)
    const defaultVitals = [
        {
            icon: <FavoriteBorderIcon color="primary" />,
            label: "Blood Pressure",
            value: "--",
            unit: "mmHg",
            status: "Normal",
            statusColor: "green",
        },
        {
            icon: <MonitorHeartIcon color="primary" />,
            label: "Heart Rate",
            value: "--",
            unit: "bpm",
            status: "Normal",
            statusColor: "green",
        },
        {
            icon: <FitnessCenterIcon color="primary" />,
            label: "Weight",
            value: "--",
            unit: "kg",
            status: "Stable",
            statusColor: "goldenrod",
        },
        {
            icon: <DeviceThermostatIcon color="primary" />,
            label: "Temperature",
            value: "--",
            unit: "°F",
            status: "Normal",
            statusColor: "green",
        },
    ];

    // Helper function to get status color
    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'normal':
                return 'green';
            case 'high':
                return 'red';
            case 'low':
                return 'orange';
            case 'stable':
                return 'goldenrod';
            default:
                return 'green';
        }
    };

    // Map API data to vitals format
    const mapApiDataToVitals = (healthSummary) => {
        if (!healthSummary) return defaultVitals;

        return [
            {
                icon: <FavoriteBorderIcon color="primary" />,
                label: "Blood Pressure",
                value: `${healthSummary.bloodPressure}/80`, // Assuming diastolic is 80
                unit: "mmHg",
                status: healthSummary.bpStatus || "Normal",
                statusColor: getStatusColor(healthSummary.bpStatus),
            },
            {
                icon: <MonitorHeartIcon color="primary" />,
                label: "Heart Rate",
                value: healthSummary.heartRate || "72",
                unit: "bpm",
                status: healthSummary.hrStatus || "Normal",
                statusColor: getStatusColor(healthSummary.hrStatus),
            },
            {
                icon: <FitnessCenterIcon color="primary" />,
                label: "Weight",
                value: healthSummary.weight || "165",
                unit: "kg",
                status: healthSummary.weightStatus || "Stable",
                statusColor: getStatusColor(healthSummary.weightStatus),
            },
            {
                icon: <DeviceThermostatIcon color="primary" />,
                label: "Temperature",
                value: healthSummary.temperature || "98.6",
                unit: "°F",
                status: healthSummary.tempStatus || "Normal",
                statusColor: getStatusColor(healthSummary.tempStatus),
            },
        ];
    };

    // Use API data if available, otherwise use default data
    const vitals = healthData?.healthSummary ? mapApiDataToVitals(healthData.healthSummary) : defaultVitals;
    const medicationsCount = 3; // Default value since not provided in API response

    return (
        <Grid container spacing={2} sx={{ height: '100%', mt: 2 }}>
            {/* Left big box */}
            <Grid item size={{ xs: 12, md: 8 }}>
                <Box

                    p={2}
                    borderRadius={2}
                    border="1px solid #e0e0e0"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    height="100%"
                >
                    {/* Header */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <FavoriteIcon sx={{ color: '#4CAF50', fontSize: 20, stroke: '#4CAF50', strokeWidth: 2.5, fill: 'none' }} />
                                <Typography fontWeight={600}>Health Summary
                                    <br></br>
                                    <Typography variant="body2" sx={{ fontSize: "small", color: '#A9A9A9' }}>
                                        Latest vitals & medications
                                    </Typography>
                                </Typography>

                            </Box>

                        </Box>
                        <Box display="flex" alignItems="center" gap={1} sx={{ cursor: "pointer" }}>
                            <AutorenewIcon fontSize="small" color="primary" />
                            <Typography variant="body2" color="primary">Update</Typography>
                        </Box>
                    </Box>

                    <Divider />

                    {/* Vitals */}
                    <Box sx={{ flex: 1, overflowY: 'auto' }}>
                        <Box display="flex" flexWrap="wrap" justifyContent="center">
                            {vitals.map((item, index) => (
                                <Box
                                    key={index}
                                    flex="1 1 120px"
                                    px={2}
                                    py={3}
                                    borderRight={{
                                        md: index !== vitals.length - 1 ? "1px solid #e0e0e0" : "none"
                                    }}
                                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                                >
                                    <Box display="flex" alignItems="center" gap={1}>
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
                                    <Box display="flex" alignItems="center" gap={0.5}>
                                        <FiberManualRecordIcon sx={{ height: 10, color: item.statusColor }} />
                                        <Typography variant="caption" sx={{ fontWeight: 500 }}>
                                            {item.status}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Grid>

            {/* Right side - Single card with two sections */}
            <Grid item size={{ xs: 12, md: 4 }}>
                <Card sx={{
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                    boxShadow: 'none',
                    height: '100%'
                }}>
                    <CardContent sx={{ p: 0, height: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            {/* Medications Section */}
                            <Box sx={{ p: 1.5, borderBottom: '1px solid #f0f0f0' }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    {/* Left side - Icon and text */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                                        <MedicationIcon sx={{ fontSize: 30, color: '#FFB600' }} />

                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
                                                Medications
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#666' }}>
                                                {medicationsData?.length} active prescriptions
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Right side - Action link */}

                                </Box>
                            </Box>

                            {/* Treatment Section */}
                            <Box sx={{ p: 1.5 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    height: '100%'
                                }}>
                                    {medicationsData?.length > 0 ? (
                                        <>
                                            {/* Left side - Icon and text */}
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box sx={{
                                                    width: 40,
                                                    height: 40,
                                                    backgroundColor: '#FFEEC3',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <DescriptionIcon sx={{ fontSize: 20, color: '#FFB600' }} />
                                                </Box>
                                                <Box>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
                                                        {medicationsData[0]?.treatmentServiceName || 'Hair Transplant'}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#666' }}>
                                                        {medicationsData[0]?.doctorName || 'DR. Sarah Johnson'}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            {/* Right side - Action link */}
                                            <Box
                                                sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
                                                onClick={() => {
                                                    if (medicationsData[0]?.imageUrl) {
                                                        setModalImages([medicationsData[0].imageUrl]);
                                                        setModalTitle('Medication Details');
                                                        setModalOpen(true);
                                                    }
                                                }}
                                            >
                                                <Typography variant="body2" sx={{ color: '#368ADD', fontWeight: 500 }}>
                                                    View Details
                                                </Typography>

                                            </Box>
                                        </>
                                    ) : (
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'center' }}>
                                            <Typography variant="body1" sx={{ color: '#666' }}>
                                                No medication found
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );

};
