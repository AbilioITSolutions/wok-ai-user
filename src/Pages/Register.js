import React from "react";
import { Box, Grid, Container, Typography, TextField, Button } from "@mui/material";
import img from '../ASSETS/doctorlogo.png';
import LockIcon from '@mui/icons-material/Lock';


const Register = () => {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Grid container sx={{ minHeight: "100vh" }}>

                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        backgroundColor: "#368ADD",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 2,
                    }}
                >
                    <img
                        src={img}
                        alt="Login Visual"

                    />
                </Grid>


                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: { xs: 3, md: 6 },
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography gutterBottom variant="h4" sx={{ color: "#000" }}>
                            Get Registered, Get Started
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ color: "#8E92B7", mb: 3 }}>
                            Register now to explore opportunities and unlock your personalized <br /> experience
                        </Typography>

                        <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField
                                type="text"
                                label="Full Name"
                                placeholder="Manideep sai"
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                label="Email"
                                placeholder="rohitreddy@gmail.com"
                                fullWidth
                                required
                            />
                            <TextField
                                type='number'
                                label=" Mobile Number"
                                placeholder="8753356677"
                                fullWidth
                                required
                            />
                            <TextField type="password" label=" Create Password" placeholder="********" fullWidth required />



                            <Button
                                variant="contained"
                                disableElevation
                                fullWidth
                                sx={{ backgroundColor: "#368ADD", color: "white", mt: 1 }}
                            >
                                Register
                            </Button>

                            <Typography variant="body2" align="center" sx={{ color: "#8E92B7", mt: 1 }}>
                                I have a account?{" "}
                                <span style={{ color: "#368ADD", cursor: "pointer" }}>Sign Up</span>
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;
