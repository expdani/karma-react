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
import { AUTH_TOKEN, SESSION_TOKEN } from '../constants';
import Dashboard from '../dashboard';
import PageLoader from '../page/PageLoader';
import Routes from '../routeConfig';

const useStyles = makeStyles({
  loginText: {
    fontSize: '20px',
    color: 'black',
  },

  redirectText: {
    fontSize: '18px',
  },
});

const initialTime = 4 * 1000; // seconds
const interval = 1000; // interval to change remaining time amount, defaults to 1000

export default function Callback(): React.ReactElement {
  const classes = useStyles();
  const [searchParams] = useSearchParams();
  const [started, setStarted] = useState(false);
  const code = searchParams.get('code');
  const [timeLeft, { start }] = useCountDown(initialTime, interval);
  const { handleLogin, loading, error, data } = useDiscordLogin();

  function handleRedirect(): void {
    window.location.href = Routes.Dashboard;
  }

  function handleLogout(): void {
    localStorage.removeItem(AUTH_TOKEN);
    window.location.href = Routes.Home;
  }

  function retryLogin(): void {
    localStorage.removeItem(AUTH_TOKEN);
    window.location.href = Routes.Login;
  }

  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem(AUTH_TOKEN, data?.access_token);
      start();
      setStarted(true);
    } else if (code) handleLogin(code);
  }, [data]);

  useEffect(() => {
    if (timeLeft === 0 && started) {
      handleRedirect();
    }
  }, [timeLeft]);

  function SuccessfulLogin(): React.ReactElement {
    return (
      <>
        <Typography className={classes.loginText}>
          You have successfully logged in.
        </Typography>
        <Typography className={classes.redirectText}>
          You will be redirected in {(timeLeft / 1000).toFixed(0)} seconds.
        </Typography>
      </>
    );
  }

  function ErrorLogin(): React.ReactElement {
    return (
      <>
        <Typography className={classes.loginText}>
          Something went wrong while logging in..
        </Typography>
        <Typography className={classes.redirectText}>
          {SESSION_TOKEN ? 'Please try again or logout.' : 'Please try again.'}
        </Typography>
      </>
    );
  }

  return (
    <>
      <Dashboard />
      <Dialog
        open={!!true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ backdropFilter: 'blur(3px)' }}
      >
        {!loading ? (
          <>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {error ? <ErrorLogin /> : <SuccessfulLogin />}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {error ? (
                <>
                  {SESSION_TOKEN ? (
                    <Button onClick={handleLogout}>Logout</Button>
                  ) : (
                    <Button onClick={handleRedirect}>Cancel</Button>
                  )}
                  <Button onClick={retryLogin}>Retry</Button>
                </>
              ) : (
                <Button onClick={handleRedirect}>Redirect</Button>
              )}
            </DialogActions>
          </>
        ) : (
          <PageLoader />
        )}
      </Dialog>
    </>
  );
}
