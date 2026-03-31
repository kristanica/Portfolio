<template>
  <div class="px-20">
    <div id="Hero">
      <HeroComp />
    </div>

    <div id="About">
      <AboutComp />
    </div>
    <div id="Project">
      <ProjectComp />
    </div>
  </div>

  <div id="Contact">
    <ContactComp></ContactComp>
  </div>
</template>

<script setup lang="ts">
import AboutComp from '@/components/screen/AboutComp.vue'
import ContactComp from '@/components/screen/ContactComp.vue'
import HeroComp from '@/components/screen/HeroComp.vue'
import ProjectComp from '@/components/screen/ProjectComp.vue'
</script>
