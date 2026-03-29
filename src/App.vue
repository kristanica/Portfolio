<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.name)

const routeList = [
  {
    name: 'hero',
    icon: 'pi pi-home',
  },

  {
    name: 'about',
    icon: 'pi pi-user',
  },

  {
    name: 'projects',
    icon: 'pi pi-folder',
  },
  {
    name: 'contact',
    icon: 'pi pi-send',
  },
]
</script>
<template>
  <main class="flex">
    <nav
      class="flex flex-col gap-5 justify-center flex-1 min-h-screen items-end bg-[#0A0805] border-r-[#2A2A2A] border-r"
    >
      <router-link v-for="(route, index) in routeList" :to="{ name: route.name }" :key="index"
        ><i
          :class="[
            'text-md mx-5 text-2xl hover:text-elevated transition-colors duration-200',
            route.icon,
            currentRoute === route.name ? 'text-elevated' : 'text-mute',
          ]"
        ></i
      ></router-link>
      <div class="absolute bottom-0 left-0 px-5 w-[25%] border-border border py-2 mx-auto">
        <div class="flex flex-row justify-between">
          <div class="flex flex-row items-center">
            <div class="h-7 w-7 bg-mute rounded-full"></div>
            <div class="ml-2">
              <h1 class="text-header font-bold">LEEWELL CAPUTOL</h1>
              <p class="text-xs text-mute">Web Developer</p>
            </div>
          </div>
          <p class="text-[8px] left-0">AVAILABLE</p>
        </div>

        <!-- <div class="text-sm font-light text-body my-2">
          I build fast, modern web apps — from clean frontends to solid backends. Based in the
          Philippines, available for work worldwide.
        </div> -->

        <button class="border-border border w-full text-left px-2 py-2 rounded-md">
          Learn More <i class="pi pi-arrow-right text-right text-sm"></i>
        </button>

        <div class="mt-3 flex flex-row gap-2">
          <i class="devicon-github-original text-2xl"></i>
          <i class="devicon-linkedin-plain text-2xl"></i>
        </div>
      </div>
    </nav>

    <div class="flex-3 bg-[#0A0805] relative px-5 overflow-hidden">
      <div
        class="absolute min-h-[70%] min-w-[70%] bg-[#7C3AED] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[200px] opacity-15"
      ></div>

      <router-view> </router-view>
    </div>
  </main>
</template>

<style scoped></style>
