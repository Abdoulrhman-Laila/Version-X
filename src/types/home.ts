import type { LucideIcon } from 'lucide-react';

import type { CounterStat } from '@/types/stats';

export interface Service {
  id: 'websites' | 'mobileApps' | 'softwareSystems' | 'aiSolutions';
  icon: LucideIcon;
}

export interface Stat extends CounterStat {
  id: 'projectsDelivered' | 'happyClients' | 'countriesServed' | 'systemUptime';
}
