<template>
<v-card class="card">
  <v-card-title>
    Login
  </v-card-title>
  <v-card-text>
    <v-alert v-if="error" type="error" class="mb-5">{{ error }}</v-alert>
    <base-form v-model:fields="form" />
  </v-card-text>
  <v-card-actions>
    <v-spacer />
    <v-btn @click="handleLogin">Войти</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import baseForm from '~~/components/baseForm.vue';
import { useCustomFetch } from '~/composables/useCustomFetch'
definePageMeta({
  layout: "auth",
});
export default {
  components: { baseForm },
  data: () => ({
    form: {
      username: {
        type: "text",
        label: "Юзернейм",
        value: ""
      },
      password: {
        type: "password",
        label: "Пароль",
        value: ""
      }
    },
    error: null
  }),
  methods: {
    async handleLogin(){
      const payload = {}
      for (const key in this.form) {
        payload[key] = this.form[key].value
      }

      const resp = await useCustomFetch('http://localhost:3000/api/auth/login', {method: 'POST', body: payload}).catch((error) => {
        this.error = error.data.message
      })

      useCookie('pauth').value = resp.access_token
      const router = useRouter()
      router.push('/')
    }
  },

}
</script>

<style scoped>
.card {
  margin: auto;
  min-width: 600px;
}
</style>