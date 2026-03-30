<template>
  <p class="text-mute mt-5">WEB DEVELOPER</p>

  <div class="flex items-center min-h-full justify-between">
    <div class="w-[20%] flex flex-col items-start">
      <h1 class="text-header font-extrabold text-6xl">
        A little about <span class="text-dim">me.</span>
      </h1>
    </div>

    <div
      class="w-[50%] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bg [&::-webkit-scrollbar-thumb]:bg-elevated [&::-webkit-scrollbar-thumb]:rounded-full overflow-y-auto space-y-10 px-5"
    >
      <div class="border-l-2 border-border pl-8 flex flex-col gap-10">
        <div>
          <h1 class="text-red-400 my-2 tracking-widest font-medium">Who_am_i</h1>
          <p class="text-justify">
            I'm <span class="text-header font-bold">Leewell M. Caputol</span>, a web developer based
            in the Philippines. I build fast, modern web apps — from clean frontends to solid
            backends — with a focus on code that's readable, maintainable, and built to scale.
          </p>
        </div>

        <div>
          <h1 class="text-red-400 my-2 tracking-widest font-medium">My_logic</h1>
          <p class="text-justify">
            I care about the details — the kind that most people don't notice until they're missing.
            Whether it's a 150ms transition or a well-structured API, I think the small things are
            what separate good work from great work.
          </p>
        </div>

        <div>
          <h1 class="text-red-400 my-2 tracking-widest font-medium">How_i_operate</h1>
          <p class="text-justify">
            When I'm not coding, I'm probably exploring new tools, tinkering with side projects, or
            looking for the next problem worth solving.
          </p>
        </div>
      </div>
      <!-- <div class="flex-1">
        <h1 class="text-header font-extrabold text-2xl">
          See what i <span class="text-dim">can do.</span>
        </h1>
        <div class="flex flex-col gap-5 mt-5">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="px-5 bg-bg py-3 border border-border rounded-md"
          >
            <h1 class="text-header font-black text-xl">{{ service.title }}</h1>
            <p class="text-justify font-sm mt-2 text-body">{{ service.description }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <div class="min-h-screen flex flex-col text-white">
    <div class="flex flex-col items-center justify-center flex-1 px-6">
      <!-- Title -->
      <h1 class="text-5xl font-extrabold text-header text-center mb-4">
        The Magic <span class="text-primary">Behind</span>
      </h1>
      <p class="text-sm text-body mb-10 text-center max-w-xl">
        A collection of technologies and tools that power the experience.
      </p>

      <div class="space-y-6 w-full max-w-3xl">
        <div
          v-for="([key, value], index) in Object.entries(stack)"
          :key="index"
          class="flex flex-col items-center gap-3"
        >
          <div class="flex flex-wrap justify-center gap-3">
            <div
              v-for="tech in value"
              :key="tech"
              class="px-4 py-2 rounded-xl border border-border bg-elevated/40 backdrop-blur hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-pointer text-sm font-medium text-body hover:scale-105 hover:shadow-lg hover:rotate-10"
            >
              {{ tech }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stack = {
  'FRONT END': ['React', 'React Native', 'Typescript', 'Vue.js', 'TailwindCSS', 'JavaScript'],
  'BACK END': ['Laravel', 'Express', 'Node.js', 'MySQL', 'PHP', 'Rest APIs'],

  'TOOLS & DEV': ['Git & Github', 'VS Code', 'Postman', 'Laragon', 'Firebase'],
  DESIGN: ['Figma', 'Canva', 'Aseprite'],
}

// const services: Record<string, string>[] = [
//   {
//     title: 'Full Stack Development',

//     description:
//       'Building end-to-end web applications by seamlessly integrating responsive front-end interfaces with scalable and efficient back-end systems.',
//   },
//   {
//     title: 'UI/UX Design',

//     description:
//       'Crafting clean, user-focused interfaces that balance aesthetics and usability, delivering intuitive experiences that feel seamless and engaging.',
//   },
//   {
//     title: 'Performance Optimization',

//     description:
//       'Enhancing application speed and responsiveness by optimizing code, assets, and architecture to deliver fast, scalable, and efficient solutions.',
//   },
// ]
</script>

<style scoped></style>
