<template>
    <v-app>
        <v-main>
            <RouterView />
        </v-main>
    </v-app>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { useSettingStore } from '@/stores/setting.js'
    import { useTheme } from 'vuetify'

    const router = useRouter(),
          settingStore = useSettingStore(),
          theme = useTheme();
    // set theme
    console.log(settingStore.theme);
    theme.global.name.value = settingStore.theme;
    localStorage.setItem('isLogined', true);
</script>