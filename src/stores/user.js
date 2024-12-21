import { defineStore } from "pinia";
import { updateToken,logout } from "@/api/user";

export const useUserInfoStore = defineStore("userinfo", {
    state: () => ({
        userId: null,
        nickName: null,
        token: null,
        avatar: null
    }),
    actions: {
        loginUser(...userInfo){
            const { userId, nickName, token, avatar } = userInfo;
            this.userId = userId;
            this.nickName = nickName;
            this.token = token;
            this.avatar = avatar;
        },
        updateToken(){
            updateToken();
        },
        logoutUser(){
            this.$reset();
        }
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
            this.$reset();
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