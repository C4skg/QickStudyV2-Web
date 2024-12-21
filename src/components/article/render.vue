<template>
    <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
    <div 
        class="markdown-render vditor-reset"
        v-html="renderedData"
        v-else
    >
    </div>
</template>

<script setup>
    // import VditorPreview from 'vditor/dist/method.min'
    // import "vditor/dist/css/content-theme/dark.css";
    // import "vditor/dist/css/content-theme/light.css";
    // import "vditor/dist/css/content-theme/wechat.css";
    // import "vditor/dist/css/content-theme/ant-design.css";

    import { ref, watch } from 'vue'

    const props = defineProps({
        data: String,
    });

    const renderedData = ref(undefined),
          loading = ref(false);

    watch(
        ()=>props.data,
        (newVal, oldVal) => {
            if (newVal!== oldVal && newVal && typeof newVal === 'string') {
                loading.value = true;
                VditorPreview.md2html(newVal,{
                    math: {
                        inlineDigit: true,
                        engine: 'KaTeX'
                    },
                    theme: {
                        current: 'dark'
                    }
                }).then((html) => {
                    renderedData.value = html
                    loading.value = false;
                })
            }
        },
        {
            immediate: true,
            deep: true
        }
    );
</script>

<style scoped>
    .is-loading {
        background-color: red;
        opacity: 0.5;
    }
</style>