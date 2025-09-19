import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const MyBilling = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 9 }}>
          <Box
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              backgroundColor: '#fff',
              p: 6,
              textAlign: 'center',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ReceiptLongIcon
              sx={{ fontSize: 60, color: '#c2c2c2', mb: 2 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              You don’t have bill’s
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Nothing to display here. Check back later for updates.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyBilling;

