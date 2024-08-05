<template>
    <v-empty-state>
        <template v-slot:title>
            <v-icon icon="mdi-emoticon-sad" size="100" color="error"></v-icon>
            <div class="text-subtitle-2 mt-8">
                404 Page Not Found
            </div>
        </template>
        <template v-slot:text>
            <div class="text-caption">
                当前页面不存在，你可以点击下方按钮回到上一级
            </div>
        </template>

        <template v-slot:actions>
            <v-btn 
                class="text-none" color="white" elevation="1" rounded="lg" size="small" text="返回上一级"
                width="100"
                @click="goBackTo"
                ></v-btn>

            <v-btn
                class="text-none" elevation="1" rounded="lg" size="small" text="平台首页" width="100"
                :to="{name:'home'}"
            >
            </v-btn>
        </template>
    </v-empty-state>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const goBackTo = function(e){
        router.back();
    }
</script>