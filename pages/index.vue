<template>
    <section class="mb-16">
        <div class="container">
            <div class="grid grid-cols-4 sm:!-m-5">
                <div v-for="page in demos" class="group sm:!p-5">
                    <div :style="{ backgroundImage: `url(${page.image})`}" class="shadow-xl rounded-lg h-40 sm:h-48 overflow-hidden relative mb-4 bg-cover bg-no-repeat bg-top group-hover:bg-bottom transition-all duration-1000">
                        <div class="absolute inset-0 rounded-lg bg-black/60 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                            <NuxtLink :to="page.path" target="_blank" class="py-2.5 px-5 rounded-full bg-primary text-white uppercase text-xs tracking-wide -mt-5 group-hover:mt-0 transition-all duration-500">view demo</NuxtLink>
                        </div>
                    </div>
                    <h3 class="text-center text-sm sm:text-base font-medium capitalize">{{ page.name }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import demos from "@/assets/json/demos.json";
definePageMeta({ layout: 'demo' })
</script>
