import { gql } from '@apollo/client';

const GET_GUILD_SETTINGS = gql`
  query GetServerSettings($server_id: String!) {
    getServerSettings(server_id: $server_id) {
      server_id
      random_message_events_enabled
      karma_enabled
      karma_reactions
      created_at
      updated_at
    }
  }
`;

export default GET_GUILD_SETTINGS;
