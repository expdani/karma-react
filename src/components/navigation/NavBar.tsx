import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from './LoginButton';
import UserButton from './UserButton';

export default function NavBar(props: any) {
  const { handleDrawerOpen, open, data } = props;

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <Typography variant="h6" noWrap component="div" style={{ flex: '1' }}>
          Karma
        </Typography>
        <>{data ? <UserButton data={data} /> : <LoginButton />}</>
      </div>
    </Toolbar>
  );
}
