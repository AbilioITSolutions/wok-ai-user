import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const Loader = ({ open }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 9999 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Loader;
