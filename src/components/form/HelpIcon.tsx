// @flow
import React from 'react';
import { Icon, Theme, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import iconKeys from '../icon/iconKeys';

type Props = {
  tooltip: string;
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'bottom-start'
    | 'left-start'
    | 'right-start';
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-block',
    // '&:hover': {
    //   color: theme.palette.secondary.main,
    // },
  },
  tooltip: {
    maxWidth: 200,
  },
  infoIcon: {
    fontSize: 'inherit',
    marginLeft: '0.3em',
    // Makes tooltips appear
    pointerEvents: 'auto',
  },
}));

/**
 * HelpIcon
 */
export default function HelpIcon(props: Props): any {
  const { tooltip, placement = 'top' } = props;
  const classes = useStyles();
  let node = <Icon className={classes.infoIcon}>{iconKeys.Help}</Icon>;
  if (tooltip) {
    node = (
      <div className={classes.root}>
        <Tooltip
          title={tooltip}
          classes={{ tooltip: classes.tooltip }}
          placement={placement}
        >
          <div>{node}</div>
        </Tooltip>
      </div>
    );
  }
  return node;
}
