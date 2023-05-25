import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Version",
    // icon: "creative",
    children: [
      {
        text: "v1.1.6",
        // icon: "creative",
        prefix: '/v1.1.6',
        link: '/v1.1.6/manage-doc-tree',
        activeMatch: "^/v1.1.6"
      },
      {
        text: "v1.1.0",
        // icon: "creative",
        prefix: '/v1.1.0',
        link: '/v1.1.0/manage-doc-tree',
        activeMatch: "^/v1.1.0"
      },
      {
        text: "v1.0.0",
        // icon: "creative",
        link: '/v1.0.0/manage-doc-tree',
        prefix: '/v1.0.0',
        activeMatch: "^/v1.0.0"
      }
    ],
  }
]);
