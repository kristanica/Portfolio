<template>
  <div
    iv
    class="flex min-h-screen items-center justify-between flex-col sm:flex-col lg:flex-row md:flex-col"
  >
    <div class="">
      <motion.div
        class="flex flex-row items-center gap-2"
        :initial="{ opacity: 0, x: -50 }"
        :whileInView="{ opacity: 1, x: 0 }"
      >
        <div class="h-px w-5 bg-linear-to-r from-transparent via-purple-500 to-purple-500"></div>
        <p>A quick glance</p>
      </motion.div>
      <motion.div
        class="text-header font-extrabold text-6xl"
        :initial="{ opacity: 0, x: -50 }"
        :whileInView="{ opacity: 1, x: 0 }"
      >
        <div>
          <h1>A little about</h1>
          <span
            class="bg-primary-gradient bg-clip-text text-gradient text-transparent font-fraunces"
            >me.</span
          >
        </div>
      </motion.div>

      <motion.div
        class="mt-10 flex flex-row gap-5"
        :initial="{ opacity: 0, x: -50 }"
        :whileInView="{ opacity: 1, x: 0 }"
      >
        <button>
          <i
            class="pi pi-github text-3xl bg-primary-gradient bg-clip-text text-gradient hover:text-transparent hover:rotate-3 hover:scale-110 transition-all duration-300 ease-in-out"
          ></i>
        </button>
        <button>
          <i
            class="pi pi-linkedin text-3xl bg-primary-gradient bg-clip-text text-gradient hover:text-transparent hover:rotate-3 hover:scale-110 transition-all duration-300 ease-in-out"
          ></i>
        </button>
      </motion.div>
    </div>

    <div
      class="w-full lg:w-[50%] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bg [&::-webkit-scrollbar-thumb]:bg-elevated [&::-webkit-scrollbar-thumb]:rounded-full overflow-y-auto space-y-10 px-5"
    >
      <div class="border-l-2 border-border pl-8 flex flex-col gap-10">
        <motion.div
          v-for="(about, index) in aboutMe"
          :key="index"
          :initial="{ opacity: 0, y: -20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ type: 'spring', stiffness: 80, damping: 20, delay: index * 0.1 }"
        >
          <h3 class="font-mono text-xs tracking-[0.28em] mb-2 uppercase text-purple-300">
            {{ about.label }}
          </h3>
          <p class="text-justify" v-html="about.description"></p>
        </motion.div>
      </div>
      <motion.div
        :initial="{ opacity: 0, x: 20 }"
        :whileInView="{ opacity: 1, x: 0 }"
        class="rounded-md bg-elevated border-bg border italic py-2 px-7 flex flex-row"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          height="24"
          width="24"
          class="mb-2 text-elevated fill-mute"
        >
          <path
            d="M103.23 145.98c-24.42-11.67-29.98-44.15-10.47-62.91 4.5-4.97 15.66-9.15 10.79-17.58-2.29-3.84-7.25-5.03-11.05-2.67-40.13 28.21-76.9 64.95-68.47 129.87 7.69 59.24 105.24 63.52 107.08-2.53 0-19.63-11.51-36.35-27.88-44.18zm146.08 0c-24.42-11.67-29.98-44.15-10.47-62.91 4.5-4.97 15.66-9.15 10.79-17.58-2.29-3.84-7.25-5.03-11.05-2.67-40.13 28.21-76.9 64.95-68.47 129.87 7.69 59.24 105.24 63.52 107.08-2.53 0-19.63-11.51-36.35-27.88-44.18z"
          ></path>
        </svg>
        <h1 class="mt-1 ml-2 tracking-widest">"Build with purpose. Learn with intent."</h1>
      </motion.div>
    </div>
  </div>
  <div class="min-h-screen flex flex-col text-white items-center justify-center">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <!-- Section Header -->
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7 }"
        :viewport="{ once: true }"
        class="space-y-4"
      >
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-16 line-gradient"></div>
          <span class="text-xs tracking-[0.3em] text-purple-400 uppercase font-mono">Stack</span>
          <div class="h-px w-16 line-gradient"></div>
        </div>

        <h2 class="text-5xl lg:text-6xl font-bold">
          <span class="text-white">The Magic</span>
          <span
            class="text-gradient bg-primary-gradient bg-clip-text text-transparent font-fraunces"
          >
            Behind</span
          >
        </h2>
      </motion.div>

      <!-- Tech Stack Grid -->
      <div class="flex flex-wrap justify-center gap-3">
        <motion.div
          v-for="(tech, index) in stack"
          :key="tech.name"
          :initial="{ opacity: 0, scale: 0.8, rotate: -10 }"
          :whileInView="{ opacity: 1, scale: 1, rotate: 0 }"
          :transition="{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: index * 0.03,
          }"
          :viewport="{ once: true }"
          class="group relative tech-pill"
        >
          <div
            class="relative px-3 py-1 backdrop-blur-sm border border-zinc-800 group-hover:border-border-mid rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:rotate-2 flex items-center gap-2"
          >
            <v-icon
              v-if="tech.icon"
              :name="tech.icon"
              scale="0.9"
              class="text-zinc-400 group-hover:text-white transition-colors duration-300"
            />

            <span
              class="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300"
            >
              {{ tech.name }}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

const stack = [
  { name: 'React', icon: 'si-react' },
  { name: 'React Native', icon: 'si-react' },
  { name: 'Typescript', icon: 'si-typescript' },
  { name: 'Vue.js', icon: 'si-vuedotjs' },
  { name: 'TailwindCSS', icon: 'si-tailwindcss' },
  { name: 'JavaScript', icon: 'si-javascript' },
  { name: 'Laravel', icon: 'si-laravel' },
  { name: 'Express', icon: 'si-express' },
  { name: 'Node.js', icon: 'si-nodedotjs' },
  { name: 'MySQL', icon: 'si-mysql' },
  { name: 'PHP', icon: 'si-php' },
  { name: 'Rest APIs', icon: 'si-postman' }, // substitute
  { name: 'Git & Github', icon: 'si-github' },
  { name: 'VS Code', icon: 'si-visualstudiocode' },
  { name: 'Postman', icon: 'si-postman' },
  { name: 'Laragon', icon: null }, // no icon
  { name: 'Firebase', icon: 'si-firebase' },
  { name: 'Figma', icon: 'si-figma' },
  { name: 'Canva', icon: 'si-canva' },
  { name: 'Aseprite', icon: 'si-aseprite' },
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

const getIconColor = (name: string) => {
  const map: Record<string, string> = {
    React: 'group-hover:text-cyan-400',
    'React Native': 'group-hover:text-cyan-400',
    Typescript: 'group-hover:text-blue-500',
    'Vue.js': 'group-hover:text-green-500',
    TailwindCSS: 'group-hover:text-sky-400',
    JavaScript: 'group-hover:text-yellow-400',
    Laravel: 'group-hover:text-red-500',
    Express: 'group-hover:text-gray-300',
    'Node.js': 'group-hover:text-green-600',
    MySQL: 'group-hover:text-blue-400',
    PHP: 'group-hover:text-indigo-400',
    'Rest APIs': 'group-hover:text-orange-400',
    'Git & Github': 'group-hover:text-white',
    'VS Code': 'group-hover:text-blue-400',
    Postman: 'group-hover:text-orange-500',
    Firebase: 'group-hover:text-yellow-500',
    Figma: 'group-hover:text-pink-500',
    Canva: 'group-hover:text-purple-400',
    Aseprite: 'group-hover:text-emerald-400',
  }

  return map[name] || 'group-hover:text-white'
}
</script>

<style scoped></style>
