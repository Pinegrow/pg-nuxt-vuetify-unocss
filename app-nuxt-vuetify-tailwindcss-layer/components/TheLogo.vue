<script setup lang="ts">
  import siteMeta from '@/site'
  const { title, logo } = siteMeta
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <v-icon class="text-4xl" :icon="logo" />
    <h5 class="font-extrabold font-serif ml-2 mt-4 text-2xl">{{ title }}</h5>
  </NuxtLink>
</template>
<style scoped></style>
