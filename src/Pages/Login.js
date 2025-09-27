import React from "react";
import { Box, Grid, Container, Typography, TextField, Button } from "@mui/material";
import img from '../Assets/doctorlogo.png';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router";


const Login = () => {
    const navigate = useNavigate();
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
                            Signing Your Account
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ color: "#8E92B7", mb: 3 }}>
                            Welcome back! Sign in to pick up where you left off and continue
                            <br />
                            building your journey with us.
                        </Typography>

                        <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField
                                type="text"
                                label="Email/Number"
                                placeholder="sahasra.a@gmail.com"
                                fullWidth
                                required
                            />
                            <TextField type="password" label="Password" placeholder="********" fullWidth required />

                            <Typography variant="body2" sx={{ color: "red", cursor: "pointer" }} >
                                Forgot Password?
                            </Typography>

                            <Button
                                variant="contained"
                                disableElevation
                                fullWidth
                                sx={{ backgroundColor: "#368ADD", color: "white", mt: 1 }}
                            >
                                Sign In
                            </Button>

                            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                                Signing With OTP
                            </Typography>
                            <Typography variant="body2" align="center" sx={{ color: "#8E92B7", mt: 1 }}>
                                You don’t have an account?{" "}
                                {/* <span style={{ color: "#368ADD", cursor: "pointer" }}>Sign Up</span> */}
                                <Button variant="text" disableElevation onClick={() => navigate("/register")}>Sign Up</Button>
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;
