import { Box } from '@mui/material';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', p: 0, m: 0 }}>
      <Home />
    </Box>

  );
}

export default App;