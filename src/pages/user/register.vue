<template>
    <v-window v-model="step">
        <v-window-item :value="1">
            <div class="registerForm">
                <registerForm 
                    @emitButton="next"
                />
            </div>
        </v-window-item>
        <v-window-item :value="2">
            <div class="registerForm">
                <emailCaptcha
                    :email="email"
                    :token="token"
                    @emitBack="pre"
                />
            </div>
        </v-window-item>
    </v-window>
</template>

<script setup>
    import { ref } from 'vue'

    // compoents
    import registerForm from '@/layouts/registerForm.vue'
    import emailCaptcha from '@/components/captcha/emailCaptcha.vue'

    const step = ref(1),
          email = ref(""),
          token = ref("");


    const next = function(data){
        email.value = data.email;
        token.value = data.token;
        step.value ++;
        switch(step.value){
            case 1: return 'card-0'
            case 2: return 'card-1'
        }
    }
    const pre = function(){
        step.value --;
        switch(step.value){
            case 1: return 'card-0'
            case 2: return 'card-1'
        }
    }
    // next({
    //     email: 'test',
    //     token: "test123"
    // });

</script>

<style scoped>
    .registerForm{
        width: 100%;
        height: 100vh;
    }
</style>