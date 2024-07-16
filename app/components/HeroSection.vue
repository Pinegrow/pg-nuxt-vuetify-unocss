<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = 'Welcome To'
  const heroTitle = 'Vue Designer'
  const heroDescription =
    'A desktop drag-and-drop editor for Mac, Windows and Linux that lets you visually design your Vue apps.'
</script>
<template>
  <section>
    <BackgroundImageWrapper :image-url="heroImageUrl">
      <div class="container mx-auto">
        <div
          class="pb-36 pt-2 px-6 relative rounded-3xl md:pb-48 lg:pb-72 lg:px-12"
        >
          <div
            class="-mx-4 flex flex-wrap items-center mt-32 space-y-6 lg:space-y-0"
          >
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h2
                class="capitalize font-serif leading-tight mb-2 md:w-96 text-primary w-60 xl:w-full"
              >
                Hot Deals on Fresh Styles!
              </h2>
              <v-btn
                text="Shop Now"
                variant="elevated"
                size="large"
                class="mt-4"
                to="/women"
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
