<template>
  <n-card>
    <n-button icon-placement="left" @click="createPost">
      <template #icon><n-icon><PlusRound /></n-icon></template>
      Create post
    </n-button>
  </n-card>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { NButton, NCard, NIcon, useMessage } from "naive-ui";
import { PlusRound } from "@vicons/material";
import { useApi } from "@/composables/api";
import {ApiError} from "@/api";
import {processError} from "@/composables/error";

const router = useRouter()
const message = useMessage()
const $api = useApi()

const createPost = async () => {
  try {
    const { id } = await $api.adminPost.createPost({})
    await router.push({ name: 'post', params: { id } })
  } catch (e) {
    const err = processError(e)
    if (Array.isArray(err)) err.forEach((error: string) => message.error(error))
    else message.error(err)
  }
}
</script>

<style scoped>

</style>