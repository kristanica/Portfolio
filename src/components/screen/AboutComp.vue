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
          :key="tech"
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
            class="relative px-3 py-1 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 group-hover:border-purple-500/50 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:rotate-2"
          >
            <span
              class="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300"
            >
              {{ tech }}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

import img from '@/assets/images/leewelljpg.jpg'
// const test = [
//   {
//     name: 'React',
//     svg: ` <path
//   d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z"
//           />
//               <path
//                 d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z"
//               />`,
//   },
//   {
//     name: 'React Native',
//     svg: ` <path
//   d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z"
//           />
//               <path
//                 d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z"
//               />`,
//   },
// ]

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
