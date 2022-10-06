import { Box, BoxProps, styled } from '@mui/material';

const Stack = styled(Box)<BoxProps & { gutter?: number }>(
  ({ theme, gutter = 1 }) => {
    return {
      display: 'grid',
      gap: theme.spacing(gutter),
    };
  },
);

export default Stack;
