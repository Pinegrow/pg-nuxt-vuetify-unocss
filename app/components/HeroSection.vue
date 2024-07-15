<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      heroImageUrl,
      /* options */
      {
        /* If using local images instead of unsplash url, enable netlify provider */
        // provider:
        //     process.env.NODE_ENV === 'production'
        //       ? 'netlify'
        //       : null /* defaults to ipx or ipxStatic */,
        placeholder: false, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }

  const heroImage = heroImageOptimized.src
  const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <section>
    <v-img
      :src="heroImageOptimized.src"
      :srcset="heroImageOptimized.srcset"
      :sizes="heroImageOptimized.sizes"
      :max-height="800"
      cover
    >
      <!-- <v-img :src="heroImageUrl" :max-height="800" cover> -->
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
    </v-img>
  </section>
</template>
<style scoped></style>
