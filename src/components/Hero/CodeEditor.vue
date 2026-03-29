<template>
  <div
    class="flex flex-row items-center py-1 px-5 justify-between bg-elevated rounded-tr-xl rounded-tl-xl"
  >
    <div class="flex flex-row gap-2">
      <div class="bg-[#F78C6C] h-2 w-2 rounded-full"></div>
      <div class="bg-[#FFCB6B] h-2 w-2 rounded-full"></div>
      <div class="bg-[#C3E88D] h-2 w-2 rounded-full"></div>
    </div>

    <p class="text-sm">Leewell_portfolio.ts</p>
  </div>
  <div class="mx-5">
    <pre class="line-numbers text-[]"><code class="language-typescript">// Portfolio config
const portfolio: Portfolio = {
  name: "Leewell Caputol",
  role: "Full stack developer",
  stack: ["React.js", "React Native", "Laravel", "Vue", "Express"],
  open: true,
  passionate: true
}

export default getPortfolio(portfolio)</code></pre>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      Prism.highlightAll()
    })
  },
}
</script>

<style scoped>
/* Change font size */
pre[class*='language-'] {
  font-size: 12px; /* Adjust this value */
}
pre[class*='language-'],
code[class*='language-'] {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important; /* some themes use shadow */
  padding: 0 !important; /* optional if you want exact container padding */
}
code[class*='language-'] {
  font-size: 12px; /* Adjust this value */
}

/* Optional: Adjust line height for better readability */
pre[class*='language-'] {
  font-size: 12px;
  line-height: 1.5;
}

/* Optional: Adjust line numbers size */
.line-numbers .line-numbers-rows {
  font-size: 12px;
}
</style>
