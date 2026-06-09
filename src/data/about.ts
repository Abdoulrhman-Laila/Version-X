import {
  Award,
  Eye,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react';

import type { CounterStat } from '@/types/stats';
import type { ValueItem, VisionMissionItem, WhyChooseItem } from '@/types/about';

export const visionMissionItems: VisionMissionItem[] = [
  { id: 'vision', icon: Eye },
  { id: 'mission', icon: Zap },
];

export const valueItems: ValueItem[] = [
  { id: 'quality', icon: Award },
  { id: 'innovation', icon: Sparkles },
  { id: 'excellence', icon: Trophy },
  { id: 'commitment', icon: HeartHandshake },
];

export const companyStats: CounterStat[] = [
  { id: 'projects', value: 50, suffix: '+' },
  { id: 'clients', value: 30, suffix: '+' },
  { id: 'years', value: 5, suffix: '+' },
  { id: 'support', value: 24, suffix: '/7' },
];

export const aboutWhyChooseItems: WhyChooseItem[] = [
  { id: 'fastDelivery', icon: Rocket },
  { id: 'innovation', icon: Lightbulb },
  { id: 'partnership', icon: Handshake },
];

export const teamPreviewPlaceholders = [
  { id: '1', initials: 'AX', roleKey: 'engineer' as const },
  { id: '2', initials: 'SM', roleKey: 'designer' as const },
  { id: '3', initials: 'JK', roleKey: 'aiSpecialist' as const },
  { id: '4', initials: 'LR', roleKey: 'manager' as const },
];
