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
        background: '#22272E',
        hoverBackgroundColor: '#000000'
    }
}

const light = {
    dark: false,
    colors: {
        background: '#eeeeee',
        hoverBackgroundColor: '#F5F5F5'
    }
}

export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            dark: dark,
            light: light
        }
    }
})