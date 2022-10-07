import { Box, BoxProps, styled } from '@mui/material';

const Columns = styled(Box)<BoxProps & { gutter?: number; cols?: number }>(
  ({ theme, gutter = 1, cols = 1 }) => {
    return {
      '--columns': cols,
      display: 'grid',
      gap: theme.spacing(gutter),
      gridTemplateColumns: `repeat(var(--columns), 1fr)`,
    };
  },
);

const Column = styled(Box)<BoxProps & { span?: number }>(({ span = 1 }) => {
  return {
    gridColumn: `span min(${span}, var(--columns))`,
  };
});

export default Object.assign(Columns, { Column });
