<template>
    这是第 {{ articleId }} 篇文章详情页

    <div class="render">
        <render 
            :data = "data"
        />
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    //api
    import { getArticleData } from '@/api/article.js';

    //components
    import render from '@/components/article/render.vue'

    const route = useRoute();

    const articleId = ref(route.params.articleId);

    const data = ref(undefined);

    document.title = `第 ${articleId.value} 篇文章详情页`;

    getArticleData().then( (response) => {
        data.value = response.context;
    });
    
    
</script>