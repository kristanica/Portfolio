<template>
  <p class="text-mute mt-5">WEB DEVELOPER</p>
  <div class="flex flex-col justify-center min-h-screen overflow-y-hidden">
    <motion.div :initial="{ opacity: 0, x: -50 }" :while-in-view="{ opacity: 1, x: 0 }">
      <Header> </Header>
    </motion.div>

    <div class="grid grid-cols-7 mt-5 place-items-center">
      <div class="col-span-3 px-5">
        <div>
          <i class="pi pi-arrow-down-right mb-3"></i>
          <motion.p
            :initial="{ opacity: 0 }"
            :while-in-view="{ opacity: 1 }"
            :transition="{ duration: 0.5 }"
            class="text-sm text-body"
          >
            I build fast, modern web apps — from clean frontends to solid backends. Based in the
            Philippines, available for work worldwide.
          </motion.p>
        </div>

        <div class="flex flex-row gap-5 my-5">
          <motion.div
            :initial="{ opacity: 0 }"
            :while-in-view="{ opacity: 1 }"
            :transition="{ type: 'spring', stiffness: 120, damping: 20, delay: index * 0.1 }"
            v-for="(icon, index) in devIcons"
            :key="index"
            class="border-border border-2 p-2 rounded-md"
          >
            <i :class="icon" class="text-3xl"></i>
          </motion.div>
        </div>

        <motion.div class="flex flex-row gap-5" :initial="{ x: 50 }" :while-in-view="{ x: 0 }">
          <button class="border-border border-2 px-7 py-2 rounded-md text-sm">
            CONTACT <i class="pi pi-envelope ml-2"></i>
          </button>

          <button class="border-border border-2 px-7 py-2 rounded-md text-sm">
            GET RESUME <i class="pi pi-download ml-2"></i>
          </button>
        </motion.div>
      </div>
      <motion.div class="rounded-xl col-span-4" :initial="{ x: 50 }" :while-in-view="{ x: 0 }">
        <CodeEditor></CodeEditor>
      </motion.div>
    </div>
  </div>

  <motion.div
    :initial="{ opacity: 0, y: 50 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    class="flex flex-col text-end bottom-0 absolute right-0 overflow-hidden px-5"
  >
    <p class="font-light">AVAILABLE FOR WORK</p>
    <h1 class="text-5xl font-bold">PORTFOLIO'26</h1>
  </motion.div>
</template>

<script setup>
import CodeEditor from '@/components/Hero/CodeEditor.vue'
import Header from '@/components/Hero/Header.vue'
import { motion } from 'motion-v'

const devIcons = [
  'devicon-react-original',
  'devicon-vuejs-plain',
  'devicon-express-original',
  'devicon-laravel-original',
]
</script>

<style scoped></style>
