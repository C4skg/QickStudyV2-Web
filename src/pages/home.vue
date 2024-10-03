<template>
    <navbar />
    <div class="d-flex flex-column ga-1 container pt-5">
        <articleCard v-for="(item, index) in datas"
            :articleId="item.articleId"
            :title="item.title" :subtitle="item.subtitle" :context="item.context" :images="item.images" :footer="item.footer"
        >
        </articleCard>
    </div>
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

    import articleCard from '@/components/article/articleCard.vue'
    import navbar from '@/layouts/navbar'

    // Commen function import
    import { getNowTime } from '@/utils/function.js'

    const datas = ref([]);
    const theme = useTheme();
    const settingStore = useSettingStore();


    const updateData = function (e) {
        datas.value.push({
            articleId: 1,
            title: "你好testsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsetstestsetsets",
            context: "context teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetsetcontext teset testsetsetset".split(" ").join(""),
            images: Math.random() > 0.5 ? "http://qickstudy.c4skg.top/themes/upload/2024-07-10/12768759e2ba0189a099ed59c46845c0.jpg" : '',
            footer: {
                userid: "1",
                avator: "http://qickstudy.c4skg.top/themes/upload/2024-07-10/12768759e2ba0189a099ed59c46845c0.jpg",
                author: "author",
                comment: "1234677,123",
                agreeNumber: "2313,123"
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
    .container{
        max-width: 1000px;
        margin: 0 auto;
    }
</style>