<template>
  <div
    class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
    @click="$emit('close')"
  >
    <div class="bg-elevated w-[30%] h-[30%] rounded-md">
      <div class="w-full py-3 px-2 flex flex-row justify-between h-[10%] items-center">
        <h1 class="font-bold text-header">FULL STACK</h1>
        <button class="h-5 w-5 bg-[#F78C6C] rounded-full" @click="$emit('close')"></button>
      </div>

      <div class="bg-bg h-full px-5 py-2 rounded-md rounded-tr-none rounded-tl-none">
        <h1>{{ projectTitle.toUpperCase() }}</h1>

        <div class="grid grid-cols-4 gap-2 mt-5">
          <div
            class="border-border border p-2 text-center rounded-md"
            v-for="(value, index) in stack"
            :key="index"
          >
            {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ExtraStack } from '@/types/project'

const { projectTitle, stack } = defineProps<ExtraStack>()
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped>
/* Fade in animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Optional: scale animation */
.modal-enter-active .bg-elevated,
.modal-leave-active .bg-elevated {
  transition: all 0.3s ease;
}

.modal-enter-from .bg-elevated {
  transform: scale(0.9);
  opacity: 0;
}

.modal-leave-to .bg-elevated {
  transform: scale(0.9);
  opacity: 0;
}
</style>
