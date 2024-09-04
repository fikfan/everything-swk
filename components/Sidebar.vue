<template>
  <div class="bg-background rounded-lg shadow-sm">
    <h2 class="text-lg font-semibold p-4 border-b">Categories</h2>
    <nav class="p-2 space-y-2">
      <Button
        v-for="category in businessStore.categories"
        :key="category"
        :variant="businessStore.selectedCategory === category ? 'primary' : 'ghost'"
        @click="businessStore.setSelectedCategory(category)"
        class="w-full justify-start"
      >
        {{ category }}
      </Button>
    </nav>
  </div>
</template>

<script setup>
import { useBusinessStore } from '~/stores/businesses';

const businessStore = useBusinessStore();

</script>