import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("userinfo", {
    state: () => ({
        
    }),
    actions: {

    }
});

export const useRegisterStore = defineStore("register", {
    state: () => ({
        email: null,
        token: null,
        time: null
    }),
    actions: {
        clear(){
            this.email = null;
            this.token = null;
            this.time = null;
        },
        update(email,token){
            this.email = email;
            this.token = token;
            this.time = new Date().getTime();
        },
        isValid(){
            return (this.email && this.token);
        },
        getTokenTime(){
            if ( !this.time ){
                return 3600;
            }
            return parseInt((new Date().getTime() - this.time) / 1000)
        }
    },
    persist: true
});