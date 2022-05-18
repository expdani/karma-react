import { ApolloError, NetworkStatus, useQuery } from '@apollo/client';
import { GET_DISCORD_OWNER_GUILDS } from './gql';

export type DiscordGuildType = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: JSON;
};

type HookResponse = {
  loading: boolean;
  error: ApolloError | undefined;
  data: [DiscordGuildType];
  networkStatus: NetworkStatus;
};

export default function useUserDiscordOwnerGuilds(): HookResponse {
  const { data, error, loading, networkStatus } = useQuery(
    GET_DISCORD_OWNER_GUILDS,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  return {
    data: data?.getUserDiscordServers,
    error,
    loading,
    networkStatus,
  };
}
