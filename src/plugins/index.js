/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import overrides from '@/overrides'

export function registerPlugins(app) {
    app
        .use(overrides)
        .use(pinia)
        .use(vuetify)
        .use(router)
}
