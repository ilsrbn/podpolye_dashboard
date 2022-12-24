<template>
  <v-card>
    <v-card-title v-if="error"><v-alert type="error">{{ error }}</v-alert></v-card-title>
    <v-card-text>
      <base-form v-model:fields="form" />
    </v-card-text>
    <v-card-actions>
      <v-btn block color="success" prepend-icon="mdi mdi-save" @click="handleSubmit">Сохранить</v-btn>
    </v-card-actions>
  </v-card>

  <v-card class="mt-5">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title> Фотографии ({{ photos.length }}) </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-file-input class="mb-5" accept="image/*" @change="handleFileUpload" label="Добавить фотографии" multiple />
          <base-layout>
            <v-card elevation="10" v-for="(photo, i) in photos" :key="i">
              <v-img :src="photo.file_url" cover aspect-ratio="1"  />
              <v-card-actions class="mt-auto">
                <v-row align="center">
                  <v-col>
                    <v-btn color="error" block append-icon="mdi mdi-delete" variant="tonal" @click="handleDelete(photo)">
                      Удалить
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </base-layout>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
<script>
import { useCustomFetch } from '@/composables/useCustomFetch'
import baseLayout from '~~/components/baseLayout.vue'
import BaseForm from '~~/components/baseForm.vue'
export default {
  components: { baseLayout, BaseForm },
  async setup() {
    const slug = useRoute().params.post
    const error = ref(null)
    let event
    try {
      event = await useCustomFetch("https://back.podpolye-api.serbin.co/api/admin/post/" + slug)
      error.value = null
    } catch(e) {
      console.log(e)
    }
    const cover = ref(+event.cover?.id || -1)

    const form = reactive({
      title: {
        label: "Название",
        type: "text",

        value: event.title
      },
      description: {
        label: "Описание",
        type: "textarea",

        value: event.description
      }, 
      posted: {
        label: "Статус",
        type: "radio",
        options: [
          { label: "Опубликовано", value: true },
          { label: "Скрыто", value: false }
        ],
        value: event.posted
      },
      event_date: {
        label: "Дата проведения события",
        type: "date",
        value: new Date(event.event_date)
      }
    })

    let photos = reactive(event.attachments)

    const handleClick = (photo) => {
      cover.value = photo.id
    }
    const compareIds = (photo) => {
      const isEqual = cover.value === photo.id
      return isEqual
    }


    const handleSubmit = async () => {
      // if (cover.value === -1) return
      // await useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/post/cover', { method: "POST", body: { postId: event.id, attachmentId: cover.value } }).then(() => useRouter().push('/'))
      try {
        const payload = {}
        for (const key in form) {
          payload[key] = form[key].value
        }
        await useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/post/' + event.id, { method: "PUT", body: payload })
        useRouter().push('/')
        error.value = null
      } catch (e) {
        console.log({e});
        error.value = e.message
        console.log(error);
      }
    }

    const handleDelete = async (photo) => {
      const agree = window.confirm("Вы точно хотите удалить эту фотографию?\nЭто событие нельзя отменить!")
      if (!agree) return
      try {
        const data = await useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/attachment/' + photo.id, { method: "DELETE" })
        useRouter().go()
      } catch(e) {
        console.log({ e })
      }
    }

    const handleFileUpload = (e) => {
      const requests = []
      const files = Array.from(e.target.files)
      files.forEach((photo) => {
        const formData = new FormData()
        formData.append('file', photo)
        formData.append('post_id', event.id)
        const request = useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/attachment',{ method: "POST", header: { 'Content-Type': 'multipart/form-data' }, body: formData})
        requests.push(request)
      })
      Promise.all(requests).then((resp) => {
        console.log({resp})
        photos.push(...resp)
        useRouter().go()
      })
    }


    return {
      error,

      form,
      photos,
      cover,
      handleClick,
      compareIds,
      handleSubmit,
      handleDelete,
      handleFileUpload
    }
  }
}
</script>