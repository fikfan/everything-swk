<template>
  <div class="p-4 md:p-6">
    <div v-if="loading">Loading...</div>
    <div v-else-if="business">
      <div class="flex justify-between items-center mb-4">
        <Badge variant="secondary">{{ business.category }}</Badge>
        <Badge variant="default">{{ business.status }}</Badge>
      </div>

      <div class="bg-gray-700 dark:bg-gray-600 h-48 w-full rounded-lg mb-4 flex items-center justify-center">
        <iframe
          :src="googleMapUrl"
          width="100%"
          height="100%"
          style="border: 0px;"
          allowFullScreen=""
          loading="lazy"
        />
      </div>

      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">{{ business.name }}</h2>
        <Badge variant="default" class="bg-green-500">Verified</Badge>
      </div>

      <p class="mb-4">{{ business.description }}</p>

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

    <div v-else>
      <p>Error: Business not found.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useBusinessStore } from '~/stores/businesses';

const route = useRoute();
const business = ref(null);
const googleMapUrl = ref('');
const loading = ref(true);
const businessStore = useBusinessStore();

// Fetch business data on component mount
const fetchBusiness = async () => {
  try {
    const businessData = await businessStore.fetchBusinessById(route.params.id);
    business.value = businessData;

    // Generate Google Maps embed URL
    googleMapUrl.value = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(businessData.location)}&key=YOUR_GOOGLE_MAPS_API_KEY`;

  } catch (error) {
    console.error('Error fetching business:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchBusiness);
</script>
