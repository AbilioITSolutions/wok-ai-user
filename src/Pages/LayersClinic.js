import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    CardContent,
    CardMedia,
    Button,
    Grid,
    Chip,
    Rating,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
    Breadcrumbs,
    Link,
    Stack,
    Avatar,
    IconButton,
    Collapse,
    CircularProgress,
    Alert,
} from '@mui/material';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HotelIcon from '@mui/icons-material/Hotel';
import noFacilities from "../ASSETS/nofacilies.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getAllClinicsByid, getClinicWithTreatmentsServices, getDoctorsByClinic, getServicePricesByClinic } from "../Apis/TreatmentsApis";
import { useBooking } from "../Context/BookingContext";

export default function LayersClinic() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const clinicId = location.state?.Clinicid;
    console.log("Initial clinicId from location.state:", location.state);
    console.log("Extracted clinicId:", clinicId);

    // New state for clinic data
    const [clinicData, setClinicData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { updateBookingData } = useBooking();

    // State for dynamic categories from API
    const [expandedCategories, setExpandedCategories] = useState({});

    // Fetch clinic data when clinicId is available
    useEffect(() => {
        console.log("useEffect triggered, clinicId:", clinicId);
        const fetchClinicData = async () => {
            if (clinicId) {
                try {
                    console.log("Starting API calls for clinicId:", clinicId);
                    setLoading(true);
                    setError(null);

                    // Call all APIs concurrently
                    const [clinicResponse, servicesResponse, doctorsResponse, pricingResponse] = await Promise.all([
                        getAllClinicsByid(clinicId),
                        getClinicWithTreatmentsServices(clinicId),
                        getDoctorsByClinic(clinicId),
                        getServicePricesByClinic(clinicId)
                    ]);

                    console.log("Clinic API response:", clinicResponse);
                    console.log("Services API response:", servicesResponse);
                    console.log("Doctors API response:", doctorsResponse);
                    console.log("Pricing API response:", pricingResponse);

                    // Combine data from all responses
                    if (clinicResponse.status && servicesResponse.status && doctorsResponse.status && pricingResponse.status) {
                        const combinedData = {
                            ...clinicResponse.data,
                            // Use services API data for treatments and services
                            treatments_services: servicesResponse.data || [],
                            // Use doctors API data (note: doctors API returns 'doctors' array, not 'data')
                            doctors: doctorsResponse.doctors || [],
                            // Use pricing API data
                            service_prices: pricingResponse.data || []
                        };
                        console.log("Combined clinic data:", combinedData);
                        setClinicData(combinedData);
                    } else if (clinicResponse.status) {
                        // Fallback to clinic data only if other APIs fail
                        console.log("Some APIs failed, using clinic data only");
                        setClinicData(clinicResponse.data);
                    } else {
                        console.log("All APIs failed");
                        setError("Failed to load clinic data");
                    }
                } catch (error) {
                    console.error("Error fetching clinic data:", error);
                    setError("Failed to load clinic data. Please try again.");
                } finally {
                    setLoading(false);
                    console.log("Loading set to false");
                }
            } else {
                console.log("No clinicId provided");
            }
        };

        fetchClinicData();
    }, [clinicId]);

    const handleBookNow = (clinicId, treatmentId, serviceId, serviceName) => {
        updateBookingData('clinicId', clinicId);
        updateBookingData('treatmentId', treatmentId);
        updateBookingData('serviceId', serviceId);
        navigate(`/doctorlist/clinic/book-appointment`, {
            state: {
                clinicId: clinicId,
                treatmentId: treatmentId,
                serviceId: serviceId,
                serviceName: serviceName
            }
        });
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleCategoryToggle = (categoryName) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryName]: !prev[categoryName]
        }));
    };

    const tabs = ["Overview", "Services", "Doctors", "Pricing"];

    // Generate dynamic services data from API
    const servicesData = React.useMemo(() => {
        if (!clinicData?.treatments_services || !Array.isArray(clinicData.treatments_services)) {
            return {};
        }

        const groupedServices = {};

        clinicData.treatments_services.forEach(treatment => {
            if (treatment.treatmentName && treatment.services) {
                const treatmentName = treatment.treatmentName;
                if (!groupedServices[treatmentName]) {
                    groupedServices[treatmentName] = {
                        expanded: false,
                        services: []
                    };
                }

                treatment.services.forEach(service => {
                    groupedServices[treatmentName].services.push({
                        name: service.name,
                        id: service.id || service.name.toLowerCase().replace(/\s+/g, '-')
                    });
                });
            }
        });

        // Set first category as expanded
        const categoryNames = Object.keys(groupedServices);
        if (categoryNames.length > 0) {
            groupedServices[categoryNames[0]].expanded = true;
        }

        return groupedServices;
    }, [clinicData]);

    // Generate dynamic doctors data from API
    const doctorsData = React.useMemo(() => {
        if (!clinicData?.doctors || !Array.isArray(clinicData.doctors)) {
            return [
                {
                    id: 1,
                    name: "DR. Sarah Johnson",
                    rating: 4.9,
                    reviewCount: 234,
                    experience: 10,
                    specializations: ["Trichologist", "Hair Restoration", "Cosmetologist"],
                    availability: "Available from 9:00 AM - 7:30 PM",
                    isAvailable: true,
                    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
                },
                {
                    id: 2,
                    name: "DR. Rajendher Reddy",
                    rating: 4.9,
                    reviewCount: 234,
                    experience: 14,
                    specializations: ["Trichologist", "Hair Restoration", "Cosmetologist"],
                    availability: "Available from 9:00 AM - 7:30 PM",
                    isAvailable: true,
                    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
                },
                {
                    id: 3,
                    name: "Bharath Reddy",
                    rating: 4.9,
                    reviewCount: 234,
                    experience: 14,
                    specializations: ["Trichologist", "Hair Restoration", "Cosmetologist"],
                    availability: "Not Available",
                    isAvailable: false,
                    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face"
                }
            ];
        }

        return clinicData.doctors.map(doctor => {
            // Extract specializations from doctorServices
            const specializations = doctor.doctorServices ?
                doctor.doctorServices.map(service => service.treatment?.name).filter(Boolean) :
                [];

            // Format availability from start_time and end_time
            const formatTime = (timeString) => {
                if (!timeString) return '';
                const [hours, minutes] = timeString.split(':');
                const hour = parseInt(hours);
                const ampm = hour >= 12 ? 'PM' : 'AM';
                const displayHour = hour > 12 ? hour - 12 : hour || 12;
                return `${displayHour}:${minutes} ${ampm}`;
            };

            const startTime = formatTime(doctor.start_time);
            const endTime = formatTime(doctor.end_time);
            const availability = startTime && endTime ?
                `Available from ${startTime} - ${endTime}` :
                "Not Available";

            return {
                id: doctor.id,
                name: doctor.name || 'Unknown Doctor',
                rating: doctor.rating || 0,
                reviewCount: doctor.reviewsCount || 0,
                experience: doctor.experience || 0,
                specializations: specializations,
                availability: availability,
                isAvailable: doctor.status !== false,
                avatar: doctor.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
            };
        });
    }, [clinicData]);

    // Generate dynamic pricing data from API
    const pricingData = React.useMemo(() => {
        if (!clinicData?.service_prices || !Array.isArray(clinicData.service_prices)) {
            return [
                {
                    id: 1,
                    procedure: "PRP Therapy for Hair Loss",
                    description: "Per session",
                    priceRange: "₹3,000 to ₹6,000"
                },
                {
                    id: 2,
                    procedure: "Hair Transplant",
                    description: "Per session",
                    priceRange: "₹30 to ₹60"
                },
                {
                    id: 3,
                    procedure: "Eye Treatment",
                    description: "",
                    priceRange: "₹1,500 to ₹3,500"
                },
                {
                    id: 4,
                    procedure: "Knee & Joint",
                    description: "",
                    priceRange: "₹25,000 - ₹50,000"
                },
                {
                    id: 5,
                    procedure: "Cataract Surgery",
                    description: "Per session",
                    priceRange: "₹3,000 to ₹5,000"
                }
            ];
        }

        return clinicData.service_prices.map((service, index) => ({
            id: service.id || index + 1,
            procedure: service.service?.name || service.name || service.serviceName || service.treatmentName || 'Treatment',
            description: service.description || "Per session",
            priceRange: `₹${service.priceRange}` || `₹${service.price}` || 'Price not available'
        }));
    }, [clinicData]);

    return (
        <>
            <Navbar />
            <Box sx={{ pt: 16, pb: 3, backgroundColor: '#fafbfc', minHeight: '100vh' }}>
                <Container maxWidth="lg">
                    {/* Breadcrumbs */}
                    <Breadcrumbs sx={{ mb: 3 }}>
                        <Link color="inherit" href="/doctorlist" sx={{ textDecoration: 'none' }}>
                            Find a Doctor
                        </Link>
                        <Typography color="text.primary">{clinicData?.name || 'Loading...'}</Typography>
                    </Breadcrumbs>

                    {/* Clinic Information Card */}
                    <Card
                        variant="outlined"
                        sx={{
                            borderRadius: 3,
                            p: { xs: 2, md: 4 },
                            mb: 3,
                            boxShadow: 'none',
                            border: '1px solid #e0e0e0'
                        }}
                    >
                        {loading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                                <CircularProgress />
                                <Typography sx={{ ml: 2 }}>Loading clinic data...</Typography>
                            </Box>
                        ) : error ? (
                            <Box sx={{ p: 4, textAlign: 'center' }}>
                                <Typography color="error">{error}</Typography>
                            </Box>
                        ) : (
                        <Grid container spacing={3} alignItems="center">
                            {/* Left Section */}
                            <Grid item size={{ xs: 12, sm: 9 }}>
                                <Box display="flex" 
                                    flexDirection={{ xs: 'column', sm: 'row' }} 
                                    alignItems={{ xs: 'flex-start', sm: 'center' }} 
                                    gap={2}
                                >
                                    <Avatar
                                        src={clinicData?.image}
                                        alt={clinicData?.name || 'Clinic'}
                                        sx={{ 
                                            width: 80, 
                                            height: 80, 
                                            borderRadius: 2,
                                            mb: { xs: 1, sm: 0 }
                                        }}
                                    />
                                    <Box>
                                        {/* Title */}
                                        <Typography variant="h5" sx={{ 
                                            fontWeight: 'bold',
                                            color: '#2c3e50',
                                            mb: 1
                                        }}>
                                            {clinicData?.name || 'Loading...'}
                                        </Typography>

                                        {/* Address */}
                                        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 1 }}>
                                            <LocationOnIcon fontSize="small" sx={{ color: '#666' }} />
                                            <Typography variant="body2" sx={{ 
                                                color: '#666',
                                                wordBreak: 'break-word'
                                            }}>
                                                {clinicData?.address || 'Address not available'}
                                            </Typography>
                                        </Stack>

                                        {/* Meta info */}
                                        <Stack
                                            direction={{ xs: "column", sm: "row" }}
                                            spacing={2}
                                            color="text.secondary"
                                            flexWrap="wrap"
                                        >
                                            {/* Phone */}
                                            <Typography variant="body2" sx={{ color: '#666' }}>
                                                {clinicData?.phone_number || 'Phone not available'}
                                            </Typography>

                                            {/* Separator - hide on xs screens */}
                                            <Typography variant="body2" sx={{ 
                                                color: '#ccc',
                                                display: { xs: 'none', sm: 'block' }
                                            }}>|</Typography>

                                            {/* Established */}
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <CalendarTodayIcon fontSize="small" sx={{ color: '#666' }} />
                                                <Typography variant="body2" sx={{ color: '#666' }}>
                                                    Est. {clinicData?.established || 'N/A'}
                                                </Typography>
                                            </Stack>

                                            {/* Separator - hide on xs screens */}
                                            <Typography variant="body2" sx={{ 
                                                color: '#ccc',
                                                display: { xs: 'none', sm: 'block' }
                                            }}>|</Typography>

                                            {/* Beds */}
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <HotelIcon fontSize="small" sx={{ color: '#666' }} />
                                                <Typography variant="body2" sx={{ color: '#666' }}>
                                                    {clinicData?.beds || 0} beds
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Right Section */}
                            <Grid
                                item
                                size={{ xs: 12, sm: 3 }}
                                sx={{
                                    display: "flex",
                                    justifyContent: { xs: "flex-start", md: "flex-end" }
                                }}
                            >
                                <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
                                    <IconButton 
                                        color="default" 
                                        sx={{ 
                                            border: "1px solid #ccc",
                                            borderRadius: 2
                                        }}
                                    >
                                        <PhoneIcon />
                                    </IconButton>
                                    <IconButton 
                                        color="default" 
                                        sx={{ 
                                            border: "1px solid #ccc",
                                            borderRadius: 2
                                        }}
                                    >
                                        <LocationOnIcon />
                                    </IconButton>
                                </Stack>
                            </Grid>
                        </Grid>
                        )}
                    </Card>

                    {/* Tabs */}
                    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 1, 
                            maxWidth: '800px', 
                            width: '100%' 
                        }}>
                            {tabs.map((tab, index) => (
                                <Box
                                    key={tab}
                                    onClick={() => setActiveTab(index)}
                                    sx={{
                                        flex: 1,
                                        textAlign: 'center',
                                        py: 1.5,
                                        px: 2,
                                        mb: { xs: 1, sm: 0 },
                                        borderRadius: '8px',
                                        backgroundColor: activeTab === index ? '#368ADD' : '#fff',
                                        color: activeTab === index ? '#fff' : '#666',
                                        border: '1px solid #e0e0e0',
                                        cursor: 'pointer',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: activeTab === index ? '#368ADD' : '#f5f5f5',
                                        }
                                    }}
                                >
                                    {tab}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Tab Content */}
                    <Box sx={{ mt: 2 }}>
                        {activeTab === 0 && (
                            <Box>
                                {/* Overview Section */}
                                <Card sx={{ 
                                    borderRadius: 2,
                                    boxShadow: 'none',
                                    border: '1px solid #e0e0e0',
                                    backgroundColor: '#ffffff',
                                    mb: 3
                                }}>
                                    <Box sx={{ p: 3 }}>
                                        <Typography variant="h5" sx={{ 
                                            color: '#368ADD',
                                            fontWeight: 'bold',
                                            mb: 3
                                        }}>
                                            Overview
                                        </Typography>
                                        
                                        <Typography variant="body1" sx={{
                                            color: '#333',
                                            lineHeight: 1.6,
                                            mb: 2
                                        }}>
                                            {clinicData?.overview ? (
                                                <div dangerouslySetInnerHTML={{ __html: clinicData.overview }} />
                                            ) : (
                                                'Layers skin clinic is a holistic clinic focusing on leveraging science and medicine for skin and hair care. We provide personalized care with qualified professionals in Cosmetology and Trichology, using advanced technology to deliver the best results.'
                                            )}
                                        </Typography>

                                        
                                    </Box>
                                </Card>

                                {/* Contact Us Section */}
                                <Card sx={{ 
                                    borderRadius: 2,
                                    boxShadow: 'none',
                                    border: '1px solid #e0e0e0',
                                    backgroundColor: '#ffffff'
                                }}>
                                    <Box sx={{ p: 3 }}>
                                        <Typography variant="h5" sx={{ 
                                            color: '#368ADD',
                                            fontWeight: 'bold',
                                            mb: 2
                                        }}>
                                            Contact Us
                                        </Typography>
                                        
                                        <Stack spacing={1}>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <PhoneIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
                                                <Typography sx={{ color: '#333' }}>{clinicData?.phone_number || '+91 9000572727'}</Typography>
                                            </Stack>
                                            
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <EmailIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
                                                <Typography sx={{ color: '#333' }}>{clinicData?.email || 'info@layersclinics.com'}</Typography>
                                            </Stack>
                                            
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <LocationOnIcon sx={{ color: '#666', fontSize: '1.2rem' }} />
                                                <Typography sx={{ color: '#333' }}>
                                                    {clinicData?.address || '3rd Floor, Jasti Towers, Above Karur Vysya Bank P.S. Road, Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038'}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Card>
                            </Box>
                        )}
                            
                            {activeTab === 1 && (
                                <Box>
                                    {Object.entries(servicesData).map(([categoryName, categoryData], treatmentIndex) => {
                                        const isExpanded = expandedCategories[categoryName];
                                        // Get treatment ID from treatments_services data
                                        const treatmentId = clinicData?.treatments_services?.[treatmentIndex]?.treatmentId;
                                        return (
                                            <Card key={categoryName} sx={{ 
                                                borderRadius: 2,
                                                boxShadow: 'none',
                                                border: '1px solid #e0e0e0',
                                                backgroundColor: '#ffffff',
                                                mb: 2
                                            }}>
                                                <Box sx={{ p: 3 }}>
                                                    <Box 
                                                        onClick={() => handleCategoryToggle(categoryName)}
                                                        sx={{ 
                                                            display: 'flex', 
                                                            justifyContent: 'space-between', 
                                                            alignItems: 'center',
                                                            mb: isExpanded ? 2 : 0,
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        <Typography variant="h6" sx={{ 
                                                            color: '#333',
                                                            fontWeight: 600,
                                                            fontSize: '1.1rem',
                                                            transition: 'color 0.2s ease-in-out'
                                                        }}>
                                                            {categoryName}
                                                        </Typography>
                                                        <Box sx={{ 
                                                            color: '#666',
                                                            transition: 'transform 0.3s ease-in-out',
                                                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                                                        }}>
                                                            <ExpandMoreIcon />
                                                        </Box>
                                                    </Box>
                                                    
                                                    <Collapse 
                                                        in={isExpanded} 
                                                        timeout={300}
                                                        unmountOnExit
                                                        sx={{
                                                            '& .MuiCollapse-wrapper': {
                                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                                            },
                                                            '& .MuiCollapse-wrapperInner': {
                                                                paddingTop: 0
                                                            }
                                                        }}
                                                    >
                                                        <Box sx={{ 
                                                            borderTop: '1px solid #e0e0e0', 
                                                            pt: 2
                                                        }}>
                                                            {categoryData.services.map((service, index) => (
                                                                <Box 
                                                                    key={service.id} 
                                                                    sx={{ 
                                                                        display: 'flex', 
                                                                        justifyContent: 'space-between', 
                                                                        alignItems: 'center',
                                                                        py: 1.5,
                                                                        borderBottom: index < categoryData.services.length - 1 ? '1px solid #f0f0f0' : 'none'
                                                                    }}
                                                                >
                                                                    <Typography sx={{ 
                                                                        color: '#368ADD', 
                                                                        fontSize: '0.95rem',
                                                                        transition: 'color 0.2s ease-in-out'
                                                                    }}>
                                                                        {service.name}
                                                                    </Typography>
                                                                    <Button 
                                                                        onClick={() => handleBookNow(clinicId, treatmentId, service.id, service.name)}
                                                                        variant="contained" 
                                                                        sx={{   
                                                                            backgroundColor: '#368ADD',
                                                                            color: '#fff',
                                                                            borderRadius: '6px',
                                                                            px: 2,
                                                                            py: 0.5,
                                                                            fontSize: '0.85rem',
                                                                            textTransform: 'none',
                                                                            fontWeight: 500,
                                                                            transition: 'all 0.2s ease-in-out',
                                                                            transform: 'scale(1)',
                                                                            '&:hover': {
                                                                                backgroundColor: '#2c6bb3',
                                                                                transform: 'scale(1.05)',
                                                                                boxShadow: '0 4px 8px rgba(54, 138, 221, 0.3)'
                                                                            }
                                                                        }}
                                                                    >
                                                                        Book Now
                                                                    </Button>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    </Collapse>
                                                </Box>
                                            </Card>
                                        );
                                    })}
                                </Box>
                            )}

                            
                            {activeTab === 2 && (
                                <Box>
                                    <Grid container spacing={3} justifyContent="center">
                                        {doctorsData.map((doctor) => (
                                            <Grid item size={{ xs: 12, sm: 6 }} key={doctor.id}>
                                                <Card sx={{
                                                    borderRadius: 3,
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                    border: '1px solid #e0e0e0',
                                                    backgroundColor: '#ffffff',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    transition: 'all 0.3s ease-in-out',
                                                    '&:hover': {
                                                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                                                        transform: 'translateY(-2px)'
                                                    }
                                                }}>
                                                    <Box sx={{ p: 3, flex: 1 }}>
                                                        {/* Rating */}
                                                        <Box sx={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            mb: 2 
                                                        }}>
                                                            <StarIcon sx={{ 
                                                                color: '#FFC107', 
                                                                fontSize: '1.2rem',
                                                                mr: 0.5 
                                                            }} />
                                                            <Typography sx={{ 
                                                                color: '#333',
                                                                fontWeight: 600,
                                                                fontSize: '0.9rem'
                                                            }}>
                                                                {doctor.rating}({doctor.reviewCount})
                                                            </Typography>
                                                        </Box>

                                                        {/* Avatar */}
                                                        <Box sx={{ 
                                                            display: 'flex', 
                                                            justifyContent: 'center', 
                                                            mb: 2 
                                                        }}>
                                                            <Avatar
                                                                src={doctor.avatar}
                                                                alt={doctor.name}
                                                                sx={{
                                                                    width: 100,
                                                                    height: 100,
                                                                    border: '3px solid #e0e0e0'
                                                                }}
                                                            />
                                                        </Box>

                                                        {/* Name */}
                                                        <Typography variant="h6" sx={{
                                                            color: '#368ADD',
                                                            fontWeight: 600,
                                                            fontSize: '1.1rem',
                                                            textAlign: 'center',
                                                            mb: 1
                                                        }}>
                                                            {doctor.name}
                                                        </Typography>

                                                        {/* Experience */}
                                                        <Box sx={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            justifyContent: 'center',
                                                            mb: 2 
                                                        }}>
                                                            <WorkIcon sx={{ 
                                                                color: '#666', 
                                                                fontSize: '1rem',
                                                                mr: 0.5 
                                                            }} />
                                                            <Typography sx={{ 
                                                                color: '#666',
                                                                fontSize: '0.85rem'
                                                            }}>
                                                                {doctor.experience} years experience
                                                            </Typography>
                                                        </Box>

                                                        {/* Divider */}
                                                        <Divider sx={{ mb: 2 }} />

                                                        {/* Specializations */}
                                                        <Box sx={{ 
                                                            display: 'flex', 
                                                            justifyContent: 'center',
                                                            flexWrap: 'wrap',
                                                            gap: 0.5,
                                                            mb: 2
                                                        }}>
                                                            {doctor.specializations.map((spec, index) => (
                                                                <React.Fragment key={spec}>
                                                                    <Typography sx={{
                                                                        color: '#368ADD',
                                                                        fontSize: '0.8rem',
                                                                        fontWeight: 500
                                                                    }}>
                                                                        {spec}
                                                                    </Typography>
                                                                    {index < doctor.specializations.length - 1 && (
                                                                        <Typography sx={{
                                                                            color: '#ccc',
                                                                            fontSize: '0.8rem',
                                                                            mx: 0.5
                                                                        }}>
                                                                            |
                                                                        </Typography>
                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </Box>

                                                        {/* Availability */}
                                                        <Box sx={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            justifyContent: 'center',
                                                            mt: 'auto'
                                                        }}>
                                                            <AccessTimeIcon sx={{ 
                                                                color: '#666', 
                                                                fontSize: '1rem',
                                                                mr: 0.5 
                                                            }} />
                                                            <Typography sx={{ 
                                                                color: doctor.isAvailable ? '#666' : '#ff6b6b',
                                                                fontSize: '0.85rem',
                                                                fontWeight: doctor.isAvailable ? 400 : 500
                                                            }}>
                                                                {doctor.availability}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            )}
                            
                            {activeTab === 3 && (
                                <Box>
                                    {/* Header */}
                                    <Box sx={{ mb: 4 }}>
                                        <Typography variant="h4" sx={{ 
                                            color: '#333',
                                            fontWeight: 'bold',
                                            fontSize: '1.8rem',
                                            mb: 1
                                        }}>
                                            Pricing
                                        </Typography>
                                        <Typography variant="body1" sx={{ 
                                            color: '#666',
                                            fontSize: '1rem'
                                        }}>
                                            Estimated costs for common procedures
                                        </Typography>
                                    </Box>

                                    {/* Pricing Table */}
                                    <Card sx={{
                                        borderRadius: 3,
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                        border: '1px solid #e0e0e0',
                                        backgroundColor: '#ffffff',
                                        overflow: 'hidden'
                                    }}>
                                        {pricingData.map((item, index) => (
                                            <Box key={item.id}>
                                                <Box sx={{ 
                                                    p: 2,
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    minHeight: '60px'
                                                }}>
                                                    {/* Left side - Procedure info */}
                                                    <Box sx={{ flex: 1 }}>
                                                        <Typography variant="h6" sx={{
                                                            color: '#333',
                                                            fontWeight: 600,
                                                            fontSize: '1.1rem',
                                                            mb: item.description ? 0.5 : 0
                                                        }}>
                                                            {item.procedure}
                                                        </Typography>
                                                        {item.description && (
                                                            <Typography variant="body2" sx={{
                                                                color: '#666',
                                                                fontSize: '0.85rem'
                                                            }}>
                                                                {item.description}
                                                            </Typography>
                                                        )}
                                                    </Box>

                                                    {/* Right side - Price */}
                                                    <Box sx={{ 
                                                        ml: 2,
                                                        textAlign: 'right'
                                                    }}>
                                                        <Typography variant="h6" sx={{
                                                            color: '#4CAF50',
                                                            fontWeight: 600,
                                                            fontSize: '1.1rem'
                                                        }}>
                                                            {item.priceRange}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                
                                                {/* Divider */}
                                                {index < pricingData.length - 1 && (
                                                    <Divider sx={{ 
                                                        borderColor: '#e0e0e0',
                                                        mx: 3
                                                    }} />
                                                )}
                                            </Box>
                                        ))}
                                    </Card>
                                </Box>
                            )}
                            
                            
                        </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
}

