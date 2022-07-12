import * as config from '../../config.json';

export type Route = {
  [key: string]: string;
};

const loginUrl =
  `https://discord.com/api/oauth2/authorize` +
  `?client_id=${config.oauth.clientId}` +
  `&redirect_uri=${encodeURIComponent(config.oauth.callbackURL)}` +
  `&response_type=code&scope=${encodeURIComponent(
    config.oauth.scopes.join(' ')
  )}`;

const Routes: Route = Object.freeze({
  Home: '/',
  Dashboard: '/dashboard',
  Settings: '/settings',
  Callback_$CODE: '/discord/callback',
  DiscordLogin: loginUrl,
  Login: '/login',
});

export default Routes;
