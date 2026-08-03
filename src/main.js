import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import './base.css'
import './app.css'
import './practice.css'
import './exercise.css'

app.use(createPinia())
app.use(router)

app.mount('#app')
