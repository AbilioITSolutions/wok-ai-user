import React, { useState, useRef } from "react";
import { Box, Grid, Container, Typography, TextField, Button, Alert, Snackbar, InputAdornment, IconButton, Backdrop, CircularProgress } from "@mui/material";
import img from '../ASSETS/doctorlogo.png';
import { useNavigate } from "react-router";
import { sendOTP, verifyOTP } from "../Apis/LoginApis";
import { Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';

const OtpLogin = () => {
    const navigate = useNavigate();
    const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
    const [formData, setFormData] = useState({
        userName: ''
    });
    const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    // Refs for OTP input boxes
    const otpRefs = useRef([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOtpDigitChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtpDigits = [...otpDigits];
            newOtpDigits[index] = value;

            setOtpDigits(newOtpDigits);

            // Auto-focus next input
            if (value && index < 5) {
                otpRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
            // Focus previous input on backspace if current is empty
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);

        if (/^\d{1,6}$/.test(pastedData)) {
            const newOtpDigits = pastedData.split('').concat(['', '', '', '', '', '']).slice(0, 6);
            setOtpDigits(newOtpDigits);

            // Focus appropriate input
            const focusIndex = Math.min(pastedData.length, 5);
            setTimeout(() => {
                otpRefs.current[focusIndex]?.focus();
            }, 0);
        }
    };

    const handleLoginMethodChange = (method) => {
        setLoginMethod(method);
        setFormData({ userName: '' });
        setOtpDigits(['', '', '', '', '', '']);
        setError('');
        setOtpSent(false);
    };

    const handleSendOTP = async () => {
        if (!formData.userName) {
            setError(`Please enter your ${loginMethod === 'email' ? 'email' : 'phone number'} first`);
            setOpenSnackbar(true);
            return;
        }

        setLoading(true);
        setError('');

        try {
            await sendOTP({
                userName: formData.userName,
                password: 'dummy'
            });

            setOtpSent(true);
            setSuccess('OTP sent successfully');
            setOpenSnackbar(true);
        } catch (error) {
            console.error('Send OTP error:', error);
            setError(error.response?.data?.message || 'Failed to send OTP. Please try again.');
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Combine OTP digits
        const otp = otpDigits.join('');

        if (!otp || otp.length !== 6) {
            setError('Please enter complete 6-digit OTP');
            setOpenSnackbar(true);
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await verifyOTP({
                userName: formData.userName,
                otp: otp
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

        } catch (error) {
            console.error('Login error:', error);
            setError(error.response?.data?.message || 'Login failed. Please check your OTP.');
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
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
                        height: "100vh",
                        alignItems: "center",
                        p: 2,
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
                        p: { xs: 3, md: 6 },
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography gutterBottom variant="h4" sx={{ color: "#000" }}>
                            OTP Login
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{ color: "#8E92B7", mb: 3, fontStyle: 'italic'  }}>
                            Enter your {loginMethod === 'email' ? 'email address' : 'phone number'} to receive an OTP for login
                        </Typography>

                        {/* Login Method Toggle - Hide after OTP is sent */}
                        {!otpSent && (
                            <Box sx={{ display: 'flex', mb: 3, border: '1px solid #e0e0e0', borderRadius: 1  , mb:7}}>
                                <Button
                                    variant={loginMethod === 'email' ? 'contained' : 'text'}
                                    onClick={() => handleLoginMethodChange('email')}
                                    sx={{
                                        flex: 1,
                                        borderRadius: 0,
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
                                        borderRadius: 0,
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
                        )}

                        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField
                                type={loginMethod === 'email' ? 'email' : 'tel'}
                                label={loginMethod === 'email' ? "Email Address" : "Phone Number"}
                                placeholder={loginMethod === 'email' ? "sahasra.a@gmail.com" : "9876543210"}
                                name="userName"
                                value={formData.userName}
                                onChange={(e) => {
                                    if (loginMethod === 'email') {
                                        // For email, use normal input change
                                        handleInputChange(e);
                                    } else {
                                        // For phone, only allow numbers and limit to 10 digits
                                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                        e.target.value = value;
                                        handleInputChange(e);
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

                            {!otpSent ? (
                                <Button
                                    type="button"
                                    variant="contained"
                                    onClick={handleSendOTP}
                                    disabled={loading}
                                    sx={{
                                        color: "#fff",
                                        borderColor: "#368ADD",
                                        backgroundColor: "#368ADD",
                                        width: { xs: '180px', md: '200px' },
                                        padding: { xs: '10px 16px', md: '12px 20px' },
                                        fontSize: { xs: '14px', md: '16px' },
                                        borderRadius: '8px',
                                        height: { xs: '36px', md: '40px' },
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        mx: 'auto',
                                        '&:hover': {
                                            backgroundColor: '#2d76c4',
                                        }

                                    }}
                                >
                                    {loading ? 'Sending...' : 'Send OTP'}
                                </Button>
                            ) : (
                                <>
                                    {/* OTP Input Section */}
                                    <Typography variant="body2" align="center" sx={{ mt: 2, color: "#8E92B7" }}>
                                        Enter the 6-digit OTP sent to your {loginMethod === 'email' ? 'email' : 'phone'}
                                    </Typography>

                                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', my: 2 }}>
                                        {otpDigits.map((digit, index) => (
                                            <TextField
                                                key={index}
                                                inputRef={(el) => (otpRefs.current[index] = el)}
                                                type="text"
                                                value={digit}
                                                onChange={(e) => handleOtpDigitChange(index, e.target.value)}
                                                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                onPaste={index === 0 ? handleOtpPaste : undefined}
                                                variant="outlined"
                                                sx={{
                                                    width: 70,
                                                    height: {md:130, xs:80},
                                                    '& .MuiInputBase-input': {
                                                        textAlign: 'center',
                                                        fontSize: '2.5rem',
                                                        fontWeight: 'bold',
                                                        padding: 0
                                                    }
                                                }}
                                                inputProps={{
                                                    maxLength: 1,
                                                    style: { textAlign: 'center' }
                                                }}
                                            />
                                        ))}
                                    </Box>

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
                                        {loading ? 'Verifying...' : 'Login with OTP'}
                                    </Button>
                                </>
                            )}

                            <Typography variant="body2" align="center" sx={{ color: "#8E92B7", mt: 2 }}>
                                Back to{" "}
                                <Button variant="text" disableElevation onClick={() => navigate("/login")}>Password Login</Button>
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
                    {otpSent ? 'Verifying OTP...' : 'Sending OTP...'}
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

export default OtpLogin;
