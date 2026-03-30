<template>
  <header>
    <div class="flex flex-row items-center gap-2">
      <h1 class="text-mute text-sm font-bold">Hello, I'm a</h1>

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

    <h1 class="text-7xl font-extrabold text-header">LEEWELL CAPUTOL</h1>
  </header>
</template>

<script setup>
import { motion } from 'motion-v'
import { onMounted, ref } from 'vue'

const text = ['Front-End Developer', 'Back-End Developer', 'UI/UX Designer']
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
