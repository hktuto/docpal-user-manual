import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "DocPal",
      description: "A docs demo for DocPal",
    },
  },

  theme,

  shouldPrefetch: false,
});
