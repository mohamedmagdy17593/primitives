import { Box, BoxProps, styled } from '@mui/material';
import { Property } from 'csstype';

const InlineCluster = styled(Box)<
  BoxProps & {
    gutter?: number;
    justifyContent?: Property.JustifyContent;
    alignItems?: Property.AlignItems;
  }
>(({ theme, gutter = 1, justifyContent, alignItems }) => {
  return {
    '--gutter': theme.spacing(gutter),
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--gutter)',
    justifyContent: justifyContent,
    alignItems: alignItems,
  };
});

export default InlineCluster;
