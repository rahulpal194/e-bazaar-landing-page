import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: [
    '@/assets/styles/tailwind.css',
    '@/assets/styles/custom.css',
    '@/assets/fonts/plus-jakarta-sans.css',
    '@/assets/icon/iconly.css'
  ],

   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
   modules: ['nuxt-swiper', '@pinia/nuxt', '@nuxt/image'],
})