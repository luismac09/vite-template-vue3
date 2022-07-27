import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
