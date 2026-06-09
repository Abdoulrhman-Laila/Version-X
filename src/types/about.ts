import type { LucideIcon } from 'lucide-react';

export interface VisionMissionItem {
  id: 'vision' | 'mission';
  icon: LucideIcon;
}

export interface ValueItem {
  id: 'quality' | 'innovation' | 'excellence' | 'commitment';
  icon: LucideIcon;
}

export interface WhyChooseItem {
  id: 'fastDelivery' | 'innovation' | 'partnership';
  icon: LucideIcon;
}
