import { ApolloError, useQuery } from '@apollo/client';
import GET_GUILD_SETTINGS from './gql';

export type GuildSettingsType = {
  server_id: string;
  random_message_events_enabled: boolean;
  karma_enabled: boolean;
  karma_reactions: boolean;
  created_at: Date;
  updated_at: Date;
};

type HookResponse = {
  loading: boolean;
  error: ApolloError | undefined;
  data: GuildSettingsType;
  refetch: () => void;
};

export default function useGetGuildSettings(
  server_id: string | null
): HookResponse {
  const { data, error, loading, refetch } = useQuery(GET_GUILD_SETTINGS, {
    variables: { server_id },
  });

  return {
    data: data?.getServerSettings,
    error,
    loading,
    refetch,
  };
}
