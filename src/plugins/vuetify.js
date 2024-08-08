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

    }
}

const light = {
    dark: false,
    colors: {
        background: '#ECEFF1',
        hoverBackgroundColor: '#F5F5F5'
    }
}

const qickstudy = {
    dark: true,
    colors: {
        background: '#22272E',
        surface: '#2D333B',
        'on-surface': '#adbac7'
    }
}


export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            dark: dark,
            light: light,
            qickstudy: qickstudy
        }
    }
})