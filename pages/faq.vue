<template>
    <!--==============================
           HERO PART END 
    =================================-->
    <section class="pt-26 lg:pt-38 mb-12 sm:mb-16 bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="max-w-[790px] w-full mx-auto">
                <h1 class="heading mb-6">eBazaar<span class="gradient-text"> FAQs</span></h1>
                <p class="text-base lg:text-lg font-normal text-center">Everything you need to set up, manage, and master eBazaar.</p>
            </div>
        </div>
    </section>
    <!--==============================
           HERO PART END 
    =================================-->

    <!--==============================
            FAQ PART START
    =================================-->
    <section class="container">
        <div class="grid col-span-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:place-content-between mb-20 sm:mb-40">
            <div ref="dropdownContainer" class="md:col-span-1 origin-top relative">
                <button @click="isOpen= !isOpen" class="flex md:hidden items-center justify-between gap-2 w-full h-12 px-6 rounded-full shadow-input bg-white">
                    <span class="text-base font-medium capitalize text-heading">{{ activetab }}</span>
                    <i :class="isOpen? 'rotate-180':'rotate-0'" class="icon-chevron-down text-xl text-heading transition-all duration-300"></i>
                </button>
                <div :class="isOpen ? 'max-md:scale-y-100' : 'max-md:scale-y-0'" class="dropdown-sidebar">
                    <nav class="flex flex-col gap-2 text-[#1A203C]">
                        <button
                            v-for="content in faqscontent"
                             @click="handleTab(content.tab)"
                             :class="{ active: activetab === content.tab }"
                             :key="content.tabid"
                             class="tabBtn">
                             <div class="flex items-center gap-3.5">
                                <i class="icon-message-question text-xl gradient-text"></i>
                                <span>{{ content.tab }}</span>
                             </div>
                        </button>
                    </nav>
                </div>
            </div>
            <div class="md:col-span-2">
                <div v-for="content in faqscontent">
                    <div v-if="activetab === content.tab">
                        <h2 class="text-[28px] font-bold mb-4">{{ content.tab }}</h2>
                        <div class="border-t border-secondary pt-6">
                            <div v-for="(faq,index) in content.faqs" @click="handleFaq(index)" class="group p-6 text-left w-full mb-6 cursor-pointer bg-white rounded-xl shadow-faq">
                                <div class="flex items-center gap-3 justify-between group-hover:text-primary">
                                    <h6 class="text-lg/[23px] font-semibold">{{ faq.question }}</h6>
                                    <i :class="{ 'rotate-180': faqOpen[index] }" class="icon-circle-down text-xl gradient-text rotate-0 transition-all duration-300"></i>
                                </div>
                                <div class="h-0 origin-top faq-text overflow-hidden transition-all duration-300 ease-in-out">
                                    <p class="text-base font-normal pt-6">{{ faq.answer }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </section>
    <!--==============================
           FAQ  PART END 
    =================================-->
</template>
<script setup>
    import faqscontent from 'assets/json/faqscontent.json'
    import { useClickOutside } from '~/composable/clickOutside';

    const activetab = ref("General Questions");
    let faqOpen = ref({})

     const handleTab = (tabid)=>{
      activetab.value = tabid
      faqOpen.value = {}
    }
    
    const handleFaq = (index) => {
      faqOpen.value = { [index]: !faqOpen.value[index] };
      const contents = document.querySelectorAll('.faq-text');
      contents.forEach((content, i) => {
        const isActive = i === index && faqOpen.value[index];
        content.style.height = isActive ? `${content.scrollHeight}px` : '0px';
      });
    };

    const { isOpen, dropdownContainer } = useClickOutside()

</script>