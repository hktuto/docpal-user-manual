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
    "/zh/": {
      lang: "zh-CN",
      title: "DocPal",
      description: "DocPal 的文档演示",
    },
  },

  theme,

  shouldPrefetch: false,
});
