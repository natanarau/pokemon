import React from 'react';
import { Box, BoxProps } from 'components/simple/Box';

export type ContainerType = BoxProps & {
  children: React.ReactNode;
};

export const Container = ({ children, ...rest }: ContainerType) => (
  <Box {...rest} data-testid="Container" maxWidth="container.lg" margin="auto">
    {children}
  </Box>
);
