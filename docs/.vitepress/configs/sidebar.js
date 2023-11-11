export default {
  "/guide": getGuideSidebar(),
  "/components": getComponentSidebar(),
};

function getGuideSidebar() {
  return [
    {
      text: "基础",
      items: [
        {
          text: "快速开始",
          link: "/guide/install.md",
        },
      ],
    },
  ];
}

function getComponentSidebar() {
  return [
    {
      text: "Basic 基础组件",
      items: [
        {
          text: "Button 按钮",
          link: "/components/basic/button.md",
        },
        {
          text: "icon 图标",
          link: "/components/basic/icon.md",
        },
      ],
    },
  ];
}
