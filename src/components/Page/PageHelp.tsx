// @flow
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

type Props = {
  helpText: any;
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '32px',
    color: 'black',
  },
}));

function PageHelp(props: Props): any {
  const { helpText } = props;
  const classes = useStyles();

  return (
    <Typography
      component="p"
      color="text.secondary"
      gutterBottom
      className={classes.root}
    >
      {helpText}
    </Typography>
  );
}

export default PageHelp;
