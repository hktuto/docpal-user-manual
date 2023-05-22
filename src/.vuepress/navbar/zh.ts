import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "版本",
    // icon: "creative",
    children: [
      {
        text: "v1.0.0",
        // icon: "creative",
        link: '/zh/v1.0.0/manage-doc-tree',
        prefix: '/zh/v1.0.0',
        activeMatch: "^/zh/v1.0.0"
      },
      {
        text: "v1.1.0",
        // icon: "creative",
        prefix: '/v1.1.0',
        link: '/zh/v1.1.0/manage-doc-tree',
        activeMatch: "^/zh/v1.1.0"
      },
      ,
      {
        text: "v1.1.6",
        // icon: "creative",
        prefix: '/v1.1.6',
        link: '/zh/v1.1.6/manage-doc-tree',
        activeMatch: "^/zh/v1.1.6"
      }
    ],
  }
]);
