import type { Metadata } from 'next';

import ProjectDetail from '@/components/projects/ProjectDetail';

export const metadata: Metadata = {
  title: 'Project Details — Version X',
  description: 'View project details from the Version X portfolio.',
};

export default function ProjectDetailPage() {
  return <ProjectDetail />;
}
