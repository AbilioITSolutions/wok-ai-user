import React, { useEffect } from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ py: 8, minHeight: "80vh" }}>
            <Container maxWidth="md">
                {/* Header */}
                <Box sx={{ mb: 6, textAlign: "center" }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                        Privacy Policy
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Last updated: {new Date().toLocaleDateString()}
                    </Typography>
                </Box>

                {/* 1. Introduction */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        1. Introduction
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        WokAI Healthcare respects your privacy and is committed to protecting
                        your personal information. This Privacy Policy explains how we
                        collect, use, store, and protect your data when you use our
                        healthcare discovery and facilitation platform.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 2. Information We Collect */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        2. Information We Collect
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        We may collect the following types of information:
                    </Typography>
                    <Typography component="div" variant="body1" sx={{ color: "text.secondary", pl: 2 }}>
                        <ul>
                            <li>Personal details such as name, phone number, and email address</li>
                            <li>Health-related information shared voluntarily by the user</li>
                            <li>Technical data such as IP address, browser type, and device information</li>
                        </ul>
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 3. How We Use Information */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        3. How We Use Your Information
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Your information is used only to facilitate hospital discovery,
                        connect you with healthcare providers, improve our services, and
                        communicate important updates related to your requests.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 4. Data Sharing */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        4. Data Sharing
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        We share user data only with hospitals, doctors, or service providers
                        after receiving user consent and strictly for healthcare
                        facilitation purposes. We do not sell personal data to third parties.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 5. Payments & No Refund Policy */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        5. Payments & No Refund Policy
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Any payments made on the WokAI Healthcare platform are strictly
                        non-refundable. Once a payment is completed, no cancellations,
                        chargebacks, or refunds will be provided under any circumstances.
                        Users are advised to review all details carefully before making a
                        payment.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 6. Data Security */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        6. Data Security
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        We implement reasonable security measures to protect your personal
                        data from unauthorized access, misuse, or disclosure. However, no
                        online platform can guarantee complete security.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 7. Contact */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        7. Contact Us
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        If you have any questions about this Privacy Policy or our data
                        practices, please contact WokAI Healthcare through our official
                        support channels.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default PrivacyPolicy;
