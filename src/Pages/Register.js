import React, { useState } from "react";
import { Box, Grid, Container, Typography, TextField, Button, Alert, Snackbar, InputAdornment, IconButton, Backdrop, CircularProgress } from "@mui/material";
import img from '../assets/doctorlogo.png';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router";
import { registerUser } from "../Apis/LoginApis";
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
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
        
        // Special handling for phone number field
        if (name === 'phoneNumber') {
            // Only allow numbers and limit to 10 digits
            const numbersOnly = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: numbersOnly
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate phone number is exactly 10 digits
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            setError('Please enter a valid 10-digit mobile number');
            setOpenSnackbar(true);
            return;
        }

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
                fullName: formData.fullName,
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
                        height: "100vh",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <img
                        src={img}
                        style={{ width: '100%', height: '100%' }}
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
                        <Typography gutterBottom variant="body1" sx={{ color: "#8E92B7", mb: 3, fontStyle: 'italic' }}>
                            Register now to explore opportunities and unlock your personalized <br /> experience
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField
                                type="text"
                                label="Full Name"
                                placeholder="Enter your name..."
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                            <TextField
                                type="email"
                                label="Email"
                                placeholder="Enter your email..."
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                            <TextField
                                type='tel'
                                label="Mobile Number"
                                placeholder="Enter your mobile number..."
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
                                disabled={loading}
                                sx={{
                                    backgroundColor: "#368ADD",
                                    color: "white",
                                    mt: 1,
                                    width: { xs: '200px', md: '250px' },
                                    padding: { xs: '8px 16px', md: '10px 20px' },
                                    fontSize: { xs: '14px', md: '16px' },
                                    borderRadius: '8px',
                                    height: { xs: '36px', md: '40px' },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                    '&:hover': {
                                        backgroundColor: "#2d76c4"
                                    }
                                }}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </Button>

                            <Typography
                                variant="body2"
                                align="center"
                                sx={{
                                    color: "#8E92B7",
                                    mt: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    height: '24px'
                                }}
                            >
                                Already have an account?{" "}
                                <Button
                                    variant="text"
                                    disableElevation
                                    onClick={() => navigate("/login")}
                                    sx={{
                                        color: "#368ADD",
                                        textTransform: "none",
                                        fontSize: "14px",
                                        padding: "2px 4px",
                                        minWidth: "auto",
                                        height: '20px',
                                        minHeight: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        '&:hover': {
                                            backgroundColor: "rgba(54, 138, 221, 0.1)",
                                            color: "#2d76c4"
                                        }
                                    }}
                                >
                                    Sign In
                                </Button>
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
