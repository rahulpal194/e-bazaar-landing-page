
<template>
    <!--===============================
           HERO PART START 
     =================================-->
    <section class="pt-26 lg:pt-40 mb-12 sm:mb-20 relative bg-linear-180 from-primary/15 to-white">
       <div class="container">
           <div class="flex md:flex-row flex-col items-center gap-8">
              <div>
                 <div class="max-w-[520px] w-full mb-6">
                     <h2 class="heading text-left mb-6"><span class="gradient-text">Customize eBazaar </span>to Fit Your Business Perfectly</h2>
                     <p class="text-lg font-medium">As the creator of eBazaar, no one knows the system better than we do—and that means we can customize it exactly the way you need. From design changes and new features to third-party integrations and workflow tweaks, we’ll tailor eBazaar to fit your business perfectly.</p>
                 </div>
                 <div class="flex flex-wrap gap-x-6 gap-y-4 items-center">
                     <NuxtLink to="#" class="primary-button flex items-center gap-3"><i class="icon-line-tidycal text-2xl"></i> Book a Meeting</NuxtLink>
                     <NuxtLink to="#" class="whatsapp-button flex items-center gap-3"><i class="icon-line-whatsapp text-2xl"></i> WhatsApp</NuxtLink>
                 </div>
              </div>
              <div class="max-w-[479px] w-full  md:ml-auto">
                  <NuxtImg class="w-full" src="/images/customization/banner.png"/>
              </div>
           </div>
       </div>
    </section>
    <!--===============================
           HERO PART END 
    =================================-->

    <!--===============================
           COUNTER PART START
    =================================-->
    <section class="mb-20 sm:mb-40">
       <div class="container">
           <div class="p-5 sm:p-12 bg-white shadow-blog rounded-3xl">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 content-center items-center">
                  <div v-for="counter in counters" class="place-self-center flex items-center gap-4">
                     <img class="w-8" :src="counter.vector" alt="">
                     <div>
                        <CountUp :end-val="counter.count" class="text-[28px] font-extrabold leading-tight mb-1" :style="{color:`${counter.color}`}"/>
                        <p class="text-base font-normal">{{ counter.title }}</p>   
                     </div>
                  </div>
              </div>
           </div>
       </div>
    </section>
    <!--===============================
           COUNTER PART END 
    =================================-->

    <!--===============================
          SERVICES PART START
    =================================-->
    <section class="mb-20 sm:mb-40">
       <div class="container">
          <div class="mb-12 sm:mb-16 mx-auto max-w-[742px] text-center">
              <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Uncover
                  <span class="gradient-text"> Customization Services </span>
                  Designed Just for You
              </h2>
              <p class="text-base sm:text-lg lg:px-18">
                  Your needs matter to us. That’s why we offer a wide range of customization services tailored specifically to meet them.
              </p>
          </div>
          <div class="grid col-span-2 gap-y-12 lg:grid-cols-3 lg:place-content-between">
                <div class="col-span-1 lg:col-span-2 lg:self-center order-2 sm:order-1">
                    <div class="flex flex-col sm:flex-row items-start justify-between gap-y-6 sm:gap-y-0 gap-x-6 lg:mr-20">
                        <ul class="flex flex-col items-start gap-6 md:gap-8">
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Custom Localization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Database Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Workflow Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Performance Optimization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">New Feature Development</span></li>
                        </ul>
                        <ul class="flex flex-col items-start gap-6 md:gap-8">
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Change Functionality</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">UI Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Security Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Mobile App Customization</span></li>
                            <li class="flex gap-3 items-start"><i class="icon-check-circle text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i> <span class="text-lg font-medium">Integration Services</span></li>
                        </ul>
                    </div> 
                </div>
                <div class="col-span-1 sm:order-2 order-1">
                    <NuxtImg src="/images/customization/service.png" alt="service-banner" class="w-full max-w-md max-lg:mx-auto"/>
                </div>
          </div>
       </div>
    </section>
    <!--===============================
           SERVICES PART END 
    =================================-->

    <!--==============================
        WORK PROCESS PART START                  
    ==============================-->
    <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="mb-12 sm:mb-16 mx-auto max-w-[742px] text-center">
                <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">The
                    <span class="gradient-text"> Proven Work-Process </span>
                    Behind Our Customization Service
                </h2>
                <p class="text-base lg:text-lg font-normal text-center">From request to delivery—here’s how we make it happen.</p>
            </div>
            <div class="grid lg:grid-cols-2 relative">
                <span class="absolute -z-10 top-32 left-1/2 -translate-x-1/2 w-[580px] h-[75px] rotate-[35deg] blur-[300px] bg-[#FFA087]"></span>
                <div class="flex items-center lg:justify-start justify-center">
                    <NuxtImg src="/images/customization/work-process.png" alt="process-banner" class="w-full max-w-[479px]"/>
                </div>     
                <div class="grid grid-cols-2 gap-6  max-lg:mx-auto max-lg:max-w-xl max-lg:mt-12">
                    <div v-for="process in processes" class="w-full py-4 px-4 sm:px-6 rounded-3xl bg-white shadow-[0px_6px_12px_0px_rgba(186,186,186,0.10)]">
                        <div class="flex items-center justify-between gap-2 mb-4">
                            <div class="flex items-center justify-center w-[52px] aspect-square rounded-full drop-shadow-process bg-white">
                                <NuxtImg :src="process.image" alt="process-1" class="w-7" />
                            </div>
                            <h3 class="text-[42px] font-semibold text-[#DEEAF2]">
                                0{{ process.id }}
                            </h3>
                        </div>
                        <p class="text-base sm:text-lg font-medium">
                            {{ process.title }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
        WORK PROCESS PART END                 
    ==============================-->

    <!--==============================
           CHOOSE PART START                
    ==============================-->
    <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="mb-12 sm:mb-16 mx-auto max-w-[742px] text-center">
              <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Why
                  <span class="gradient-text"> Choose </span>
                  Us?
              </h2>
              <p class="text-base lg:text-lg font-normal text-center lg:px-18">With deep knowledge of our own applications, we can tailor them precisely to your needs, delivering custom solutions that truly satisfy.</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="choose in chooses">
                    <div class="group py-12 px-4.5 rounded-3xl shadow-choose flex flex-col items-center justify-center text-center gap-4 bg-white">
                        <NuxtImg :src="choose.image" alt="choose-1" class="h-16" />
                        <h4 class="text-lg font-semibold transition-all duration-300 group-hover:text-primary">{{ choose.title }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--==============================
           CHOOSE PART END                 
    ==============================-->

    <!--===============================
           ACTION PART START 
    =================================-->
    <ActionComponent>
        <h2 class="text-3xl md:text-[42px] font-bold text-center mb-3"><span class="gradient-text">Customize eBazaar </span> to Fit Your Business</h2>
        <p class="text-lg font-normal mb-6 text-center">Need help or customization? Talk to the experts who built it — book your session now.</p>
        <div class="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center">
            <NuxtLink to="" class="primary-button inline-flex items-center gap-3"><i class="icon-line-tidycal text-2xl"></i> Book a Meeting</NuxtLink>
            <NuxtLink to="" class="whatsapp-button inline-flex items-center gap-3"><i class="icon-line-whatsapp text-2xl"></i> WhatsApp</NuxtLink>
        </div>
    </ActionComponent>
    <!--===============================
           ACTION PART END 
    =================================-->
</template>
<script setup>
import CountUp from 'vue-countup-v3'
import ActionComponent from '~/components/ActionComponent.vue';
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
const processes = ref([
    {
        "id": 1,
        "title": "Purchase the script from Codecanyon.",
        "image": "/images/vector/process1.png"
    },
    {
        "id": 2,
        "title": "Book a meeting to discuss.",
        "image": "/images/vector/process2.png"
    },
    {
        "id": 3,
        "title": "Discuss requirements and receive a quote.",
        "image": "/images/vector/process3.png"
    },
    {
        "id": 4,
        "title": "Request customization based on the quote.",
        "image": "/images/vector/process4.png"
    },
    {
        "id": 5,
        "title": "We’ll work on the project and deliver it to you.",
        "image": "/images/vector/process5.png"
    }
])
const chooses = ref([
    {
        id: 1,
        image: "/images/vector/choose1.png",
        title: "Expert Customization",
    },
    {
        id: 2,
        image: "/images/vector/choose2.png",
        title: "Proven Experience",
    },
    {
        id: 3,
        image: "/images/vector/choose3.png",
        title: "Dedicated Support",
    },
    {
        id: 4,
        image: "/images/vector/choose4.png",
        title: "Deep Industry Knowledge",
    },
    {
        id: 5,
        image: "/images/vector/choose5.png",
        title: "Advanced Technology",
    },
    {
        id: 6,
        image: "/images/vector/choose6.png",
        title: "Pixel Perfect Design",
    },
    {
        id: 7,
        image: "/images/vector/choose7.png",
        title: "Client Satisfaction",
    },
    {
        id: 8,
        image: "/images/vector/choose8.png",
        title: "Affordable Price",
    },
])
</script>