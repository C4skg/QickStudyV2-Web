import { defineStore } from "pinia";

export const useSettingStore = defineStore('setting',{
    state: () => ({
        theme: 'light'
    }),
    actions: {
        updateTheme(name){
            this.theme = name;
        }
    },
    persist: true,
});