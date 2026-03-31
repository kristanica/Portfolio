<script setup lang="ts">
import { motion, MotionConfig } from 'motion-v'
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

const isOpen = ref<boolean>(false)

const routeList = [
  {
    name: 'Hero',
    icon: 'pi pi-home',
  },

  {
    name: 'About',
    icon: 'pi pi-user',
  },

  {
    name: 'Project',
    icon: 'pi pi-folder',
  },
  {
    name: 'Contact',
    icon: 'pi pi-send',
  },
]

const scrollToView = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}

let observer: IntersectionObserver | null

const beingViewed = ref<string>('Hero')
const toListen = ref<HTMLDivElement | null>(null)
const nav = ref<HTMLDivElement | null>(null)
const listenToScroll = async () => {
  await nextTick()
  await new Promise(requestAnimationFrame)
  if (!toListen.value) return

  observer?.disconnect()
  const options = {
    root: toListen.value,
    rootMargin: '0px',
    scrollMargin: '0px',
    threshold: 0.3,
  }

  observer = new IntersectionObserver((entries) => {
    let maxRatio = 0

    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio
        beingViewed.value = entry.target.id
        if (beingViewed.value !== 'Hero') {
          nav.value?.classList.add('left-1/2', 'transform', '-translate-x-1/2')
        } else {
          nav.value?.classList.remove('left-1/2', 'transform', '-translate-x-1/2')
        }
      }
    })
  }, options)
  const sections = document.querySelectorAll('#Hero, #About, #Project, #Contact')
  sections.forEach((section) => {
    observer?.observe(section)
  })
}

onMounted(() => {
  listenToScroll()
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
<template>
  <main class="flex">
    <nav
      ref="nav"
      :class="[
        'flex flex-row gap-5 bg-bg border-border border top-5 right-5 py-1  w-[30%] justify-center absolute  rounded-full items-end  transition-all duration-300 z-10 ',
      ]"
    >
      <a
        v-for="(route, index) in routeList"
        :key="index"
        @click="scrollToView(route.name)"
        :class="[
          'text-md mx-5 text-sm hover:text-mute rounded-full px-2 py-1  transition-all duration-200 cursor-pointer text-header',
          beingViewed === route.name ? 'bg-mute' : '',
        ]"
      >
        {{ route.name }}
      </a>
    </nav>
    <div
      id="toListen"
      ref="toListen"
      :class="[
        'bg-[#0A0805] relative  element  px-20 overflow-hidden h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bg [&::-webkit-scrollbar-thumb]:bg-elevated [&::-webkit-scrollbar-thumb]:rounded-full transition-all duration-300',
        isOpen ? 'w-screen ' : 'w-full ',
      ]"
    >
      <div
        class="absolute inset-0 pointer-events-none bg-[#7C3AED] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[200px] opacity-15"
      ></div>

      <motion-config
        :transition="{
          type: 'spring',
          stiffness: 80,
          damping: 30,
          mass: 1,
        }"
      >
        <router-view> </router-view>
      </motion-config>
    </div>
  </main>
</template>

<style scoped>
.element {
  background-color: #0f0f0f;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.21) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.21) 1px, transparent 1px);
  background-size: 32px 32px;
}
</style>
