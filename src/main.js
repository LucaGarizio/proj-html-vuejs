import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap styles
import 'bootstrap' // Import Bootstrap JavaScript (optional)

import { router } from './router'

import App from './App.vue'

createApp(App).use(router).mount('#app')
