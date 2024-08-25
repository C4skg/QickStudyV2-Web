<template>
    <v-card class="setting pa-3" width="100%" height="100%">
        <div class="text-h6 pa-2">设置</div>
        <div class="sheet">
            <div class="d-flex flex-row container">
                <v-tabs v-model="tab" color="primary" direction="vertical" bg-color="background" slider-color="#f78166">
                    <v-tab prepend-icon="mdi-emoticon" text="偏好设置" value="偏好设置" color></v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="偏好设置">
                        <v-radio-group v-model="radios" @update:modelValue="radiosChange">
                            <v-card class="d-flex align-center pa-5 ga-5 flex-wrap" max-width="830px" flat>
                                <v-card 
                                    class="d-flex flex-column align-center justify-center" width="240" height="180"
                                    hover variant="outlined"
                                    v-for="(name,index) in themeLists"
                                    :theme="name"
                                    >
                                    <v-card class="stylecard" width="100%" height="100%">
                                        <div class="bar"></div>

                                        <div class="center">
                                            <div class="main"></div>
                                            <div class="drop"></div>
                                        </div>
                                    </v-card>
                                    <v-card-item>
                                        <v-radio :label="name" :value="name"></v-radio>
                                    </v-card-item>
                                </v-card>
                            </v-card>
                        </v-radio-group>
                    </v-tabs-window-item>
                </v-tabs-window>
            </div>
        </div>
    </v-card>
</template>

<script setup>
    import { useTheme } from 'vuetify'
    import { useSettingStore } from '@/stores/setting.js'
    import { ref } from 'vue'

    const theme = useTheme(),
        settingStore = useSettingStore(),
        tab = ref('偏好设置'),
        radios = ref(theme.global.name);

    const themeLists = Object.keys(theme.computedThemes.value);

    const radiosChange = function (e) {
        settingStore.updateTheme(e);
    }

</script>

<style scoped>
    .setting {
        width: 100%;
        height: 600px;
        min-width: 800px;
        min-height: 500px;

        .container {
            width: 100%;
            height: 400px;
        }
        
    }
    .stylecard{
        background: rgb(var(--v-theme-background));
        & .bar{
            width: 100%;
            height: 20px;
            background-color: rgb(var(--v-theme-surface));
        }
        & .center{
            width: 80%;
            height: calc(100% - 40px);
            margin: 10px auto;
            display: flex;
            justify-content: space-between;
            & .main{
                width: 70%;
                height: 100%;
                background-color: rgb(var(--v-theme-surface));
                border-radius: 5px;
            }
            & .drop{
                width: 25%;
                height: 40%;
                background-color: rgb(var(--v-theme-surface));
                border-radius: 5px;
            }
        }
    }
</style>