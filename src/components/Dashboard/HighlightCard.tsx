import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  highlight: {
    marginRight: '16px',
    width: '100%',
  },
});

export default function HighlightCard() {
  const classes = useStyles();

  return (
    <Box
      className={classes.highlight}
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        98.3 K
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'bold',
          mx: 0.5,
          fontSize: 14,
        }}
      >
        +18.77%
      </Box>
      <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
        vs. last week
      </Box>
    </Box>
  );
}
