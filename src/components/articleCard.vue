<template>
    <v-card 
        max-width="1000px" 
        class="d-flex article-card ga-5 py-3 px-4"
        flat
    >
        <div class="images" v-if="images">
            <img :src="images" class="rounded-lg">
        </div>
        <div class="content">
            <div class="title text-h5 font-weight-medium">
                {{ title }}
            </div>
            <div class="textbody mt-1 mb-3 text-start text-medium-emphasis">
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
            width: 240px;
            height: 140px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .content{
            min-width: 360px;
            width: calc(100% - 240px);
            .title{
                width: 70%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .textbody{
                width: 100%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                text-overflow: ellipsis;
            }
            .footer{
                width: 100%;
            }
        }
        @media screen and (max-width:600px) {
            .images{
                display: none;
            }
            .content{
                width: 100%;
            }
        }
    }
</style>