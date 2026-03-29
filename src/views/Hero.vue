<template>
  <p class="text-mute mt-5">WEB DEVELOPER</p>
  <div class="flex flex-col justify-center min-h-[90%] overflow-y-hidden">
    <Header></Header>

    <div class="grid grid-cols-7 mt-5 place-items-center">
      <div class="col-span-3 px-5">
        <div>
          <i class="pi pi-arrow-down-right mb-3"></i>
          <p class="text-sm text-body">
            I build fast, modern web apps — from clean frontends to solid backends. Based in the
            Philippines, available for work worldwide.
          </p>
        </div>

        <div class="flex flex-row gap-5 my-5">
          <div
            v-for="(icon, index) in devIcons"
            :key="index"
            class="border-border border-2 p-2 bg-surface rounded-md"
          >
            <i :class="icon" class="text-3xl"></i>
          </div>
        </div>

        <div class="flex flex-row gap-5">
          <button class="border-border border-2 px-7 py-2 rounded-md text-sm">
            CONTACT <i class="pi pi-envelope ml-2"></i>
          </button>

          <button class="border-border border-2 px-7 py-2 rounded-md text-sm">
            GET RESUME <i class="pi pi-download ml-2"></i>
          </button>
        </div>
      </div>

      <div class="bg-bg rounded-xl col-span-4">
        <CodeEditor></CodeEditor>
      </div>
    </div>
  </div>

  <div class="flex flex-col text-end bottom-0 absolute right-0 overflow-hidden px-5">
    <p class="font-light">AVAILABLE FOR WORK</p>
    <h1 class="text-5xl font-bold">PORTFOLIO'26</h1>
  </div>
</template>

<script setup>
import CodeEditor from '@/components/Hero/CodeEditor.vue'
import Header from '@/components/Hero/Header.vue'

const devIcons = [
  'devicon-react-original',
  'devicon-vuejs-plain',
  'devicon-express-original',
  'devicon-laravel-original',
]
</script>

<style scoped></style>
