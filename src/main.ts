// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Naive UI
import { create, NButton, NLayout, NLayoutHeader, NLayoutContent, NModal, NSpace, NGrid, NCard, NThing, NIcon, NProgress } from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NModal,
    NSpace,
    NGrid,
    NCard,
    NThing,
    NIcon,
    NProgress,
  ]
})

const app = createApp(App)
app.use(naive)
app.mount('#app')
