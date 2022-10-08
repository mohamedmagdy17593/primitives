import { Box, BoxProps, styled } from '@mui/material';
import { Property } from 'csstype';

export type InlineClusterProps = BoxProps & {
  gutter?: number;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
};

const InlineCluster = styled(Box)<InlineClusterProps>(
  ({ theme, gutter = 1, justifyContent, alignItems }) => {
    return {
      '--gutter': theme.spacing(gutter),
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--gutter)',
      justifyContent: justifyContent,
      alignItems: alignItems,
    };
  },
);

export default InlineCluster;
