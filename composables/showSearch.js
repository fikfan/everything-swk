// composables/useShowSearch.js
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export const useShowSearch = () => {
  const route = useRoute()

  const routesWithoutSearch = ['/business', '/about', '/contact']

  const showSearchInput = computed(() => {
    return !routesWithoutSearch.some(path => route.path.startsWith(path))
  })

  return {
    routesWithoutSearch,
    showSearchInput
  }
}