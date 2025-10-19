<template>
    <!--===============================
           HERO PART START 
     =================================-->
     <section class="h-auto w-full pt-26 lg:pt-40 relative bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="title mb-3 sm:mb-5">eBazaar Demo</div>
            <div class="max-w-[742px] w-full mx-auto">
                <h1 class="heading mb-6">Turn Your <span class="gradient-text">Retail Store Vision Into Reality</span> with eBazaar</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24 pb-8 sm:pb-6">Take a tour! Try our eBazaar demo and see how it can boost your retail ecommerce business.</p>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

     <!--===============================
        RESTAURANT ECOSYSTEM PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="w-full px-6 py-4 rounded-2xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
                <h6 class="text-[15px] font-semibold mb-3.5 flex items-center gap-2">
                    <i class="icon-fill-danger text-[#FFCC40] text-2xl"></i>
                    Important Note for Demo:
                </h6>
                 <p class="text-[15px] font-normal">The system refreshes every 1 hour and your all demo data will be removed. So, you may need to clear your cookies and login again using demo credentials.</p>
            </div>
            <div class="flex flex-wrap gap-6">
                <div v-for="feature in features.slice(0,3)" :id="`demo-card-${feature.id}`" class="group card">
                    <div class="flex items-start justify-between">
                        <div :class="`vector-bg-${feature.id}`" class="w-9 h-9 rounded-full mb-6 flex items-center justify-center">
                            <i :class="feature.vector" class="text-xl text-white"></i>
                        </div>
                        <div v-if="feature.addon" class="absolute right-0 shadow-badge">
                            <div class="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                <div class="w-6 h-6 rotate-45 bg-primary absolute -left-3 "></div>
                                <div class="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                            </div>
                        </div>
                    </div>
                    <h6 class="text-2xl font-bold mb-3">{{feature.name}}</h6>
                    <p class="text-base font-normal mb-6">{{feature.desc}}</p>
                    <button class="button hover-button !h-12">Explore Demo</button>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
        RESTAURANT ECOSYSTEM PART END 
     =================================-->

    <!--===============================
                FAQ PART START
     =================================-->
     <section class="h-auto w-full pb-26 lg:pb-40 relative">
        <div class="container">
            <div class="max-w-[742px] w-full mx-auto mb-12">
                <h1 class="heading mb-6">Frequently Asked<span class="gradient-text"> Questions</span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Take a tour! Try our Foodimaa demo and see how it can boost your multi-restaurant food ordering business.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div class="col-span-3 md:col-span-2">
                    <div v-for="(faq,index) in faqs" @click="handleFaq(index)" class="group p-6 text-left w-full mb-6 cursor-pointer bg-white rounded-xl shadow-faq">
                        <div class="flex items-center gap-3 justify-between group-hover:text-primary">
                            <h6 class="text-lg/[23px] font-semibold ">{{ faq.qns }}</h6>
                            <i :class="{ 'rotate-180': faqOpen[index] }" class="icon-circle-down text-xl gradient-text rotate-0 transition-all duration-300"></i>
                        </div>
                        <div class="h-0 origin-top faq-text overflow-hidden transition-all duration-300 ease-in-out">
                            <p class="text-base font-normal pt-6">{{ faq.ans }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-3 md:col-span-1 rounded-xl bg-[#F6FCF9] py-12 px-8 h-fit">
                    <NuxtImg class="h-16 aspect-square mb-6 mx-auto" src="/images/vector/messages.png"/>
                    <div>
                        <p class="text-lg font-bold mb-4 text-center">You have different questions?</p>
                        <p class="text-base font-normal mb-6 text-center">
                            <span>Our team will answer all your questions.</span>
                            <span>We ensure a quick response.</span>
                        </p>
                    </div>
                    <NuxtLink to="" class="cursor-pointer px-8 block w-fit mx-auto h-12 leading-12 rounded-full bg-primary text-base font-bold text-white">Contact Support Team</NuxtLink>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
                FAQ PART END
     =================================-->
</template>
<script setup>
import features from '@/assets/json/ecosystem.json'
    let faqOpen = ref({})
    const faqs = ref([
        {id:1, qns: "Where can I buy FoodKing?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},
        {id:2, qns: "What are the difference between regular & extended license?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},
        {id:3, qns: "Do I need to pay monthly?" , ans: "For both licenses, you will get full source code. But in the extended license, you can charge a client and, you will get API documentation like Postman collection only in the extended license."},

    ])
    const handleFaq = (index) => {
      faqOpen.value = { [index]: !faqOpen.value[index] };
      const contents = document.querySelectorAll('.faq-text');
      contents.forEach((content, i) => {
        const isActive = i === index && faqOpen.value[index];
        content.style.height = isActive ? `${content.scrollHeight}px` : '0px';
      });
    };
</script>