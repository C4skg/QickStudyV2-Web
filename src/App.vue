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
    router.push({ name: 'login' });
    theme.global.name.value = settingStore.theme;
</script>