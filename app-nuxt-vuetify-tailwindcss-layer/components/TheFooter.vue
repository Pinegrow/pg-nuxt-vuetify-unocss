<script setup lang="ts"></script>
<template>
  <v-footer name="footer" class="pb-24 pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap justify-center space-x-8">
        <NuxtLink
          href="https://www.facebook.com/vuedesigner"
          aria-label="facebook"
          external
          target="_blank"
        >
          <v-icon icon="i-logos-facebook" class="text-2xl" />
        </NuxtLink>
        <NuxtLink
          href="https://twitter.com/vuedesigner"
          aria-label="twitter"
          external
          target="_blank"
        >
          <v-icon icon="i-logos-twitter" class="text-2xl" />
        </NuxtLink>

        <NuxtLink
          href="https://discord.gg/BYp45Nnu5T"
          aria-label="discord"
          external
          target="_blank"
        >
          <v-icon icon="i-logos-discord-icon" class="text-2xl" />
        </NuxtLink>
        <NuxtLink
          href="https://www.youtube.com/@vuedesigner"
          aria-label="youtube"
          external
          target="_blank"
        >
          <v-icon icon="i-logos-youtube-icon" class="text-2xl" />
        </NuxtLink>
      </div>
    </div>
  </v-footer>
</template>
<style scoped></style>
