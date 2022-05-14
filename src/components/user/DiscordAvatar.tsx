import { Avatar } from '@mui/material';
import React from 'react';

export default function DiscordAvatar(props: any): any {
  const { data } = props;
  const src =
    data.avatar && data.id
      ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
      : 'https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png';

  return <Avatar alt="Remy Sharp" src={src} />;
}
