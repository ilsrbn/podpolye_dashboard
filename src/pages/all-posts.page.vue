<template>
  <n-spin :show="loading">
    <main>
    <n-grid cols="12" x-gap="12" y-gap="12" item-responsive responsive="screen">
      <n-gi span="12">
        <create-post />
      </n-gi>
      <n-gi v-for="post in posts" :key="post.id" span="12 m:6 l:4">
        <n-card>
          <template #cover>
            <img v-if="!post.attachments.length" src="https://via.placeholder.com/150 " alt="Placeholder">
            <img v-else :src="post.attachments[0].file_url" style="max-height: 350px; object-fit: cover" alt="Image">
          </template>
          <template #header >
            <n-gradient-text type="info" style="overflow: hidden; max-width: 100%">
              {{ post.title }}
            </n-gradient-text>
          </template>
          <template #header-extra>
            <n-icon :depth="post.posted ? '1' : '5'">
              <View v-if="post.posted" />
              <view-off v-else />
            </n-icon>
          </template>
          <n-ellipsis :line-clamp="4" :tooltip="false">
            {{ post.description }}
          </n-ellipsis>
          <template #footer>
            <n-gradient-text type="info">
              {{ new Date(post.event_date).toLocaleDateString() }} ({{ getRelativeTimeString(new Date(post.event_date)) }})
            </n-gradient-text>
          </template>
          <template #action>
            <n-grid cols="2" x-gap="12">
              <n-gi>
                <n-button style="width: 100%" @click="router.push({ name: 'post', params: { id: post.id } })" icon-placement="left" quaternary>
                <template #icon>
                  <n-icon><View /></n-icon>
                </template>
                View
              </n-button>
              </n-gi>
              <n-gi>
                <n-popconfirm
                    @positive-click="deletePost(post.id)"
                >
                  <template #trigger>
                    <n-button style="width: 100%" icon-placement="left" quaternary type="error">
                      <template #icon>
                        <n-icon><Delete /></n-icon>
                      </template>
                      Delete
                    </n-button>
                  </template>
                  Are you sure you want to delete this post?
                </n-popconfirm>
              </n-gi>
            </n-grid>
          </template>
        </n-card>
      </n-gi>
    </n-grid>
  </main>
  </n-spin>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  NButton,
  NCard,
  NEllipsis,
  NGi,
  NGradientText,
  NGrid,
  NIcon,
  NPopconfirm,
  NSpin,
  NText,
  useMessage
} from "naive-ui";
import { View, ViewOff, Delete } from '@vicons/carbon'
import { useApi } from "@/composables/api";
import CreatePost from "@/components/create.post.vue";
import { ref } from "vue";
import { ApiError, Post } from "@/api";
import {processError} from "@/composables/error";
import { useDate } from "@/composables/date";

const router = useRouter()
const message = useMessage()
const $api = useApi()
const loading = ref<boolean>(false)
const {getRelativeTimeString } = useDate()

const posts = ref<Post[]>(await $api.adminPost.getAllPosts())

const deletePost = (id: number) => {
  loading.value = true
  try {
    $api.adminPost.deletePostById(id.toString()).then(() => {
      $api.adminPost.getAllPosts().then(resp => {
        posts.value = resp
        message.info('Post deleted')
      })
    })

  } catch (e) {
    const err = processError(e)
    if (Array.isArray(err)) err.forEach((error: string) => message.error(error))
    else message.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>

</style>