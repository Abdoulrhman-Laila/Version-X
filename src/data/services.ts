import {
  BrainCircuit,
  ClipboardList,
  Code2,
  Layers,
  LifeBuoy,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  TestTube2,
  TrendingUp,
  Wrench,
} from 'lucide-react';

import type {
  ProcessStepItem,
  ServiceItem,
  ServicesWhyChooseItem,
} from '@/types/services';

export const serviceItems: ServiceItem[] = [
  { id: 'webDevelopment', icon: Code2 },
  { id: 'webDesign', icon: Palette },
  { id: 'mobileApplications', icon: Smartphone },
  { id: 'ecommerce', icon: ShoppingCart },
  { id: 'aiSolutions', icon: BrainCircuit },
  { id: 'maintenance', icon: Wrench },
];

export const processStepItems: ProcessStepItem[] = [
  { id: 'discovery', step: '01', icon: Search },
  { id: 'planning', step: '02', icon: ClipboardList },
  { id: 'design', step: '03', icon: PenTool },
  { id: 'development', step: '04', icon: Code2 },
  { id: 'testing', step: '05', icon: TestTube2 },
  { id: 'launch', step: '06', icon: Rocket },
];

export const technologies: string[] = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'NestJS',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Vercel',
  'OpenAI API',
];

export const servicesWhyChooseItems: ServicesWhyChooseItem[] = [
  { id: 'fastDelivery', icon: Rocket },
  { id: 'scalableArchitecture', icon: Layers },
  { id: 'cleanCode', icon: Code2 },
  { id: 'longTermSupport', icon: LifeBuoy },
  { id: 'aiIntegration', icon: BrainCircuit },
  { id: 'seoOptimization', icon: TrendingUp },
];
