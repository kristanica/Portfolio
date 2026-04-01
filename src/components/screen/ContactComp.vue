<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex flex-col w-full mb-10">
      <motion.div
        class="flex flex-row items-center gap-2"
        :initial="{ opacity: 0, x: -50 }"
        :whileInView="{ opacity: 1, x: 0 }"
      >
        <div class="h-px w-5 bg-linear-to-r from-transparent via-purple-500 to-purple-500"></div>
        <p>Contact Me</p>
      </motion.div>
      <motion.div :initial="{ opacity: 0, x: -50 }" :whileInView="{ opacity: 1, x: 0 }">
        <h1 class="text-5xl font-extrabold text-header uppercase tracking-tight">
          Let's work <br />
          <span
            class="bg-primary-gradient bg-clip-text text-gradient text-transparent font-fraunces"
            >together.</span
          >
        </h1>
      </motion.div>
      <motion.p
        class="text-sm text-body mt-5 max-w-md"
        :initial="{ opacity: 0, x: 50 }"
        :whileInView="{ opacity: 1, x: 0 }"
      >
        Feel free to reach out to me for anything. Email me for serious work inquiries.
      </motion.p>
      <motion.div
        :initial="{ opacity: 0, x: -50 }"
        :whileInView="{ opacity: 1, x: 0 }"
        class="border-border border w-fit flex flex-row items-center py-2 px-7 rounded-md my-5 bg-elevated/20"
      >
        <div class="bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
        <h1 class="ml-2 text-[10px] font-bold tracking-widest">AVAILABLE FOR WORK</h1>
      </motion.div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="grid grid-cols-1 grid-cols-2 gap-4 h-fit">
        <motion.div
          class="border-border border rounded-md w-full flex flex-row justify-between items-center px-5 py-4 h-full hover:bg-elevated/10 transition-colors cursor-pointer"
          v-for="(contact, index) in contactInfo"
          :key="index"
          :initial="{ opacity: 0, x: -20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{ type: 'spring', stiffness: 80, damping: 30, mass: 1, delay: 0.2 * index }"
        >
          <div class="overflow-hidden">
            <h3 class="text-[10px] uppercase tracking-wider text-mute mb-1">{{ contact.label }}</h3>
            <h1 class="text-sm font-medium truncate">{{ contact.value }}</h1>
          </div>
          <i class="pi pi-arrow-up-right text-mute"></i>
        </motion.div>
      </div>

      <motion.form
        :initial="{ opacity: 0, x: 20 }"
        :whileInView="{ opacity: 1, x: 0 }"
        class="flex flex-col gap-4 px-0 lg:px-5"
        @submit.prevent="send"
      >
        <div class="flex flex-col">
          <label class="mb-2 text-xs font-semibold text-header">Email</label>
          <input
            v-model="credentials.email"
            type="email"
            required
            placeholder="your@email.com"
            class="w-full border border-border bg-transparent text-body rounded-md px-4 py-3 focus:outline-none placeholder:text-mute/50 transition-all duration-200"
          />
        </div>

        <div class="flex flex-col">
          <label class="mb-2 text-xs font-semibold text-header">Username</label>
          <input
            v-model="credentials.username"
            type="text"
            required
            placeholder="John Doe"
            class="w-full border border-border bg-transparent text-body rounded-md px-4 py-3 focus:outline-none placeholder:text-mute/50 transition-all duration-200"
          />
        </div>

        <div class="flex flex-col">
          <label class="mb-2 text-xs font-semibold text-header">Message</label>
          <textarea
            v-model="credentials.message"
            required
            rows="5"
            placeholder="How can I help you?"
            class="w-full border border-border bg-transparent text-body rounded-md px-4 py-3 focus:outline-none placeholder:text-mute/50 transition-all duration-200 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="border border-border font-bold text-xs tracking-widest rounded-md px-4 py-4 w-full md:w-fit md:px-10 hover:opacity-90 duration-200 transition-all active:scale-95"
        >
          SEND MESSAGE
        </button>
      </motion.form>
    </div>
    <footer class="w-full flex-col flex items-center justify-center mt-20 p-20">
      <div
        class="bg-linear-to-r from-transparent via-dim/10 my-20 to-transparent p-0.5 rounded-lg w-full"
      ></div>
      <motion.p :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }">
        © 2026 Leewell M. Caputol. Implemented with Vue.
      </motion.p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { supabase } from '@/components/utils/supabase'
import { motion } from 'motion-v'

const credentials = reactive<Record<string, string>>({
  username: '',
  email: '',
  message: '',
})

const contactInfo: Record<string, string>[] = [
  {
    label: 'Email',
    value: 'leewellcaputol21@gmail.com',
  },
  {
    label: 'Discord',
    value: '@kristanica',
  },
  {
    label: 'GitHub',
    value: '@kristanica',
  },
  {
    label: 'LinkedIn',
    value: '/in/Leewell',
  },
]

const send = async (e: any) => {
  e.preventDefault()
  console.log('test')
  const { error } = await supabase.from('comments').insert(credentials)
  credentials.username = ''
  credentials.email = ''
  credentials.message = ''
}
</script>

<style lang="scss" scoped></style>
<!-- <form class="flex-1 px-5 relative "  :on-submit ="send"">
      <div class="mb-4">
        <label class="mb-2">Email</label>
        <input
        v-model="credentials.email"
          required
          class="w-full border border-border text-body rounded-md px-4 py-3 focus:outline-none focus:border-border placeholder:text-mute transition-all duration-200 resize-none"
        />
      </div>
      <div class="mb-4">
        <label class="mb-2">Username</label>
        <input
        v-model ="credentials.username"
                  required

          class="w-full border border-border text-body rounded-md px-4 py-3 focus:outline-none focus:border-border placeholder:text-mute transition-all duration-200 resize-none"
        />
      </div>
      <div class="mb-4">
        <labe class="mb-2">Message</labe>
        <textarea
        v-model ="credentials.message"
        required
          rows="5"
          class="w-full border border-border text-body rounded-md px-4 py-3 focus:outline-none focus:border-border placeholder:text-mute transition-all duration-200 resize-none"
        />
      </div>
      <button
        @click="send"
        class="border border-border text-body rounded-md px-4 py-3 w-[20%] bg-bg cursor-pointer hover:bg-elevated duration-200 transition-colors"
      >
        SEND
      </button>
    </form> -->
