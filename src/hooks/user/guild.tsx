import { ApolloError, useQuery } from '@apollo/client';
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
};

export default function useUserDiscordOwnerGuilds(): HookResponse {
  const { data, error, loading } = useQuery(GET_DISCORD_OWNER_GUILDS);

  return {
    data: data?.getUserDiscordServers,
    error,
    loading,
  };
}
