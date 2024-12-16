<template>
    UserId: {{ userId }} , type: {{ typeof userId }}
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute,useRouter } from 'vue-router';
    import { useUserInfoStore } from '@/stores/user.js';

    const route = useRoute(),
          router = useRouter();

    const userId = ref(route.params.userId);

    const userInfoStore = useUserInfoStore();

    userInfoStore.logoutUser()
    if (!userId.value) {
        // userId.value = undefined;
        router.push({name: '404'})
    }

</script>

<style scoped>
    
</style>