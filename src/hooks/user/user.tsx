import { ApolloError, useQuery } from '@apollo/client';
import { AUTH_TOKEN } from '../../components/constants';
import { GET_USER_DISCORD_DATA } from './gql';

export type DiscordUserType = {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  verified: boolean;
  banner: string;
  banner_color: string;
  accent_color: string;
  premium_type: number;
};

type HookResponse = {
  loading: boolean;
  error: ApolloError | undefined;
  data: DiscordUserType;
};

export default function useUserDiscordData(): HookResponse {
  const { data, error, loading } = useQuery(GET_USER_DISCORD_DATA);

  if (error?.message) localStorage.removeItem(AUTH_TOKEN);

  return {
    data: data?.getUserDiscordData,
    error,
    loading,
  };
}
