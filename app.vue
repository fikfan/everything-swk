<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBusinessStore } from '~/stores/businesses'

const businessStore = useBusinessStore()

onMounted(async () => {
  await businessStore.fetchBusinesses()
})
</script>
