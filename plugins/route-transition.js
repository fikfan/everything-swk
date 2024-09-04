export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    if (window.$nuxt.$route.meta.pageTransition === false) {
      return
    }
    if (window.$nuxt.$route.path.includes('/business/')) {
      window.$nuxt.$route.meta.pageTransition = { name: 'page', classes: 'slide-right' }
    } else {
      window.$nuxt.$route.meta.pageTransition = { name: 'page', classes: 'slide-left' }
    }
  })
})