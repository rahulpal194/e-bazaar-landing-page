<template>
<!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-40 mb-20 sm:mb-40 relative bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="grid lg:grid-cols-2 lg:place-content-between">
                <div class="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto mx-auto">
                    <h1 class="heading mb-6">Keep Things Smooth With Our
                        <span class="gradient-text"> iCare - Maintenance </span>
                        Service
                    </h1>
                    <p class="text-base lg:text-lg font-normal lg:text-left text-center mb-12">Trust us to manage every detail with exceptional care. Let us take care of your system’s health, so you can stay focused on what matters—growing your business.</p>
                    <NuxtImg class="max-w-[479px] w-full lg:hidden block mx-auto mb-12" src="/images/maintanance/banner.png"/>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                        <div v-for="glance in counters" class="flex items-center gap-6">
                            <div class="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center shadow-[0px_8px_32px_rgba(55,106,139,0.12)] bg-white">
                                <NuxtImg :src="glance.vector" :alt="glance.name" :style="`filter: drop-shadow(${glance.shadow})`" class="w-8 h-8"/>
                            </div>
                            <div class="flex-auto text-left">
                                <h3 :style="{color:`${glance.color}`}" class="text-3xl font-semibold flex items-center gap-0.5 mb-3">
                                    <CountUp v-if="glance.count%2 != 0" decimal-places="1" :end-val="glance.count" class="text-[28px] font-extrabold"></CountUp>
                                    <CountUp v-else :end-val="glance.count" class="text-[28px] font-extrabold"></CountUp>
                                    <span class="leading-none -mt-2">+</span>
                                </h3>
                                <p class="text-base capitalize">{{glance.title}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <NuxtImg class="max-w-[479px] w-full lg:block hidden ml-auto" src="/images/maintanance/banner.png"/>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--===============================
         PRICING PLAN PART START 
    =================================-->
    <section class="container">
        <div class="max-w-[742px] w-full mx-auto mb-8">
            <h1 class="heading mb-6 text-center"><span class="gradient-text">Pick a Plan </span>—We’ll Handle the Rest</h1>
            <p class="text-base lg:text-lg font-normal text-center ">Enjoy reliable performance while we take care of the technical side.</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 mb-16">
            <div class="flex items-center gap-2">
                <h3 :class="{'text-primary': switchValue}" class="text-2xl font-semibold capitalize">monthly</h3>
                <label for="switch" class="custom-switcher h-8">
                    <input type="checkbox" name="" id="switch" v-model="switchValue">
                </label>
                <h3 :class="{'text-primary': !switchValue}" class="text-2xl font-semibold capitalize">yearly</h3>
            </div>    
            <span class="text-sm font-medium whitespace-nowrap rounded-3xl px-2 py-0.5 border border-primary text-primary">20% Off</span>
        </div>
        <div class="relative mb-20 lg:mb-40">
            <div class="overflow-x-auto overflow-y-hidden shadow-card rounded-3xl bg-white">
                <span class="blur-rect"></span>
                <table class="w-full">
                    <thead class="border-b border-[#E7EAEF]">
                        <tr>
                            <th class="py-8 px-6 text-left align-bottom">
                                <h4 class="w-full max-w-40 sm:max-w-72 text-2xl sm:text-3xl font-bold">Services in Package</h4>
                            </th>
                            <th class="py-8 px-6">
                                <h4 class="mb-4 text-lg sm:text-2xl font-bold capitalize text-primary">Bronze</h4>
                                <h5 class="mb-6 text-2xl sm:text-[32px] font-bold">$199 <sub class="text-sm sm:text-base line-through bottom-0 text-[#818B9B]">$299</sub></h5>
                                <button class="px-8 flex items-center rounded-full text-lg font-bold capitalize h-12 whitespace-nowrap text-white bg-primary">buy now</button>
                            </th>
                            <th class="py-8 px-6">
                                <h4 class="mb-4 text-lg sm:text-2xl font-bold capitalize text-[#0378FF]">Silver</h4>
                                <h5 class="mb-6 text-2xl sm:text-[32px] font-bold">$399 <sub class="text-sm sm:text-base line-through bottom-0 text-[#818B9B]">$499</sub></h5>
                                <button class="px-8 flex items-center rounded-full text-lg font-bold capitalize h-12 whitespace-nowrap text-white bg-[#0378FF]">buy now</button>
                            </th>
                            <th class="py-8 px-6">
                                <h4 class="mb-4 text-lg sm:text-2xl font-bold capitalize text-[#FF9500]">Gold</h4>
                                <h5 class="mb-6 text-2xl sm:text-[32px] font-bold">$499 <sub class="text-sm sm:text-base line-through bottom-0 text-[#818B9B]">$699</sub></h5>
                                <button class="px-8 flex items-center rounded-full text-lg font-bold capitalize h-12 whitespace-nowrap text-white bg-[#FF9500]">buy now</button>
                            </th>
                            <th class="py-8 px-6">
                                <h4 class="mb-4 text-lg sm:text-2xl font-bold capitalize text-[#8447FF]">Platinum</h4>
                                <h5 class="mb-6 text-2xl sm:text-[32px] font-bold">$699 <sub class="text-sm sm:text-base line-through bottom-0 text-[#8447FF]">$1299</sub></h5>
                                <button class="px-8 flex items-center rounded-full text-lg font-bold capitalize h-12 whitespace-nowrap text-white bg-[#1DB8AA]">buy now</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="service in services" class="border-b last:border-none border-[#E7EAEF]">
                            <td class="p-6 pt-8 flex items-center gap-3">
                                <p class="text-base sm:text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-60">{{ service.name }}</p>
                            </td>
                            <td class="text-center">
                                <i v-if="typeof service.bronze === 'boolean'" class="text-xl sm:text-2xl leading-none" :class="service.bronze ? 'icon-check-circle text-[#31C970]' : 'icon-close-circle text-[#F55858]'"></i>
                                <p v-if="typeof service.bronze === 'string'" class="text-base sm:text-lg font-bold">{{ service.bronze }}</p>
                            </td>
                            <td class="text-center">
                                <i v-if="typeof service.silver === 'boolean'" class="text-xl sm:text-2xl leading-none" :class="service.silver ? 'icon-check-circle text-[#31C970]' : 'icon-close-circle text-[#F55858]'"></i>
                                <p v-if="typeof service.silver === 'string'" class="text-base sm:text-lg font-bold">{{ service.silver }}</p>
                            </td>
                            <td class="text-center">
                                <i v-if="typeof service.gold === 'boolean'" class="text-xl sm:text-2xl leading-none" :class="service.gold ? 'icon-check-circle text-[#31C970]' : 'icon-close-circle text-[#F55858]'"></i>
                                <p v-if="typeof service.gold === 'string'" class="text-base sm:text-lg font-bold">{{ service.gold }}</p>
                            </td>
                            <td class="text-center">
                                <i v-if="typeof service.platinum === 'boolean'" class="text-xl sm:text-2xl leading-none" :class="service.platinum ? 'icon-check-circle text-[#31C970]' : 'icon-close-circle text-[#F55858]'"></i>
                                <p v-if="typeof service.platinum === 'string'" class="text-base sm:text-lg font-bold">{{ service.platinum }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <!--===============================
         PRICING PLAN PART END 
    =================================-->
</template>

<script setup>
import CountUp from 'vue-countup-v3';
const switchValue = ref(true)
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
const services = ref([
    { id: 1, name: "Priority support", bronze: true, silver: true, gold: true, platinum: true },
    { id: 2, name: "Priority technical support", bronze: true, silver: true, gold: true, platinum: true },
    { id: 3, name: "WhatsApp group live chat", bronze: "01", silver: "02", gold: "03", platinum: "05" },
    { id: 4, name: "Upcoming release roadmap", bronze: true, silver: true, gold: true, platinum: true },
    { id: 5, name: "Dedicated support manager", bronze: true, silver: true, gold: true, platinum: true },
    { id: 6, name: "Up-to-date Postman collection", bronze: true, silver: true, gold: true, platinum: true },
    { id: 7, name: "Weekly follow-up meetings", bronze: false, silver: false, gold: true, platinum: true },
    { id: 8, name: "Update - both Admin Panel & Apps", bronze: false, silver: true, gold: true, platinum: true },
    { id: 9, name: "Branding update", bronze: false, silver: true, gold: true, platinum: true },
    { id: 10, name: "Immediate system’s bug fixing", bronze: false, silver: false, gold: true, platinum: true },
    { id: 11, name: "Needful customization", bronze: false, silver: false, gold: "6 hrs", platinum: "18 hrs" },
    { id: 12, name: "App’s new release Publish", bronze: false, silver: false, gold: false, platinum: true },
    { id: 13, name: "System up & running responsibility", bronze: false, silver: false, gold: false, platinum: true }
]);
</script>