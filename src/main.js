import { createApp } from 'vue'
import App from './App.vue'
import About from './pages/About'
import CheckWeather from './pages/CheckWeather'
import { createRouter, createWebHashHistory } from 'vue-router'

const webApp = createApp(App)

const router = createRouter({
 history: createWebHashHistory(),
 routes: [
  { path: '/', component: CheckWeather },
  { path: '/about', component: About },
]
})

webApp.use(router)

webApp.mount('#app')
