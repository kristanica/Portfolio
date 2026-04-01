<template>
  <header>
    <div class="flex flex-row items-center gap-2">
      <div class="flex flex-row items-center gap-2">
        <div class="h-px w-10 bg-linear-to-r from-transparent via-purple-500 to-purple-500"></div>

        <h1 class="text-mute text-sm font-bold">Hello, I'm a</h1>
      </div>

      <motion.div
        :key="currentText"
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: 10 }"
        :transition="{ type: 'spring', stiffness: 120, damping: 20 }"
      >
        <h1 class="text-mute text-sm font-bold">
          {{ currentText }}
        </h1>
      </motion.div>
    </div>

    <h1
      class="text-7xl font-extrabold text-heade transition-all duration-300 hover:tracking-widest w-fit"
    >
      LEEWELL
      <span
        class="text-gradient bg-linear-to-br from-purple-400 via-violet-400 to-pink-500 bg-clip-text text-transparent"
      >
        CAPUTOL</span
      >
    </h1>
  </header>
</template>

<script setup>
import { motion } from 'motion-v'
import { onMounted, ref } from 'vue'

const text = ['Front-End Developer', 'Back-End Developer']
const index = ref(0)
const currentText = ref(text[index.value])

onMounted(() => {
  setInterval(() => {
    index.value = (index.value + 1) % text.length
    currentText.value = text[index.value]
  }, 2000)
})
</script>

<style lang="scss" scoped></style>
