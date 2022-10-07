import { Box, BoxProps, styled } from '@mui/material';

const Grid = styled(Box)<BoxProps & { gutter?: number; minItemWidth?: string }>(
  ({ theme, gutter = 1, minItemWidth = '320px' }) => {
    return {
      display: 'grid',
      gap: theme.spacing(gutter),
      gridTemplateColumns: `repeat(auto-fit, minmax(min(${minItemWidth}, 100%) , 1fr))`,
    };
  },
);

export default Grid;
