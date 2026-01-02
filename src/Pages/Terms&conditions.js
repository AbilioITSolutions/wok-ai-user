import React, { useEffect } from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const TermsAndConditions = () => {
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
                        Terms & Conditions
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Last updated: {new Date().toLocaleDateString()}
                    </Typography>
                </Box>

                {/* 1. Platform Role */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        1. Platform Role
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        WokAI Healthcare is a digital healthcare discovery and facilitation
                        platform. We do not provide medical advice, diagnosis, or treatment.
                        Our role is limited to enabling patients to discover hospitals,
                        compare indicative surgery pricing, and connect with healthcare
                        providers.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 2. No Medical Liability */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        2. No Medical Liability
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        All medical decisions, treatments, surgeries, and outcomes are solely
                        the responsibility of the hospital or doctor. WokAI Healthcare shall
                        not be liable for any medical negligence, complications, or outcomes.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 3. Pricing Disclaimer */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        3. Pricing Disclaimer
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Prices displayed on the platform are indicative estimates shared by
                        hospitals. Final pricing may vary depending on medical condition,
                        required investigations, and hospital policies.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 4. Hospital Partnerships */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        4. Hospital Partnerships
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Listing of hospitals on WokAI Healthcare does not constitute an
                        endorsement or guarantee of quality, treatment, or outcomes.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 5. Second Opinion */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        5. Second Opinion
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Second opinions provided through the platform are advisory in nature.
                        Patients must exercise independent judgment before making medical
                        decisions.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 6. User Responsibilities */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        6. User Responsibilities
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Users are responsible for providing accurate and truthful
                        information. Any misuse of the platform may result in suspension or
                        termination of access.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 7. Data Privacy */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        7. Data Privacy
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        User data is shared only with explicit user consent and solely for
                        the purpose of healthcare facilitation.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 8. Payments & Refunds */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        8. Payments & Refunds
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Payments and refunds are subject to the respective hospital or
                        service provider’s policies. WokAI Healthcare does not guarantee
                        refunds.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 9. Third-Party Services */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        9. Third-Party Services
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        WokAI Healthcare is not responsible for disruptions, failures, or
                        issues arising from third-party services.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 10. Limitation of Liability */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        10. Limitation of Liability
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        WokAI Healthcare shall not be liable for any indirect, incidental, or
                        consequential damages arising from use of the platform.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 11. Modification of Terms */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        11. Modification of Terms
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        WokAI Healthcare reserves the right to update or modify these terms
                        at any time without prior notice.
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* 12. Governing Law */}
                <Box sx={{ mb: 4.1 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        12. Governing Law
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        These terms shall be governed by and interpreted in accordance with
                        the laws of India. Jurisdiction shall be Hyderabad.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default TermsAndConditions;
