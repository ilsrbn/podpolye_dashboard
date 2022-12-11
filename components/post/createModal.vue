<template>
  <base-modal>
    <template #activator="{ open }">
      <v-btn color="#bf895a" @click="handleModalOpen(open)" append-icon="mdi mdi-plus">Добавить</v-btn>
    </template>
    <template #header>
      <h3>Добавить событие</h3>
    </template>
    <template #body>
      <base-form class="mb-5" v-model:fields="fields"/>
      <base-form v-model:fields="photos"/>
    </template>
    <template #footer>
      <v-btn @click="handleSubmit" color="blue">Сохранить</v-btn>
    </template>
  </base-modal>
</template>
<script>
import baseForm from '../baseForm.vue'
import { useCustomFetch } from '@/composables/useCustomFetch'
export default {
  components: { baseForm },
  methods: {
    handlePhotosUpload(photos, post_id){
      const requests = []
      photos.forEach(element => {
        const formData = new FormData()
        formData.append('file', element)
        formData.append('post_id', post_id)
        const request = useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/attachment',{ method: "POST", header: { 'Content-Type': 'multipart/form-data' }, body: formData})
        requests.push(request)
      });
      Promise.all(requests).then(resp => {
        console.log(resp);
      })
    },
    async handleSubmit() {
      const payload = {}
      for (const key in this.fields) {  
        payload[key] = this.fields[key].value
      }
      
      await useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/post', { method: "POST", body: payload })
        .catch(e => {
          return console.log(e)
        })
        .then(resp => {
          if (!this.photos.files.value.length) return
          this.handlePhotosUpload(this.photos.files.value, resp.id)
          
        }).finally(() => this.$router.go())

    },
    handleModalOpen(openFuntion) {
      openFuntion()
    }
  },

  data: () => ({
    fields: {
      title: {
        label: "Название",
        type: "text",

        value: ""
      },
      description: {
        label: "Описание",
        type: "textarea",

        value: ""
      }, 
      posted: {
        label: "Статус",
        type: "radio",
        options: [
          { label: "Опубликоно", value: true },
          { label: "Скрыто", value: false }
        ],
        value: true
      },
      event_date: {
        label: "Дата проведения события",
        type: "date",
        value: new Date()
      }
    },
    photos: {
      files: {
        label: "Фотографии",
        type: "file",
        multiple: true,
        value: []
      }
    }
  })
}
</script>