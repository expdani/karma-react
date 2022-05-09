import iconKeys from '../Icon/iconKeys';
import Routes from '../routeConfig';

export type NavItem = {
  icon: string;
  title: string;
  route: string;
};

const navItems: NavItem[] = [
  {
    icon: iconKeys.Dashboard,
    title: 'Dashboard',
    route: Routes.Dashboard,
  },
  {
    icon: iconKeys.Settings,
    title: 'Settings',
    route: Routes.Settings,
  },
];

export default navItems;
