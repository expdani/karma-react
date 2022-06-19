import React, { useCallback, useState } from 'react';
import { useSnackbar as useDefaultSnackbar, OptionsObject } from 'notistack';
import { Theme } from '@mui/material/styles';

import {
  Button,
  Card,
  CardActions,
  Collapse,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import {
  BugReport,
  Close,
  ErrorOutline,
  ExpandMore,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

// has to be this way.
const { SnackbarContent } = require('notistack');

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      minWidth: '344px !important',
    },
  },
  card: {
    width: '100%',
    backgroundColor: theme.palette.error.main,
  },
  typography: {
    fontWeight: 'bold',
    color: '#fff',
  },
  actionRoot: {
    padding: '8px 8px 8px 16px',
    justifyContent: 'space-between',
  },
  icons: {
    marginLeft: 'auto',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
  expand: {
    padding: '8px 8px',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  collapse: {
    padding: 16,
  },
  checkIcon: {
    fontSize: 20,
    color: theme.palette.grey[700],
    paddingRight: 4,
  },
  button: {
    padding: 0,
    textTransform: 'none',
  },
  errorIcon: {
    color: '#fff',
    marginRight: '8px',
  },
  error: {
    fontSize: '14px',
    color: theme.palette.grey[600],
  },
  icon: {
    color: '#fff',
  },
}));

type Props = {
  message: string;
  error?: string;
  key: string;
};

const ErrorSnackbar = React.forwardRef((props: Props, ref) => {
  const { message, error, key } = props;
  const classes = useStyles();
  const { closeSnackbar } = useDefaultSnackbar();

  // destructure the options we need from the extended options
  // object, and provide a default case if we didn't provide any
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => {
    setExpanded((oldExpanded) => !oldExpanded);
  }, []);

  function onHandleClose() {
    closeSnackbar(key);
  }

  return (
    <SnackbarContent className={classes.root} ref={ref}>
      <Card className={classes.card}>
        <CardActions classes={{ root: classes.actionRoot }}>
          <ErrorOutline className={classes.errorIcon} />
          <Typography variant="subtitle2" className={classes.typography}>
            {message}
          </Typography>
          <div className={classes.icons}>
            <IconButton
              aria-label="Show more"
              onClick={handleExpandClick}
              className={classNames(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
            >
              <ExpandMore className={classes.icon} />
            </IconButton>
            <IconButton className={classes.expand} onClick={onHandleClose}>
              <Close className={classes.icon} />
            </IconButton>
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Paper className={classes.collapse}>
            <Typography gutterBottom className={classes.error}>
              {error}
            </Typography>
            <Button size="small" className={classes.button}>
              <BugReport className={classes.checkIcon} />
              Report this error.
            </Button>
          </Paper>
        </Collapse>
      </Card>
    </SnackbarContent>
  );
});

export default ErrorSnackbar;
