import { Box } from '@mui/material';
import Stack from './components/Stack';

function Home() {
  return (
    <Box sx={{ py: 4, px: 10 }}>
      <Stack gutter={3}>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
      </Stack>
    </Box>
  );
}

export default Home;
