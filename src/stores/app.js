// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        //
    }),
})


export const useCountStore = defineStore('count', {
    state: () => (
        JSON.parse(localStorage.getItem('useCountStore'),{
            numbers: 0
        })
    ),
    actions: {
        increment(){
            this.numbers ++;
        },
        reduce(){
            this.numbers --;
        },
        update(nums){
            this.numbers = nums;
        }
    }
})