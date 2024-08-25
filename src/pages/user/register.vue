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
                    :email="registerStore.email"
                    :token="registerStore.token"
                    @emitBack="pre"
                />
            </div>
        </v-window-item>
    </v-window>
</template>

<script setup>
    import { ref } from 'vue'

    import { useRegisterStore } from '@/stores/user'

    // compoents
    import registerForm from '@/layouts/registerForm.vue'
    import emailCaptcha from '@/components/captcha/emailCaptcha.vue'

    const registerStore = useRegisterStore();

    const step = ref(1);


    const next = function(){
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
    if ( registerStore.getTokenTime() >= 3600 ){
        registerStore.clear();
    }else if ( registerStore.isValid()){
        next()
    }
</script>

<style scoped>
    .registerForm{
        width: 100%;
        height: 100vh;
    }
</style>