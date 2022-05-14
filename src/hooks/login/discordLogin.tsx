import { useMutation } from '@apollo/client';
import DISCORD_LOGIN from './gql';

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

export default function useDiscordLogin(): any {
  const [discordLogin, { error, loading, data }] = useMutation(DISCORD_LOGIN);

  function handleLogin(code: string) {
    discordLogin({
      variables: {
        code,
      },
    });
  }

  return {
    handleLogin,
    data: data?.discordLogin,
    error,
    loading,
  };
}
