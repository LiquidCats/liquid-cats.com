// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      title: 'Liquid Cats',
      bodyAttrs: {
        class: 'bg-gray-100 dark:bg-gray-800',
      }
    },
    meta: [
      { name: 'description', content: 'Ilya Shabanov\'s projects place and docs.' }
    ],
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    htmlAttrs: {
      lang: 'en'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})