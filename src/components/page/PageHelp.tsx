// @flow
import React from 'react';
import { makeStyles } from '@mui/styles';

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

  return <div className={classes.root}>{helpText}</div>;
}

export default PageHelp;
