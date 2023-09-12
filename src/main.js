import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/global.scss'
import './mock'
const app = createApp(App)

app.use(router)

app.mount('#app')
