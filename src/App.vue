<script setup lang="ts">
import { motion, MotionConfig, useScroll } from 'motion-v'
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

/**
 * ==============   Styles   ================
 */

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

const scrollYProgress = ref<any>(0)
const listenToScroll = async () => {
  // Wait for DOM to be ready for listeting
  await nextTick()

  await new Promise(requestAnimationFrame)

  const { scrollYProgress: p } = useScroll({ container: toListen })
  scrollYProgress.value = p

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
      }
    })
  }, options)
  const sections = document.querySelectorAll('#Hero, #About, #Project, #Contact')
  sections.forEach((section) => {
    observer?.observe(section)
  })
}

const scrollIndicatorStyle = {
  position: 'fixed',

  transformOrigin: '0 0',
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
    <motion.div
      :style="{ ...scrollIndicatorStyle, scaleY: scrollYProgress }"
      class="h-30 w-1 bg-primary-gradient fixed right-5 top-80 z-50 rounded-2xl"
    ></motion.div>

    <motion.nav
      :initial="{ opacity: 0, y: -70 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{
        duration: 0.3,
        ease: 'easeIn',
      }"
      ref="nav"
      :class="[
        'fixed z-50 flex flex-row gap-2 md:gap-5 px-3 py-2 md:py-1 w-fit h-fit bg-bg/80 backdrop-blur-md border border-border rounded-full shadow-lg transition-all duration-300',
        'bottom-4 left-1/2 -translate-x-1/2',
        beingViewed === 'Hero'
          ? 'md:top-5 md:right-5 md:left-auto md:translate-x-0 '
          : 'md:top-5 md:left-1/2 md:-translate-x-1/2',
      ]"
    >
      <motion.a
        v-for="(route, index) in routeList"
        :key="index"
        @click="scrollToView(route.name)"
        :animate="beingViewed === route.name ? 'active' : 'inactive'"
        :variants="{
          active: {
            scale: 1.1,
            backgroundColor: '#2a2a2a',
          },
          inactive: {
            scale: 1,
            backgroundColor: 'transparent',
          },
        }"
        class="flex items-center justify-center md:gap-2 px-3 py-2 md:px-3 md:py-1 text-header text-sm rounded-full cursor-pointer transition-all duration-200 hover:text-mute"
      >
        <i :class="route.icon"></i>

        <!-- 👇 Hide text on mobile -->
        <p class="hidden md:block">
          {{ route.name }}
        </p>
      </motion.a>
    </motion.nav>
    <div
      id="toListen"
      ref="toListen"
      :class="[
        'bg-[#0A0805] relative  element   h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bg [&::-webkit-scrollbar-thumb]:bg-elevated [&::-webkit-scrollbar-thumb]:rounded-full transition-all duration-300',
      ]"
    >
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
