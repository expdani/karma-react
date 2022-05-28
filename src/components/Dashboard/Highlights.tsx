import * as React from 'react';
import { makeStyles } from '@mui/styles';
import HighlightCard from './HighlightCard';

const useStyles = makeStyles({
  highlightContainer: {
    display: 'flex',
    marginBottom: '16px',
  },
});

export default function Highlights() {
  const classes = useStyles();
  return (
    <div className={classes.highlightContainer}>
      <HighlightCard />
      <HighlightCard />
      <HighlightCard />
    </div>
  );
}
