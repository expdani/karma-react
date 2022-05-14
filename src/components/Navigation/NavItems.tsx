import * as React from 'react';
import { Icon } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import navItems, { NavItem } from './items';

export default function NavItems(props: any) {
  const { open } = props;

  return (
    <>
      {navItems.map((item: NavItem) => {
        const { icon, title, route } = item;

        return (
          <ListItemButton
            key={title}
            href={route}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            component="a"
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        );
      })}
    </>
  );
}
