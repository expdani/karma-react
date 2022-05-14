import { gql } from '@apollo/client';

const GET_USER_DISCORD_DATA = gql`
  query GetUserDiscordData {
    getUserDiscordData {
      id
      username
      discriminator
      avatar
      verified
      banner
      banner_color
      accent_color
      premium_type
    }
  }
`;

const GET_DISCORD_OWNER_GUILDS = gql`
  query getUserDiscordServers {
    getUserDiscordServers {
      id
      name
      icon
      owner
      permissions
      features
    }
  }
`;

export { GET_USER_DISCORD_DATA, GET_DISCORD_OWNER_GUILDS };
