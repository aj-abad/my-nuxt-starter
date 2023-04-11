// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt Tailwind HeadlessUI Starter",
      meta: [
        { name: "description", content: "" },
        { name: "og:title", content: "kixo" },
        { name: "og:image", content: "https://{}/img/cover.png" },
        { name: "og:description", content: "" },
        { name: "og:url", content: "https://{}" },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "en_PH" },
        { name: "twitter:image", content: "https://{}/img/cover.png" },
        { name: "twitter:title", content: "Nuxt Tailwind HeadlessUI Starter" },
        { name: "twitter:description", content: "" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@{}" },
        { name: "twitter:creator", content: "@{}" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-d.png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      bodyAttrs: {
        class: "min-h-screen flex flex-col",
      },
    },
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
  imports: {
    dirs: ["~/components", "~/layouts", "~/pages", "~/plugins"],
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  //@ts-ignore
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/{}/image/upload/",
    },
  },
});
