
<template>
    <navbar />
    <card
        v-for="item in datas"
        :prepend_icon="item.prepend_icon"
        :append_icon="item.append_icon"
        :title="item.title"
        :subtitle="item.subtitle"
        :context="item.context"
    />
    {{item}}
    <button v-on:click="updateData">点击添加数据</button>
    <br>
    <button v-on:click="randomUpdate">点击随机变换数据</button>
    <br>
    <button v-on:click="changeTheme">点击切换主题</button>
</template>

<script setup>
    import { useTheme } from 'vuetify'
    import { ref } from 'vue'
    import card from '@/components/card'
    import navbar from '@/layouts/navbar'

    const datas = ref([]);
    const theme = useTheme();
    const updateData = function(e){
        datas.value.push({
            prepend_icon: "mdi-account",
            append_icon: "mdi-check",
            title: "testsetsets",
            subtitle: "subtitle test test test test",
            context: "context teset testsetsetset"
        })
    }
    const randomUpdate = function(e){
        const limit = datas.value.length;
        if (limit == 0){
            return false;
        }
        let pointer = ~~(Math.random()*limit);
        datas.value[pointer].title = "random changed"
    }
    const changeTheme = function(e){
        let colorlist = Object.keys(theme.computedThemes.value);
        let currentTheme = theme.global.name.value;
        let pointer = colorlist.indexOf(currentTheme);
        if(pointer == -1){
            return false;
        }
        theme.global.name.value = colorlist[(pointer+1)%colorlist.length];
        return true;
    }
</script>