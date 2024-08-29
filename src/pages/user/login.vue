<template>
    <div class="login">
        <v-img class="mx-auto my-6" max-width="280" :src="logo"></v-img>

        <v-card class="mx-auto pa-10 pb-6" elevation="10" max-width="450" min-width="400" width="450" rounded="lg">
            <v-form
                v-model="forms"
                @submit.prevent="requestCaptcha"
            >
                <v-text-field class="mb-3" density="compact" placeholder="请输入邮箱号" prepend-inner-icon="mdi-email-outline"
                    variant="outlined" type="email" :rules="[rules.requiredEmial, rules.email]" v-model="userEmail" ></v-text-field>

                <v-text-field class="mb-3" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'" density="compact" placeholder="登录密码"
                    prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                    :rules="[rules.requiredPassword]" v-model="userPassword" ></v-text-field>

                    <div class="forget d-flex justify-end mb-3">
                        <RouterLink :to="{name:'user.remember'}" class="text-caption text-decoration-none text-secondary" rel="noopener noreferrer"
                        >忘记密码?</RouterLink>
                    </div>

                <v-btn class="mb-8 m activate" color="primary" size="large" variant="elevated" block :loading="loading" type="submit">
                    登 录
                </v-btn>
                <!-- user captcha -->
                <v-overlay 
                    v-model="captchaActive"
                    scroll-strategy="none" class="align-center justify-center"
                >
                    <captcha
                        @emitSure="getCaptcha"
                    />
                </v-overlay>
            </v-form>

            <v-card-text class="text-center">
                <RouterLink :to="{name:'user.register'}" class="text-secondary text-decoration-none">
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
    import { ref } from 'vue'
    import { login } from '@/api/user.js'
    import Swal from "sweetalert2";
    import { useRouter } from 'vue-router'

    // components
    import settings from '@/layouts/settings.vue'
    import captcha from '@/components/captcha/captcha.vue'
    

    const visible = ref(false),
          userEmail = ref(null),
          userPassword = ref(null),
          forms = ref(false),
          loading = ref(false);
        
    const router = useRouter();

    const rules = {
        requiredEmial: value => !!value || '请输入邮箱号',
        requiredPassword: value => !!value || '请输入密码',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || '无效邮箱号'
        }
    };

    const captchaActive = ref(false)

    const requestCaptcha = function(e){
        if( !forms.value ) return false;
        captchaActive.value = true
    }


    const getCaptcha = function(captcha){
        captchaActive.value = false
        if (!captcha) return false;
        const data = {
            username: userEmail.value,
            password: userPassword.value,
            captcha: captcha
        }
        loading.value = true;
        login(data).then((response)=>{
            if (response.code != 200){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${response.message},错误码：${response.code}`,
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500
                });
            }else{
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${response.message}`,
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500
                }).then(()=>{
                    router.push({name: 'home'})
                });
            }
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