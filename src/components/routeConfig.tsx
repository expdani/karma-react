export type Route = {
  [key: string]: string;
};

const Routes: Route = Object.freeze({
  Dashboard: '/',
  Settings: '/settings',
});

export default Routes;
