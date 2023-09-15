import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/global.scss'
import vloading from '@/directives/loading' 
import './mock'
const app = createApp(App)

app.directive('loading', vloading)
app.use(router)

app.mount('#app')
