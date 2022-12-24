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
  <v-snackbar
      vertical
      :timeout="snackBar.timeout"
      v-model="snackBar.status"
      multi-line
      :color="snackBar.variant"
  >
    <div v-html="snackBar.text"></div>

  </v-snackbar>
</template>
<script>
import * as Yup from 'yup';
import baseForm from '../baseForm.vue'
import { useCustomFetch } from '@/composables/useCustomFetch'
export default {
  components: { baseForm },
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
          this.snackBar.timeout= 1500
          this.snackBar.variant = 'success'
          this.snackBar.status = true
        } catch (e) {
          console.log({ e })
          this.snackBar.text = 'Что-то пошло не так'
          this.snackBar.status = true
        }
      }
    },
    async validate() {
      const errors = []
      for (const fieldName in this.fields) {
        const field = this.fields[fieldName]
        if (field.rules) {
          try {
            await field.rules.validate(field.value)
          } catch (e) {
            console.log({e})
            errors.push(...e.errors)
          }
        }
      }
      for (const fieldName in this.photos) {
        const field = this.photos[fieldName]
        if (field.rules) {
          try {
            await field.rules.validate(field.value)
          } catch (e) {
            console.log({e})
            errors.push(...e.errors)
          }
        }
      }
      return errors
    },
    async handleSubmit() {
      const errors = await this.validate()
      if (errors.length) {
        this.snackBar.timeout = errors.length * 1000
        this.snackBar.variant = 'error'
        this.snackBar.text = errors.map((error) => `<p>${error}</p>`).join('')
        this.snackBar.status = true
        return
      }
      const payload = {}
      for (const key in this.fields) {
        payload[key] = this.fields[key].value
      }
      try {
        const {id} = await useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/post', { method: "POST", body: payload })
        await this.handlePhotosUpload(this.photos.files.value, id)
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
      timeout: 1500,
      variant: 'default'
    },
    fields: {
      title: {
        label: "Название",
        type: "text",

        value: "",
        rules: Yup.string().required('Название обязательное поле')
      },
      description: {
        label: "Описание",
        type: "textarea",

        value: "",
        rules: Yup.string().required('Описание обязательное поле')
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
        value: [],
        rules: Yup.array().min(1, 'Загрузите как минимум 1 фото')
      }
    }
  })
}
</script>
