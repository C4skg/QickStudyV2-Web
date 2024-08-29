<template>
    <navbar />
    <articleCard v-for="(item, index) in datas"
        :title="item.title" :subtitle="item.subtitle" :context="item.context" :images="item.images" :footer="item.footer"
    >
    </articleCard>
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

    // Commen function import
    import { getNowTime } from '@/utils/function.js'

    const datas = ref([]);
    const theme = useTheme();
    const settingStore = useSettingStore();


    const updateData = function (e) {
        datas.value.push({
            title: "testsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsets",
            context: "context teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetset".split(" ").join(""),
            images: "http://qickstudy.c4skg.top/themes/upload/2024-07-10/12768759e2ba0189a099ed59c46845c0.jpg",
            footer: {
                time: getNowTime(),
                author: "author",
                device: "device"
            }
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