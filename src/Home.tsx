import { Box, Divider } from '@mui/material';
import Split from './components/Split';
import Stack from './components/Stack';

function Home() {
  return (
    <Box sx={{ py: 4, px: 10 }}>
      <Stack gutter={3}>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Split gutter={3} fraction="2/3">
        <Box sx={{ height: '36px', background: 'red' }}></Box>
      </Split>
    </Box>
  );
}

export default Home;
