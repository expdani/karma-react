import * as React from 'react';
import { makeStyles } from '@mui/styles';
import HighlightCard from './HighlightCard';
import { StatisticsType } from '../../hooks/dashboard';
import PieChart from './charts/PieChart';

const useStyles = makeStyles({
  highlightContainer: {
    display: 'flex',
    marginBottom: '16px',
  },
});

type Props = {
  data: StatisticsType;
};

const votePie = {
  labels: ['Upvotes', 'Downvotes'],
  colors: ['#ff4500', '#7193ff'],
};

export default function Charts(props: Props) {
  const { data } = props;

  const classes = useStyles();

  return (
    <div className={classes.highlightContainer}>
      <PieChart
        title="Votes"
        data={[data.total_votes.upvotes, data.total_votes.downvotes]}
        labels={votePie.labels}
        backgroundColor={votePie.colors}
        borderColor={votePie.colors}
        borderWidth={1}
        fill={false}
      />
    </div>
  );
}
