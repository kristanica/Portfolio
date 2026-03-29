<template>
  <p class="text-mute mt-5">WEB DEVELOPER</p>
  <header class="flex flex-row items-center justify-between">
    <div>
      <p class="text-mute mb-10">~/Hero</p>

      <h1 class="text-7xl font-extrabold text-header">PROJECTS</h1>
      <p class="text-sm text-body mt-5">These are some of the things I've worked on recently.</p>
    </div>

    <div>
      <h1 class="text-mute">{{ projects.length }} Selected Works</h1>
    </div>
  </header>

  <div
    class="mt-5 grid grid-cols-2 gap-1 isolate imt-10 h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bg [&::-webkit-scrollbar-thumb]:bg-elevated [&::-webkit-scrollbar-thumb]:rounded-full px-5"
  >
    <Container
      v-for="(project, index) in projects"
      :projectTitle="project.projectTitle"
      :year="project.year"
      :description="project.description"
      :index="index"
      :stack="project.stack"
    >
    </Container>
  </div>
</template>

<script setup>
import Container from '@/components/Projects/Container.vue'

const projects = [
  {
    projectTitle: 'Portfolio',
    year: '2026',
    description:
      'A minimal dark-mode developer portfolio built with Next.js and TypeScript. Designed to be fast, clean, and easy to navigate',
    stack: ['Vue', 'Typescript', 'TailwindCSS'],
  },
  {
    projectTitle: 'Devlab Web',
    year: '2025',
    description:
      '   Collaborated on the web version of DevLab, a gamified coding platform built with React.js and Tailwind CSS. Worked alongside a teammate to implement interactive coding challenges, AI-powered code feedback, and progression mechanics.',
    stack: ['React.js', 'Tailwind', 'CodeMirror', 'Firebase', 'Framer motion', 'GPT-4.1'],
  },

  {
    projectTitle: 'Devlab Mobile',
    year: '2025',
    description:
      '   Solely developed the mobile version of DevLab using React Native and Native Tailwind. Designed a fully responsive interface with touch-friendly interactions, real-time AI code evaluation, and gamified progression mechanics. Managed all mobile-specific features, layouts, and optimizations to deliver the complete on-the-go learning experience.',
    stack: [
      'React Native',
      'Native Tailwind',
      'Reanimated',
      'Node.js/Express',
      'Firebase',
      'GPT-4.1',
      'Typescript',
      'Expo',
      'TanStack ',
    ],
  },
  {
    projectTitle: 'WAHEMS',
    year: '2025',
    description:
      'A comprehensive platform that supports multiple event types, surveys, attendance tracking, certificates, examinations, and role-based access controls. Designed to streamline event management and improve participant engagement and administrative efficiency.',
    stack: ['Laravel', 'TailwindCSS', 'ShadCN UI', 'Inertia', 'React'],
  },
  {
    projectTitle: 'Syntethic Archives',
    year: '2025',
    description:
      '    A minimal dark-mode developer portfolio built with Next.js and TypeScript. Designed to be fast, clean, and easy to navigate',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    projectTitle: 'Riot Records',
    year: '2025',
    description:
      '  A fan-powered website for Paramore that fetches music data using the LastFM API, allowing users to explore tracks, albums, and artist information in a dynamic and interactive interface while also utilizing GPT-4.1 to generate questions.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'GPT-4.1'],
  },
]
</script>

<style scoped lang="scss"></style>
