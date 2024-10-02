<template>
  <div class="bg-background rounded-lg shadow-sm">
    <h2 class="text-lg font-semibold border-b" :class="business ? '' : 'p-4' ">{{ business ? '' : 'Category'}}</h2>
    <nav v-if="!business" class="p-2 space-y-2">
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
    
    <nav v-else class="p-2 space-y-2">
      <Button variant="ghost" @click="$router.back()" class="w-full justify-start">Back to directory</Button>
    </nav>

    <SubmitDialog />
  </div>
</template>

<script setup>
import { useBusinessStore } from '~/stores/businesses';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import SubmitDialog from './SubmitDialog.vue';

const route = useRoute();
const router = useRouter();


const businessStore = useBusinessStore();
const business = computed(() => businessStore.getBusinessById(route.params.id));

//handle dialog
const submissionDialog = ref(null);
const openSubmissionDialog = () => {
  submissionDialog.value.openDialog()
}
</script>