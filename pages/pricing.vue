<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-40 mb-12 relative bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="title mb-3 sm:mb-5">Foodking Demo</div>
            <div class="max-w-[790px] w-full mx-auto">
                <h1 class="heading mb-6">No Monthly Bills—Just a<span class="gradient-text"> One-Time Purchase </span>and Full Access</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Choose the perfect plan for your multi-branch restaurant business and get started instantly!</p>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

     <!--==============================
          PRICING PLAN PART START
     =================================-->
     <section class="mb-20 sm:mb-40" id="pricing-plan">
        <div class="container">
            <div class="bg-white rounded-full shadow-title w-fit mx-auto mb-12 p-2 flex gap-6 items-center h-[60px]">
                 <button @click="pricingPlan = 'regular'" type="button" :class="pricingPlan == 'regular' ? 'primary-button px-6' : 'text-black ps-8'" class="h-11 w-full rounded-full leading-tight text-base font-bold capitalize transition-none">Regular</button>
                 <button @click="pricingPlan = 'extended'" type="button" :class="pricingPlan == 'extended' ? 'primary-button px-6' : 'text-black pr-8'" class="h-11 w-full rounded-full leading-tight text-base font-bold capitalize transition-none">Extended</button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div class="col-span-3 md:col-span-1 rounded-3xl bg-[#F6FCF9] p-6 flex flex-col gap-6 items-center">
                    <div>
                        <h3 class="text-2xl font-bold text-primary mb-3 text-center">Regular License</h3>
                        <p class="text-base font-semibold text-center">For Personal Project</p>
                    </div>
                    <h6 class="text-[42px] font-bold">$49</h6>
                    <button class="primary-button">Contact Support Team</button>
                </div>
                <div class="col-span-3 md:col-span-2 rounded-3xl border border-[#C9E6DB] p-6 flex flex-col">
                    <p class="text-lg font-normal flex-1 mb-8 sm:mb-12">Get started with the Regular License & power your business with premium features and lifetime updates.</p>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <li class="flex gap-2 items-center">
                            <i class="icon-check-circle text-xl gradient-text"></i>
                            <span class="text-base font-medium leading-5">Admin Panel</span>
                        </li>
                        <li class="flex gap-2 items-center">
                            <i class="icon-check-circle text-xl gradient-text"></i>
                            <span class="text-base font-medium leading-5">Staffs Panel</span>
                        </li>
                        <li class="flex gap-2 items-center">
                            <i class="icon-check-circle text-xl gradient-text"></i>
                            <span class="text-base font-medium leading-5">Restaurant Owner Panel</span>
                        </li>
                        <li class="flex gap-2 items-center">
                            <i class="icon-check-circle text-xl gradient-text"></i>
                            <span class="text-base font-medium leading-5">Customer PWA Website</span>
                        </li>
                        <li class="flex gap-2 items-center">
                            <i class="icon-check-circle text-xl gradient-text"></i>
                            <span class="text-base font-medium leading-5">Delivery Man Panel</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
            PRICING PLAN PART END
     =================================-->

     <!--===============================
        LICENSE COMPARISON PART START
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="title mb-3 sm:mb-5">Difference Between Regular & Extended</div>
            <div class="max-w-[790px] w-full mx-auto mb-12">
                <h1 class="heading mb-6">Look at the<span class="gradient-text"> License Comparison </span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Get the right license for your goals and deliver a stronger, more valuable experience to your customers.</p>
            </div>
            <div class="relative">
                <div class="bg-white shadow-[0px_6px_12px_0px_rgba(156,174,186,0.10)] rounded-3xl overflow-x-auto overflow-y-hidden">
                    <span class="blur-rect !top-0"></span>
                <table class="w-full">
                    <thead class="border-b last:border-none border-[#E7EAEF]">
                        <tr class="[&_th]:first:text-left align-bottom ">
                            <th class="p-6">
                                <h2 class="text-[32px] font-bold">License <br> Features <span class="text-lg font-medium">(As per Envato policy)</span></h2>
                            </th>
                            <th class="p-6">
                                <h2 class="text-2xl font-bold text-nowrap">Regular License</h2>
                                <NuxtLink to="#pricing-plan" @click="pricingPlan = 'regular'" class="mt-4 flex items-center justify-center w-fit mx-auto button h-11 px-6">Buy Now</NuxtLink>
                            </th>
                            <th class="p-6">
                                <h2 class="text-2xl font-bold text-nowrap">Extended License</h2>
                                <NuxtLink to="#pricing-plan" @click="pricingPlan = 'extended'" class="mt-4 flex items-center w-fit mx-auto button h-11 px-6">Buy Now</NuxtLink>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="feature in licenseFeature" class="border-b last:border-none border-[#E7EAEF] [&_td]:text-lg font-medium [&_tD]:first:text-left text-center">
                            <td class="p-6">{{ feature.name }}</td>
                            <td class="p-6"><i class="text-2xl" :class="feature.regular? 'icon-check-circle text-[#31C970]': 'icon-close-circle text-[#F55858]'"></i></td>
                            <td class="p-6"><i class="text-2xl" :class="feature.extended? 'icon-check-circle text-[#31C970]': 'icon-close-circle text-[#F55858]'"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
     </section>
     <!--===============================
        LICENSE COMPARISON PART END
     =================================-->

    <!--===============================
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center max-w-[934px] w-full mx-auto">
            <h2 class="heading text-center mb-6">Start Your Journey with eBazaar & Build a
                <span class="gradient-text">Retail eCommerce Business</span>
                Today!
                </h2>
            <p class="text-base font-normal text-center mb-6">Stay ahead in the game with the best retail ecommerce business solution.</p>
            <div class="flex flex-wrap gap-6 items-center justify-center">
                 <button class="primary-button">Buy Now</button>
                 <button class="button">Explore Demo</button>
            </div>
        </div>
     </ActionComponent>
     <!--===============================
              ACTION PART END 
     =================================-->
</template>
<script setup>
 const pricingPlan=ref('regular')
 const licenseFeature = ref([
    {id:1, name:"Lifetime License Validity", regular: true, extended:true},
    {id:2, name:"Permitted for 1 Domain", regular: true, extended:true},
    {id:3, name:"6 months of general and technical support", regular: true, extended:true},
    {id:4, name:"All Premium Features", regular: true, extended:true},
    {id:4, name:"Lifetime FREE Update", regular: true, extended:true},
    {id:1, name:"For Personal Project", regular: true, extended:true},
    {id:2, name:"For Commercial Projects [if end product is paid]", regular: false, extended:true},
    {id:3, name:"Postman Collection for REST API Documentation", regular: false, extended:true},
    {id:4, name:"Admin Panel FREE Installation in cPanel [One Time]", regular: false, extended:true},
    {id:4, name:"Priority Support", regular: false, extended:true},
 ])
</script>