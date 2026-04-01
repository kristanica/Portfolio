<template>
  <div class="min-h-screen mb-50">
    <div class="grid grid-cols-1 md:grid-cols-2 relative items-start">
      <header
        class="md:sticky md:top-0 md:h-screen flex justify-center md:flex-col md:justify-center"
      >
        <div>
          <motion.div
            class="flex flex-row items-center gap-2"
            :initial="{ opacity: 0, x: -50 }"
            :whileInView="{ opacity: 1, x: 0 }"
          >
            <div
              class="h-px w-5 bg-linear-to-r from-transparent via-purple-500 to-purple-500"
            ></div>
            <p>Projects</p>
          </motion.div>
          <motion.div
            class="text-header font-extrabold text-6xl"
            :initial="{ opacity: 0, x: -50 }"
            :whileInView="{ opacity: 1, x: 0 }"
          >
            <h1 class="text-7xl font-extrabold text-header">
              What I
              <span
                class="bg-primary-gradient bg-clip-text text-gradient text-transparent font-fraunces"
                >did.</span
              >
            </h1>
          </motion.div>

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
          >
            These are some of the things I've worked on recently.
          </motion.p>
        </div>
      </header>

      <div class="flex flex-col gap-10 md:py-32 px-5 mt-20 md:mt-0">
        <motion.div
          v-for="(project, index) in projects"
          :key="index"
          :initial="{ opacity: 0, x: -20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{ type: 'spring', stiffness: 80, damping: 30, mass: 1, delay: 0.1 * index }"
        >
          <Container
            :projectTitle="project.projectTitle"
            :year="project.year"
            :description="project.description"
            :stack="project.stack"
            :index="index"
            @setProject="setProjectValue(project)"
          />
        </motion.div>
      </div>
    </div>
    <!-- SIDEBAR -->
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
    <!-- SIDEBAREMD -->
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
