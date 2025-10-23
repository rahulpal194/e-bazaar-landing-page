<template>
     <!--===============================
           HERO PART START 
     =================================-->
     <section class="h-auto w-full sm:mb-50 pt-26 lg:pt-38 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat pb-5">
        <div class="container">
            <div class="max-w-[934px] w-full mx-auto">
                <h1 class="text-3xl lg:text-[48px] font-bold text-center leading-tight mb-6">All-in-One <span class="gradient-text"> PWA Retail eCommerce </span>Solution for Grocery, Pharmacy & More</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">Start your grocery, pharmacy, supershop, or any retail eCommerce business with eBazaar. The ultimate solution for online orders, deliveries, POS, inventory, & more. Perfect for single stores to multi-branch businesses, it streamlines operations and boosts customer satisfaction.</p>
            </div>
            <div class="flex gap-5 sm:gap-6 items-center justify-center mb-12">
                <button class="primary-button">Buy Now</button>
                <button class="button">Explore Demo</button>
            </div>
            <div class="relative">
                <NuxtImg class="w-full sm:-mb-[30%]" src="/images/hero.png"/>
                <div class="absolute p-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="relative flex size-20 sm:size-[124px]">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <button @click="modal = true" class="relative flex items-center justify-center size-20 sm:size-[124px] rounded-full bg-white cursor-pointer">
                            <span class="relative flex items-center justify-center size-12 sm:size-[88px] rounded-full bg-primary ">
                                <i class="icon-fill-play text-lg sm:text-[32px] text-white"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

     <!--===============================
        RESTAURANT ECOSYSTEM PART START 
     =================================-->
     <section class="py-20 sm:py-40">
        <div class="container">
            <div class="max-w-[934px] w-full mx-auto mb-12 sm:mb-16">
                <h1 class="heading mb-6">eBazaar Has<span class="gradient-text"> Everything to Manage </span>Your Retail eCommerce Business with Ease</h1>
                 <p class="text-base lg:text-lg font-normal text-center lg:px-24">Step inside and explore the full eBazaar experience that are designed to simplify your store management and boost sales.</p>
            </div>
            <div class="flex flex-wrap gap-6">
                <NuxtLink href="#" v-for="ecosystem in ecosystems.slice(0,4)" :id="`card-${ecosystem.id}`" class="bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 relative">
                    <div class="flex items-start justify-between">
                        <div :class="`vector-bg-${ecosystem.id}`" class="w-9 h-9 rounded-full mb-6 flex items-center justify-center">
                            <i class="text-xl text-white" :class="ecosystem.vector"></i>
                        </div>
                        <div v-if="ecosystem.addon" class="absolute right-0 shadow-badge">
                            <div class="relative overflow-y-clip bg-linear-270 from-secondary to-primary">
                                <div class="w-6 h-6 rotate-45 bg-primary absolute -left-3 "></div>
                                <div class="p-1 h-6 text-sm font-semibold text-white flex items-center relative z-10">Add-On</div>
                            </div>
                        </div>
                    </div>
                    <h6 class="text-2xl font-bold mb-3">{{ecosystem.name}}</h6>
                    <p class="text-base font-normal">{{ecosystem.desc}}</p>
                </NuxtLink>
            </div>
        </div>
     </section>
     <!--===============================
        RESTAURANT ECOSYSTEM PART END 
     =================================-->

     <!--===============================
           KEY FEATURES PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <span class="text-base font-medium py-2.5 px-4 border border-[#E0E6F8] rounded-full mb-6 text-primary">Key Features</span>
                <h1 class="heading mb-6">Powerful & Effective<span class="gradient-text"> Features to Automate & Optimize </span>Your Business Effortlessly</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Packed with essential features to streamline your restaurant operations, boost efficiency, and enhance customer experience.</p>
            </div>
            <div class="max-w-[631px] mx-auto w-full relative p-4 mb-8 bg-white rounded-full">
                <nav class="flex gap-2 overflow-x-auto scrollbar-hide">
                    <button 
                        type="button" 
                        v-for="featureTab in autoplaytab.featuretabs.value"
                        @click="autoplaytab.handleFeatureShow(featureTab.id, $event)"
                        :key="featureTab.id"
                        :ref="el=>tabRefs[featureTab.id] = el"
                        :class="featureTab.id === autoplaytab.featureActive.value ? 'active' : ''"
                        class="navbtn">
                        <i :class="[autoplaytab.featureActive.value===featureTab.id? 'text-white': '', featureTab.icon]" class="text-xl text-[#818B9B]"></i>
                        <span>{{ featureTab.name }}</span>
                    </button>
                </nav>
                <div class="w-full h-12 absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 bg-linear-270 from-[#BBE38A] from-0% via-[#7CA5E0] via-50% to-[#76DAB3] to-100% blur-[30px]"></div>
                <span class="lg:w-[580px] lg:h-[75px] bg-[#95FFD6] -z-10 blur-[300px] rotate-[35deg] absolute -bottom-0 left-0"></span>
            </div> 
            <div v-if="autoplaytab.featureActive.value == 1" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 feature-card pt-8">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[414px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 feature-card px-6 pt-6">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Built-in POS</h3>
                                <p class="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <NuxtImg class="h-[185px] w-full" src="/images/features/admin-panel/admin-panel-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 feature-card px-6 pt-6">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">QR Code Menu Maker</h3>
                                <p class="text-base font-normal">Admin can create QR code for each table and link to the restaurant’s menu where customers can order from table using this qr code.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 feature-card pt-8">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Add Items with Variations & Addon</h3>
                                <p class="text-base font-normal">In setting option in admin panel, admin can add item categories, items with variations & extras, item attributes, variation wise pricing, etc.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="autoplaytab.featureActive.value == 2" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 feature-card pt-8 px-8">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Branch Manager Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the branch manager can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 feature-card px-8 pt-8">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Chef/Kitchen Dashboard</h3>
                                <p class="text-base font-normal">The dashboard shows real-data where the chef can see business analytics, order statistics, sales summary, orders summary, most popular items and so on of his branch.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/branch-staff/branch-staff-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 bg-[#FCF6F8] pt-8 px-8">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">POS Operator Dashboard</h3>
                                <p class="text-base font-normal">The dashboard shows real-data where the POS operator can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/branch-staff/branch-staff-3.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-[#FCF6F8] px-6 pt-6">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Point of Sale (POS)</h3>
                                <p class="text-base font-normal">Admin can create dine-in, takeaway, delivery order from POS & choose payment option also.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/branch-staff/branch-staff-4.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="autoplaytab.featureActive.value == 3" class="mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 feature-card pt-8">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Responsive User Website</h3>
                                <p class="text-base font-normal overflow-ellipsis">FoodKing’s user website works seamlessly on all devices, making it easy for customers to browse, order, and track—anytime, anywhere.</p>
                            </div>
                            <NuxtImg class="w-[414px] h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 feature-card px-6 pt-6">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Web Banners</h3>
                                <p class="text-base font-normal">Highlight offers, promotions, or important updates with top banners on user website—grab attention & drive engagement.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[185px] w-full" src="/images/features/user-site/user-site-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 feature-card px-6 pt-6">
                        <div class="flex flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Cookie Banner</h3>
                                <p class="text-base font-normal">FoodKing includes a built-in cookie banner to help you stay transparent and compliant—inform users and gain consent with ease.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] h-[168px] w-full" src="/images/features/user-site/user-site-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 feature-card pt-8">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Featured & Most Popular Items</h3>
                                <p class="text-base font-normal">Showcase popular & featured items to boost visibility and drive more orders—automatically or manually highlight what’s hot on your menu.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/user-site/user-site-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
            </div>
            <button class="py-3.5 px-6 rounded-full text-white gradient-button block mx-auto leading-6 text-lg font-bold">Explore All Features</button>
        </div>
    </section>
     <!--===============================
           KEY FEATURES PART END 
     =================================-->

     <!--===============================
            SIX STEPS PART START 
     =================================-->
     <section>
        <div class="pt-20 pb-20 sm:pb-40 md:px-20 bg-[url('/images/bg/six-steps-bg.png')] bg-contain md:bg-cover bg-no-repeat bg-top">
            <div class="container">
                <div class="max-w-[460px] md:max-w-[542px] lg:max-w-[742px] w-full mx-auto flex flex-col items-center justify-center px-6 mb-12 md:mb-16">
                    <h1 class="heading mb-6">Get Started with eBazaar<span class="text-primary"> in Just Six Simple Steps</span></h1>
                    <p class="text-base lg:text-lg font-normal text-center lg:px-24">Setting up FoodKing is quick and hassle-free. Just follow these 6 steps and start managing your restaurant like a pro.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 lg:gap-0 gap-6 md:gap-8">
                    <div class="flex flex-col gap-6 md:gap-8 lg:col-span-2">
                        <div v-for="step in steps.slice(0,3)" class="rounded-3xl bg-white shadow-stepcard p-6">
                            <div class="flex justify-between items-center mb-6">
                                <div class="w-12 h-12 rounded-full bg-white drop-shadow-stepvector flex justify-center items-center">
                                    <i :class="step.icon" class="text-2xl text-primary"></i>
                                </div>
                                <span class="text-[42px] font-bold text-[#DEEAF2] leading-snug">0{{ step.id }}</span>
                            </div>
                            <h6 class="text-2xl font-bold mb-4 line-clamp-2">{{ step.title }}</h6>
                            <p class="text-lg font-normal line-clamp-2">{{ step.desc }}</p>
                        </div>
                    </div>
                    <div class="lg:flex hidden flex-col gap-8 col-span-3">
                        <div class="h-full relative">
                            <svg class="absolute top-18" xmlns="http://www.w3.org/2000/svg" width="150" height="302" viewBox="0 0 150 302" fill="none">
                            <path d="M150 300H107C89.3269 300 75 285.673 75 268V34C75 16.3269 60.6731 2 43 2H0" stroke="#FDE7EE" stroke-width="3"/>
                            </svg>

                            <svg class="absolute right-0 top-18" xmlns="http://www.w3.org/2000/svg" width="150" height="302" viewBox="0 0 150 302" fill="none">
                            <path d="M0 300H43C60.6731 300 75 285.673 75 268V34C75 16.3269 89.3269 2 107 2H150" stroke="#FDE7EE" stroke-width="3"/>
                            </svg>

                            <svg class="absolute top-3/7" xmlns="http://www.w3.org/2000/svg" width="150" height="4" viewBox="0 0 150 4" fill="none">
                            <path d="M0 2H150" stroke="#FDE7EE" stroke-width="3"/>
                            </svg>

                            <svg class="absolute right-0 top-3/7" xmlns="http://www.w3.org/2000/svg" width="150" height="4" viewBox="0 0 150 4" fill="none">
                            <path d="M0 2H150" stroke="#FDE7EE" stroke-width="3"/>
                            </svg>

                            <svg class="absolute bottom-47" xmlns="http://www.w3.org/2000/svg" width="150" height="302" viewBox="0 0 150 302" fill="none">
                            <path d="M150 2H107C89.3269 2 75 16.3269 75 34V268C75 285.673 60.6731 300 43 300H0" stroke="#FDE7EE" stroke-width="3"/>
                            </svg>

                            <svg class="absolute right-0 bottom-47" xmlns="http://www.w3.org/2000/svg" width="150" height="302" viewBox="0 0 150 302" fill="none">
                            <path d="M0 2H43C60.6731 2 75 16.3269 75 34V268C75 285.673 89.3269 300 107 300H150" stroke="#FDE7EE" stroke-width="3"/>
                            </svg>

                            <div class="w-[168px] h-[168px] absolute top-4/12 left-1/2 transform -translate-x-1/2">
                                <NuxtImg class="h-full w-full object-cover rounded-4xl" src="/images/icon.png" alt="product_icon" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-6 md:gap-8 lg:col-span-2">
                        <div v-for="step in steps.slice(3,)" class="rounded-3xl bg-white shadow-stepcard p-6">
                            <div class="flex justify-between items-center mb-6">
                                <div class="w-12 h-12 rounded-full bg-white drop-shadow-stepvector flex justify-center items-center">
                                    <i :class="step.icon" class="text-2xl text-primary"></i>
                                </div>
                                <span class="text-[42px] font-bold text-[#DEEAF2] leading-snug">0{{ step.id }}</span>
                            </div>
                            <h6 class="text-2xl font-bold mb-4 line-clamp-2">{{ step.title }}</h6>
                            <p class="text-lg font-normal line-clamp-2">{{ step.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
            SIX STEPS PART END 
     =================================-->

    <!--===============================
        PAYMENT GATEWAY PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40 relative">
            <span class="blur-rect"></span>
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16  relative">
                <h1 class="heading mb-6">Enhance Business Efficiency with Reliable<span class="gradient-text"> Payment </span> &<span class="gradient-text"> SMS Gateways </span></h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Secure, fast, and reliable integrations to keep your operations running smoothly.</p>
            </div>
            <div class="grid md:grid-cols-12 gap-6">
                <div class="md:col-span-6 lg:col-span-8">
                    <div class="bg-[#F6F9FC] rounded-2xl pt-6 lg:pt-8 overflow-hidden">
                        <div class="px-6 lg:px-8 mb-6">
                            <h3 class="text-2xl lg:text-3xl font-bold mb-4">20+ Payment Gateways</h3>
                            <p class="text-sm lg:text-base font-normal mb-4">We’ve integrated a range of convenient payment options to ensure a seamless buying experience for your customers.</p>
                            <div class="flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-12">
                                <div class="flex gap-2 items-center">
                                    <i class="icon-check-circle text-xl gradient-text"></i>
                                    <span class="text-base font-medium leading-5">Cash On Delivery</span>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <i class="icon-check-circle text-xl gradient-text"></i>
                                    <span class="text-base font-medium leading-5">Digital Payment</span>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <i class="icon-check-circle text-xl gradient-text"></i>
                                    <span class="text-base font-medium leading-5">Credit Wallet</span>
                                </div>
                            </div>
                        </div>
                        <NuxtImg class="w-full h-full" src="/images/payment/payment-logos.png" alt="payment_logos"/>
                    </div>
                </div>
                <div class="md:col-span-6 lg:col-span-4">
                    <div class="bg-[#F6F9FC] rounded-2xl pt-6">
                        <div class="px-6">
                            <h3 class="text-2xl lg:text-3xl font-bold mb-4">8+ SMS Gateways</h3>
                            <p class="text-sm lg:text-base font-normal mb-4">Keep your customers informed in real time with fast, reliable SMS gateway integration. Instantly send essential updates, boost engagement, and enhance the customer experience.</p>
                        </div>
                        <NuxtImg class="w-full h-full" src="/images/payment/sms-logos.png" alt="sms_gatways"/>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
        PAYMENT GATEWAY PART END 
     =================================-->

     <!--===============================
         PREMIUM SERVICES PART START 
     =================================-->
     <section class="container">
        <div class="my-20 sm:my-40 relative">
            <span class="blur-rect"></span>
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 class="heading mb-6">Kickstart Your Business with<span class="gradient-text"> Premium Services </span>Tailored to You</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">Professional-grade services to ensure your system runs smoothly from day one.</p>
            </div>
            <div class="bg-white rounded-2xl mb-6 group hover:shadow-card hover:border-transparent border border-[#c9e6db] transition-all duration-200">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 md:col-span-7 order-last md:order-first p-6 md:p-8">
                        <h2 class="text-2xl md:text-[32px] leading-tight font-bold mb-4">Skip the Tech Headache, We’ve Got <span class="text-primary"> Installation </span>Covered</h2>
                        <p class="text-base font-normal mb-6">Our team will install FoodKing on your server quickly and correctly—so you can start running your business without delay.</p>
                        <ul class="flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-12 mb-8">
                            <li class="flex gap-2 items-center">
                                <i class="icon-check-circle text-xl gradient-text"></i>
                                <span class="text-base font-medium leading-5">Reliable Service</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <i class="icon-check-circle text-xl gradient-text"></i>
                                <span class="text-base font-medium leading-5">Enhanced Security</span>
                            </li>
                            <li class="flex gap-2 items-center">
                                <i class="icon-check-circle text-xl gradient-text"></i>
                                <span class="text-base font-medium leading-5">Ongoing Support</span>
                            </li>
                        </ul>
                        <button class="button hover-button">Installation Packages</button>
                    </div>
                    <div class="col-span-12 md:col-span-5 order-first md:order-last p-4">
                        <NuxtImg class="w-full h-full rounded-xl" src="/images/premium/installation.png" alt="installation" />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-12 md:col-span-6">
                    <div class="bg-white rounded-2xl group hover:shadow-card hover:border-transparent border border-[#c9e6db] transition-all duration-200">
                        <div class="p-4 pb-0">
                            <NuxtImg class="w-full h-full" src="/images/premium/customization.png" alt="installation" />
                        </div>
                        <div class="p-6">
                            <h2 class="text-2xl md:text-[28px] leading-tight font-bold mb-4">Flexible<span class="text-primary"> Customization </span>to Fit Your Business Goal</h2>
                            <p class="text-base font-normal mb-6">Whether it’s branding, layout, or functionality, we customize it to work the way you need.</p>
                            <button class="button hover-button">Request Customization</button>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="bg-white rounded-2xl group hover:shadow-card hover:border-transparent border border-[#c9e6db] transition-all duration-200">
                        <div class="p-4 pb-0">
                            <NuxtImg class="w-full h-full" src="/images/premium/maintanance.png" alt="maintanance"/>
                        </div>
                        <div class="p-6">
                            <h2 class="text-2xl md:text-[28px] leading-tight font-bold mb-4">Reliable<span class="text-primary"> Maintenance Service </span>for Committed  Owners</h2>
                            <p class="text-base font-normal mb-6">We’ll handle performance checks, updates, and issues—so you can focus on growing your business.</p>
                            <button class="button hover-button">Get iCare Maintenance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
         PREMIUM SERVICES PART END 
     =================================-->

     <!--===============================
        TECHNOLOGY SERVICES PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="p-8 md:p-12 md:pb-0 rounded-2xl bg-custom-gradient relative z-0">
                <NuxtImg class="absolute right-0 top-0 -z-1 max-w-[455px] w-full"  src="/images/vector/Union.png"/>
                <div class="grid grid-cols-12 md:gap-14 relative z-10">
                    <div class="col-span-12 md:col-span-5 flex flex-col justify-center">
                        <h2 class="text-3xl md:text-[42px] leading-tight font-bold mb-6">FoodKing Built with<span class="gradient-text"> Powerful </span>&<span class="gradient-text">  Modern </span>Technology</h2>
                        <p class="text-base font-normal mb-6">FoodKing is built using modern, secure, and scalable technologies to ensure top-tier performance and reliability.</p>
                    </div>
                    <div class="col-span-12 md:col-span-7">
                        <NuxtImg class="w-full h-full mb-6" src="/images/vector/used_technology.png" alt="technologies"/>
                    </div>
                </div>
            </div>
        </div>    
     </section>
     <!--===============================
        TECHNOLOGY SERVICES PART END 
     =================================-->

     <!--===============================
        RESOURCES GUIDE PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40 relative">
            <span class="blur-rect"></span>
            <div class="max-w-[934px] w-full mx-auto flex flex-col items-center justify-center mb-8 md:mb-16">
                <h1 class="heading mb-6">Helpful<span class="gradient-text"> Resources to Guide </span>Your Journey</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24">From first setup to expert tips, our resources are here to help every step of the way.</p>
            </div>
            <div class="grid grid-cols-12 lg:grid-cols-9 gap-6 mb-6">
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="group h-full bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col gap-6">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center vector-bg-1">
                             <i class="icon-music-play text-xl text-white"></i>
                        </div>
                        <div class="flex-grow">
                            <h6 class="text-2xl font-bold mb-3">Contact Support</h6>
                            <p class="text-base font-normal">Reach out to our friendly support team for quick and reliable help.</p>
                        </div>
                        <button class="button hover-button !h-12 !px-6">Open Support Ticket</button>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-5">
                    <div class="group h-full bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col gap-6">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center vector-bg-2">
                            <i class="icon-clipboard-text text-xl text-white"></i>
                        </div>
                        <div class="flex-grow">
                            <h6 class="text-2xl font-bold mb-3">Documentation</h6>
                            <p class="text-base font-normal">Dive into our complete documentation to discover how to install, configure, and run FoodKing with ease—no guesswork, just clear instructions.</p>
                        </div>
                        <button class="button hover-button">Read Documentation</button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 lg:grid-cols-9 gap-6">
                <div class="col-span-12 md:col-span-6 lg:col-span-5">
                    <div class="group h-full bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col gap-6">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center vector-bg-4">
                            <i class="icon-message-question text-xl text-white"></i>
                        </div>
                        <div class="flex-grow">
                            <h6 class="text-2xl font-bold mb-3">Frequently Asked Questions (FAQs)</h6>
                            <p class="text-base font-normal">Got questions? We’ve compiled answers to the most frequently asked queries to help you get started.</p>
                        </div>
                        <button class="button hover-button">View FAQs</button>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="group h-full bg-[#F6F9FC] rounded-2xl p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col gap-6">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center vector-bg-5">
                            <i class="icon-video-play text-xl text-white"></i>
                        </div>
                        <div class="flex-grow">
                            <h6 class="text-2xl font-bold mb-3">Video Tutorial</h6>
                            <p class="text-base font-normal">Watch step-by-step video guides to learn how to set up, and run FoodKing like a pro.</p>
                        </div>
                        <button class="button hover-button">Watch Videos</button>
                    </div>
                </div>
            </div>
        </div>   
     </section>
     <!--===============================
        RESOURCES GUIDE PART END 
     =================================-->

    <!--===============================
              ACTION PART START 
     =================================-->
     <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="text-3xl md:text-[42px] leading-tight text-center font-bold mb-6">Start Your Journey with eBazaar & Build a
                <span class="gradient-text">Retail eCommerce Business </span>
                Today!
                </h2>
            <p class="text-base font-normal text-center mb-6">Stay ahead in the game with the best retail ecommerce business solution.</p>
            <div class="flex flex-wrap gap-6 items-center justify-center">
                 <button class="primary-button">Buy Now</button>
                 <button class="button hover-button">Explore Demo</button>
            </div>
        </div>
     </ActionComponent>
     <!--===============================
              ACTION PART END 
     =================================-->

    <!--===============================
         VIDEO MODAL PART START
     =================================-->
     <div :class="{'active': modal}" class="modal">
        <div class="modal-content">
            <button @click="modal = false" class="w-8 h-8 rounded-full bg-white flex items-center justify-center absolute top-0 right-0 cursor-pointer">
                <i class="icon-close-circle text-red-500 text-2xl"></i>
            </button>
             <iframe class="max-w-full w-full" width="560" height="315" 
             src="https://www.youtube.com/embed/m7Gleh-iJ2k?si=EYHcQmSo7YXuH-0h" title="YouTube video player" 
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

     </div>
    <!--===============================
         VIDEO MODAL PART START
     =================================-->

</template>

<script setup>
    import ecosystems from '@/assets/json/ecosystem.json'
    import steps from '@/assets/json/steps.json';
    import blogs from '@/assets/json/blogs.json';
    import { useAutoplayTab } from '~/composable/autoplayTab';
    import { useBlogStore } from '~/store/blog';
     const modal = ref(false)
    const tabRefs ={}
    const tabContainer = ref(null)
    const featureTabs = ref([
        { id: 1, name: 'Admin Panel', icon:"icon-admin-panel" },
        { id: 2, name: 'Outlet & Staffs Panel', icon:"icon-branch-panel" },
        { id: 3, name: 'User Website', icon:"icon-user-site" }
    ])
    const autoplaytab = useAutoplayTab(
        {
           tabSource: featureTabs,
            getScrollElements:()=>({
                btnElement: tabRefs[autoplaytab.featureActive.value]
            })
        }
    )
    
    const blogDetails = useBlogStore()
</script>
