<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-38 mb-20 sm:mb-40 relative bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="grid lg:grid-cols-2 gap-y-12 lg:place-content-between">
                <div class="max-lg:max-w-2xl max-lg:text-center max-lg:mx-auto flex flex-col">
                    <h1 class="text-3xl lg:text-[42px] font-bold leading-tight mb-6"><span class="gradient-text">Customize eBazaar </span>to Fit Your Business Perfectly</h1>
                    <p class="text-base lg:text-lg font-normal mb-6 lg:text-left text-center">As the creator of Foodimaa, no one knows the system better than we do—and that means we can customize it exactly the way you need. From design changes and new features to third-party integrations and workflow tweaks, we’ll tailor FoodKing to fit your business perfectly.</p>
                    <div class="flex flex-wrap items-center max-lg:justify-center gap-6 flex-grow-1">
                        <NuxtLink to="#" class="!px-6 primary-button flex items-center gap-3">
                            <i class="icon-line-tidycal text-2xl"></i>
                            Book a Meeting
                        </NuxtLink>
                        <NuxtLink to="#" class="h-[52px] !leading-[52px] px-6 rounded-full whatsapp-gradient flex items-center gap-3 text-white">
                            <i class="icon-line-whatsapp text-2xl"></i>
                            <span class="text-base sm:text-lg font-semibold capitalize">WhatsApp</span>
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <NuxtImg class="max-w-[479px] w-full lg:ml-auto mx-auto lg:mx-0" src="/images/customization/banner.png"/>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
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
                <span class="blur-rect"></span>
                <div class="flex items-center lg:justify-start justify-center">
                    <NuxtImg src="/images/customization/work_process.png" alt="process-banner" class="w-full max-w-[479px]"/>
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
                <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Why<span class="gradient-text"> Choose </span> Us?</h2>
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
</template>
<script setup>
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