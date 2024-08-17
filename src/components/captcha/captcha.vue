<template>
    <v-card class="mx-auto captcha" elevation="8" max-width="350" min-width="350" rounded="lg" v-if="!loaded">
        <v-card-title>
            请完成验证
        </v-card-title>
        <v-card-item>
            <v-form
                v-model="forms"
                @submit.prevent="captchaButton"
            >
                <v-text-field class="mb-3" density="compact" placeholder="请输入验证码" prepend-inner-icon="mdi-security"
                    variant="outlined" type="email" :rules="[rules.required]" hide-details autofocus
                    v-model="captcha"></v-text-field>

                <v-card-item class="hovering">
                    <v-img class="cursor-pointer" width="100%" cover :src="captchaImage" @click="updateCaptcha"></v-img>
                    <v-tooltip text="点击刷新验证码" activator="parent" location="top"></v-tooltip>
                </v-card-item>


                <v-btn 
                    class="mb-8 mt-2" max-width="50%" color="blue" size="large" variant="elevated" block
                    :disabled="!forms"
                    type="submit"
                >
                    确 定
                </v-btn>
            </v-form>
        </v-card-item>

    </v-card>
    <v-card class="loading pa-3" v-if="loaded">
        <div class="text-center">
            <v-progress-circular :rotate="360" :size="50" :width="5" color="blue" indeterminate>
              <template v-slot:default> <v-icon icon="mdi-security" size="30" /> </template>
            </v-progress-circular>
          </div>
    </v-card>
</template>

<script setup>
    import { ref,defineEmits } from 'vue'
    import Swal from "sweetalert2";

    import { getCaptchaImage, updateCaptchaImage } from '@/api/captcha.js'
    const loaded = ref(true),
          forms = ref(false),
          captcha = ref(""),
          captchaImage = ref("");

    const rules = {
        required: value => !!value
    }

    const updateCaptcha = function (e) {
        const getImage = function () {
            const imagedata = getCaptchaImage().then((response) => {
                if (response.format != 'base64' || !response.image) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: `验证错误`,
                        showConfirmButton: false,
                        toast: true,
                        timer: 1500
                    });
                    captchaButton();
                    return false;
                }
                captchaImage.value = `data:image/${response.filetype};${response.format},${response.image}`;
                loaded.value = false;
            });
        }
        if (e?.isTrusted) {
            updateCaptchaImage().then((response) => {
                if (response.code == 200 ) {
                    getImage();
                } else {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: `验证错误`,
                        showConfirmButton: false,
                        toast: true,
                        timer: 1500
                    });
                    captchaButton();
                }
            }).catch((error)=>{
                console.log('catcha error')
                captchaButton();
            });
        } else {
            getImage();
        }

    }

    updateCaptcha();
    const emit = defineEmits(['emitSure'])
    const captchaButton = function(){
        emit('emitSure',captcha.value);
    }
</script>

<style scoped>
    .captcha {
        .hovering:hover {
            background-color: rgb(var(--v-theme-background));
        }
    }
</style>