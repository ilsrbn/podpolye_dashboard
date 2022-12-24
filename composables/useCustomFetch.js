export const useCustomFetch = (url, options = {}) => {

  return $fetch(url, {
    ...options,

    async onRequest({ request, options }) {
      const cookie = await useCookie('pauth')
      if (!(cookie && cookie.value !== 'null' && cookie.value !== null)) return false

      options.headers = { 'Authorization': 'Bearer ' + cookie.value }
    },

  })
}