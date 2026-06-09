import type { LucideIcon } from 'lucide-react';

export type ServiceItemId =
  | 'webDevelopment'
  | 'webDesign'
  | 'mobileApplications'
  | 'ecommerce'
  | 'aiSolutions'
  | 'maintenance';

export interface ServiceItem {
  id: ServiceItemId;
  icon: LucideIcon;
}

export type ProcessStepId =
  | 'discovery'
  | 'planning'
  | 'design'
  | 'development'
  | 'testing'
  | 'launch';

export interface ProcessStepItem {
  id: ProcessStepId;
  step: string;
  icon: LucideIcon;
}

export type ServicesWhyChooseId =
  | 'fastDelivery'
  | 'scalableArchitecture'
  | 'cleanCode'
  | 'longTermSupport'
  | 'aiIntegration'
  | 'seoOptimization';

export interface ServicesWhyChooseItem {
  id: ServicesWhyChooseId;
  icon: LucideIcon;
}
