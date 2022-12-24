<template>
  <base-modal>
    <template #activator="{ open }">
      <v-btn color="#bf895a" @click="handleModalOpen(open)" append-icon="mdi mdi-plus">Добавить</v-btn>
    </template>
    <template #header>
      <h3>Добавить событие</h3>
    </template>
    <template #body>
      <validated-form v-model:schema="fields" />
      <pre>{{ fields }}</pre>
    </template>
    <template #footer>
      <v-btn @click="handleSubmit" color="blue">Сохранить</v-btn>
    </template>
  </base-modal>
  <v-snackbar
      :timeout="1500"
      v-model="snackBar.status"
  >
    {{ snackBar.text }}

  </v-snackbar>
</template>
<script>
import { string } from 'yup';
import baseForm from '../baseForm.vue'
import { useCustomFetch } from '@/composables/useCustomFetch'
import {ValidatedForm} from "#components";
export default {
  name: "RefactoredCreateModal",
  components: {ValidatedForm, baseForm },
  methods: {
    async handlePhotosUpload(photos, post_id){
      const requests = []
      for (let i = 0; i < photos.length; i++) {
        const element = photos[i]
        const formData = new FormData()
        formData.append('file', element)
        formData.append('post_id', post_id)
        try {
          await useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/attachment',{ method: "POST", header: { 'Content-Type': 'multipart/form-data' }, body: formData})
          this.snackBar.text = 'Фото загружено'
          this.snackBar.status = true
        } catch (e) {
          console.log({ e })
          this.snackBar.text = 'Что-то пошло не так'
          this.snackBar.status = true
        }
      }
    },
    async handleSubmit() {
      const payload = {}
      for (const key in this.fields) {
        payload[key] = this.fields[key].value
      }
      try {
        const {id} = await useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/post', { method: "POST", body: payload })
        if (this.photos.files.value.length) await this.handlePhotosUpload(this.photos.files.value, id)
        this.$router.go()
      } catch(e) {
        console.log({ e })
        this.snackBar.text = 'Что-то пошло не так'
        this.snackBar.status = true
      }
    },
    handleModalOpen(openFunction) {
      openFunction()
    }
  },

  data: () => ({
    snackBar: {
      status: false,
      text: null,
    },
    fields: {
      title: {
        label: "Название",
        as: "v-text-field",

        'v-model': "",
        rules: string().required('Название обязательное поле')
      },
      description: {
        label: "Описание",
        as: "v-textarea",

        'v-model': ""
      },
      // posted: {
      //   label: "Статус",
      //   as: "v-radio",
      //   options: [
      //     { label: "Опубликоно", value: true },
      //     { label: "Скрыто", value: false }
      //   ],
      //   'v-model': true
      // },
      // event_date: {
      //   label: "Дата проведения события",
      //   as: "DP",
      //   'v-model': new Date()
      // }
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
