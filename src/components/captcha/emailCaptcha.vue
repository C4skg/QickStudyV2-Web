<template>
    <div class="emailCaptcha">
        <v-sheet class="mx-auto pa-5" elevation="4" max-width="600" width="500" rounded="lg">
            <div class="back cursor-pointer" @click="emitBack">
                <v-icon icon="mdi-less-than" />
            </div>
            
            <div class="body pa-5 pb-6 text-center">
                <div class="icon">
                    <v-icon icon="mdi-email" size="100"/>
                    <!-- <v-icon icon="mdi-security" size="100"/> -->
                </div>
                <h3 class="text-h5 mb-5 mt-5">验证你的邮箱</h3>
                
                <div class="text-subtitle-2 font-weight-light mb-3">
                    已向邮箱 {{ hideEmail(email) }} 发送验证码
                </div>

                <v-otp-input 
                    v-model="otp"
                    autofocus
                    @finish="whenFinish"
                    :loading="captchaLoading"
                    class="mb-8" divider="" length="6" variant="outlined" width="100%"></v-otp-input>

                <div class="text-caption">
                    <v-btn class="mb-8 m" color="primary" size="large" variant="elevated" block
                        :disabled="delayTime > 0"
                        :loading="loading"
                        @click="btn_sendMail"
                    >
                        {{ `发送验证码 ${delayTime <= 0 ? '' : `(${delayTime})`}` }}
                    </v-btn>
                </div>
            </div>
        </v-sheet>
    </div>
</template>

<script setup>
    import logo from '@/assets/textlogo2x.png'

    import { ref,shallowRef } from 'vue'
    import { useRouter } from 'vue-router'
    import Swal from "sweetalert2";

    import { sendEmail,doregister } from '@/api/user.js'

    const router = useRouter();

    const otp = shallowRef(''),
          delayTime = ref(0),
          loading = ref(false),
          captchaLoading = ref(false),
          emit = defineEmits(['emitBack']);


    const props = defineProps({
        email: String,
        token: String
    })


    const emitBack = function(e){
        emit('emitBack');
    }

    const hideEmail = function(email){
        if (!email) return email;
        let data = email.split('@')[0];
        let suffix = email.split('@').pop();
        data = data.slice(0,~~(data.length / 2)) + '*'.repeat(data.length/2 + 1);
        return `${data}@${suffix}`;
    }

    const inDelay = function(){
        let interval = setInterval(function(){
            const t = delayTime.value;
            if (t <= 0){
                clearInterval(interval)
            }else{
                delayTime.value --;
            }
        },1000);
    }

    const whenFinish = function(){
        captchaLoading.value = true
        const data = {
            captcha: otp.value
        }
        doregister(data).then((response)=>{
            if( response.code != 200 ){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${response.message}`,
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
                    router.push({name: 'login'})
                });
            }
            otp.value = ""
            captchaLoading.value = false;
        }).catch((error)=>{
            captchaLoading.value = false;
        })
    }

    const btn_sendMail = function(){
        if (delayTime.value > 0){
            return false;
        }
        if (!props.token || !props.email){
            return false;
        }
        const data = {
            token: props.token
        }
        loading.value = true;
        sendEmail(data).then((response)=>{
            if(response.code != 200){
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${response.message},错误码：${response.code}`,
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500
                });
                if (response.code == 4002){
                    delayTime.value = response.time ?? 60;
                    inDelay();
                }
            }else{
                delayTime.value = 60;
                inDelay();
            }
            loading.value = false;
        }).catch((error)=>{
            loading.value = false;
        })
    }

    btn_sendMail();

</script>

<style scoped>
    .emailCaptcha{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>