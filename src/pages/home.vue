<template>
    <navbar />
    <articleCard v-for="item in datas" :prepend_icon="item.prepend_icon" :append_icon="item.append_icon"
        :title="item.title" :subtitle="item.subtitle" :context="item.context" />
    <button v-on:click="updateData">点击添加数据</button>
    <br>
    <button v-on:click="randomUpdate">点击随机变换数据</button>
    <br>
    <button v-on:click="updateTheme">点击切换主题</button>

    
</template>

<script setup>
    import { ref } from 'vue'
    import { useTheme } from 'vuetify'
    import { useSettingStore } from '@/stores/setting';

    import articleCard from '@/components/articleCard'
    import navbar from '@/layouts/navbar'

    const datas = ref([]);
    const theme = useTheme();
    const settingStore = useSettingStore();

    const updateData = function (e) {
        datas.value.push({
            prepend_icon: "mdi-account",
            append_icon: "mdi-check",
            title: "testsetsets",
            subtitle: "subtitle test test test test",
            context: "context teset testsetsetset"
        })
    }
    const randomUpdate = function (e) {
        const limit = datas.value.length;
        if (limit == 0) {
            return false;
        }
        let pointer = ~~(Math.random() * limit);
        datas.value[pointer].title = "random changed"
    }

    const updateTheme = function (e) {
        let colorlist = Object.keys(theme.computedThemes.value),
            currentTheme = theme.global.name.value,
            pointer = colorlist.indexOf(currentTheme);

        if (pointer == -1) {
            return false;
        }
        theme.global.name.value = colorlist[(pointer + 1) % colorlist.length];
        settingStore.updateTheme(theme.global.name.value);
        return true;
    }

</script>

<style scoped>
    
</style>