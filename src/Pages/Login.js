import React, { useState } from "react";
import { Box, Grid, Container, Typography, TextField, Button, Alert, Snackbar, InputAdornment, IconButton, Backdrop, CircularProgress, Divider } from "@mui/material";
import img from '../assets/doctorlogo.png';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router";
import { login, sendOTP, verifyOTP } from "../Apis/LoginApis";
import { Visibility, VisibilityOff, Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';


const Login = () => {
    const navigate = useNavigate();
    const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
    const [authMethod, setAuthMethod] = useState('password'); // 'password' or 'otp'
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });
    const [otpData, setOtpData] = useState({
        phoneNumber: '',
        otp: ''
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

    const handleOtpInputChange = (e) => {
        const { name, value } = e.target;
        setOtpData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginMethodChange = (method) => {
        setLoginMethod(method);
        setAuthMethod('password'); // Reset to password when changing login method
        setFormData({ userName: '', password: '' });
        setOtpData({ phoneNumber: '', otp: '' });
        setError('');
    };

    const handleAuthMethodChange = (method) => {
        setAuthMethod(method);
        setError('');

        if (method === 'password') {
            // When switching to password, move phone number to formData if it exists in otpData
            if (otpData.phoneNumber) {
                setFormData(prev => ({
                    ...prev,
                    userName: otpData.phoneNumber,
                    password: ''
                }));
                setOtpData({ phoneNumber: '', otp: '' });
            } else {
                setFormData({ userName: '', password: '' });
            }
        } else {
            // When switching to OTP, move phone number to otpData if it exists in formData
            if (formData.userName && loginMethod === 'phone') {
                setOtpData(prev => ({
                    ...prev,
                    phoneNumber: formData.userName,
                    otp: ''
                }));
                setFormData({ userName: '', password: '' });
            } else {
                setOtpData({ phoneNumber: '', otp: '' });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Get phone number from appropriate field based on auth method
            const phoneNumber = authMethod === 'otp' ? otpData.phoneNumber : formData.userName;

            if (authMethod === 'password') {
                // Password-based login using login API (no OTP required)
                const response = await login({
                    userName: phoneNumber,
                    password: formData.password
                });

                // Store token in localStorage
                if (response.token) {
                    localStorage.setItem('authToken', response.token);
                }

                setSuccess('Login successful! Redirecting...');
                setOpenSnackbar(true);

                // Navigate to dashboard after successful login
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1500);
            } else {
                // OTP-based login using verifyOTP API
                const response = await verifyOTP({
                    userName: phoneNumber,
                    otp: otpData.otp
                });

                // Store token in localStorage
                if (response.token) {
                    localStorage.setItem('authToken', response.token);
                }

                setSuccess('OTP login successful! Redirecting...');
                setOpenSnackbar(true);

                // Navigate to dashboard after successful OTP login
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1500);
            }

        } catch (error) {
            console.error('Login error:', error);
            setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSendOTP = async () => {
        // Get phone number from appropriate field based on auth method
        const phoneNumber = authMethod === 'otp' ? otpData.phoneNumber : formData.userName;

        if (!phoneNumber) {
            setError('Please enter your phone number first');
            setOpenSnackbar(true);
            return;
        }

        setLoading(true);
        setError('');

        try {
            await sendOTP({
                userName: phoneNumber,
                password: 'dummy' // Required by API but not used for sending OTP
            });

            setSuccess('OTP sent to your phone number');
            setOpenSnackbar(true);
        } catch (error) {
            console.error('Send OTP error:', error);
            setError(error.response?.data?.message || 'Failed to send OTP. Please try again.');
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box >
            <Grid container >

                <Grid
                    item
                    size={{ xs: 12, md: 6 }}
                    sx={{
                        backgroundColor: "#368ADD",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        display: { xs: "none", md: "block" },
                    }}
                >
                    <img
                        src={img}
                        alt="Login Visual"
                        width="100%"
                        height="100%"
                        objectFit="cover"
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
                        p: { xs: 3, md: 4 },
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography gutterBottom variant="h4" sx={{ color: "#000" }}>
                            Signing Your Account
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ color: "#8E92B7", mb: 3 ,lineHeight:1.2 ,   fontStyle: 'italic' }}>
                           Register now to explore opportunities and unlock 
                            
                             your personalized experience.
                        </Typography>

                        {/* Login Method Toggle */}
                        <Box sx={{ display: 'flex', mb: 3, border: '1px solid #e0e0e0', borderRadius: '8px'}}>
                            <Button
                                variant={loginMethod === 'email' ? 'contained' : 'text'}
                                onClick={() => handleLoginMethodChange('email')}
                                sx={{
                                    flex: 1,
                                    borderRadius: '8px',
                                    bgcolor: loginMethod === 'email' ? '#368ADD' : 'transparent',
                                    color: loginMethod === 'email' ? 'white' : '#666',
                                    '&:hover': {
                                        bgcolor: loginMethod === 'email' ? '#2d76c4' : '#f5f5f5'
                                    }
                                }}
                                startIcon={<EmailIcon />}
                            >
                                Email
                            </Button>
                            <Button
                                variant={loginMethod === 'phone' ? 'contained' : 'text'}
                                onClick={() => handleLoginMethodChange('phone')}
                                sx={{
                                    flex: 1,
                                    borderRadius: '8px',
                                    bgcolor: loginMethod === 'phone' ? '#368ADD' : 'transparent',
                                    color: loginMethod === 'phone' ? 'white' : '#666',
                                    '&:hover': {
                                        bgcolor: loginMethod === 'phone' ? '#2d76c4' : '#f5f5f5'
                                    }
                                }}
                                startIcon={<PhoneIcon />}
                            >
                                Phone
                            </Button>
                        </Box>

                        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {/* Username Field - Dynamic based on login method and auth method */}
                            <TextField
                                type="tel"
                                label={
                                    loginMethod === 'email'
                                        ? "Email Address"
                                        : authMethod === 'otp'
                                            ? "Phone Number"
                                            : "Phone Number"
                                }
                                placeholder={
                                    loginMethod === 'email'
                                        ? "sahasra.a@gmail.com"
                                        : authMethod === 'otp'
                                            ? "9876543210"
                                            : "9876543210"
                                }
                                name={authMethod === 'otp' ? 'phoneNumber' : 'userName'}
                                value={authMethod === 'otp' ? otpData.phoneNumber : formData.userName}
                                onChange={(e) => {
                                    if (loginMethod === 'email') {
                                        // For email, use normal input change
                                        authMethod === 'otp' ? handleOtpInputChange(e) : handleInputChange(e);
                                    } else {
                                        // For phone, only allow numbers and limit to 10 digits
                                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                        e.target.value = value;
                                        authMethod === 'otp' ? handleOtpInputChange(e) : handleInputChange(e);
                                    }
                                }}
                                fullWidth
                                required
                                inputProps={{
                                    maxLength: loginMethod === 'email' ? undefined : 10,
                                    pattern: loginMethod === 'email' ? undefined : "[0-9]*",
                                    inputMode: loginMethod === 'email' ? 'email' : 'numeric'
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {loginMethod === 'email' ? <EmailIcon color="action" /> : <PhoneIcon color="action" />}
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {/* Password Field - Only for password auth */}
                            {authMethod === 'password' && (
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
                            )}

                            {/* OTP Field - Only for OTP auth */}
                            {authMethod === 'otp' && (
                                <>
                                    <TextField
                                        type="text"
                                        label="Enter OTP"
                                        placeholder="123456"
                                        name="otp"
                                        value={otpData.otp}
                                        onChange={handleOtpInputChange}
                                        fullWidth
                                        required
                                        inputProps={{ maxLength: 6 }}
                                    />
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        onClick={handleSendOTP}
                                        disabled={loading}
                                        sx={{
                                            alignSelf: 'flex-start',
                                            color: "#368ADD",
                                            borderColor: "#368ADD",
                                            '&:hover': {
                                                borderColor: "#2d76c4",
                                                backgroundColor: "#f0f8ff"
                                            }
                                        }}
                                    >
                                        {loading ? 'Sending...' : 'Send OTP'}
                                    </Button>
                                </>
                            )}

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#368ADD",
                                    cursor: "pointer",
                                    textAlign: 'right',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                Forgot Password?
                            </Typography>

                            <Button
                                type="submit"
                                variant="contained"
                                disableElevation
                                disabled={loading}
                                sx={{
                                    backgroundColor: "#368ADD",
                                    color: "white",
                                    mt: 1,
                                    width: "200px",
                                    mx: "auto",
                                    borderRadius: "8px",
                                    display: "block",
                                    '&:hover': {
                                        backgroundColor: "#2d76c4"
                                    }
                                }}
                            >
                                {loading ? 'Signing In...' : authMethod === 'password' ? 'Sign In' : 'Verify OTP'}
                            </Button>

                            {/* Email/Phone OTP Login Option - Available for both email and phone */}
                            {authMethod === 'password' && (
                                <>
                                    <Divider sx={{ my: 2 }}>
                                        <Typography variant="body2" color="text.secondary">OR</Typography>
                                    </Divider>

                                    <Typography
                                        
                                        
                                        
                                        onClick={() => navigate('/otp-login')}
                                        sx={{
                                            borderColor: "#368ADD",
                                            color: "#368ADD",
                                            cursor: "pointer",
                                            width: "100%",
                                           textAlign:'center',
                                            mt: 1,
                                           
                                        }}
                                    >
                                        Sign In With OTP
                                    </Typography>
                                </>
                            )}

                            <Typography variant="body2" align="center" sx={{ color: "#8E92B7", mt: 1 }}>
                                You don't have an account?{" "}
                                <Button variant="text" disableElevation onClick={() => navigate("/register")}>Sign Up</Button>
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
            </Grid>

            {/* Loading Backdrop */}
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
                open={loading}
            >
                <CircularProgress color="inherit" size={60} />
                <Typography variant="h6" color="inherit">
                    Signing you in...
                </Typography>
            </Backdrop>

            {/* Success/Error Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={1500}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
                    {error || success}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Login;
