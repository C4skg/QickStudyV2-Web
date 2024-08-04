<template>
  <v-card class="setting pa-3">
    <div class="text-h6 pa-2">设置</div>
    <div class="sheet">
      <div class="d-flex flex-row">
        <v-tabs v-model="tab" color="primary" direction="vertical">
          <v-tab prepend-icon="mdi-emoticon" text="偏好设置" value="偏好设置" color></v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="偏好设置">
            <v-radio-group v-model="radios" @update:modelValue="radiosChange">
              <v-card class="d-flex align-center pa-5 ga-5" flat>
                <v-card class="d-flex flex-column align-center justify-center" width="300" hover variant="outlined"
                  theme="light">
                  <v-card class="mx-auto" max-width="400" hover>
                    <v-card-item>
                      <v-card-title>
                        Card title
                      </v-card-title>

                      <v-card-subtitle>
                        Card subtitle secondary text
                      </v-card-subtitle>
                    </v-card-item>

                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </v-card-text>
                  </v-card>
                  <v-card-item>
                    <v-radio label="日间主题(默认)" value="light"></v-radio>
                  </v-card-item>
                </v-card>
                <v-card class="d-flex flex-column align-center justify-center" width="300" hover variant="outlined"
                  theme='dark'>
                  <v-card class="mx-auto" max-width="344" hover>
                    <v-card-item>
                      <v-card-title>
                        Card title
                      </v-card-title>

                      <v-card-subtitle>
                        Card subtitle secondary text
                      </v-card-subtitle>
                    </v-card-item>

                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </v-card-text>
                  </v-card>
                  <v-card-item>
                    <v-radio label="夜间主题" value="dark"></v-radio>
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

  const radiosChange = function (e) {
    settingStore.updateTheme(e);
  }

</script>

<style scoped>
  .setting {
    width: 100%;
    height: 100%;
    min-width: 800px;
    min-height: 500px;

    & .left {
      width: 20%;
      height: 500px;

      & .navbtn {
        width: 100%;
      }
    }
  }
</style>