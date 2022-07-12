import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DiscordGuildType } from '../../hooks/user/guild';

type Props = {
  availableGuilds: DiscordGuildType[];
  selectedGuild: string;
  handleGuildChange: (guild_id: string) => void;
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '16px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
    },

    color: '#fff',
    fill: '#fff',
  },
}));

export default function ServerSelect(props: Props) {
  const { availableGuilds, selectedGuild, handleGuildChange } = props;
  const classes = useStyles();

  function onInputChange(value: DiscordGuildType | null): void {
    handleGuildChange(value?.id || selectedGuild);
  }

  return (
    <Autocomplete
      classes={{ inputRoot: classes.root }}
      id="country-select-demo"
      sx={{ width: 300 }}
      options={availableGuilds}
      autoHighlight
      getOptionLabel={(guild: DiscordGuildType) => guild.name}
      defaultValue={
        availableGuilds.find((guild) => guild.id === selectedGuild) ||
        availableGuilds[0]
      }
      onChange={(event, value) => onInputChange(value)}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={
              option.icon !== null
                ? `https://cdn.discordapp.com/icons/${option.id}/${option.icon}.png`
                : 'https://mpng.subpng.com/20180421/fsq/kisspng-discord-computer-icons-logo-user-5adb6eb470b210.1996480115243301644616.jpg'
            }
            srcSet={
              option.icon !== null
                ? `https://cdn.discordapp.com/icons/${option.id}/${option.icon}.png`
                : 'https://mpng.subpng.com/20180421/fsq/kisspng-discord-computer-icons-logo-user-5adb6eb470b210.1996480115243301644616.jpg'
            }
            alt=""
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select a server to edit"
          inputProps={{
            ...params.inputProps,
            // autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
