<template>
    <card class="error_500 d-flex align-center justify-center">
        <v-stepper
            class="no-box-shadow"
            model-value="2"
            width="80%"
            bg-color="transparent"
            non-linear
        >
            <v-stepper-header>
                <v-stepper-item title="本地网络" subtitle="您自身网络" value="1" complete color="green"></v-stepper-item>
                <v-divider></v-divider>
                <v-stepper-item title="Web服务器" subtitle="本网站服务器" value="2"></v-stepper-item>
                <v-divider></v-divider>
                <v-stepper-item :rules="[() => false]" subtitle="网络连接丢失" title="远程服务器"
                    value="3"></v-stepper-item>
            </v-stepper-header>
        </v-stepper>
    </card>
</template>

<script setup>

</script>

<style scoped>
    .error_500 {
        width: 100%;
        height: 100vh;
        .no-box-shadow{
            box-shadow: none;
        }
    }
</style>