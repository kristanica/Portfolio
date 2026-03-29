<template>
  <p class="text-mute mt-5">WEB DEVELOPER</p>

  <div class="flex items-center min-h-[90%] justify-between">
    <div class="w-[20%] flex flex-col items-start">
      <p class="text-mute mt-5">~/About</p>

      <h1 class="text-header font-extrabold text-6xl">
        A little about <span class="text-dim">me.</span>
      </h1>
    </div>

    <div class="w-[50%] h-100 overflow-y-auto space-y-10 px-5">
      <p class="text-justify">
        I'm <span class="text-header font-bold">Leewell M. Caputol</span>, a web developer based in
        the Philippines. I build fast, modern web apps — from clean frontends to solid backends —
        with a focus on code that's readable, maintainable, and built to scale.
      </p>
      <p class="text-justify">
        I care about the details — the kind that most people don't notice until they're missing.
        Whether it's a 150ms transition or a well-structured API, I think the small things are what
        separate good work from great work.
      </p>
      <p class="text-justify">
        When I'm not coding, I'm probably exploring new tools, tinkering with side projects, or
        looking for the next problem worth solving.
      </p>
      <div>
        <div v-for="([key, value], index) in Object.entries(stack)" :key="index">
          <div class="h-1 w-full border-border border-b my-2"></div>

          <h1 class="my-5 font-extrabold">{{ key }}</h1>

          <div class="grid grid-cols-4 gap-5">
            <div v-for="(tech, index) in value" :key="index">
              <div class="border-border border p-2 text-center rounded-md">
                {{ tech }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stack = {
  'FRONT END': ['React', 'React Native', 'Typescript', 'Vue.js', 'TailwindCSS', 'JavaScript'],

  'BACK END': ['Laravel', 'Express', 'Node.js', 'MySQL', 'PHP', 'Rest APIs'],
  'TOOLS & DEV': ['Git & Github', 'VS Code', 'Postman', 'Laragon', 'Firebase'],
  DESIGN: ['Figma', 'Canva', 'Aseprite'],
}
</script>

<style scoped>
div.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: var(--color-glow) var(--color-surface);
}
</style>
