<script setup lang="ts">
  import { pg_background_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const heroImageUrl =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  const { optimizeImage, optimizeImages } = useOptimizeImage()
  const heroImageOptimized = optimizeImage(heroImageUrl)
</script>
<template>
  <section>
    <!-- <v-img
      :src="heroImageOptimized.imageSrc"
      :srcset="heroImageOptimized.imageSizes.srcset"
      :sizes="heroImageOptimized.imageSizes.sizes"
      :max-height="800"
      cover
    > -->
    <v-img :src="heroImageUrl" :max-height="600" cover>
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
            ></v-btn>
          </div>
        </div>
      </div>
    </v-img>
  </section>
</template>
<style scoped></style>
