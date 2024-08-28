<template>
    <v-card 
        max-width="1000px" 
        class="d-flex article-card ga-5 py-3 px-4"
    >
        <div class="images" v-if="images">
            <img :src="images" class="rounded-lg">
        </div>
        <div class="content" :style="{width: images? '75%' : '100%'}">
            <div class="title text-h5 font-weight-medium">
                {{ title }}
            </div>
            <div class="textbody my-2 text-start text-medium-emphasis">
                {{ context }}
            </div>
            <div class="footer d-flex">
                <div class="time">
                    {{ footer.time }}
                </div>
                <div class="author">
                    {{ footer.author }}
                </div>
                <div class="device">
                    {{ footer.device }}
                </div>
            </div>
        </div>
    </v-card>
</template>

<script setup>
    const props = defineProps({
        title: String,
        context: String,
        images: String,
        footer: Object
    })

</script>

<style scoped>
    .article-card {
        margin: 20px 0;
        .images{
            width: 220px;
            height: 140px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content{
            .title{
                width: 70%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .textbody{
                width: 100%;
                overflow: hidden;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                text-overflow: ellipsis;
            }
            .footer{
                width: 100%;
            }
        }
    }
</style>