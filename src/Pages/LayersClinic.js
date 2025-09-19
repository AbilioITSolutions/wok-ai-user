// import React from "react";
// import {
//     Card, Box,
//     Avatar,
//     Typography,
//     IconButton,
//     Stack,
//     Container,
// } from "@mui/material";
// import layersClinicImg from "../Assets/layers.png";
// import PhoneIcon from "@mui/icons-material/Phone";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import BusinessIcon from "@mui/icons-material/Business";
// import HotelIcon from "@mui/icons-material/Hotel";

// export default function LayersClinic() {
//     return (

//         <Container maxWidth="lg">
//             <Card
//                 variant="outlined"
//                 sx={{
//                     borderRadius: 3,
//                     p: 5,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                 }}
//             >
//                 {/* Left section with avatar + details */}
//                 <Box display="flex" alignItems="center" gap={2}>
//                     <Avatar
//                         src={layersClinicImg} // replace with your clinic image path
//                         alt="Layers Clinic"
//                         sx={{ width: 80, height: 80, borderRadius: 2 }}
//                     />
//                     <Box>
//                         <Typography variant="h6" color="primary">
//                             Layers Clinic
//                         </Typography>
//                         <Stack direction="row" alignItems="center" spacing={0.5}>
//                             <LocationOnIcon fontSize="small" color="action" />
//                             <Typography variant="body2" color="text.secondary">
//                                 Mathura Road, Sarita Vihar, Hyderabad – 500081
//                             </Typography>
//                         </Stack>

//                         {/* Meta info row */}
//                         <Stack direction="row" spacing={2} mt={1} color="text.secondary">
//                             <Typography variant="body2">+91 11 2692 5858</Typography>
//                             <Stack direction="row" spacing={0.5} alignItems="center">
//                                 <BusinessIcon fontSize="small" />
//                                 <Typography variant="body2">Est. 1983</Typography>
//                             </Stack>
//                             <Stack direction="row" spacing={0.5} alignItems="center">
//                                 <HotelIcon fontSize="small" />
//                                 <Typography variant="body2">15 beds</Typography>
//                             </Stack>
//                         </Stack>
//                     </Box>
//                 </Box>

//                 {/* Right section with action buttons */}
//                 <Stack direction="row" spacing={1}>
//                     <IconButton color="default" sx={{ border: "1px solid #ccc" }}>
//                         <PhoneIcon />
//                     </IconButton>
//                     <IconButton color="default" sx={{ border: "1px solid #ccc" }}>
//                         <ChatBubbleOutlineIcon />
//                     </IconButton>
//                 </Stack>
//             </Card>

//         </Container>

//     );
// }



import React from "react";
import {
    Card,
    Box,
    Avatar,
    Typography,
    IconButton,
    Stack,
    Container,
    Grid,
} from "@mui/material";
import layersClinicImg from "../Assets/layers.png";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import HotelIcon from "@mui/icons-material/Hotel";

export default function LayersClinic() {
    return (
        <Container maxWidth="lg">
            <Card
                variant="outlined"
                sx={{
                    borderRadius: 3,
                    p: { xs: 1.5, md: 4 }
                }}
            >
                <Grid container spacing={3} alignItems="center">
                    {/* Left Section */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Avatar
                                src={layersClinicImg}
                                alt="Layers Clinic"
                                sx={{ width: 80, height: 80, borderRadius: 2 }}
                            />
                            <Box>
                                {/* Title */}
                                <Typography variant="h6" color="primary">
                                    Layers Clinic
                                </Typography>

                                {/* Address */}
                                <Stack direction="row" alignItems="center" spacing={0.5}>
                                    <LocationOnIcon fontSize="small" color="action" />
                                    <Typography variant="body2" color="text.secondary">
                                        Mathura Road, Sarita Vihar, Hyderabad – 500081
                                    </Typography>
                                </Stack>

                                {/* Meta info */}
                                <Stack
                                    direction={{ xs: "column", sm: "row" }} // column on mobile, row on larger screens
                                    spacing={2}
                                    mt={1}
                                    color="text.secondary"
                                    flexWrap="wrap" // allow wrapping if needed
                                >
                                    {/* Phone */}
                                    <Typography variant="body2">+91 11 2692 5858</Typography>

                                    {/* Established */}
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <BusinessIcon fontSize="small" />
                                        <Typography variant="body2">Est. 1983</Typography>
                                    </Stack>

                                    {/* Beds */}
                                    <Stack direction="row" spacing={0.5} alignItems="center">
                                        <HotelIcon fontSize="small" />
                                        <Typography variant="body2">15 beds</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Section */}
                    <Grid
                        item
                        xs={12}
                        md={3}
                        size={{ xs: 12, md: 3 }}
                        display="flex"
                        justifyContent={{ xs: "flex-start", md: "flex-end" }}
                    >
                        <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
                            <IconButton color="default" sx={{ border: "1px solid #ccc" }}>
                                <PhoneIcon />
                            </IconButton>
                            <IconButton color="default" sx={{ border: "1px solid #ccc" }}>
                                <ChatBubbleOutlineIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}

