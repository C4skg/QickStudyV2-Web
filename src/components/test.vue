<template>
    <v-sheet
        class="d-flex flex-column px-4 py-8 mx-auto"
        color="#181a1b"
        max-width="300"
        rounded="lg"
    >
        <v-container class="d-flex align-center">
            <v-progress-linear
                location="top"
                bg-color="#92aed9"
                buffer-color="#6a3e0b"
                buffer-opacity="1"
                :buffer-value="countstate.numbers + 1"
                color="#12512a"
                height="12"
                max="10"
                min="0"
                :model-value="countstate.numbers"
                rounded
            ></v-progress-linear>
            <div class="ms-4 text-h6">{{ countstate.numbers }}/10</div>
        </v-container>
        <v-container class="d-flex ">
            <v-text-field
                @update:modelValue="onUpdated"
                :model-value = countstate.numbers
            >
                <template v-slot:append>
                    <v-btn density="compact" icon="mdi-plus" v-on:click="Increment" ></v-btn>
                </template>
                <template v-slot:prepend>
                    <v-btn density="compact" icon="mdi-minus" v-on:click="Reduce"></v-btn>
                </template>
            </v-text-field>
        </v-container>
    </v-sheet>
</template>

<script setup>
    import { useCountStore } from "@/stores/app.js"

    const countstate = new useCountStore();

    const onUpdated = function(e){
        const value = parseInt(e);
        countstate.update(value);
    }
    function Increment(e){
        countstate.increment();
    }
    var Reduce = function(e){
        countstate.reduce();
    }
    countstate.$subscribe((mutation,state)=>{
        localStorage.setItem('useCountStore',JSON.stringify(state));
    })
    countstate.$onAction(({name,store,args,after,onError})=>{
        after(()=>{
            const value = store.numbers;
            if (value < 0 || isNaN(value)){
                countstate.$patch(JSON.parse(localStorage.getItem('useCountStore'),{
                    numbers: 0
                }))
            }else if( value > 10){
                countstate.$patch(JSON.parse(localStorage.getItem('useCountStore'),{
                    numbers: 0
                }))
            }
        })
    })
</script>