import { useQuery } from '@apollo/client';
import { GET_USER_DISCORD_DATA } from './gql';

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

export default function useUserDiscordData(): any {
  const { data, error, loading } = useQuery(GET_USER_DISCORD_DATA);

  return {
    data: data?.getUserDiscordData,
    error,
    loading,
  };
}
