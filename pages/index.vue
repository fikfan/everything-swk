<template>
  <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-6 md:p-8">
    <div class="bg-background rounded-lg shadow-sm">
      <h2 class="text-lg font-semibold p-4 border-b">Categories</h2>
      <nav class="p-4 space-y-2">
        <Button
          :variant="selectedCategory === 'all' ? 'primary' : 'ghost'"
          @click="setSelectedCategory('all')"
          class="w-full justify-start"
        >
          All
        </Button>
        <Button
          :variant="selectedCategory === 'Services' ? 'primary': 'ghost'"
          @click="setSelectedCategory('Services')"
          class="w-full justify-start"
        >
          Services
        </Button>
        <Button
          :variant="selectedCategory === 'Retail' ? 'primary': 'ghost'"
          @click="setSelectedCategory('Retail')"
          class="w-full justify-start"
        >
          Retail
        </Button>
        <Button
          :variant="selectedCategory === 'Food & Drink' ? 'primary': 'ghost'"
          @click="setSelectedCategory('Food & Drink')"
          class="w-full justify-start"
        >
          Food & Drinks
        </Button>
      </nav>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="business in filteredBusinesses" :key="business.id" class="bg-background rounded-lg shadow-sm">
        <div class="relative">
          <img
            src="../assets/images/bocchi.jpg"
            :alt="business.name"
            width="400"
            height="300"
            class="w-full h-48 object-cover rounded-t-lg"
            style="aspect-ratio: 400/300; object-fit: cover;"
          />
          <div class="absolute top-4 left-4">
            <Badge variant="outline" class="bg-background text-primary">
              {{ business.category }}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle>{{ business.name }}</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">{{ business.description }}</p>
        </CardContent>
        <CardFooter>
          <NuxtLink :to="business.website" target="_blank" class="text-primary underline">
            Visit Website
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Badge from '@/components/ui/badge/Badge.vue';

const businesses = ref([
  {
    id: 1,
    name: "Acme Plumbing",
    description: "Professional plumbing services for residential and commercial properties.",
    website: "https://www.acmeplumbing.com",
    category: "Services",
    image: "../assets/images/bocchi.jpg",
  },
  {
    id: 2,
    name: "Bloom Florist",
    description: "Locally sourced flowers and custom arrangements for all occasions.",
    website: "https://www.bloomflorist.com",
    category: "Retail",
    image: "../assets/images/bocchi.jpg",
  },
  {
    id: 3,
    name: "Cozy Cafe",
    description: "Cozy neighborhood cafe serving fresh-brewed coffee and homemade pastries.",
    website: "https://www.cozycafe.com",
    category: "Food & Drink",
    image: "../assets/images/bocchi.jpg",
  },
  {
    id: 4,
    name: "Fitness Emporium",
    description: "Fully equipped gym with personal training and group fitness classes.",
    website: "https://www.fitnessemporium.com",
    category: "Services",
    image: "../assets/images/bocchi.jpg",
  },
  {
    id: 5,
    name: "Green Thumb Nursery",
    description: "Wide selection of plants, gardening supplies, and landscaping services.",
    website: "https://www.greenthumb.com",
    category: "Retail",
    image: "../assets/images/bocchi.jpg",
  },
  {
    id: 6,
    name: "Harmony Yoga Studio",
    description: "Peaceful studio offering a variety of yoga classes for all levels.",
    website: "https://www.harmonyyoga.com",
    category: "Services",
    image: "../assets/images/bocchi.jpg",
  },
])


const selectedCategory = ref('all')

const filteredBusinesses = computed(() => {
  if (selectedCategory.value === 'all') {
    return businesses.value
  } else {
    return businesses.value.filter((business) => business.category === selectedCategory.value)
  }
})

// Function to change the selected category
const setSelectedCategory = (category) => {
  selectedCategory.value = category
}

</script>