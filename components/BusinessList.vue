<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card v-for="business in businessStore.filteredBusinesses" :key="business.id" class="bg-background rounded-lg shadow-sm">
      <NuxtLink :to="`/business/${business.id}`">
        <div class="relative">
        <img
          src="../assets/images/bocchi.jpg"
          :alt="business.name"
          width="400"
          height="300"
          class="w-full h-48 object-cover rounded-t-lg"
          style="aspect-ratio: 400/300; object-fit: cover;"
        />
        <div class="absolute top-4 left-4 drop-shadow-lg">
          <Badge variant="outline" class="bg-background text-primary">
            {{ business.category }}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle class="flex">{{ business.name }}</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-muted-foreground">{{ business.description }}</p>
        <div class="grid grid-cols-10 align-center items-center gap-2 mt-4">
          <Clock3 class="w-4 h-4 text-muted-foreground col-span-1" />
          <p class="text-muted-foreground text-sm col-span-9">{{business.hours}}</p>
        </div>
        <div class="grid grid-cols-10 align-center items-center gap-2 mt-2">
          <MapPinned class="w-4 h-4 text-muted-foreground col-span-1" />
          <p class="text-muted-foreground text-sm col-span-9">{{business.location}}</p>
        </div>
        <div class="grid grid-cols-10 align-center items-center gap-2 mt-2">
          <Phone class="w-4 h-4 text-muted-foreground col-span-1" />
          <p class="text-muted-foreground text-sm col-span-9">{{business.phone}}</p>
        </div>
      </CardContent>
      <CardFooter class="flex justify-end items-center">
        <ChevronRight />
      </CardFooter>
      </NuxtLink>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPinned, Clock3, BadgeCheck, ChevronRight } from 'lucide-vue-next'
import Badge from '@/components/ui/badge/Badge.vue';

import { useBusinessStore } from '~/stores/businesses';

const businessStore = useBusinessStore();

</script>