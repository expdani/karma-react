import { Button, Menu, MenuItem, Fade } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { AUTH_TOKEN } from '../constants';
import Routes from '../routeConfig';
import DiscordAvatar from '../user/DiscordAvatar';

const useStyles = makeStyles({
  username: {
    fontSize: '18px',
    color: 'white',
    textTransform: 'none',
    marginLeft: '8px',
  },
});

export default function UserButton(props: any): any {
  const { data } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): void {
    setAnchorEl(null);
  }

  function handleLogout(): void {
    localStorage.removeItem(AUTH_TOKEN);
    setAnchorEl(null);
    window.location.href = Routes.Dashboard;
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <DiscordAvatar data={data} />
        <div className={classes.username}>
          {data.username}#{data.discriminator}
        </div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
