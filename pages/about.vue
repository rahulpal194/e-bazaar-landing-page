<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-38 mb-20 relative">
        <span class="hero-bg"></span>
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-y-12 lg:place-content-between">
                <div class="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto mx-auto">
                    <h1 class="heading text-center lg:text-left mb-6"><span class="gradient-text">Smart, Scalable and Complete </span>ecommerce Management Solution</h1>
                    <p class="text-base lg:text-lg font-normal lg:mb-0 mb-6 lg:text-left text-center">eBazaar is a powerful ecommerce management system designed to simplify daily operations, connect teams, and deliver a seamless dining experience. From order management and delivery tracking to analytics and reporting — eBazaar brings everything your ecommerce needs under one unified platform.</p>
                </div>
                <div class="max-w-[550px] w-full lg:ml-auto mx-auto lg:mx-0">
                    <NuxtImg class="w-full h-full" src="/images/about/hero.png"/>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--==============================
            COUNTER PART START                  
    ==============================-->
    <section class="mb-20 lg:mb-40">
        <div class="container">
            <div class="p-12 rounded-3xl shadow-blog bg-white">
                <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-[94px]">
                    <li v-for="counter in counters" class="w-full flex items-center gap-4">
                        <NuxtImg :style="`filter: drop-shadow(${counter.shadow})`" class="w-8 h-8" :src="counter.vector"/>
                        <div>
                            <h3 :style="{color:`${counter.color}`}" class="text-[28px] font-semibold flex items-center gap-0.5 mb-2">
                                <CountUp v-if="counter.count%2 != 0" decimal-places="1" :end-val="counter.count" class="text-[28px] font-extrabold"></CountUp>
                                <CountUp v-else :end-val="counter.count" class="text-[28px] font-extrabold"></CountUp>
                                <span class="leading-none -mt-2">+</span>
                            </h3>
                            <p class="text-base">
                                {{ counter.title }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!--==============================
            COUNTER PART END                  
    ==============================-->

    <!--==============================
         ORIGIN STORY PART START                  
    ================================-->
    <section class="mb-20 lg:mb-40">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-y-12 lg:place-content-between items-center">
                <div class="max-w-[480px] h-fit w-full lg:mr-auto mx-auto lg:mx-0 lg:order-1 order-2">
                    <NuxtImg class="w-full h-full" src="/images/about/origin_story.png"/>
                </div>
                <div class="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto mx-auto lg:order-2 order-1">
                    <p class="text-lg font-semibold mb-5 text-[#0F88F9]">Origin Story</p>
                    <h1 class="heading text-center lg:text-left mb-6">From a Simple Idea to a<span class="gradient-text"> Complete ecommerce Ecosystem </span></h1>
                    <p class="text-base lg:text-lg font-normal mb-6 lg:text-left text-center">eBazaar began with a simple idea — to make ecommerce management effortless and efficient. Many ecommerce owners faced daily challenges managing dine-in, delivery, and kitchen operations across multiple branches. We set out to solve that problem.</p>
                    <p class="text-base lg:text-lg font-normal lg:text-left text-center">From that vision, eBazaar was born — a complete ecommerce management system that brings together everything from order taking to delivery tracking, all in one seamless platform. Today, it helps ecommerces of every size run smarter, serve faster, and grow stronger.</p>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
         ORIGIN STORY PART END                  
    ================================-->

    <!--==============================
         MISSION PART START                  
    ================================-->
    <section class="mb-20 lg:mb-40">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-y-12 lg:place-content-between items-center">
                <div class="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto mx-auto">
                    <p class="text-lg font-semibold mb-5 text-[#0F88F9]">Mission & Vission</p>
                    <h1 class="heading text-center lg:text-left mb-6"><span class="gradient-text">Shaping the Future </span>of ecommerce Management</h1>
                    <p class="text-base lg:text-lg font-normal lg:text-left text-center">At eBazaar, our mission is to simplify ecommerce management through innovation, design, and technology. We aim to empower ecommerce owners with tools that streamline operations, enhance customer experience, and drive consistent growth—all from one powerful system.</p>
                    <p class="text-base lg:text-lg font-normal mb-6 lg:text-left text-center">Our vision is to create a world where every ecommerce, regardless of size, can run efficiently and scale effortlessly. We aspire to be the most trusted and complete ecommerce management solution, continuously evolving to meet the ever-changing needs of the food industry.</p>
                </div>
                <div class="max-w-[480px] h-fit w-full lg:ml-auto mx-auto lg:mx-0">
                    <NuxtImg class="w-full h-full" src="/images/about/mission.png"/>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
         MISSION PART END                  
    ================================-->

    <!--==============================
           CREATOR PART START                  
    ================================-->
    <section class="mb-20 lg:mb-40">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-y-12 lg:place-content-between items-center">
                <div class="max-w-[480px] h-fit w-full lg:mr-auto mx-auto lg:mx-0 lg:order-1 order-2">
                    <NuxtImg class="w-full h-full" src="/images/about/who_we_are.png"/>
                </div>
                <div class="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto mx-auto lg:order-2 order-1">
                    <p class="text-lg font-semibold mb-5 text-[#0F88F9]">About Creator</p>
                    <h1 class="heading text-center lg:text-left mb-6">The <span class="gradient-text">Team Behind </span>eBazaar</h1>
                    <p class="text-base lg:text-lg font-normal mb-6 lg:text-left text-center">eBazaar is proudly crafted by iNiLabs, a team of passionate designers, developers, and product thinkers dedicated to building seamless digital experiences for the ecommerce and others industry. With deep expertise in Web,  App, ERP, and SaaS solutions and a focus on real-world needs, we’re constantly refining eBazaar to help businesses run smarter, faster, and more efficiently.</p>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
           CREATOR PART END                  
    ================================-->
</template>
<script setup>
import CountUp from 'vue-countup-v3'

const counters = ref([
    {
        "id": 1,
        "count": 40,
        "color": "#0F88F9",
        "title": "Countries Served",
        "vector": "/images/vector/world.png",
        "shadow": "0px 6px 10px rgba(15, 136, 249, 0.30)"
    },
    {
        "id": 2,
        "count": 900,
        "color": "#22B08E",
        "title": "Happy Clients",
        "vector": "/images/vector/smile.png",
        "shadow":"0px 6px 10px rgba(74, 204, 107, 0.30)"
    },
    {
        "id": 3,
        "count": 4.9,
        "color": "#761DFA",
        "title": "Rating & Reviews",
        "vector": "/images/vector/item.png",
        "shadow": "0px 6px 10px 0px rgba(118, 29, 250, 0.30)"
    },
    {
        "id": 4,
        "count": 98,
        "color": "#E4156F",
        "title": "Client Satisfaction",
        "vector": "/images/vector/heart.png",
        "shadow": "0px 6px 10px 0px rgba(230, 26, 114, 0.30)"
    }
])

</script>