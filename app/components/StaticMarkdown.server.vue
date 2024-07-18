<script setup lang="ts">
  const { base, path } = defineProps({
    base: {
      type: String,
      default: '/',
    },
    path: {
      type: String,
      required: true,
    },
  })

  const { data: post } = await useAsyncData(path, () => {
    return queryContent(base, path).findOne()
  })

  useServerSeoMeta({
    description: () => post.value?.title,
  })

  useHead({
    title: () => post.value?.title,
  })
</script>
<template>
  <div
    id="post"
    class="prose prose-gray dark:prose-invert dark:prose-gray flex flex-col heading-offset max-w-none rounded-lg"
  >
    <ContentRenderer id="content" :value="post">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </div>
</template>
<style scoped></style>
