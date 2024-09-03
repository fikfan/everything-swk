<template>
  <div class="p-4 md:p-6">
    <div v-if="business">
      <h1 class="text-2xl font-bold mb-4">{{ business.name }}</h1>
      <p>{{ business.description }}</p>
      <p>{{ business.category }}</p>
      <p>{{ business.location }}</p>
      <p>{{ business.hours }}</p>
      <p>{{ business.status }}</p>
      <p>{{ business.phone }}</p>
      <Button @click="$router.back()">Back</Button>
    </div>
    <div v-else>Loading...</div>
  </div>
  
</template>

<script setup>
import { useBusinesses } from '~/composables/dummy';

const route = useRoute()
const router = useRouter();
const { getBusinessById } = useBusinesses()


const business = computed(() => getBusinessById(route.params.id))

//save for backend
// const { data: business } = await useFetch(`/api/business/${route.params.id}`)
</script>