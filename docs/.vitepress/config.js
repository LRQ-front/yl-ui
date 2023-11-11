//必要的配置文件
import demoblock from "vitepress-demoblock";
const nav = require("./configs/nav");

const sidebar = require("./configs/sidebar");

module.exports = {
  title: "YL UI组件库",
  description: "ui组件库",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  outline: {
    label: "CONTENTS",
  },
  markdown: {
    config: (md) => {
      md.use(demoblock);
    },
  },
  themeConfig: {
    logo: "/logo.png",
    nav,
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
};
