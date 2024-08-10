'use client'
import React, { lazy, Suspense } from 'react'
import EducationCard from './ui/EducationCard';
import SkillsCard from './ui/SkillsCard';
import LoadingSkills from './ui/LoadingSkills';

function Resume() {
  return (
    <section className="scroll-mt-10 p-4 mt-10" id="resume">
      <h2 className="title-blue text-3xl font-black mb-8 p-1 sm:text-5xl">Resume</h2>
      <Suspense fallback={<LoadingSkills />} >
        <SkillsCard />
      </Suspense>
      <EducationCard />
    </section>
    );
}

export default Resume;