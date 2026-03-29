<template>
  <div>
    <div class="bg-elevated relative flex items-center justify-center h-[30vh] rounded-t-md">
      <p class="absolute top-2 left-2 text-mute text-sm">[{{ index + 1 }}]</p>
      <h1 class="text-xl font-semibold px-4 text-center">{{ projectTitle }}</h1>
    </div>

    <div class="bg-bg px-5 py-6 rounded-b-md h-[30vh] flex flex-col">
      <div class="mb-3">
        <h2 class="text-header font-bold text-xl">{{ projectTitle }}</h2>
        <p class="text-mute text-sm">{{ year }}</p>
      </div>

      <p class="text-body text-sm mb-4 text-justify line-clamp-3 flex-1" :title="description">
        {{ description }}
      </p>

      <!-- Tech Stack & Links -->
      <div class="grid grid-cols-5 gap-3 mt-auto">
        <!-- Tech Stack (3 columns) -->
        <div class="col-span-3">
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="(item, idx) in topStack"
              :key="idx"
              class="border-border border p-2 text-center rounded-md text-xs truncate"
            >
              {{ item }}
            </div>
          </div>

          <button
            v-if="restStack.length > 0"
            @click="showPopup = true"
            class="text-xs text-mute hover:text-header transition-colors mt-2 underline cursor-pointer"
          >
            +{{ restStack.length }} more
          </button>
        </div>

        <div class="col-span-2 grid grid-cols-2 gap-2">
          <button
            class="flex flex-col items-center justify-center p-2 border border-border rounded-md hover:bg-elevated transition-colors cursor-pointer group"
          >
            <h3 class="text-xs font-medium mb-1">Live</h3>
            <i
              class="pi pi-arrow-up-right text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            ></i>
          </button>
          <button
            class="flex flex-col items-center justify-center p-2 border border-border rounded-md hover:bg-elevated transition-colors cursor-pointer group"
          >
            <h3 class="text-xs font-medium mb-1">Github</h3>
            <i
              class="pi pi-arrow-up-right text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <ExtraStack
    :projectTitle="projectTitle"
    :stack="stack"
    @close="showPopup = false"
    v-if="showPopup"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExtraStack from './ExtraStack.vue'
import type { Project } from '@/types/project'

const { projectTitle, description, stack, year, index } = defineProps<Project>()

const topStack = stack.slice(0, 3)
const restStack = stack.slice(3)

const showPopup = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
