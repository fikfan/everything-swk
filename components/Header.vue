<template>
  <header>
    <div class="px-6 py-2 flex justify-between bg-black items-center text-white">

      <div class="font-mono">
        everything.sarawak
      </div>

      <Input type="email" placeholder="Email" class="bg-black w-1/4" />

      <div class="flex gap-4 items-center">
        
        <a href="#" class="hover:underline">Github</a>
        <a href="#" class="hover:underline">Credits</a>
      </div>

    </div>
  </header>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
</script>