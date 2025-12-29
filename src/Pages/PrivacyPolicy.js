import React, { useEffect } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ py: 8, minHeight: '80vh' }}>
            <Container maxWidth="md">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                        Privacy Policy
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
                        WokAI respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        2. Information We Collect
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </Typography>
                    <Typography component="div" variant="body1" sx={{ color: 'text.secondary', pl: 2 }}>
                        <ul>
                            <li>Identity Data includes first name, maiden name, last name, username or similar identifier.</li>
                            <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                            <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
                        </ul>
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        3. How We Use Your Information
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </Typography>
                    <Typography component="div" variant="body1" sx={{ color: 'text.secondary', pl: 2 }}>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        4. Data Security
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'primary.main', fontWeight: 500 }}>
                        5. Contact Us
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        If you have any questions about this privacy policy or our privacy practices, please contact us.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};

export default PrivacyPolicy;
