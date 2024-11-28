// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/sanity',
  ],
  sanity: {
    apiVersion: '2024-11-07',
    dataset: 'production',
    perspective: 'published',
    projectId: 'gnuv47z3',
    minimal: false,
    // visualEditing: {
    //   stega: true,
    //   studioUrl: 'http://localhost:3333',
    //   token: 
    //   'sky9ICxqsNjxa7KqHc8YUcbjqL7LIJ8v1z6aCrLD7wku7zcaPRsY6CwHqNPn20yzMakDzL6lJXUimfZaT1UFY0IVfFchVPu0839wuN4WBWKEcg8GS3iCHPHMmEeSTzRZYLLhzNrd0HRevxyqckrAeMxJxoJySwBqDvX5FIXX6gYUOiPZM6LI',
    // },
  }
})
