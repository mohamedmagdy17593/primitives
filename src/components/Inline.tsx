import { styled } from '@mui/material';
import InlineCluster, { InlineClusterProps } from './InlineCluster';

const Inline = styled(InlineCluster)<
  InlineClusterProps & { stretch?: 'all' | 'start' | 'end' }
>(({ theme, stretch = 'all' }) => {
  let stretchMap = {
    all: { '> *': { flex: '1' } },
    start: { '> :first-child': { flex: '1' } },
    end: { '> :last-child': { flex: '1' } },
  };

  return [
    stretchMap[stretch],
    {
      '> *': {
        minWidth: 'fit-content',
        flexBasis: 'calc((400px - (100% - var(--gutter))) * 999)',
      },
    },
  ];
});

export default Inline;
