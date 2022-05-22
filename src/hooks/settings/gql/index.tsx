import { gql } from '@apollo/client';

const GET_GUILD_SETTINGS = gql`
  query GetServerSettings($server_id: String!) {
    getServerSettings(server_id: $server_id) {
      server_id
      random_message_events_enabled
      karma_enabled
      karma_reactions
    }
  }
`;

export const UPDATE_GUILD_SETTINGS = gql`
  mutation UpdateServerSettings($server_id: String!, $form: SettingsInput!) {
    updateServerSettings(server_id: $server_id, form: $form) {
      server_id
      random_message_events_enabled
      karma_enabled
      karma_reactions
    }
  }
`;

export default GET_GUILD_SETTINGS;
