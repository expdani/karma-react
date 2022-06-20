import { DiscordUserType } from '../../hooks/user/user';
import iconKeys from '../icon/iconKeys';
import Routes from '../routeConfig';

export type NavItem = {
  icon: string;
  title: string;
  route: string;
} | null;

function navItems(data?: DiscordUserType | null | undefined): NavItem[] {
  return [
    {
      icon: iconKeys.Dashboard,
      title: 'Dashboard',
      route: Routes.Dashboard,
    },
    data
      ? {
          icon: iconKeys.Settings,
          title: 'Settings',
          route: Routes.Settings,
        }
      : null,
  ];
}

export default navItems;
