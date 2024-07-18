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

var ligth_test = {
  dark: false,
  colors:{
    background: '#ccc'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes:{
      ligth_test: ligth_test
    }
  },
})

