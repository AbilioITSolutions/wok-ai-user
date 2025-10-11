import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Avatar, 
    Chip, 
    Container, 
    CircularProgress, 
    Alert,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Grid,
    Link,
    
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkIcon from '@mui/icons-material/Link'; // Used for Medications placeholder
import DescriptionIcon from '@mui/icons-material/Description'; // Used for Documents placeholder
import Navbar from '../Components/Navbar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Footer from '../Components/Footer';
import { getUserAppointments } from '../Apis/ProfileApis';
import { getmedications , getdocuments } from '../Apis/AppointmentsApis';
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
// --- Helper Functions and Components for Clarity ---

// 1. Hook to set dynamic chip colors (from the previous suggestion, adapted)
const getStatusChipProps = (status) => {
    switch (status?.toLowerCase()) {
        case 'completed':
            return { label: status, sx: { backgroundColor: '#E8F5E9', color: '#4CAF50' } }; // Green tone
        case 'scheduled':
        case 'pending':
            return { label: status, sx: { backgroundColor: '#FFF3E0', color: '#FF9800' } }; // Yellow/Orange tone
        case 'cancelled':
            return { label: status, sx: { backgroundColor: '#FFEBEE', color: '#F44336' } }; // Red tone
        default:
            return { label: status || 'Scheduled', sx: { backgroundColor: '#F0F4F7', color: '#78909C' } }; // Default tone
    }
};

// 2. Extracted component for the Appointment List Content
const AppointmentsList = ({ appointments }) => (


    <Card sx={{ 
        borderRadius: '12px', 
        mb: 4, 
        boxShadow: 'none', 
        border: '1px solid #d5d5d5' 
    }}>
        <CardContent sx={{ p: 3 }}>
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
                <Typography sx={{ color: '#666', fontSize: '0.9rem' }}>
                    {`${appointments.length} Upcoming Appointments`}
                </Typography>
            </Box>

            {/* Appointments List */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {appointments.length === 0 ? (
                    <Typography variant="body1" sx={{ color: '#666', textAlign: 'center', py: 4 }}>
                        No appointments found
                    </Typography>
                ) : (
                    appointments.map((appointment) => (
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
                                    justifyContent: 'space-between', // Added to push status to the right
                                    gap: 2 
                                }}>
                                    {/* Left Details */}
                                    <Box sx={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        flex: 1 // Takes up remaining space
                                    }}>
                                        {/* Avatar */}
                                        <Avatar sx={{
                                            width: 48, height: 48, backgroundColor: '#8B1538', 
                                            color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'
                                        }}>
                                            {appointment.clinic?.name?.charAt(0) || 'C'}
                                        </Avatar>

                                        {/* Appointment Details */}
                                        <Box>
                                            <Typography sx={{
                                                color: '#368ADD', fontWeight: 600, fontSize: '1rem', mb: 0.5
                                            }}>
                                                {appointment.clinic?.name || 'Clinic Name'}
                                            </Typography>
                                            <Typography sx={{ color: '#666', fontSize: '0.85rem', mb: 1 }}>
                                                {appointment.treatment_service?.name || 'Specialty'}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                                <CalendarTodayIcon sx={{ color: '#999', fontSize: '0.9rem' }} />
                                                <Typography sx={{ color: '#666', fontSize: '0.8rem' }}>
                                                    {appointment.bookingDate ? new Date(appointment.bookingDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Date N/A'}
                                                </Typography>
                                                <Box sx={{ width: '1px', height: '12px', backgroundColor: '#ddd', mx: 0.5, display: { xs: 'none', sm: 'block' } }} />
                                                <AccessTimeIcon sx={{ color: '#999', fontSize: '0.9rem' }} />
                                                <Typography sx={{ color: '#666', fontSize: '0.8rem' }}>
                                                    {appointment.bookingTime || 'Time N/A'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* Status */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Chip
                                            size="small"
                                            {...getStatusChipProps(appointment.bookingStatus)}
                                            sx={{ height: '24px', fontSize: '0.75rem', fontWeight: 500 }}
                                        />
                                        {/* IconButton for details/navigation (as seen in image) */}
                                       
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))
                )}
            </Box>
        </CardContent>
    </Card>
);

const handleView = (fileUrl) => {
    if (!fileUrl) {
      alert("No file to view");
      return;
    }
    window.open(fileUrl, "_blank"); // Opens file in a new tab
  };

 // Improved with better filename extraction and error handling
const handleDownload = (fileUrl) => {
    if (!fileUrl) {
      alert("No file available to download");
      return;
    }
    
    // Extract filename from URL
    const fileName = fileUrl.split('/').pop() || 'medication';
    
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Download failed:', error);
        alert('Failed to download file');
      });
  };
  

// 3. Components for Medications and Documents tabs
const MedicationsList = ({ medications }) => (
    <Card
      sx={{
        borderRadius: "12px",
        mb: 4,
        boxShadow: "none",
        border: "1px solid #d5d5d5",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2c3e50" }}>
            Medications
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
            {medications.length} Records
          </Typography>
        </Box>
  
        {medications.length === 0 ? (
          <Typography
            variant="body1"
            sx={{ color: "#666", textAlign: "center", py: 4 }}
          >
            No medications found
          </Typography>
        ) : (
          medications.map((medication, index) => (
            <Card
              key={index}
              sx={{
                mb: 2,
                borderRadius: 2,
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                p: 1,
              }}
            >
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  {/* Left Side – Treatment/Medication Name & Date */}
                  <Grid item size={{ xs: 12, sm: 5 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#1976d2", fontWeight: 600 }}
                    >
                      {medication.treatmentServiceName || "Hair Transplant"}
                    </Typography>
  
                    <Box display="flex" alignItems="center" mt={0.5}>
                      <CalendarTodayIcon
                        sx={{ fontSize: 16, mr: 1, color: "gray" }}
                      />
                      <Typography variant="body2" sx={{ color: "gray" }}>
                        {new Date(medication.bookingDate).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </Typography>
                    </Box>
                  </Grid>
  
                  {/* Middle – Doctor Name */}
                  <Grid item size={{ xs: 12, sm: 4 }}>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      Doctor
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {medication.doctorName || "Dr. Sarah Johnson"}
                    </Typography>
                  </Grid>
  
                  {/* Right Side – Actions */}
                  <Grid
                    item
                    size={{ xs: 12, sm: 3 }}
                    display="flex"
                    justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                    alignItems="center"
                    gap={2}
                  >
                    <Typography
                     
                      onClick={() => handleView(medication.imageUrl)}
                      sx={{
                        color: "red",
                        textDecoration: "none",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <VisibilityIcon sx={{ fontSize: 18, mr: 0.5 }} />
                      View
                    </Typography>
  
                    <Typography onClick={() => handleDownload(medication.imageUrl)} sx={{
                        color: "blue",
                        textDecoration: "none",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }} >
    <DownloadIcon sx={{ fontSize: 18, mr: 0.5 }} /> Download
</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))
        )}
      </CardContent>
    </Card>
  );
  

  const DocumentsList = ({ documents }) => (
    <Box> {/* Use Box for overall container to manage layout */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#2c3e50' }}>
            Health Documents ({documents.length})
        </Typography>

        {documents.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 6, border: '1px dashed #d5d5d5', borderRadius: '8px', mt: 2 }}>
                <DescriptionIcon sx={{ fontSize: 40, color: '#368ADD', mb: 2 }} />
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    No Documents Found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Your health documents will appear here.
                </Typography>
            </Box>
        ) : (
            <Grid container spacing={3}>
                {documents.map((doc, index) => {
                    // Simple logic to extract a name or use an ID/index
                    const fileNameSegment = doc.documentUrl ? doc.documentUrl.split('/').pop() : `Document ${doc.id || index + 1}`;
                    
                    // Simple way to format the filename for display
                    const displayFileName = fileNameSegment
                        .replace(/(\.pdf|\.jpg|\.png|\.docx).*$/, '') // Remove extension for cleaner display
                        .replace(/_/g, ' ') // Replace underscores with spaces
                        .trim();

                    return (
                        <Grid item xs={12} sm={6} md={4} key={doc.id || index}>
                            
                            <Card 
                                sx={{ 
                                    p: 2, 
                                    borderRadius: '12px', 
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    height: '100%'
                                }}
                            >
                                <Box sx={{ 
                                    width: 80, 
                                    height: 80, 
                                    mb: 1, 
                                    // Simulating the generic file icon from your image
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#f5f5f5', 
                                    borderRadius: '12px',
                                    border: '1px solid #ddd'
                                }}>
                                    {/* Using a generic icon similar to your image's visual style */}
                                    <DescriptionIcon sx={{ fontSize: 50, color: '#4285F4' }} />
                                </Box>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        fontWeight: 600, 
                                        color: '#333', 
                                        mb: 1,
                                        // Simple text overflow handling
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        width: '100%',
                                        px: 1,
                                    }}
                                    title={displayFileName}
                                >
                                    {displayFileName}.pdf
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                                    {/* View Link */}
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={() => handleView(doc.documentUrl)}
                                        sx={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            color: '#E91E63', // Red tone for View
                                            textDecoration: 'none', 
                                            fontWeight: 500,
                                            '&:hover': { textDecoration: 'underline' }
                                        }}
                                    >
                                        <VisibilityIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                        View
                                    </Link>
                                    
                                    {/* Download Link */}
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={() => handleDownload(doc.documentUrl)}
                                        sx={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            color: '#368ADD', // Blue tone for Download
                                            textDecoration: 'none', 
                                            fontWeight: 500,
                                            '&:hover': { textDecoration: 'underline' }
                                        }}
                                    >
                                        <DownloadIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                        Download
                                    </Link>
                                </Box>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        )}
    </Box>
);

// --- Main Apointments Component ---

const Apointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [medications, setMedications] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState({
        appointments: false,
        medications: false,
        documents: false
    });
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('appointments');

    const tabs = [
        { key: 'appointments', label: 'My Appointments', icon: CalendarTodayIcon },
        { key: 'medications', label: 'Medications', icon: LinkIcon },
        { key: 'documents', label: 'Documents', icon: DescriptionIcon },
    ];

    const fetchData = async (tab) => {
        try {
            setLoading(prev => ({ ...prev, [tab]: true }));
            setError(null);
            
            switch(tab) {
                case 'appointments':
                    const appointmentsRes = await getUserAppointments();
                    setAppointments(appointmentsRes.data || []);
                    break;
                case 'medications':
                    const medicationsRes = await getmedications();
                    setMedications(medicationsRes || []); // Remove .data as we're already returning the processed array
                    break;
                case 'documents':

                    const documentsRes = await getdocuments();
                    console.log('Documents API Response:', documentsRes);
                    setDocuments(documentsRes.documents || []);
                    break;
            }
        } catch (error) {
            console.error(`Error fetching ${tab}:`, error);
            setError(`Failed to load ${tab}. Please try again.`);
        } finally {
            setLoading(prev => ({ ...prev, [tab]: false }));
        }
    };

    useEffect(() => {
        fetchData(activeTab);
    }, [activeTab]);

    // 4. Conditional Content Rendering Logic
    const renderContent = () => {
        if (loading[activeTab]) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 10, pb: 5 }}>
                    <CircularProgress />
                </Box>
            );
        }

        if (error) {
            return <Alert severity="error">{error}</Alert>;
        }

        switch (activeTab) {
            case 'appointments':
                return <AppointmentsList appointments={appointments} />;
            case 'medications':
                return <MedicationsList medications={medications} />;
            case 'documents':
                return <DocumentsList documents={documents} />;
            default:
                return <Alert severity="info">Select a section from the menu.</Alert>;
        }
    };

    return (
        <>
            <Navbar />
            <Box sx={{ pt: 16, pb: 3, backgroundColor: '#fafbfc', minHeight: '100vh' }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                        
                        {/* 1. Left Sidebar Menu (Fixed Width) */}
                        <Card sx={{
                            width: { xs: '100%', md: 280 },
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            border: '1px solid #d5d5d5',
                            height: 'fit-content', // Important for sticky look
                        }}>
                            <List component="nav">
                                {tabs.map((tab) => {
                                    const isActive = activeTab === tab.key;
                                    return (
                                        <React.Fragment key={tab.key}>
                                            <ListItem 
                                                button 
                                                onClick={() => {
                                                    setActiveTab(tab.key);
                                                    // Reset error/loading when switching tabs
                                                    setError(null); 
                                                }}
                                                sx={{ 
                                                    py: 1.5,
                                                    px: 3,
                                                    borderLeft: isActive ? '4px solid #368ADD' : '4px solid transparent',
                                                    backgroundColor: isActive ? '#f0f7ff' : 'transparent',
                                                    '&:hover': {
                                                        backgroundColor: isActive ? '#f0f7ff' : '#f5f5f5',
                                                    }
                                                }}
                                            >
                                                <ListItemIcon sx={{ minWidth: 40, color: isActive ? '#368ADD' : '#666' }}>
                                                    <tab.icon />
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={tab.label}
                                                    primaryTypographyProps={{ 
                                                        fontWeight: isActive ? 'bold' : 'normal',
                                                        color: isActive ? '#368ADD' : '#333'
                                                    }}
                                                />
                                            </ListItem>
                                            <Divider component="li" light />
                                        </React.Fragment>
                                    );
                                })}
                            </List>
                        </Card>
                        
                        {/* 2. Right Content Area (Dynamic) */}
                        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                            {renderContent()}
                        </Box>

                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Apointments;