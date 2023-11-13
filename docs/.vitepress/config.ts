//必要的配置文件
import {
  demoblockPlugin,
  demoblockVitePlugin,
} from "vitepress-theme-demoblock";
import { defineConfig } from "vitepress";

import nav from "./configs/nav";
import sidebar from "./configs/sidebar";

export default defineConfig({
  title: "YL UI组件库",
  description: "ui组件库",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
  themeConfig: {
    logo: "/logo.png",
    nav,
    outline: {
      level: [2, 5],
      label: "CONTENTS",
    },
    sidebar,
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present ZYL",
    },
  },
});
