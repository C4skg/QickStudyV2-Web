<template>
    <v-card
        :append-icon="append_icon"
        class="mx-auto cardStyles"
        :prepend-icon="prepend_icon"
        :subtitle="subtitle"
        :title="title"
        max-width="400px"
    >
        <v-card-text>{{ context }}</v-card-text>
    </v-card>
</template>

<script setup>
    const props = defineProps({
        prepend_icon: String,
        append_icon: String,
        title: String,
        subtitle: String,
        context: String
    })

</script>

<style scoped>
    .cardStyles{
        margin: 1px 0;
    }
</style>