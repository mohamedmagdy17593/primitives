import { Box, Divider } from '@mui/material';
import Columns from './components/Columns';
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

      <Divider sx={{ my: 4 }} />

      <Columns gutter={3} cols={3}>
        <Columns.Column>
          <Box sx={{ height: '36px', background: 'red' }}></Box>
        </Columns.Column>
        <Columns.Column>
          <Box sx={{ height: '36px', background: 'red' }}></Box>
        </Columns.Column>
        <Columns.Column span={2}>
          <Box sx={{ height: '36px', background: 'red' }}></Box>
        </Columns.Column>
        <Columns.Column>
          <Box sx={{ height: '36px', background: 'red' }}></Box>
        </Columns.Column>
        <Columns.Column>
          <Box sx={{ height: '36px', background: 'red' }}></Box>
        </Columns.Column>
        <Columns.Column>
          <Box sx={{ height: '36px', background: 'red' }}></Box>
        </Columns.Column>
      </Columns>
    </Box>
  );
}

export default Home;
