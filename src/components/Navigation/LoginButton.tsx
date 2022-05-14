import { Button } from '@mui/material';
import React from 'react';
import Routes from '../routeConfig';

export default function LoginButton(props: any): any {
  return (
    <>
      <Button color="inherit" component="a" href={Routes.Login}>
        Login
      </Button>
    </>
  );
}
