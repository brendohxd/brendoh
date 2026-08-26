'use client';

import { useMemo, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../projects/project-data';

const filters = ['all', 'product', 'research', 'software'];

export function WorkExplorer() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <div className="filter-row" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={activeFilter === filter ? 'filter filter--active' : 'filter'}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </>
  );
}
