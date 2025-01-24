import React, { lazy, Suspense } from 'react'
import EducationCard from './ui/EducationCard';
import LoadingSkills from './ui/LoadingSkills';
import Experience from './ui/Experience';
import ProjectCard from './ui/ProjectCard';

const LazySkillsCard = lazy(() => import('./ui/SkillsCard'));

function Resume() {
  return (
    <section className="p-4 mt-10 scroll-mt-20" id="resume">
      <Experience />
      <ProjectCard />
      <Suspense fallback={<LoadingSkills />} >
        <LazySkillsCard />
      </Suspense>
      <EducationCard />
    </section>
    );
}

export default Resume;