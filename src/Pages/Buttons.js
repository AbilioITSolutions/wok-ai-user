import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Stack,
    Box,
    Container,
    Avatar,
    Grid,
    Button, Paper, Divider

} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import sarahImg from "../Assets/sarah.png";
import rajendharImg from "../Assets/rajendhar.png";
import bharathImg from "../Assets/bharath.png";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AddIcon from "@mui/icons-material/Add";



const Buttons = () => {
    const [data, setData] = useState("OVERVIEW");
    const docterData = [
        {
            "id": 1,
            "name": "Dr. Sarah Johnson",
            "rating": 4.9,
            "reviews": 234,
            "experience": "10 years",
            "specialties": ["Trichologist", "Hair Restoration", "Cosmetologist"],
            "availability": "Available from 9:00 AM – 7:30 PM",
            "image": sarahImg,
            "bookable": true
        },
        {
            "id": 2,
            "name": "Dr. Rajendher Reddy",
            "rating": 4.9,
            "reviews": 234,
            "experience": "14 years",
            "specialties": ["Trichologist", "Hair Restoration", "Cosmetologist"],
            "availability": "Available from 9:00 AM – 7:30 PM",
            "image": rajendharImg,
            "bookable": true
        },
        {
            "id": 3,
            "name": "Bharath Reddy",
            "rating": 4.9,
            "reviews": 234,
            "experience": "14 years",
            "specialties": ["Trichologist", "Hair Restoration", "Cosmetologist"],
            "availability": "Not Available",
            "image": bharathImg,
            "bookable": false
        }
    ]

    const pricingData = [
        { procedure: 'PRP Therapy for Hair Loss', note: 'Per session', cost: '₹3,000 to ₹6,000' },
        { procedure: 'Hair Transplant', note: 'Per session', cost: '₹30 to ₹60' },
        { procedure: 'Dandruff & Scalp Disorder Treatment', note: '', cost: '₹1,500 to ₹3,500' },
        { procedure: 'Hair Regrowth Mesotherapy', note: '', cost: '₹25,000 – ₹50,000' },
        { procedure: 'Cataract Surgery', note: 'Per session', cost: '₹3,000 to ₹5,000' },
    ];

    return (

        <Container maxWidth="lg">
            <Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                        <Stack
                            spacing={2}
                            direction={{ xs: "column", sm: "row" }} // column on mobile, row on tablet+
                            sx={{ mt: 4, display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                            <Button
                                onClick={() => setData("OVERVIEW")}
                                variant={data === "OVERVIEW" ? "contained" : "outlined"}
                                fullWidth={{ xs: true, sm: false }} // full width on mobile
                                sx={{ border: "1px solid gray", padding: "13px 29px", color: "#000000" }}
                            >
                                Overview
                            </Button>

                            <Button
                                onClick={() => setData("DOCTORS")}
                                variant={data === "DOCTORS" ? "contained" : "outlined"}
                                fullWidth={{ xs: true, sm: false }}
                                sx={{ border: "1px solid gray", padding: "13px 29px", color: "#000000" }}
                            >
                                Doctors
                            </Button>

                            <Button
                                onClick={() => setData("PRICING")}
                                variant={data === "PRICING" ? "contained" : "outlined"}
                                fullWidth={{ xs: true, sm: false }}
                                sx={{ border: "1px solid gray", padding: "13px 29px", color: "#000000" }}
                            >
                                Pricing
                            </Button>

                            <Button
                                onClick={() => setData("FACILITIES")}
                                variant={data === "FACILITIES" ? "contained" : "outlined"}
                                fullWidth={{ xs: true, sm: false }}
                                sx={{ border: "1px solid gray", padding: "13px 29px", color: "#000000" }}
                            >
                                Facilities
                            </Button>
                        </Stack>

                    </Grid>




                </Grid>

                {/* Conditional Content */}
                {data === "OVERVIEW" && (

                    <Box sx={{ p: 2 }}>
                        <Grid container spacing={2}>
                            {/* Overview Section */}
                            <Grid size={{ xs: 12 }}>
                                <Card variant="outlined" sx={{ borderRadius: 3, height: "100%" }}>
                                    <CardContent>
                                        <Typography variant="h6" color="primary" gutterBottom>
                                            Overview
                                        </Typography>
                                        <Typography variant="body2" color="#000000">
                                            Layers skin clinic is a holistic clinic that focuses on leveraging
                                            the advances in science and medicine to make sure that your skin
                                            and hair receive the attention and care they require. Every
                                            individual’s skin is unique and needs personalized care and
                                            attention and our centre has qualified and well-trained
                                            professionals specialized in Cosmetology and Trichology. We use
                                            advanced and modern technology and bring you the best of what
                                            cosmetic dermatology has to offer.
                                        </Typography>
                                        <Typography variant="body2" color="#000000" mt={2}>
                                            We understand and cater your needs with our extensive range of
                                            services such as – Acne and Scar treatment, Laser Hair Removal,
                                            Chemical Peeling, Anti Wrinkle Injections and Fillers, Anti Ageing
                                            treatments, Hair Transplantation.
                                        </Typography>
                                        <Typography variant="body2" color="#000000" mt={2}>
                                            Visit Layers today to receive the care you deserve to become the
                                            most attractive and confident version of you!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Contact Us Section */}
                            <Grid size={{ xs: 12 }}>
                                <Card variant="outlined" sx={{ borderRadius: 3, height: "100%" }}>
                                    <CardContent>
                                        <Typography variant="h6" color="primary" gutterBottom>
                                            Contact Us
                                        </Typography>
                                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                            <PhoneIcon fontSize="small" color="action" />
                                            <Typography variant="body2" color="#A9A9A9">
                                                +91 9000572727
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                            <EmailIcon fontSize="small" color="action" />
                                            <Typography variant="body2" color="#A9A9A9">
                                                info@layersclinics.com
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={1} alignItems="flex-start">
                                            <LocationOnIcon fontSize="small" color="action" />
                                            <Typography variant="body2" color="#A9A9A9">
                                                3rd Floor, Jasti Towers, Above Karur Vysya Bank P.S. Road,
                                                Sanjeeva Reddy Nagar, Hyderabad, Telangana 500038.
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                )}



                {data === "DOCTORS" && (
                    <Box mt={4}>
                        <Grid container spacing={3}>
                            {docterData.map((doc) => (
                                <Grid item xs={12} sm={6} md={4} size={{ xs: 12, sm: 6, md: 4 }} key={doc.id}>
                                    <Card variant="outlined" sx={{ borderRadius: 3, height: "100%" }}>
                                        <CardContent>
                                            {/* Rating */}
                                            <Stack direction="row" alignItems="center" spacing={0.5} mb={1}>
                                                <StarIcon sx={{ color: "#fbc02d", fontSize: 18 }} />
                                                <Typography variant="body2" fontWeight="bold">
                                                    {doc.rating}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    ({doc.reviews})
                                                </Typography>
                                            </Stack>

                                            {/* Avatar + Name + Experience */}
                                            <Stack alignItems="center" mb={1}>
                                                <Avatar
                                                    src={doc.image}
                                                    alt={doc.name}
                                                    sx={{ width: 90, height: 90, mb: 1 }}
                                                />
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{ color: "#1976d2", fontWeight: "bold" }}
                                                >
                                                    {doc.name}
                                                </Typography>
                                                <Stack direction="row" alignItems="center" spacing={0.5}>
                                                    <WorkIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                                                    <Typography variant="body2" color="text.secondary">
                                                        {doc.experience} experience
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            {/* Specialties */}
                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                justifyContent="center"
                                                flexWrap="wrap"
                                                mb={2}
                                            >
                                                {doc.specialties.map((spec, i) => (
                                                    <React.Fragment key={i}>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{ color: "#1976d2", cursor: "pointer" }}
                                                        >
                                                            {spec}
                                                        </Typography>
                                                        {i < doc.specialties.length - 1 && (
                                                            <Typography variant="body2" color="text.secondary">
                                                                |
                                                            </Typography>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </Stack>

                                            <Divider sx={{ mb: 2 }} />

                                            {/* Availability */}
                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                alignItems="center"
                                                justifyContent="center"
                                                mb={2}
                                            >
                                                <AccessTimeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    {doc.availability}
                                                </Typography>
                                            </Stack>

                                            <Divider sx={{ mb: 2 }} />

                                            {/* Book Now */}
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                color={doc.bookable ? "primary" : "text.disabled"}
                                                sx={{
                                                    cursor: doc.bookable ? "pointer" : "default",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {doc.bookable ? "Book Now →" : "Book Now"}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}






                {data === "PRICING" && (
                    <Box sx={{ padding: 3 }}>
                        {/* Title */}
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Pricing
                        </Typography>

                        {/* Subtitle */}
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Estimated costs for common procedures
                        </Typography>

                        {/* Pricing Box */}
                        <Paper
                            variant="outlined"
                            sx={{
                                borderRadius: 2,
                                mt: 2,
                                p: 2,
                                width: "100%",
                            }}
                        >
                            <Grid container spacing={2}>
                                {pricingData.map((item, index) => (
                                    <Grid item xs={12} sm={12} md={6} size={{ xs: 12, sm: 12 }} key={index}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                py: 1,
                                            }}
                                        >
                                            <Box>
                                                <Typography fontWeight={600}>{item.procedure}</Typography>
                                                {item.note && (
                                                    <Typography variant="caption" color="text.secondary">
                                                        {item.note}
                                                    </Typography>
                                                )}
                                            </Box>
                                            <Typography fontWeight={600} color="#02D210">
                                                {item.cost}
                                            </Typography>
                                        </Box>

                                        {index !== pricingData.length - 1 && <Divider />}
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Box>
                )}


                {/* ******************      */}

                {data === "FACILITIES" && (
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        minHeight={{ xs: "40vh", sm: "50vh", md: "60vh" }} // responsive height
                        textAlign="center"
                        color="text.secondary"
                        px={2} // padding for small screens
                    >
                        {/* Custom Icon */}
                        <Box position="relative" display="inline-flex" mb={2}>
                            <VolunteerActivismIcon
                                sx={{
                                    fontSize: { xs: 50, sm: 70, md: 90 }, // responsive icon size
                                    color: "grey.500",
                                }}
                            />
                            <AddIcon
                                sx={{
                                    fontSize: { xs: 14, sm: 18, md: 22 }, // responsive plus size
                                    color: "white",
                                    position: "absolute",
                                    top: "22%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        </Box>

                        {/* Heading */}
                        <Typography
                            variant="h5"
                            fontWeight={600}
                            color="grey.600"
                            sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" } }}
                        >
                            No Facilities Available
                        </Typography>

                        {/* Subtext */}
                        <Typography
                            variant="body1"
                            color="grey.500"
                            sx={{ fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" }, mt: 1 }}
                        >
                            Currently, we do not provide any additional facilities.
                        </Typography>
                    </Box>
                )}




            </Box>
        </Container>
    );
};

export default Buttons;
