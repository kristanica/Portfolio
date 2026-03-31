<template>
  <div class="min-h-screen mb-50">
    <header class="flex flex-row items-center justify-between">
      <div>
        <motion.h1
          class="text-header font-extrabold text-6xl"
          :initial="{ opacity: 0, x: -50 }"
          :whileInView="{ opacity: 1, x: 0 }"
        >
          <h1 class="text-7xl font-extrabold text-header">PROJECTS</h1>
        </motion.h1>

        <motion.p
          class="text-sm text-body mt-5"
          :initial="{ opacity: 0, x: -50 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            mass: 1,
          }"
          >These are some of the things I've worked on recently.</motion.p
        >
      </div>

      <div>
        <motion.h1
          class="text-mute"
          :initial="{ opacity: 0, x: 50 }"
          :whileInView="{ opacity: 1, x: 0 }"
          >{{ projects.length }} Selected Works</motion.h1
        >
      </div>
    </header>

    <div
      class="mt-15 grid grid-cols-2 gap-5 isolate imt-10 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bg [&::-webkit-scrollbar-thumb]:bg-elevated [&::-webkit-scrollbar-thumb]:rounded-full px-5 place-items-center"
    >
      <motion.div
        v-for="(project, index) in projects"
        :key="index"
        :initial="{ opacity: 0, x: -20 }"
        :whileInView="{ opacity: 1, x: 0 }"
        :transition="{
          type: 'spring',
          stiffness: 80,
          damping: 30,
          mass: 1,
          delay: index * 0.1,
        }"
      >
        <Container
          :projectTitle="project.projectTitle"
          :year="project.year"
          :description="project.description"
          :index="index"
          :stack="project.stack"
          @setProject="setProjectValue(project)"
        >
        </Container>
      </motion.div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity  duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="fixed bg-black/50 inset-0 z-50"
          v-show="sideOpen"
          @click="sideOpen = false"
        ></div>
      </Transition>

      <Transition
        enter-active-class="transition-transform  duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform  duration-300 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <SideBar
          :projectTitle="setProject.projectTitle"
          :description="setProject.description"
          :stack="setProject.stack"
          :year="setProject.year"
          v-if="sideOpen"
          @close="sideOpen = false"
        >
        </SideBar>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import Container from '@/components/Projects/Container.vue'
import type { Project } from '@/types/project'
import { ref } from 'vue'
import SideBar from '../Projects/SideBar.vue'
import { delay, motion } from 'motion-v'

const setProject = ref<Project>({
  projectTitle: '',
  year: '',
  description: '',
  stack: [],
})

const sideOpen = ref<boolean>(false)

const setProjectValue = (project: Project) => {
  setProject.value = project
  console.log(setProject.value)
  sideOpen.value = true
}

const projects: Project[] = [
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
