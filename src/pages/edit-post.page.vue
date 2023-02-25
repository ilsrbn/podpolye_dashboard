<template>
 <n-grid cols="2" x-gap="12" y-gap="12" @keyup.enter="submit">
   <n-form-item-gi span="2 md:1" label="Title">
     <n-input placeholder="Title" v-model:value="post.title" />
   </n-form-item-gi>
   <n-form-item-gi span="2 md:1" label="Date">
     <n-date-picker style="width: 100%" placeholder="Event date"  type="datetime" :value="time" @update:value="setTime" />
   </n-form-item-gi>
   <n-form-item-gi label="Description" span="2">
     <n-input type="textarea" placeholder="Description" v-model:value="post.description" />
   </n-form-item-gi>
   <n-form-item-gi span="2" label="Status">
     <n-switch v-model:value="post.posted">
       <template #checked>
         Posted
       </template>
       <template #unchecked>
         Hidden
       </template>
     </n-switch>
   </n-form-item-gi>
   <n-form-item-gi span="4" label="Images (Max: 10)">
     <n-upload
         accept="image/*"
         :max="10"
         ref="fileUploader"
         :default-file-list="attachments"
         list-type="image-card"
         :default-upload="false"
         multiple
         @change="handleUpload"
         @remove="handleRemove"
     >
       Click to Upload
     </n-upload>
   </n-form-item-gi>
   <n-form-item-gi span="2">
     <n-button type="primary" @click="submit">Submit</n-button>
   </n-form-item-gi>
 </n-grid>
</template>

<script setup lang="ts">
import { useApi } from "@/composables/api";
import { useRoute, useRouter } from "vue-router";
import {NButton, NDatePicker, NFormItemGi, NGi, NGrid, NInput, NSwitch, NUpload, useMessage} from "naive-ui";
import type { UploadFileInfo } from "naive-ui";
import {computed, ref} from "vue";
import {Post} from "@/api";
import {processError} from "@/composables/error";

const api = useApi()
const routeId = useRoute().params.id as string
const router = useRouter()
const message = useMessage()

type PostForm = Pick<Post, 'title' | 'event_date' | 'description' | 'posted' | 'attachments'>

const post = ref<PostForm>(await api.adminPost.getPostById(routeId))
const attachments = ref<UploadFileInfo[]>(post.value.attachments.map((attachment) => ({
  id: attachment.id.toString(),
  url: attachment.file_url,
  name: attachment.file,
  status: "finished"
})))
const attachmentsToUpload = ref<UploadFileInfo[]>([])
const attachmentsToRemove = ref<string[]>([])
const time = computed(() => {
  return new Date(post.value.event_date).getTime()
})
const setTime = (v: number) => {
  post.value.event_date = new Date(v).toISOString()
  console.log(post.value.event_date)
}
const handleUpload =  (data: { fileList: UploadFileInfo[] }) => {
  attachmentsToUpload.value = data.fileList
}

const handleRemove = (data :{ file: UploadFileInfo, fileList: Array<UploadFileInfo> }) => {
  if (data.file.id && !data.file.batchId) attachmentsToRemove.value.push(data.file.id)
}

const uploadFiles = async () => {
  if (!attachmentsToUpload.value.length) return false
  const formData = new FormData()
  const blobs = Array.from(attachmentsToUpload.value.map(el => el.file) as File[])
  blobs.forEach((file) => {
    formData.append('files', file)
  })
  await api.adminAttachment.attachmentControllerCreate(routeId, { files: blobs })
  attachmentsToUpload.value = []
}

const removeFiles = async () => {
  if (!attachmentsToRemove.value.length) return false
  for (const fileId of attachmentsToRemove.value) {
    await api.adminAttachment.attachmentControllerRemove(fileId)
  }
  attachmentsToRemove.value = []
}

const editPost = async () => {
  await api.adminPost.editPost(routeId, { posted: post.value.posted, title: post.value.title, description: post.value.description, event_date: post.value.event_date })
}

async function submit() {
  try {
    await removeFiles()
    await uploadFiles()
    await editPost()
    message.success('Post edited')
    await router.push({ name: 'posts' })
  } catch (e) {
    const err = processError(e)
    if (Array.isArray(err)) err.forEach((error: string) => message.error(error))
    else message.error(err)
  }
}
</script>