import type { BrandInfo, NavItem } from '@/types/navigation';

export const brand: BrandInfo = {
  logoIconSrc: '/photo_5846002750095822271_y.jpg',
  homeHref: '/home',
};

export const navItems: NavItem[] = [
  { id: 'home', href: '/home' },
  { id: 'about', href: '/about' },
  { id: 'services', href: '/services' },
  { id: 'team', href: '/team' },
  { id: 'projects', href: '/projects' },
  { id: 'contact', href: '/contact' },
];
