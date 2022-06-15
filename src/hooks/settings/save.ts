import { ApolloError, useMutation } from '@apollo/client';
import { UPDATE_GUILD_SETTINGS } from './gql';

export type GuildSettingsType = {
  server_id: string;
  random_message_events_enabled: boolean;
  karma_enabled: boolean;
  karma_reactions: boolean;
  created_at: Date;
  updated_at: Date;
};

export type GuildSettingsInputType = {
  random_message_events_enabled?: boolean;
  karma_enabled?: boolean;
  karma_reactions?: boolean;
};

type HookResponse = {
  loading: boolean;
  error: ApolloError | undefined;
  data: GuildSettingsType;
  handleUpdate: (server_id: string, form: GuildSettingsInputType) => void;
};

export default function useUpdateGuildSettings(): HookResponse {
  const [updateGuildSettings, { error, loading, data }] = useMutation(
    UPDATE_GUILD_SETTINGS
  );

  async function handleUpdate(server_id: string, form: GuildSettingsInputType) {
    await updateGuildSettings({
      variables: {
        server_id,
        form: { random_message_events_enabled: 'teast' },
      },
    });
  }

  return {
    handleUpdate,
    data: data?.updateServerSettings,
    error,
    loading,
  };
}
