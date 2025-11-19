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
                        <p class="text-2xl font-medium mb-8">StoreKing - eCommerce (Grocery, Pharmacy, Supershop) App with Laravel Website & Admin Panel with POS | Inventory Management</p>
                        <ul class="grid grid-cols-2 gap-y-6 mb-8 sm:mb-12">
                            <li class="text-base font-bold">Version: <span class="font-medium">1.7</span></li>
                            <li class="text-base font-bold">Created: <span class="font-medium">17 December, 2024</span></li>
                            <li class="text-base font-bold">Author: <span class="font-medium text-[#007EDD]"><NuxtLink to="/inilabs">iNiLabs</NuxtLink></span></li>
                            <li class="text-base font-bold">Last Update: <span class="font-medium">27 October, 2025</span></li>
                        </ul>
                        <div class="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4]">
                             <p class="text-base font-medium">If you have any questions or need any help that are not in this documentation file, Please feel free to <NuxtLink class="font-bold text-primary" to="/support">create a Support Ticket.</NuxtLink></p>
                        </div>
                    </div>
                </div>
                <div v-if="activetab=='Prerequisite' && activeContent=='Basic Knowledge'">
                    <h2 class="text-[28px] font-bold mb-4">Basic Knowledge</h2>
                    <div class="border-t border-primary pt-6">
                        <p class="text-2xl font-medium mb-8">To install, set up, and customize StoreKing with your branding, it is essential to have a basic understanding of server-side operations. The system includes a comprehensive suite of features for web applications.</p>
                        <ul class="mb-8 list-disc ps-5 flex flex-col gap-3">
                            <li>IDE for Web development, we preferred VSCode.</li>
                            <li>Real Server related knowledge like apache or local machine server, we preferred to use a real server.</li>
                            <li>Server related knowledge and we preferred cPanel in your server for quick installation</li>
                            <li>Basic knowledge in PHP, NPM, Vue, Node, Laravel if you want to do some customization yourself (Not compulsory).</li>
                        </ul>
                        <div class="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
                             <p class="text-base font-medium">Note: Remember! Envato's pricing does not cover installation. It is your responsibility to follow the installation instructions outlined in the documentation, as well as any necessary steps for setup and branding-related changes. We are not liable for any errors you may make during the process. Additionally, any customizations you make are entirely your responsibility.</p>
                        </div>
                    </div>
                </div>
                <div v-if="activetab=='Prerequisite' && activeContent == 'Server Requirement'" >
                    <h2 class="text-[28px] font-bold mb-4">Server Requirement</h2>
                    <div class="border-t border-primary pt-6">
                        <p class="text-2xl font-medium mb-8">Before install, please make sure you have the components bellow enable on your server</p>
                        <ul class="mb-8 list-disc ps-5 flex flex-col gap-3">
                            <li>PHP 8.2 or Greater</li>
                            <li>OpenSSL PHP Extension</li>
                            <li>PDO PHP Extension</li>
                            <li>Mbstring PHP Extension</li>
                            <li>Tokenizer PHP Extension</li>
                            <li>XML PHP Extension</li>
                            <li>Ctype PHP Extension</li>
                            <li>JSON PHP Extension</li>
                            <li>BCMath PHP Extension</li>
                            <li>GD PHP Extension (or Imagick PHP Extension)</li>
                            <li>PHP Zip Archive</li>
                            <li>PHP JSON</li>
                            <li>PHP cURL</li>
                            <li>PHP Exif</li>
                            <li>PHP fileinfo</li>
                            <li>PHP Zip Archive</li>
                            <li>Rewrite Module (Apache or Nginx)</li>
                            <li>open_basedir must be disabled</li>
                        </ul>
                        <div class="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
                             <p class="text-base font-medium">Note: Remember! Envato's pricing does not cover installation. It is your responsibility to follow the installation instructions outlined in the documentation, as well as any necessary steps for setup and branding-related changes. We are not liable for any errors you may make during the process. Additionally, any customizations you make are entirely your responsibility.</p>
                        </div>
                    </div>
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
                <div v-if="activetab=='Support'">
                    <h2 class="text-[28px] font-bold mb-4">Support</h2>
                    <div class="border-t border-primary pt-6">
                        <p class="text-base font-normal mb-6">If this documentation doesn’t answer your questions, please create a support ticket on the 
                            <NuxtLink to="https://inilabsn.freshdesk.com/" class="py-1.5 px-3 rounded-sm text-white bg-blue-500 block w-fit">item support ticket</NuxtLink>
                        </p> 
                        
                        <p class="text-base font-normal mb-4 leading-relaxed">We are located in GMT +6:30 time zone and we answer all questions within 12-24 hours in weekdays. In some rare cases the waiting time can be to 48 hours. (except holiday seasons which might take longer).</p>
                        <div class="doc-warn-div">
                            <p><span class="doc-badge-red">Note:</span> While we aim to provide the best support possible, please keep in mind that it only extends to verified buyers and only to issues related to our script's & app's like bugs and errors. Custom modifications or third party module implementations are not included.</p>
                        </div>
                        <div class="flex items-center gap-1 text-2xl my-6">
                            <p>Don’t forget to Rate this script</p>
                            <div class="flex items-center gap-1">
                                <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                                <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                                <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                                <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                                <i class="icon-fill-star text-[#ffc107] text-2xl"></i>
                            </div>
                        </div>
                        <div class="doc-info-div">
                            <p class="leading-relaxed">Please Add your Review (Opinion) for Our script. It would be a great support for us. Go to your <span class="font-bold">Codecanyon Profile > Downloads Tab ></span> & then You can Rate & Review for our script.Thank You.</p>
                        </div>
                    </div>
                </div>
                <div v-if="activetab=='Prerequisite' && activeContent == 'Server Requirement'" >
                    <h2 class="text-[28px] font-bold mb-4">Server Requirement</h2>
                    <div class="border-t border-primary pt-6">
                        <p class="text-2xl font-medium mb-8">Before install, please make sure you have the components bellow enable on your server</p>
                        <ul class="mb-8 list-disc ps-5 flex flex-col gap-3">
                            <li>PHP 8.2 or Greater</li>
                            <li>OpenSSL PHP Extension</li>
                            <li>PDO PHP Extension</li>
                            <li>Mbstring PHP Extension</li>
                            <li>Tokenizer PHP Extension</li>
                            <li>XML PHP Extension</li>
                            <li>Ctype PHP Extension</li>
                            <li>JSON PHP Extension</li>
                            <li>BCMath PHP Extension</li>
                            <li>GD PHP Extension (or Imagick PHP Extension)</li>
                            <li>PHP Zip Archive</li>
                            <li>PHP JSON</li>
                            <li>PHP cURL</li>
                            <li>PHP Exif</li>
                            <li>PHP fileinfo</li>
                            <li>PHP Zip Archive</li>
                            <li>Rewrite Module (Apache or Nginx)</li>
                            <li>open_basedir must be disabled</li>
                        </ul>
                        <div class="w-full p-4 rounded-xl border border-[#FFF4BC] bg-[#FFFEF4] mb-8">
                             <p class="text-base font-medium">Note: Remember! Envato's pricing does not cover installation. It is your responsibility to follow the installation instructions outlined in the documentation, as well as any necessary steps for setup and branding-related changes. We are not liable for any errors you may make during the process. Additionally, any customizations you make are entirely your responsibility.</p>
                        </div>
                    </div>
                </div>
                <div v-if="activetab=='Change Log' && activeContent == 'v1.7'">
                    <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                    <div class="border-t border-primary pt-6">
                        <h6 class="text-2xl font-semibold mb-8">Version 1.7(27 Oct 2025)</h6>
                        <ul class="text-base font-normal flex flex-col gap-3 list-disc list-inside">
                            <li>Added MyFatoorah payment gateway</li>
                            <li>Added Easypaisa payment gateway</li>
                            <li>Fixed fraction calculation issue in POS</li>
                            <li>Improved product sorting in the Purchase module</li>
                            <li>Improved “Add to Cart” functionality on the frontend</li>
                            <li>Fixed wish list now updates instantly without page reload</li>
                            <li>Fixed coupon-related bugs on the frontend</li>
                            <li>Fixed maximum purchase quantity issues in the Product module</li>
                            <li>Customer app latest version update (flutter: 3.35.7, Dart: 3.9.2)</li>
                        </ul>
                    </div>
                </div>
                <div v-if="activetab=='Change Log' && activeContent == 'v1.6'">
                    <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                    <div class="border-t border-primary pt-6">
                        <h6 class="text-2xl font-semibold mb-8">Version 1.6(15 Sep 2025)</h6>
                        <ul class="text-base font-normal flex flex-col gap-3 list-disc list-inside">
                            <li>Pos module update.</li>
                            <li>Slider issue fix.</li>
                            <li>Purchase module update.</li>
                        </ul>
                    </div>
                </div>
                <div v-if="activetab=='Change Log' && activeContent == 'v1.5'">
                    <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                    <div class="border-t border-primary pt-6">
                        <h6 class="text-2xl font-semibold mb-8">Version 1.5(27 July 2025)</h6>
                        <ul class="list-disc list-inside text-base font-normal flex flex-col gap-3">
                            <li>PhonePe payment gateway api update.</li>
                            <li>Category name overlap issue solved.</li>
                            <li>Added convenient download icon for the purchase payment attachment.</li>
                            <li>Category RTL design issue improved.</li>
                            <li>Maximum purchase quantity issue fixed.</li>
                            <li>Minor bug fix.</li>
                            <li>Customer app Flutter SDK version updated to 3.32.7 and dart version 3.8.1.</li>
                        </ul>
                    </div>
                </div>
                <div v-if="activetab=='Change Log' && activeContent == 'v1.4'">
                    <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                    <div class="border-t border-primary pt-6">
                        <h6 class="text-2xl font-semibold mb-8">Version 1.4(25 June 2025)</h6>
                        <ul class="text-base font-normal flex flex-col gap-3 list-disc list-inside">
                            <li>Profile update minor bug fix</li>
                            <li>Login process performance improved</li>
                            <li>Push notification minor bug fix</li>
                            <li>Pos minor bug fix</li>
                            <li>Purchase minor bug fix</li>
                        </ul>
                    </div>
                </div>
                <div v-if="activetab=='Change Log' && activeContent == 'v1.3'">
                    <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                    <div class="border-t border-primary pt-6">
                        <h6 class="text-2xl font-semibold mb-8">Version 1.3(20 May 2025)</h6>
                        <ul class="text-base font-normal flex flex-col gap-3 list-disc list-inside">
                            <li>Solved inactive category show issue on frontend.</li>
                            <li>Minor bug fix.</li>
                            <li>Customer app compatible with Flutter SDK 3.29.3.</li>
                        </ul>
                    </div>
                </div>
                <div v-if="activetab=='Change Log' && activeContent == 'v1.2'">
                    <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                    <div class="border-t border-primary pt-6">
                        <h6 class="text-2xl font-semibold mb-8">Version 1.2(17 April 2025)</h6>
                        <ul class="text-base font-normal flex flex-col gap-3 list-disc list-inside">
                            <li>Added cross icon on the search bar to clear input.</li>
                            <li>Category active/inactive bug fix.</li>
                            <li>Outlet phone number minor bug fix.</li>
                            <li>Enhanced validation messages for better clarity.</li>
                            <li>Enhanced styling for the date input field.</li>
                            <li>Customer app compatible with Flutter SDK 3.29.2.</li>
                        </ul>
                    </div>
                </div>
                <div v-if="activetab=='Change Log' && activeContent == 'v1.1'">
                    <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                    <div class="border-t border-primary pt-6">
                        <h6 class="text-2xl font-semibold mb-8">Version 1.1(22 Feb 2025)</h6>
                        <ul class="list-disc list-inside text-base font-normal flex flex-col gap-3">
                            <li>Added upload image in checkout page.</li>
                            <li>Added file attachment option in product create module.</li>
                            <li>Barcode style minor bug fix.</li>
                            <li>Select box style minor bug fix.</li>
                            <li>Country code minor bug fix.</li>
                        </ul>
                    </div>
                </div>
                <div v-if="activetab=='Change Log' && activeContent == 'v1.0'">
                    <h2 class="text-[28px] font-bold mb-4">Changelog</h2>
                    <div class="border-t border-primary pt-6">
                        <h6 class="text-2xl font-semibold mb-8">Version 1.0 (17 December, 2024)</h6>
                        <ul class="text-base font-normal flex flex-col gap-3">
                            <li>Initial Release</li>
                        </ul>
                    </div>
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