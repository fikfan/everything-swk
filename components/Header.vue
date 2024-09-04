<template>
  <header>
    <div class="px-6 py-2 flex justify-between bg-black items-center text-white min-h-[55px]">

      <div class="font-mono">
        everything.kuching
      </div>

      <Input type="email" placeholder="Search" v-if="showSearchInput" class="bg-black w-1/4 px-4" />

      <div class="flex gap-4 items-center">
        
        <a href="#" class="hover:underline"><Github /></a>
        <NuxtLink to="/credits" class="hover:underline">Credits</NuxtLink>
      </div>

    </div>
  </header>
</template>

<script setup>
import Input from '@/components/ui/input/Input.vue'
import { Github } from 'lucide-vue-next';
import { useShowSearch } from '~/composables/showSearch';

const { showSearchInput } = useShowSearch();

</script>