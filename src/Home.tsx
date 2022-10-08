import { Box, Divider } from '@mui/material';
import Columns from './components/Columns';
import Grid from './components/Grid';
import InlineCluster from './components/InlineCluster';
import Split from './components/Split';
import Stack from './components/Stack';
import Inline from './components/Inline';

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

      <Divider sx={{ my: 4 }} />

      <Grid gutter={3} minItemWidth={'200px'}>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <InlineCluster sx={{ p: 2, border: '1px solid black' }} gutter={2}>
        <Box>Home</Box>
        <Box>About</Box>
        <Box>Cool</Box>
        <Box>Name</Box>
      </InlineCluster>

      <Divider sx={{ my: 4 }} />

      <Inline sx={{ p: 2, border: '1px solid black' }} gutter={2}>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
        <Box sx={{ height: '36px', background: 'red' }}></Box>
      </Inline>
    </Box>
  );
}

export default Home;
