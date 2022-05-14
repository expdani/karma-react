/* eslint-disable react-hooks/exhaustive-deps */
import {
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import useCountDown from 'react-countdown-hook';
import { useSearchParams } from 'react-router-dom';
import useDiscordLogin from '../../hooks/login/discordLogin';
import { AUTH_TOKEN } from '../constants';
import Retry from './retry';

const useStyles = makeStyles({
  loginText: {
    fontSize: '20px',
    color: 'black',
  },

  redirectText: {
    fontSize: '18px',
  },
});

const initialTime = 5 * 1000; // 5 seconds
const interval = 1000; // interval to change remaining time amount, defaults to 1000

export default function Callback(): any {
  const classes = useStyles();
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const code = searchParams.get('code');
  const [timeLeft, { start }] = useCountDown(initialTime, interval);
  const { handleLogin, loading, error, data } = useDiscordLogin();

  function handleRedirect(): void {
    window.location.href = '/';
  }

  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem(AUTH_TOKEN, data?.access_token);
      start();
      setOpen(true);
    } else handleLogin(code);
  }, [data]);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{`Submission error! ${error.message}`}</h1>;

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography className={classes.loginText}>
              You have successfully logged in.
            </Typography>
            <Typography className={classes.redirectText}>
              You will be redirected in {(timeLeft / 1000).toFixed(0)} seconds.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRedirect}>Redirect</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
