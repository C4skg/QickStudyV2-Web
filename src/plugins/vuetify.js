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

const OneDarkPro = {
    dark: true,
    colors: {
        background: '#22272E',
        surface: '#2D333B',
        'on-surface': '#adbac7'
    }
}

const AuroraDream = {
    colors: {
        primary: '#FF6F61',     // 主色 (珊瑚红)
        secondary: '#4A90E2',   // 次色 (深海蓝)
        accent: '#FFC857',      // 强调色 (亮金色)
        background: '#F4F7FA',  // 背景色 (淡蓝灰色)
        surface: '#FFFFFF',     // 表面色 (纯白色)
        error: '#D32F2F',       // 错误色 (红色)
        info: '#4A90E2',        // 信息色 (深海蓝)
        success: '#38A169',     // 成功色 (绿色)
        warning: '#FF9800',     // 警告色 (橙色)
        anchor: '#FF6F61',      // 链接颜色 (珊瑚红)

        // 自定义背景和表面颜色
        onBackground: '#333333', // 背景上的文本颜色 (深灰色)
        onSurface: '#7E8C8D',   // 表面上的文本颜色 (浅灰蓝色)
    },
    options: {
        customProperties: true
    }
}


export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            dark: dark,
            light: light,
            "OneDarkPro": OneDarkPro,
            "QICKSTUDY": AuroraDream
        }
    }
})