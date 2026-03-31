<template>
  <div class="flex flex-row overflow-y-hidden py-20 bg-black/20 px-5">
    <div class="mt-10 w-[50%] flex-col flex items-start">
      <header class="flex flex-row items-center justify-between">
        <div>
          <h1 class="text-5xl font-extrabold text-header">
            LET'S WORK <br />
            <span class="text-dim">TOGETHER.</span>
          </h1>
          <p class="text-sm text-body mt-5">
            Feel free to reach out to me for anything. Email me for serious work inquiries.
          </p>
        </div>
      </header>
      <div class="border-border border w-fit flex flex-row items-center py-2 px-7 rounded-md my-5">
        <div class="bg-header h-5 w-5 rounded-full animate-pulse"></div>
        <h1 class="ml-2 text-xs">AVAILABLE FOR WORK - MARCH'26</h1>
      </div>
      <div class="flex-1 grid grid-cols-2 gap-2 isolate w-full">
        <div
          class="border-border border rounded-md flex flex-row justify-between items-center px-5 py-2"
          v-for="(contact, index) in contactInfo"
          :key="index"
        >
          <div>
            <h3 class="text-sm text-mute">{{ contact.label }}</h3>
            <h1 class="text-lg">{{ contact.value }}</h1>
          </div>
          <i class="pi pi-arrow-up-right"></i>
        </div>
      </div>
    </div>
    <form class="flex-1 px-5 relative"  :on-submit ="send"">
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
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { supabase } from"@/components/utils/supabase"


const credentials = reactive<Record<string, string>>({
  username: "",
  email: "",
  message: ""
});


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
  const {error} =  await supabase.from('comments').insert(credentials)
credentials.username = ""
credentials.email = ""
credentials.message = ""
}
</script>

<style lang="scss" scoped></style>
