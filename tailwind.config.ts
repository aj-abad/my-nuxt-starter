import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default <Partial<Config>>{
  content: ["./src/**/*.{html,js,ts}", "nuxt.config.ts"],
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    fontFamily: {
    },
    extend: {
      colors: {
      },
    },
  },
};
