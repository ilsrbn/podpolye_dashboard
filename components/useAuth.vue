<template>
  <slot />
</template>

<script>
export default {
  methods: {

    async getUser() {
      try {
        await useCustomFetch('https://back.podpolye-api.serbin.co/api/hola')
      } catch(e) {
        console.log({e});
        if (e.status == 403){
          this.$router.push('/login')
        }
      }
    }
  },
  async created() {
    await this.getUser()
    this.myInterval = setInterval(this.getUser, 5000)
  },
  beforeUnmount() {
    clearInterval(this.myInterval)
  },
  data: () => ({
    myInterval: null
  })
}
</script>