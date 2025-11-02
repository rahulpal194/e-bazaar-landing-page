<template>
    <!--==============================
           HERO PART END 
    =================================-->
     <section class="pt-26 lg:pt-38 mb-12 sm:mb-16 bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="max-w-[934px] w-full mx-auto">
                <h1 class="heading mb-6">Success Stories<span class="gradient-text"> from Our Happy Clients</span></h1>
                <p class="text-base lg:text-lg font-normal text-center mb-8 lg:px-24">Explore stories from retail ecommerce business owners who’ve streamlined their business with eBazaar’s powerful tools.</p>
                <div class="flex flex-col sm:flex-row gap-2 items-center justify-center mb-12">
                    <div class="flex gap-2">
                        <h6 class="text-base font-bold">Excellent</h6>
                        <div class="flex gap-0.5 items-center [&_i]:text-xl [&_i]:text-[#FFB900]">
                            <i class="icon-fill-star"></i>
                            <i class="icon-fill-star"></i>
                            <i class="icon-fill-star"></i>
                            <i class="icon-fill-star"></i>
                            <i class="icon-fill-star"></i>
                        </div>
                    </div>
                    <div class="flex sm:flex-row flex-col gap-2 items-center justify-center">
                        <p class="text-base"><span class="font-bold">4.9 </span>out of 5 based on<span class="font-bold"> 50+ reviews</span></p>
                        <NuxtImg class="ms-1 h-5 w-fit" src="/images/codecanyon.png"/>
                    </div>
                </div>
            </div>
        </div>
     </section>
    <!--==============================
           HERO PART END 
    =================================-->

    <!--==============================
          TESTIMONIAL PART START 
    =================================-->
    <div class="container">
        <div class="flex flex-wrap gap-6 mb-20 sm:mb-40"> 
            <TestimonialCard v-for="review in testimonial" :review="review" />
        </div>
    </div>
    <!--==============================
          TESTIMONIAL PART END 
    =================================-->
</template>
<script setup>
 import testimonial from 'assets/json/testimonial.json'
</script>