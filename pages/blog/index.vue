<template>
    <!--===============================
           BANNER PART START 
    =================================-->
    <section class="pt-26 lg:pt-40 mb-12 sm:mb-16 relative bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="flex justify-between items-center  bg-custom-gradient rounded-2xl px-4 md:px-12">
                <div class="max-w-[510px] w-full py-4">
                    <h2 class="heading mb-4 text-start">Recent <span class="gradient-text"> News </span>& <span class="gradient-text"> Article</span></h2>
                    <p class="text-sm font-normal">We recommended you to subscribe to our newsletter, drop your email below in footer to get daily update about us.</p>
                </div>
                <div class="py-8 md:block hidden">
                    <NuxtImg class="h-full w-auto" src="/images/blog/banner.png" />
                </div>
            </div>
        </div>
    </section>
    <!--===============================
           BANNER PART END 
    =================================-->

    <!--===============================
          BLOG MENU PART START 
    =================================-->
    <section class="container">
        <div class="mb-12 flex flex-col lg:flex-row justify-between gap-4 items-center relative" >
            <button @click="isOpen= !isOpen" class="flex lg:hidden items-center justify-between gap-2 w-full h-12 px-6 rounded-full shadow-input bg-white">
                <span class="text-base font-medium capitalize text-heading">{{ activeCategory }}</span>
                <i :class="isOpen? 'rotate-180':'rotate-0'" class="icon-chevron-down text-xl text-heading transition-all duration-300"></i>
            </button>
            <nav :class="isOpen ? 'max-lg:scale-y-100' : 'max-lg:scale-y-0'" class="blogNavigation">
                <button v-for="category in categories" class="px-6 py-2.5 rounded-full text-base w-full font-medium" :class="activeCategory==category? 'active' :''"
                @click="activeCategory=category">
                    {{ category }}
                </button>
            </nav>
            <form class="h-12 shadow-input lg:max-w-[350px] w-full bg-white rounded-full flex items-center p-1 group">
                <input type="text" placeholder="Search  Blog" class="h-full w-full flex-auto px-6 outline-none">
                <button type="reset" class="group-focus-within:block hidden mr-2">
                    <i class="icon-close-circle text-red-500 text-base"></i>
                </button>
                <button type="submit" class="primary-button !shadow-none !px-0 w-10 h-10 rounded-full flex-shrink-0">
                    <i class="icon-magnify-search"></i>
                </button>
            </form>
        </div>
    </section>
    <!--===============================
          BLOG MENU PART END 
    =================================-->

    <!--===============================
          BLOG PART START 
    =================================-->
    <section class="container mb-20 md:mb-40">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
            <BlogCard v-for="blog in blogs" :blog="blog" />
        </div>
        <div class="flex justify-end gap-6">
            <button class="w-12 h-12 rounded-full bg-[#E9FFF4] flex items-center justify-center hover:bg-linear-to-l hover:from-primary hover:to-secondary hover:text-white">
                <i class="icon-left"></i>
            </button>
            <button class="w-12 h-12 rounded-full primary-button flex items-center justify-center !px-0">
                <i class="icon-right"></i>
            </button>
        </div>
    </section>
    <!--===============================
          BLOG MENU PART END 
    =================================-->
</template>

<script setup>

import blogs from "~/assets/json/blogs.json";
const categories = ref(['All', 'Recent', 'News', 'Article', 'Comparison'])
const activeCategory = ref("All")
const isOpen = ref(false)

</script>