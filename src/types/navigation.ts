export interface NavItem {
  id: 'home' | 'about' | 'services' | 'team' | 'projects' | 'contact';
  href: string;
}

export interface BrandInfo {
  logoIconSrc: string;
  homeHref: string;
}

export type Theme = 'light' | 'dark';
