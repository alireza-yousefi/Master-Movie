// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    base: '/Master-Movie/'
  },
  compatibilityDate: '2024-11-01',
  ssr: false, 
  devtools: { enabled: false },
  plugins: [{ src: "~/plugins/bootstrap", mode: 'client' } 
  ],
  modules: ['@nuxt/ui']
  
})
