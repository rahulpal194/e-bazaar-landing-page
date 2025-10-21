<script setup lang="ts">
import ActionComponent from '~/components/ActionComponent.vue';

</script>

<template>
    <!--===============================
           HERO PART START 
     =================================-->
    <section class="pt-26 lg:pt-40 mb-12 relative bg-linear-180 from-primary/15 to-white">

    </section>
    <!--===============================
           HERO PART END 
    =================================-->
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