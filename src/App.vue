<template>
    <v-app>
        <v-main>
            <RouterView />
        </v-main>
    </v-app>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter();
    router.push('/login');
</script>