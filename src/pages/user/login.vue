<template>
    <div class="login">
        <v-img class="mx-auto my-6" max-width="280" :src="logo"></v-img>

        <v-card class="mx-auto pa-10 pb-6" elevation="8" max-width="450" min-width="400" width="450" rounded="lg">
            <v-form
                v-model="forms"
                @submit.prevent="doLogin"
            >
                <v-text-field class="mb-3" density="compact" placeholder="请输入邮箱号" prepend-inner-icon="mdi-email-outline"
                    variant="outlined" type="email" :rules="[rules.requiredEmial, rules.email]" v-model="userEmail" ></v-text-field>

                <v-text-field class="mb-3" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'" density="compact" placeholder="登录密码"
                    prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                    :rules="[rules.requiredPassword]" v-model="userPassword" ></v-text-field>

                    <div class="forget d-flex justify-end mb-3">
                        <RouterLink :to="{name:'remember'}" class="text-caption text-decoration-none text-blue" rel="noopener noreferrer"
                        >忘记密码?</RouterLink>
                    </div>

                <v-btn class="mb-8 m" color="blue" size="large" variant="elevated" block :loading="loading" type="submit">
                    登 录
                </v-btn>
            </v-form>

            <v-card-text class="text-center">
                <RouterLink to="/register" class="text-blue text-decoration-none">
                    前往注册 <v-icon icon="mdi-chevron-right"></v-icon>
                </RouterLink>
            </v-card-text>

            <div class="toolbar">
                <v-btn class="overlayActivator" icon="mdi-cog">

                </v-btn>
                <v-overlay activator=".overlayActivator" scroll-strategy="none" class="align-center justify-center">
                    <settings />
                </v-overlay>
            </div>
        </v-card>
    </div>
</template>


<script setup>
    import logo from '@/assets/textlogo2x.png'
    import settings from '@/layouts/settings.vue'
    import { ref } from 'vue'
    import { login } from '@/api/user.js'

    const visible = ref(false),
          userEmail = ref(null),
          userPassword = ref(null),
          forms = ref(false),
          loading = ref(false);

    const rules = {
        requiredEmial: value => !!value || '请输入邮箱号',
        requiredPassword: value => !!value || '请输入密码',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || '无效邮箱号'
        }
    };

    console.log(import.meta.env)

    const doLogin = function(e){
        if( !forms.value ) return false;
        console.log(userEmail.value,userPassword.value)
        loading.value = true;
        const data = {
            username: userEmail.value,
            password: userPassword.value
        }
        login(data).then((response)=>{
            console.log(response)
            loading.value = false;
        }).catch((error)=>{
            loading.value = false;
        });
    }
</script>

<style scoped>
    .login {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>