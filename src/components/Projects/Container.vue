<template>
  <div class="w-[80%]">
    <div
      class="bg-bg px-5 py-6 rounded-b-md flex flex-col border-border border hover:-translate-y-2 hover:border-elevated transition-all duration-200 ease-in cursor-pointer"
    >
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

  <Teleport to="body">
    <Transition name="modal">
      <ExtraStack
        :projectTitle="projectTitle"
        :stack="stack"
        @close="showPopup = false"
        v-if="showPopup"
      />
    </Transition>
  </Teleport>
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

<style lang="scss" scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
