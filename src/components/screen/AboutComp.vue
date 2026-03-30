<template>
  <div class="flex items-center min-h-[70vh] justify-between">
    <div class="w-[20%] flex flex-col items-start">
      <motion.h1
        class="text-header font-extrabold text-6xl"
        :initial="{ opacity: 0, x: -20 }"
        :whileInView="{ opacity: 1, x: 0 }"
        :transition="{ type: 'spring', stiffness: 120, damping: 20 }"
      >
        A little about <span class="text-dim">me.</span>
      </motion.h1>
    </div>

    <div
      class="w-[50%] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bg [&::-webkit-scrollbar-thumb]:bg-elevated [&::-webkit-scrollbar-thumb]:rounded-full overflow-y-auto space-y-10 px-5"
    >
      <div class="border-l-2 border-border pl-8 flex flex-col gap-10">
        <motion.div
          v-for="(about, index) in aboutMe"
          :key="index"
          :initial="{ opacity: 0, y: -20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ type: 'spring', stiffness: 120, damping: 20, delay: index * 0.1 }"
        >
          <h1 :key="index" class="text-red-400 my-2 tracking-widest font-medium">
            {{ about.label }}
          </h1>
          <p class="text-justify" v-html="about.description"></p>
        </motion.div>
      </div>
    </div>
  </div>
  <div class="min-h-screen flex flex-col text-white items-center justify-center">
    <div class="flex flex-col items-center justify-center flex-1 px-6">
      <!-- Title -->
      <h1 class="text-5xl font-extrabold text-header text-center mb-4">
        The Magic <span class="text-primary">Behind</span>
      </h1>
      <p class="text-sm text-body mb-10 text-center max-w-xl">
        A collection of technologies and tools that power the experience.
      </p>

      <div class="space-y-6 w-full max-w-3xl">
        <div class="flex flex-wrap justify-center gap-3">
          <motion.div
            v-for="(tech, index) in stack"
            :initial="{ opacity: 0, scale: 0 }"
            :whileInView="{ opacity: 1, scale: 1 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.1, ease: 'easeIn', delay: index * 0.05 }"
            :key="tech"
            class="px-4 py-2 rounded-xl border border-border bg-elevated/40 backdrop-blur hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-pointer text-sm font-medium text-body hover:scale-105 hover:shadow-lg hover:rotate-10"
          >
            {{ tech }}
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { easeIn, motion } from 'motion-v'

const stack = [
  'React',
  'React Native',
  'Typescript',
  'Vue.js',
  'TailwindCSS',
  'JavaScript',
  'Laravel',
  'Express',
  'Node.js',
  'MySQL',
  'PHP',
  'Rest APIs',
  'Git & Github',
  'VS Code',
  'Postman',
  'Laragon',
  'Firebase',
  'Figma',
  'Canva',
  'Aseprite',
]

const aboutMe: Record<string, string>[] = [
  {
    label: 'Who_am_i',
    description:
      "I'm <span class='text-header font-semibold'>Leewell M. Caputol</span>, a web developer based in the Philippines. I build fast, modern web apps — from clean frontends to solid backends — with a focus on code that's readable, maintainable, and built to scale.",
  },
  {
    label: 'My_logic',
    description:
      "I care about the details — the kind that most people don't notice until they're missing. Whether it's a 150ms transition or a well-structured API, I think the small things are what separate good work from great work.",
  },
  {
    label: 'How_i_operate',
    description:
      "When I'm not coding, I'm probably exploring new tools, tinkering with side projects, or looking for the next problem worth solving.",
  },
]
</script>

<style scoped></style>
