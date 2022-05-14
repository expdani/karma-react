import { useQuery } from '@apollo/client';
import { GET_DISCORD_OWNER_GUILDS } from './gql';

// export type SessionType = {
//   access_token: string;
//   user_id: string;
//   discord_type: string;
//   discord_token: string;
//   created_at: string;
// };

// type HookResponse = {
//   loading: boolean;
//   error: any;
//   handleDiscordLogin: (code: string) => any;
// };

export default function useUserDiscordOwnerServers(): any {
  const { data, error, loading } = useQuery(GET_DISCORD_OWNER_GUILDS);

  return {
    data: data?.getUserDiscordServers,
    error,
    loading,
  };
}
