import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function PageLoader(): any {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
