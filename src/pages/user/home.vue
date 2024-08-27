<template>
    UserId: {{ userId }} , type: {{ typeof userId }}
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const userId = ref(route.params.userId);
    
    if (!userId.value) {
        userId.value = undefined;
    }

</script>

<style scoped>
    
</style>