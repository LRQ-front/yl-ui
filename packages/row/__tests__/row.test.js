import { mount } from "@vue/test-utils";
import YlRow from "../src/row.vue";

describe("row组件", () => {
  it("默认参数", () => {
    const wrapper = mount(YlRow);
    expect(wrapper.element.tagName.toLowerCase()).toBe("div"); // 检查默认标签
    expect(wrapper.classes()).toContain("yl-row"); // 检查默认类
    expect(wrapper.text()).toBe("");
  });

  it("tag参数", () => {
    const wrapper = mount(YlRow, {
      props: {
        tag: "section",
      },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe("section"); // 检查指定标签
  });

  it("gutter参数", () => {
    const wrapper = mount(YlRow, {
      props: {
        gutter: 20,
      },
    });
    expect(wrapper.attributes("style")).toContain("margin-left: -10px"); // 检查是否设置了正确的左边距
    expect(wrapper.attributes("style")).toContain("margin-right: -10px"); // 检查是否设置了正确的右边距
  });

  it("justify参数", () => {
    const wrapper = mount(YlRow, {
      props: {
        justify: "center",
      },
    });
    expect(wrapper.classes()).toContain("is-justify-center"); // 检查是否设置了正确的 justify 类
  });

  it("start参数", () => {
    const wrapper = mount(YlRow);
    expect(wrapper.classes()).not.toContain("is-justify-start"); // 检查默认情况下是否没有 justify 类
  });

  it("插槽", () => {
    const wrapper = mount(YlRow, {
      slots: {
        default: "<div>Slot Content</div>",
      },
    });
    expect(wrapper.text()).toContain("Slot Content"); // 检查插槽内容是否正确渲染
  });
});
