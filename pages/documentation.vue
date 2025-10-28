<template>
    <!--===============================
           HERO PART START 
     =================================-->
     <section class="pt-26 lg:pt-38 mb-12 sm:mb-16 bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="max-w-[790px] w-full mx-auto">
                <h1 class="heading mb-6">eBazaar<span class="gradient-text"> Documentation</span></h1>
                <p class="text-base lg:text-lg font-normal text-center">Everything you need to set up, manage, and master eBazaar.</p>
            </div>
        </div>
     </section>
     <!--==============================
           HERO PART END 
     =================================-->

     <!--================================
       DOCUMENTATION CONTENT PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
        <div class="grid col-span-1 md:grid-cols-3 gap-y-8 gap-x-8 lg:place-content-between">
            <div ref="dropdownContainer" class="md:col-span-1 origin-top relative">
                <button @click="isOpen= !isOpen" class="flex md:hidden items-center justify-between gap-2 w-full h-12 px-6 rounded-full shadow-input bg-white">
                    <span class="text-base font-medium capitalize text-heading">{{ activetab }}</span>
                    <i :class="isOpen? 'rotate-180':'rotate-0'" class="icon-chevron-down text-xl text-heading transition-all duration-300"></i>
                </button>
                <div :class="isOpen ? 'max-md:scale-y-100' : 'max-md:scale-y-0'" class="dropdown-sidebar">
                    <nav class="flex flex-col gap-2 text-[#1A203C]">
                        <div v-for="tab in documentation">
                            <div v-if="tab.dropdownContent" class="vertical-dropdown-group" :class="{ active: activetab === tab.name }">
                                <button @click="handledropTab(tab.name, tab.dropdownContent[0])"
                                    :class="{ active: activetab === tab.name }"
                                    class="vertical-dropdown-btn tabBtn">
                                    <div class="flex items-center gap-3.5">
                                      <i :class="tab.icon" class="icon-clipboard-text text-xl gradient-text"></i>
                                      <span>{{ tab.name }}</span>
                                    </div>
                                    <div class="w-[42px] h-[42px] rounded-full bg-[#D2FFE8] flex items-center justify-center">
                                      <span class="w-[30px] h-[30px] rounded-full bg-primary flex items-center justify-center font-bold text-base text-white">{{ tab.dropdownContent.length }}</span>
                                    </div>
                                </button>
                                <div class="vertical-dropdown-content flex-col ms-4">
                                    <button v-for="content in tab.dropdownContent"
                                          :key="content"
                                          @click="handledropTab(tab.name, content)"
                                          :class="activeContent== content ? 'active':''"
                                          class=" content p-4 py-3 w-full rounded-xl text-lg flex gap-3 items-center">
                                          <i class="icon-line-document text-[#818B9B]"></i>
                                         <span>{{ content }}</span>
                                    </button>
                                </div>
                            </div>
                            <button v-else
                                @click="handleTab(tab.name)"
                                :class="{ active: activetab === tab.name }"
                                class="tabBtn">
                                <div class="flex items-center gap-3.5">
                                     <i :class="tab.icon" class="text-xl gradient-text"></i>
                                     <span>{{ tab.name }}</span>
                                </div>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="md:col-span-2">
                <div v-if="activetab=='Getting Started'">
                    <h2 class="text-[28px] font-bold mb-4">Getting started</h2>
                    <div class="border-t border-primary pt-6">
                        <p class="text-2xl font-medium mb-8">FoodKing - Restaurant Food Delivery System with Admin Panel & Delivery Man App | Restaurant POS</p>
                        <ul class="grid grid-cols-2 gap-y-6 mb-8 sm:mb-12">
                            <li class="text-base font-bold">Version: <span class="font-medium">3.2</span></li>
                            <li class="text-base font-bold">Created: <span class="font-medium">1 June, 2023</span></li>
                            <li class="text-base font-bold">Author: <span class="font-medium text-[#007EDD]"><NuxtLink to="/inilabs">iNiLabs</NuxtLink></span></li>
                            <li class="text-base font-bold">Last Update: <span class="font-medium">8 June, 2023</span></li>
                        </ul>
                        <div class="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4]">
                             <p class="text-base font-medium">If you have any questions or need any help that are not in this documentation file, Please feel free to <NuxtLink class="font-bold text-primary" to="/support">create a Support Ticket.</NuxtLink></p>
                        </div>
                    </div>
                </div>
                <div v-if="activetab=='Prerequisite' && activeContent=='Basic Knowledge'">
                    <h2 class="text-[28px] font-bold mb-4">Basic Knowledge</h2>
                    <div class="border-t border-primary pt-6">
                        <p class="text-2xl font-medium mb-8">To install, set up, and publish FoodKing with your branding, it's necessary to possess fundamental knowledge in both server-side and mobile app development since the system comprises multiple features for web and mobile applications.</p>
                        <ul class="mb-8 list-disc ps-5">
                            <li>IDE for Mobile and Web development, we preferred Android Studio and VSCode.</li>
                            <li>Flutter SDK and JDK with path setup in your IDE.</li>
                            <li>Real server Server related knowledge like apache or local machine server, we preferred to use a real server.</li>
                            <li>Server related knowledge and we preferred cPanel in your server for quick installation</li>
                            <li>Basic knowledge in PHP, NPM, Vue, Node, Dart, Laravel and Flutter if you want to do some customization yourself (Not compulsory).</li>
                            <li>basic knowledge about google cloud and firebase</li>
                        </ul>
                        <div class="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
                             <p class="text-base font-medium">Note: Remember! Envato's pricing does not cover installation or app publishing support. It is your responsibility to follow the installation instructions outlined in the documentation, as well as any necessary steps for setup and branding-related changes. We are not liable for any errors you may make during the process. Additionally, any customizations you make are entirely your responsibility.</p>
                        </div>
                    </div>
                </div>
                <div v-if="activetab=='Prerequisite' && activeContent == 'Server Requirement'" >
                    <h2 class="text-[28px] font-bold mb-4">Server Requirement</h2>
                </div>
                <div v-if="activetab=='Prerequisite' && activeContent == 'Active Purchase Key'" >
                    <h2 class="text-[28px] font-bold mb-4">Active Purchase Key</h2>
                    <div class="border-t border-primary pt-6">
                        <p class="text-lg font-normal mb-8 flex gap-3 items-center">
                            <span class="text-white text-base font-semibold bg-linear-270 from-[#73C3FF] to-[#007EDD] py-1 px-2 rounded-sm">TIPS</span>
                            Check the video tutorial!
                        </p>
                        <iframe class="aspect-video w-full rounded-2xl mb-6" src="https://www.youtube.com/embed/KPRw7sd7wK4?si=ALv3NcZwxZ_h-WTr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p class="text-lg font-normal mb-8">Before install, please active your envato purchase key from our system and install project by our license key</p>
                        <ol class="list-decimal ms-5 w-full [&_li]:text-lg [&_li]:font-normal">
                            <li>Goto inilabs official site <NuxtLink to="inilabs.net" class="text-[#007EDD] underline">inilabs.net</NuxtLink></li>
                            <li class="mb-8">
                                <p class="mb-6">Now create an account in our site</p>
                                <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/create-account.png" />
                            </li>
                            <li class="mb-8">
                                <p class="mb-6">Click the below link and verify your email</p>
                                <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/verify-email.png" />
                            </li>
                            <li class="mb-8">
                                <p>Now click Active Purchase Key from home page and fill you information</p>
                                <ul class="list-disc ms-5 mb-6">
                                    <li>Select your product</li>
                                    <li>Enter your domain, Which domain you would be using this product</li>
                                    <li>Enter your envato purchase key and click submit</li>
                                </ul>
                                <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/active-product.png" />
                            </li>
                            <li>
                                <p class="mb-6">Now copy your Active License and install the product by this license</p>
                                <NuxtImg class="w-full -ms-5 rounded-2xl" src="/images/documentation/active-license.png" />
                            </li>
                        </ol>
                    </div>
                </div>
                <div v-if="activetab=='Prerequisite' && activeContent == 'Mobile App'" >
                    <h2 class="text-[28px] font-bold mb-4">Mobile App</h2>
                </div>
                <div v-if="activetab=='Environment Setup'">
                    <h2 class="text-[28px] font-bold mb-4">Environment Setup</h2>
                </div>
            </div>
        </div>
        </div>
     </section>
     <!--================================
       DOCUMENTATION CONTENT PART END 
     =================================-->

     <!--================================
             ACTION PART START
     =================================-->
    <ActionComponent>
        <div class="flex flex-col justify-center items-center">
            <h2 class="heading mb-3">
                Reach Out of
                <span class="gradient-text"> Support or Questions </span>
                Any Time
                </h2>
            <p class="text-base font-normal text-center mb-6">If your have any questions or need any help, please create a support ticket.</p>
            <div class="flex flex-wrap items-center max-lg:justify-center gap-4">
                <NuxtLink to="#" class="primary-button flex items-center justify-center">
                    Create a Support Ticket
                </NuxtLink>
            </div>
        </div>
    </ActionComponent>
    <!--================================
             ACTION PART START
    =================================-->
</template>

<script setup>
    import documentation from 'assets/json/documentation.json'
import { useClickOutside } from '~/composable/clickOutside';

    const activetab = ref('Getting Started');
    const activeContent = ref(null)
    const handleTab = (tab)=>{
        activetab.value = tab
    }
    const handledropTab = (tab, content)=>{
      activetab.value = tab
      activeContent.value = content
    }

    const { isOpen, dropdownContainer } = useClickOutside()
</script>