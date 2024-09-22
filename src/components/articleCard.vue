<template>
    <v-card 
        max-width="1000" 
        class="d-flex article-card ga-5 px-4 py-2"
        flat
    >
        <div class="images" v-if="images">
            <img :src="images" class="rounded-lg">
        </div>
        <div class="content d-flex flex-column" :style="{
            width: images? 'calc(100% - 240px)' : '100%'
        }">
            <div class="title mb-1 text-h5 font-weight-medium">
                <router-link :to="{ name: 'article.detail', params: { articleId: articleId } }" target="_blank">
                    {{ title }}
                </router-link>                
            </div>

            <div class="textbody text-medium-emphasis">
                {{ context }}
            </div>
            <div class="footer d-flex pt-2 ga-10 align-center">
                <!-- <div class="control"></div> -->
                <v-btn variant="text pa-0" class="text-none" :to="{ name: 'user.home' , params: { userId: footer.userid } }">
                    <div class="authorinfo d-flex align-center ga-2">
                        <div class="avator">
                            <img :src="footer.avator" class="rounded-circle">
                        </div>
                        <div class="username">
                            {{ footer.author }}
                        </div>
                    </div>
                </v-btn>
                <div class="thumb">
                    <v-btn flat prepend-icon="mdi-triangle">
                        {{ footer.agreeNumber }}
                    </v-btn>
                </div>
                <div class="comment">
                    <v-btn flat prepend-icon="mdi-comment-multiple">
                        {{ footer.comment }}
                    </v-btn>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script setup>
    
    const props = defineProps({
        articleId: Number,
        title: String,
        context: String,
        images: String,
        footer: Object
    })

</script>

<style scoped>
    .article-card {
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
            padding: 0;
            .title{
                width: 70%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                cursor: pointer;
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
                .authorinfo{
                    cursor: pointer;
                    .avator{
                        width: 30px;
                        height: 30px;
                    }
                }
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