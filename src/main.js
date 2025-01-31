/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)


setTimeout(() => {
    var loader = document.getElementsByClassName("process")[0];
    loader.setAttribute("data-complete","true")
    setTimeout(() => {
        app.mount('#app')
    },500)
},1500)