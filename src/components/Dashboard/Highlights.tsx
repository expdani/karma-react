import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import HighlightCard from './HighlightCard';
import { HighlightsType } from '../../hooks/dashboard';

const useStyles = makeStyles((theme: Theme) => ({
  highlightContainer: {
    display: 'flex',
    marginBottom: '16px',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

type Props = {
  data: HighlightsType;
};

export default function Highlights(props: Props) {
  const { data } = props;

  const classes = useStyles();
  return (
    <div className={classes.highlightContainer}>
      <HighlightCard
        title="Active sessions"
        primaryNumber={data.sessions.total}
        secondaryNumber={data.sessions.week}
        secondaryText="in the last 7 days"
      />
      <HighlightCard
        title="Total votes"
        primaryNumber={data.total_votes.total}
        secondaryNumber={data.total_votes.week}
        secondaryText="in the last 7 days"
      />
      <HighlightCard
        title="Total messages with karma reactions"
        primaryNumber={data.total_messages.total}
        secondaryNumber={data.total_messages.week}
        secondaryText="in the last 7 days"
      />
    </div>
  );
}
