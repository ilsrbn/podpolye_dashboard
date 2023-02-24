<template>
  <n-layout style="height: 100svh" content-style="padding: 12px">
    <div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;">
    <n-card style="max-width: 560px; margin-inline: auto" @keyup.enter="login">
      <template #header>Login</template>
      <n-grid cols="1" y-gap="24">
        <n-gi>
          <n-input placeholder="Email" v-model:value="form.username" />
        </n-gi>
        <n-gi>
          <n-input placeholder="Password" type="password" v-model:value="form.password" />
        </n-gi>
      </n-grid>
      <template #footer>
        <n-button @click="login">Login</n-button>
      </template>
    </n-card>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import { NButton, NCard, NGi, NGrid, NInput, NLayout, useMessage } from "naive-ui";
import { useApi } from "@/composables/api";
import { useRouter } from "vue-router";
import {ApiError, LoginDto} from "@/api";
import {ref} from "vue";
import {processError} from "@/composables/error";

const message = useMessage()
const api = useApi()
const router = useRouter()

const form = ref<LoginDto>({
  username: '',
  password: ''
})

async function login() {
  try {
    const { access_token } =await api.authorization.login(form.value)
    api.request.config.TOKEN = access_token
    localStorage.setItem('authBearer', access_token)
    await router.push({ name: 'posts' })
  } catch (e) {
    const err = processError(e)
    if (Array.isArray(err)) err.forEach((error: string) => message.error(error))
    else message.error(err)
  }
}
</script>

<style scoped>

</style>