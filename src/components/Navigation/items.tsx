import iconKeys from '../Icon/iconKeys';
import Routes from '../routeConfig';

type navItem = {
  icon: string;
  title: string;
  route: string;
};

const navItems: navItem[] = [
  {
    icon: iconKeys.Dashboard,
    title: 'Home',
    route: Routes.Dashboard,
  },
  {
    icon: iconKeys.Settings,
    title: 'Settings',
    route: Routes.Settings,
  },
];

export default navItems;
