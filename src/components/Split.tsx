import { Box, BoxProps, styled } from '@mui/material';

const fractions = {
  '1/4': '1fr 3fr',
  '1/3': '1fr 2fr',
  '1/2': '1fr 1fr',
  '2/3': '2fr 1fr',
  '3/4': '3fr 1fr',
  'auto-start': 'auto 1fr',
  'auto-end': '1fr auto',
};

const Split = styled(Box)<
  BoxProps & { gutter?: number; fraction?: keyof typeof fractions }
>(({ theme, gutter = 1, fraction = '1/2' }) => {
  return {
    display: 'grid',
    gap: theme.spacing(gutter),
    gridTemplateColumns: fractions[fraction],
  };
});

export default Split;
