<template>
    <div class="shadow-blog rounded-xl bg-white hover:shadow-card transition-all duration-200">
        <NuxtImg :src="blog.coverimage" class="h-47 w-full rounded-t-xl object-cover" />
        <div class="p-6">
            <h6 class="text-lg font-bold mb-6 line-clamp-2">{{ blog.title }}</h6>
            <div class="flex justify-between gap-4">
                <span class="text-lg font-medium">{{ blog.date }}</span>
                <NuxtLink to="/" class="text-lg font-medium text-primary">Read More</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  blog: {
    type: Object,
    required: true,
    default: () => ({
      coverImage: '',
      title: '',
      date: ''
    })
  }
})
</script>