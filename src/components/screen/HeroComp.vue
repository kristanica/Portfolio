<template>
  <motion.div
    class="text-mute mt-5 flex flex-row items-center gap-2 text-xs tracking-widest overflow-hidden"
    :initial="{ opacity: 0, y: -20 }"
    :while-in-view="{ opacity: 1, y: 0 }"
  >
    <div class="bg-green-400 h-2 w-2 rounded-full animate-ping"></div>

    <h1>AVAILABLE FOR WORK</h1>
  </motion.div>
  <section class="flex flex-row items-center min-h-screen overflow-hidden justify-between">
    <div class="mt-5">
      <motion.div :initial="{ opacity: 0, x: -50 }" :while-in-view="{ opacity: 1, x: 0 }">
        <Header> </Header>
      </motion.div>
      <div class="col-span-3 px-5">
        <div>
          <i class="pi pi-arrow-down-right my-3"></i>
          <motion.p
            :initial="{ opacity: 0, x: 30 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5 }"
            class="text-sm text-body w-[70%]"
          >
            I build fast, modern web apps — from clean frontends to solid backends. Based in the
            Philippines, available for work worldwide.
          </motion.p>
        </div>

        <div class="flex flex-row gap-5 my-5">
          <motion.div
            :initial="{ opacity: 0, scale: 0.2 }"
            :while-in-view="{ opacity: 1, scale: 1 }"
            :transition="{ type: 'spring', stiffness: 120, damping: 20, delay: index * 0.1 }"
            v-for="(icon, index) in devIcons"
            :key="index"
            class="border-border border p-2 rounded-md flex items-center justify-center hover:bg-elevated/10 transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 hover:border-border-mi"
          >
            <i :class="icon" class="text-xl md:text-2xl"></i>
          </motion.div>
        </div>

        <motion.div class="flex flex-row gap-5" :initial="{ x: 50 }" :while-in-view="{ x: 0 }">
          <button
            @click="scrollToContact"
            class="border-border border rounded-md items-center px-5 py-4 h-full hover:bg-elevated/10 transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 hover:border-border-mid"
          >
            CONTACT <i class="pi pi-envelope ml-2"></i>
          </button>

          <button
            class="border-border border rounded-md items-center px-5 py-4 h-full hover:bg-elevated/10 transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 hover:border-border-mid"
          >
            GET RESUME <i class="pi pi-download ml-2"></i>
          </button>
        </motion.div>
      </div>
    </div>
    <motion.div
      class="rounded-xl hidden sm:hidden md:block"
      :initial="{ x: 50 }"
      :while-in-view="{ x: 0 }"
    >
      <CodeEditor></CodeEditor>
    </motion.div>
  </section>

  <motion.div
    :initial="{ opacity: 0, y: 50 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    class="flex-col text-end bottom-0 absolute right-15 overflow-hidden px-5 hidden md:flex"
  >
    <p class="text-xs tracking-[0.2em] text-zinc-500 uppercase font-mono mb-1">Portfolio</p>
    <h2
      class="text-4xl font-bold bg-linear-to-br from-white to-zinc-400 bg-clip-text text-transparent"
    >
      2026
    </h2>
  </motion.div>
</template>

<script setup lang="ts">
import CodeEditor from '@/components/Hero/CodeEditor.vue'
import Header from '@/components/Hero/Header.vue'
import { motion } from 'motion-v'

const devIcons = [
  'devicon-react-original',
  'devicon-vuejs-plain',
  'devicon-express-original',
  'devicon-laravel-original',
]

const scrollToContact = () => {
  document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped></style>
