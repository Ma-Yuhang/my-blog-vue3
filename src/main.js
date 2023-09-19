import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/global.scss'
import vloading from '@/directives/loading'
import pinia  from '@/store'
import './mock'

const app = createApp(App)

app.directive('loading', vloading)
app.use(router)
app.use(pinia)
app.mount('#app')
