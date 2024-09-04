<template>
  <div>
    <Header />
    <main class="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 p-4 md:p-6">
      <Sidebar />
      <slot />
    </main>
    
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>