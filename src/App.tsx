import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CustomCard from './components/CustomCard';
import { Box, Stack } from '@mui/material';
import ScrollFadeContainer from './components/FadeBoxContainer/FadeBoxContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#f5f5f5',
        flex: 1,
        height: '100vh',
        maxWidt: '100vw',
      }}
    >
      <Box
        sx={{
          mb: 2,
          fontSize: 24,
          fontWeight: 'bold',
          backgroundColor: '#1976d2',
          color: '#fff',
          p: 1,
          borderRadius: 1,
        }}
      >
        Hader
      </Box>
      <Box sx={{ height: '100%', maxWidth: '100%' }}>
        <ScrollFadeContainer height={'100%'}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </Box>
        </ScrollFadeContainer>
      </Box>
    </Box>
  );
}

export default App;
