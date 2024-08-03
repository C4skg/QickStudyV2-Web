<template>
    <div class="login">
        <v-img 
            class="mx-auto my-6"
            max-width="280"
            :src="logo"
        ></v-img>

        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">邮箱</div>

            <v-text-field density="compact" placeholder="xxxx@xx.xx" prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                type="email"
                :rules="[rules.required, rules.email]"
            ></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                密码

                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                    target="_blank">
                    忘记密码?</a>
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="登录密码" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

            <v-card class="mb-12" color="surface-variant" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption">
                    登录后，默认代表您同意了 "快学(QickStudy)平台用户协议" 的相关协议规定，如果存在问题或需要帮助，请点击此处访问帮助中心
                </v-card-text>
            </v-card>

            <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
                登 录
            </v-btn>

            <v-card-text class="text-center">
                <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
                    前往注册 <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </div>
</template>


<script setup>
    import logo from '@/assets/textlogo2x.png'
    import { ref } from 'vue'

    const visible = ref(false);

    const rules = {
        required: value => !!value || '请输入邮箱号',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || '无效邮箱号'
        }
    };

    
</script>

<style scoped>
.login{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>