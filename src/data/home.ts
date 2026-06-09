import {
  BrainCircuit,
  Globe,
  Layers,
  Smartphone,
} from 'lucide-react';

import type { Service, Stat } from '@/types/home';

export const homeServiceItems: Service[] = [
  {
    id: 'websites',
    icon: Globe,
  },
  {
    id: 'mobileApps',
    icon: Smartphone,
  },
  {
    id: 'softwareSystems',
    icon: Layers,
  },
  {
    id: 'aiSolutions',
    icon: BrainCircuit,
  },
];

export const homeStats: Stat[] = [
  { id: 'projectsDelivered', value: 120, suffix: '+' },
  { id: 'happyClients', value: 85, suffix: '+' },
  { id: 'countriesServed', value: 14, suffix: '+' },
  { id: 'systemUptime', value: 99, suffix: '%' },
];
