<template>
  <div class="p-4 md:p-6">
    <div v-if="business">
      <div class="flex justify-between items-center mb-4">
        <Badge variant="secondary">{{ business.category }}</Badge>
        <Badge variant="default">{{ business.status }}</Badge>
      </div>

      <div class="bg-gray-700 dark:bg-gray-600 h-48 w-full rounded-lg mb-4 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7233893280066!2d-118.24532868500001!3d34.0536871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Oio4Oiw4Oix4Oiy4Oic4Oit4Oix4Oie4Oiy4Oic4Oit4Oix4Oie4Oiy!5e0!3m2!1sen!2sus!4v1624992992815!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style="border: 0px;"
          allowFullScreen=""
          loading="lazy"
        />
      </div>

      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">{{business.name}}</h2>
        <Badge variant="default" class="bg-green-500">Verified</Badge>
      </div>

      <p class="mb-4">{{business.description}}</p>
      <div class="mb-4">
        <p class="font-bold">Opening hours</p>
        <span class="text-sm">{{ business.hours }}</span>
      </div>

      <div class="mb-4">
        <p class="font-bold">Location</p>
        <span class="text-sm">{{ business.location }}</span>
      </div>
      
      <div class="mb-4">
        <p class="font-bold">Contact details</p>
        <span class="text-sm">{{ business.phone }}</span>
      </div>
      
      
    </div>

    <div v-else>Loading...</div>
  </div>
  
</template>

<script setup>
import { useBusinessStore } from '~/stores/businesses';
import { Phone, MapPinned, Clock3, BadgeCheck, ChevronLeft } from 'lucide-vue-next'

import { useRoute } from 'vue-router';

const route = useRoute();

const businessStore = useBusinessStore();
const business = computed(() => businessStore.getBusinessById(route.params.id));

//images dummy
const numImage = ref(6);

//save for backend
// const { data: business } = await useFetch(`/api/business/${route.params.id}`)
</script>