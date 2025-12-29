import React, { useEffect } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';

const TermsAndConditions = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ py: 8, minHeight: '80vh' }}>
            <Container maxWidth="md">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                        Terms & Conditions
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Last updated: {new Date().toLocaleDateString()}
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        1. Introduction
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        Welcome to WokAI. These Terms and Conditions govern your use of our website and services. By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        2. Intellectual Property
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        The Service and its original content, features, and functionality are and will remain the exclusive property of WokAI and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of WokAI.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        3. User Responsibilities
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the service.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        4. Limitation of Liability
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        In no event shall WokAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        5. Changes to Terms
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        6. Contact Us
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        If you have any questions about these Terms, please contact us.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};

export default TermsAndConditions;
