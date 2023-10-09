<script setup lang="ts">
  definePageMeta({
    title: 'Home',
    navOrder: 1,
  })

  useHead({
    title: () => 'Home',
  })
</script>
<template>
  <main>
    <HeroSection />
    <v-container class="pt-8">
      <LaunchSale class="mt-8" />
      <HotDeals class="mt-8" />
    </v-container>
  </main>
</template>
<style scoped></style>
