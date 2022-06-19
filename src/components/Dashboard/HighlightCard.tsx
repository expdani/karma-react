import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  highlight: {
    marginRight: '16px',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '8px',
    },
  },
}));

type Props = {
  primaryNumber: string | number;
  secondaryNumber?: string | number;
  secondaryText?: string;
  title: string;
};

export default function HighlightCard(props: Props) {
  const { primaryNumber, title, secondaryNumber, secondaryText } = props;
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
      <Box sx={{ color: 'text.secondary' }}>{title}</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        {primaryNumber}
      </Box>
      {secondaryNumber !== null ? (
        <>
          <Box
            sx={{
              display: 'inline',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 14,
            }}
          >
            {secondaryNumber}
          </Box>
          <Box
            sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}
          >
            {secondaryText}
          </Box>
        </>
      ) : null}
    </Box>
  );
}
