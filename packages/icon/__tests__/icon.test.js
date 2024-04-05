import { mount } from "@vue/test-utils";
import YlIcon from "../src/icon.vue";

describe("测试icon组件", () => {
  it("传递参数", () => {
    const wrapper = mount(YlIcon, {
      props: {
        name: "location",
        color: "red",
        size: "24px",
      },
    });
    expect(wrapper.find("i").attributes("class")).toBe("yl-icon-location");
    expect(wrapper.attributes("style")).toBe("font-size: 24px; color: red;");
  });

  it("默认参数", () => {
    const wrapper = mount(YlIcon);

    expect(wrapper.classes()).toHaveLength(1);
    expect(wrapper.attributes("style")).toBeFalsy();
  });

  it("传递数字size", () => {
    const wrapper = mount(YlIcon, {
      props: {
        size: 24,
      },
    });
    expect(wrapper.attributes("style")).toBe("font-size: 24px;"); // 检查是否设置了正确的像素大小
  });
});
