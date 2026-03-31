<template>
  <div
    ref="card"
    class="border-border border rounded-xl relative z-10 perspective-[1000px] transition-shadow duration-200 ease-out"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="flex flex-row items-center py-1 px-5 justify-between bg-elevated rounded-tr-xl rounded-tl-xl"
    >
      <div class="flex flex-row gap-2">
        <div class="bg-[#F78C6C] h-2 w-2 rounded-full"></div>
        <div class="bg-[#FFCB6B] h-2 w-2 rounded-full"></div>
        <div class="bg-[#C3E88D] h-2 w-2 rounded-full"></div>
      </div>
      <p class="text-sm">leewell_portfolio.ts</p>
    </div>
    <div class="mx-5">
      <pre
        class="line-numbers language-typescript"
      ><code class="language-typescript">// portfolio.config
const portfolio: Portfolio = {
  name: "Leewell Caputol",
  role: "Full stack developer",
  stack: ["React.js", "React Native", "Laravel", "Vue", "Express"],
  open: true,
  passionate: true
}

export default getPortfolio(portfolio)</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import { onMounted, ref } from 'vue'

const card = ref<HTMLDivElement | null>(null)

let currentX = 0
let currentY = 0

let targetX = 0
let targetY = 0

const handleMouseMove = (e: MouseEvent): void => {
  if (!card.value) return

  const rect = card.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  targetX = ((centerY - y) / centerY) * 10
  targetY = ((x - centerX) / centerX) * 10
}

const handleMouseLeave = () => {
  targetX = 0
  targetY = 0
}

const animate = () => {
  currentX += (targetX - currentX) * 0.1
  currentY += (targetY - currentY) * 0.1

  if (card.value) {
    card.value.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`

    card.value.style.boxShadow = `${-currentY}px ${currentX}px 20px rgba(0,0,0,0.2)`
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  Prism.highlightAll()
  animate()
})
</script>

<style scoped>
pre[class*='language-'] {
  font-size: 12px;
  line-height: 1.5;
}
pre[class*='language-'],
code[class*='language-'] {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}
code[class*='language-'] {
  font-size: 12px;
}
</style>
