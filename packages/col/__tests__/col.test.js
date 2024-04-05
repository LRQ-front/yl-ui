import { mount } from "@vue/test-utils";
import YlCol from "../src/col.vue";

describe("测试col组件", () => {
  it("默认参数", () => {
    const wrapper = mount(YlCol);
    expect(wrapper.element.tagName.toLowerCase()).toBe("div"); // 检查默认标签
    expect(wrapper.classes()).toContain("yl-col"); // 检查默认类
  });

  it("tag参数", () => {
    const wrapper = mount(YlCol, {
      props: {
        tag: "section",
      },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe("section"); // 检查指定标签
  });

  it("span参数", () => {
    const wrapper = mount(YlCol, {
      props: {
        span: 6,
      },
    });
    expect(wrapper.classes()).toContain("yl-col-span-6"); // 检查指定的 span 类
  });

  it("offset参数", () => {
    const wrapper = mount(YlCol, {
      props: {
        offset: 3,
      },
    });
    expect(wrapper.classes()).toContain("yl-col-offset-3"); // 检查指定的 offset 类
  });

  it("xl参数", () => {
    const wrapper = mount(YlCol, {
      props: {
        xl: 3,
      },
    });
    expect(wrapper.classes()).toContain("yl-col-xl-3"); // 检查指定的 offset 类
  });
});
