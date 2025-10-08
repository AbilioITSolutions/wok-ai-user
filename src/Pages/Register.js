import React, { useState } from "react";
import { Box, Grid, Container, Typography, TextField, Button, Alert, Snackbar, InputAdornment, IconButton, Backdrop, CircularProgress } from "@mui/material";
import img from '../ASSETS/doctorlogo.png';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router";
import { registerUser } from "../Apis/LoginApis";
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setOpenSnackbar(true);
            return;
        }

        setLoading(true);
        setError('');

        try {
            const registrationData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                password: formData.password // Only send password, not confirmPassword
            };

            const response = await registerUser(registrationData);
            setSuccess('Registration successful! Please check your email for verification.');
            setOpenSnackbar(true);

            // Navigate to login after successful registration
            setTimeout(() => {
                navigate('/login');
            }, 200);

        } catch (error) {
            console.error('Registration error:', error);
            setError(error.response?.data?.message || 'Registration failed. Please try again.');
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Grid container sx={{ minHeight: "100vh" }}>

                <Grid
                    item
                    size={{ xs: 12, md: 6 }}
                    sx={{
                        backgroundColor: "#368ADD",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 2,
                        minHeight: "100vh",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <img
                        src={img}
                        alt="Login Visual"
                    />
                </Grid>


                <Grid
                    item
                    size={{ xs: 12, md: 6 }}
                    sx={{
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: { xs: 3, md: 1 },
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography gutterBottom variant="h4" sx={{ color: "#000" }}>
                            Get Registered, Get Started
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ color: "#8E92B7", mb: 3 }}>
                            Register now to explore opportunities and unlock your personalized <br /> experience
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField
                                type="text"
                                label="First Name"
                                placeholder="John"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                label="Last Name"
                                placeholder="Doe"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                            <TextField
                                type="email"
                                label="Email"
                                placeholder="rohitreddy@gmail.com"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                            <TextField
                                type='tel'
                                label="Mobile Number"
                                placeholder="8753356677"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                            <TextField
                                type={showPassword ? 'text' : 'password'}
                                label="Password"
                                placeholder="********"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleTogglePasswordVisibility}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                type={showPassword ? 'text' : 'password'}
                                label="Confirm Password"
                                placeholder="********"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                error={formData.confirmPassword !== '' && formData.password !== formData.confirmPassword}
                                helperText={formData.confirmPassword !== '' && formData.password !== formData.confirmPassword ? 'Passwords do not match' : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle confirm password visibility"
                                                onClick={handleTogglePasswordVisibility}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                disableElevation
                                fullWidth
                                disabled={loading}
                                sx={{
                                    backgroundColor: "#368ADD",
                                    color: "white",
                                    mt: 1,
                                    '&:hover': {
                                        backgroundColor: "#2d76c4"
                                    }
                                }}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </Button>

                            <Typography variant="body2" align="center" sx={{ color: "#8E92B7", mt: 1 }}>
                                Already have an account?{" "}
                                <Button variant="text" disableElevation onClick={() => navigate("/login")}>Sign In</Button>
                            </Typography>
                        </Box>
                    </Container>
                </Grid>

            </Grid>

            {/* Loading Backdrop */}
            <Backdrop
                sx={{
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
                open={loading}
            >
                <CircularProgress color="inherit" size={60} />
                <Typography variant="h6" color="inherit">
                    Registering your account...
                </Typography>
            </Backdrop>

            {/* Success/Error Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
                    {error || success}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Register;
