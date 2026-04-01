<template>
  <div
    class="fixed right-0 flex flex-col justify-between element w-[70%] lg:w-[35%] top-0 h-screen bg-elevated z-50 px-5 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-bg [&::-webkit-scrollbar-thumb]:bg-elevated [&::-webkit-scrollbar-thumb]:rounded-full"
  >
    <div class="mt-10">
      <button
        @click="$emit('close')"
        class="border-2 border-ghost mb-10 px-3 text-center text-xs py-1 rounded-md w-fit cursor-pointer"
      >
        X
      </button>
      <h1 class="text-3xl font-bold">{{ projectTitle }}</h1>
      <p class="text-sm my-3">{{ year }}</p>
      <div class="grid grid-cols-5 text-xs gap-2 my-2">
        <p
          v-for="(tech, index) in stack"
          :key="index"
          class="p-1 border border-body rounded-md text-center"
        >
          {{ tech }}
        </p>
      </div>

      <div class="w-full h-80 bg-black/40"></div>
      <div>
        <p class="text-mute font-semibold my-5">// Overview</p>
        <p>{{ description }}</p>
      </div>
    </div>

    <div class="grid grid-cols-2 mt-30 mb-10">
      <button class="bg-mute py-2 rounded-md border-border border text-header mx-2">LIVE</button>
      <button class="bg-mute py-2 rounded-md border-border border text-header mx-2">GITHUB</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/project'

const { projectTitle, description, stack, year } = defineProps<Project>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<style lang="scss" scoped>
.element {
  background-color: #0f0f0f;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.21) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.21) 1px, transparent 1px);
  background-size: 32px 32px;
}
</style>
