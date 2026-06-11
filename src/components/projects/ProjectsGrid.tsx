import ProjectCard from '@/components/projects/ProjectCard';
import type { Project } from '@/types/projects';

interface ProjectsGridProps {
  projects: Project[];
}

function getProjectKey(project: Project, index: number): string {
  return project.apiId ?? project.slug ?? String(project.id ?? index);
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="container-custom mt-12">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={getProjectKey(project, index)} project={project} />
        ))}
      </div>
    </div>
  );
}
