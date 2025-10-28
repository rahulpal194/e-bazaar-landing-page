<template>
    <div class="p-6 rounded-2xl relative bg-[#FFFBF4]" :style="{ width:width, height:height}">
        <p class="text-lg font-normal mb-6">{{ review.message }}</p>
        <div class="flex gap-4 items-center">
            <NuxtImg :src="review.profileImg" class="w-15 h-15 rounded-full"></NuxtImg>
            <div class="flex flex-col gap-1">
                <p class="text-lg font-bold text-primary">{{ review.name }}</p>
                <div class="flex gap-0.5 items-center [&_i]:text-xl [&_i]:text-[#FFB900]">
                    <i class="icon-fill-star"></i>
                    <i class="icon-fill-star"></i>
                    <i class="icon-fill-star"></i>
                    <i class="icon-fill-star"></i>
                    <i class="icon-fill-star"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        review:({
            type: Object
        }),
        width : ({type:String}),
        height : ({type:String})
    })
</script>