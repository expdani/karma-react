import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container } from '@mui/material';

export default function NavBar(props: any) {
  const { handleDrawerOpen, open } = props;

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
      <div style={{ display: 'flex', width: '100%' }}>
        <Typography variant="h6" noWrap component="div" style={{ flex: '1' }}>
          Discord bot
        </Typography>
        <div>
          <Button color="inherit">Login</Button>
        </div>
      </div>
    </Toolbar>
  );
}
