import { gql } from '@apollo/client';

const DISCORD_LOGIN = gql`
  mutation DiscordLogin($code: String!) {
    discordLogin(code: $code) {
      access_token
      user_id
      discord_type
      discord_token
      created_at
    }
  }
`;

export default DISCORD_LOGIN;
