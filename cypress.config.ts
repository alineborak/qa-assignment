import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo.realworld.io/#/',
    chromeWebSecurity: false,
  },
})
