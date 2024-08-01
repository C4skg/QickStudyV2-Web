/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const dark = {
    dark: true,
    colors: {
        background: ''
    }
}

const light = {
    dark: false,
    colors: {
        background: '#eeeeee'
    }
}

export default createVuetify({
    theme: {
        defaultTheme: localStorage.getItem('theme') || 'dark',
        themes: {
            dark: dark,
            light: light
        }
    },
})
